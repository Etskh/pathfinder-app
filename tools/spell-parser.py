import time
import json
import re
import os
import urllib.request

from fieldparser import parse_saves, parse_level, parse_range, parse_school
from pig import show_pig_spells

NONSENSE = '-?-'

def get_group(data, regex):
    # TODO: put a fix in here for when the regex finds nothing
    result = re.findall(regex, data)
    if not result:
        return NONSENSE
    return result[0].strip()

def get_spelldata(data):
    def heavy_doody(name):
        return '<[a-z]>{}\s*</[a-z]>([a-zA-Z0-9<>=\"#\[\];\(\)\/\,\.\+\s]+)<[^a]'.format(name)
    regexes = {
        'duration': heavy_doody('Duration'),
        'components': heavy_doody('Components'),
        'casting_time': r'<[a-z]>Casting Time\s*</[a-z]>([0-9a-z ]+)</p>',
        'school': r'<[a-z]>School\s*</[a-z]>([a-zA-Z\[\]\(\);,\s-]+)<',
        #'school': heavy_doody('School'),
        'range': heavy_doody('Range'),
        'level': heavy_doody('Level'),
        'saves': heavy_doody('Saving Throw'),
        'text': r'<p>([a-zA-Z0-9\<\>\\\/=\"#\.\s,\(\);:\'-]+)</p>'
    }

    # Check all regexes with the data to get the fields
    spell = {}
    for field, regex in regexes.items():
        spell[field] = get_group(data, regex)
        # Remove all HTML characters from text
        spell[field] = re.sub(r'<[^>]*>', '', spell[field]).replace(';', '')

    return spell


def get_cached_data_from_href(href):
    # Create the filename from the url
    try:
        filename = href[ href.index('#')+1:]
    except ValueError:
        filename = href[ href.rfind('/')+1:href.rfind('.')]

    filepath = 'output/cache/{}.html'.format(filename)

    # Try to get it from our cache
    try:
        with open(filepath, 'r') as webdata_file:
            webdata = webdata_file.read()

    # Guess we'll grab it from the web
    except FileNotFoundError:
        print('Getting {} from web from {}'.format(filename, href))
        webdata = str(urllib.request.urlopen(href).read())
        webdata = "{0}".format(webdata)

        # Reduce its size
        webdata = webdata.replace('\\t', '')
        webdata = webdata.replace('\\n', '')
        webdata = webdata.replace('strong>', 'b>')
        webdata = webdata.replace('\\\'', '\'')
        webdata = webdata[webdata.index('<!-- OGL -->'):]

        # now cache it
        if not os.path.exists('output'):
            os.makedirs('output')
        if not os.path.exists('output/cache'):
            os.makedirs('output/cache')
        with open(filepath, 'w') as text_file:
            print('Caching {}...'.format(filename))
            text_file.write(webdata)

    return webdata

def get_spell_list():
    with open('all_spells.json') as data_file:
        data = json.load(data_file)
        print('Getting {} spells...'.format(len(data)))
        return data



def get_spells_info(spell_list):
    output = []
    all_types_of_saves = []

    for field in spell_list:
        #print('Retrieving {}...'.format(field['name']))

        short_description = field['short_description'][ field['short_description'].index(':')+1:].strip()

        spell = {
            'name': field['name'],
            'short_description': short_description,
        }

        webdata = get_cached_data_from_href(field['href'])

        #Add additional fields to the spell object
        spell.update(get_spelldata(webdata))

        # Now do extra processing to clean it up
        # Range
        spell['range'] = parse_range(spell['range'])
        # Level
        spell['level'] = re.sub(r'This spell functions[\s\w]+$', '', spell['level'])
        spell['level'] = parse_level(spell['level'])
        # Duration
        if( '(D)' in spell['duration']):
            spell['duration'] = spell['duration'].replace('(D)', '').strip()
            spell['isDispellable'] = True
        # Saves
        if( spell['saves'] not in all_types_of_saves ):
            all_types_of_saves.append( spell['saves'] )
        spell['saves'] = parse_saves(spell)
        # School
        schoolInfo = parse_school(spell)
        for field, value in schoolInfo.items():
            spell[field] = value

        # Append this spell object to the others
        # And delay just a bit to allow processing other things
        output.append(spell)

    #all_types_of_saves.sort()
    #print(json.dumps(all_types_of_saves, indent=2))

    return output


def output_spell_list(outfile):
    spell_list = get_spell_list()
    spell_info = get_spells_info(spell_list)

    good_spells = [];
    for spell in spell_info:
        strChecker = json.dumps(spell)
        if NONSENSE not in strChecker:
            #print('{} is ready to use'.format( spell['name'] ))
            good_spells.append(spell)

    # Get all the spells pig can use
    dont_have_spells = show_pig_spells(good_spells)
    for spell in spell_info:
        if spell['name'] in dont_have_spells:

            # If we check the description for something like a "this functions like"
            # then we can grab the values from that function
            result = re.findall(r'functions like ([a-zA-Z<>\"\"#\/\.\s-]+),', spell['text'])
            if result:
                print('"{}" is trying too hard to be like "{}"'.format(
                    spell['name'],
                    result[0]
                    ))
                parentSpell = None
                for otherSpell in spell_info:
                    if otherSpell['name'].lower() == result[0].lower():
                        parentSpell = otherSpell

                for field, value in spell.items():
                    if spell[field] == NONSENSE:
                        print('    {} is fucky'.format(field))
                        spell[field] = parentSpell[field]
                # it's all fixed and now we can procede!
                good_spells.append(spell)
            else:
                print("{} is a lost cause. The parser needs to improve".format(spell['name']))
                if spell['name'].strip() == 'Phantasmal Killer':
                    print(json.dumps(spell, indent=4))

    print('There are {} out of {} spells ready to use'.format(
        len(good_spells),
        len(spell_info),
    ))


    for spell in good_spells:
        if spell['name'] == 'Sleep':
            print(json.dumps(spell, indent=4))

    with open(outfile, 'w') as outfile:
        outfile.write( json.dumps(good_spells, indent=2))


def main():
    output_spell_list('output/spell-out.json')
main()
