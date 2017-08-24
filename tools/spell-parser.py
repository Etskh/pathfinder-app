import time
import json
import re
import urllib.request

def get_group(data, regex):
    # TODO: put a fix in here for when the regex finds nothing
    result = re.findall(regex, data)
    if not result:
        return '-?-'
    return result[0].strip()

def get_spelldata(data):
    def heavy_doody(name):
        return '<[a-z]>{}\s*</[a-z]>([a-zA-Z0-9\[\];\(\)\/\,\.\+\s]+)<'.format(name)
    regexes = {
        'duration': heavy_doody('Duration'),
        'components': heavy_doody('Components'),
        'castingtime': r'<[a-z]>Casting Time\s*</[a-z]>([0-9a-z ]+)</p>',
        'school': r'<[a-z]>School\s*</[a-z]>([a-zA-Z\[\];\s]+)<',
        'range': heavy_doody('Range'),
        'level': heavy_doody('Level'),
        'text': r'<p>([a-zA-Z0-9\<\>\\\/=\"#\.\s,\(\);:\'-]+)</p>'
    }

    # Check all regexes with the data to get the fields
    spell = {}
    for field, regex in regexes.items():
        spell[field] = get_group(data, regex)

    # Remove all HTML characters from text
    spell['text'] = re.sub(r'<[^>]*>', '', spell['text'])

    return spell


def get_cached_data_from_href(href):
    try:
        filename = href[ href.index('#')+1:]
    except ValueError:
        filename = href[ href.rfind('/')+1:href.rfind('.')]

    filepath = 'output/cache/{}.html'.format(filename)
    try:
        with open(filepath, 'r') as webdata_file:
            webdata = webdata_file.read()
    except FileNotFoundError:
        print('Getting {} from web from {}'.format(filename, href))
        webdata = str(urllib.request.urlopen(href).read())
        webdata = "{0}".format(webdata)
        # now cache it
        with open(filepath, 'w') as text_file:
            print('Caching {}...'.format(filename))
            text_file.write(webdata)

    webdata = webdata.replace('\\t', '')
    webdata = webdata.replace('\\n', '')
    webdata = webdata.replace('strong>', 'b>')
    webdata = webdata.replace('\\\'', '\'')
    webdata = webdata[webdata.index('<!-- OGL -->'):]

    return webdata

def get_spell_list():
    with open('all_spells.json') as data_file:
        data = json.load(data_file)
        print('Getting {} spells...'.format(len(data)))
        return data


def parse_level(levels):
    parsedLevels = {}
    classLevels = levels.split(',')
    for level in classLevels:
        # make ' cleric 0' into ['cleric', 0]
        classAndLevel = level.strip().split(' ')
        if classAndLevel[0].find('/') > 0:
            # if it's sorcerer/wizard
            classNames = classAndLevel[0].split('/')
            parsedLevels[ classNames[0] ] = classAndLevel[1]
            parsedLevels[ classNames[1] ] = classAndLevel[1]
        else:
            # otherwise
            parsedLevels[ classAndLevel[0] ] = classAndLevel[1]
    return parsedLevels

def parse_range(distance):
    ranges = [
        'close', 'medium', 'long',
    ]
    for r in ranges:
        if distance.startswith(r):
            return r
    return distance

def get_spells_info(spell_list):
    output = []
    for field in spell_list:
        print('Retrieving {}...'.format(field['name']))

        short_description = field['short_description'][ field['short_description'].index(':')+1:].strip()

        spell = {
            'name': field['name'],
            'short_description': short_description,
        }

        webdata = get_cached_data_from_href(field['href'])

        #Add additional fields to the spell object
        spell.update(get_spelldata(webdata))

        # Now do extra processing to clean it up
        spell['range'] = parse_range(spell['range'])
        spell['level'] = parse_level(spell['level'])

        # Append this spell object to the others
        # And delay just a bit to allow processing other things
        output.append(spell)

    return output


def output_spell_list(outfile):
    spell_list = get_spell_list()
    spell_info = get_spells_info(spell_list)
    with open(outfile, 'w') as outfile:
        outfile.write( json.dumps(spell_info, indent=2))

def main():
    output_spell_list('output/spell-out.json')
main()


"""
// Run this script on http://paizo.com/pathfinderRPG/prd/coreRulebook/spellLists.html
(function(){
	var spellList = {};
	$('p b a').each( function(index, elem) {
		if( elem.href.indexOf('/spells/') !== -1 ) {
            var desc = '';
            var otherNodes = elem.parentNode.parentNode.childNodes;
            otherNodes.forEach( function(node) {
                if( node.textContent !== elem.innerText ) {
                    desc += node.textContent;
                }
            });
			spellList[elem.innerText] = {
                href: elem.href,
                desc: desc,
            };
		}
	});
	var spellArray = [];
	for( var spellName in spellList ) {
		spellArray.push({
			name: spellName,
			href: spellList[spellName].href,
            short_description: spellList[spellName].desc,
		});
	}

	console.log(JSON.stringify(spellArray));
})();
"""
