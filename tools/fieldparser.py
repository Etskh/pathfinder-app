
import re


def parse_level(levels):
    parsedLevels = {}
    classLevels = levels.split(',')
    for level in classLevels:
        # make ' cleric 0' into ['cleric', 0]
        classAndLevel = level.strip().split(' ')
        try:
            if classAndLevel[0].find('/') > 0:
                # if it's sorcerer/wizard
                classNames = classAndLevel[0].split('/')
                parsedLevels[ classNames[0] ] = int(classAndLevel[1])
                parsedLevels[ classNames[1] ] = int(classAndLevel[1])
            else:
                # otherwise
                parsedLevels[ classAndLevel[0] ] = int(classAndLevel[1])
        except ValueError:
            print(levels)
    return parsedLevels

def parse_range(distance):
    ranges = [
        'close', 'medium', 'long',
    ]
    for r in ranges:
        if distance.startswith(r):
            return r
    return distance


known_saves = [
    "-?-",
    "Fortitude half",
    "Fortitude half see text",
    "Fortitude negates",
    "Fortitude negates (harmless)",
    #"Fortitude negates (object) see text",
    #"Fortitude negates see text",
    "Fortitude partial",
    "Fortitude partial (object)",
    #"Fortitude partial or Reflex negates (object) see text",
    #"Fortitude partial or Will negates see text",
    #"Fortitude partial see text",
    #"Fortitude partial see text for enervationThis spell functions like enervation,",
    #"Fortitude partial, see text",
    "Reflex half",
    #"Reflex half or Reflex negates see text",
    #"Reflex half see text",
    "Reflex negates",
    "Reflex negates (object)",
    #"Reflex negates and Reflex half see text",
    #"Reflex negates see text",
    "Reflex partial",
    #"Reflex partial see text",
    "Will disbelief",
    "Will disbelief (if interacted with)",
    #"Will disbelief (if interacted with) varies see text",
    "Will disbelief, then Fortitude partial see text",
    "Will half",
    #"Will half (harmless) see text",
    #"Will half see text",
    "Will negates",
    "Will negates (harmless)",
    #"Will negates (harmless) or Will half, see text",
    "Will negates (harmless) or Will negates (harmless, object)",
    "Will negates (harmless) or Will negates (object)",
    #"Will negates (harmless) see text",
    "Will negates (harmless, object)",
    #"Will negates (harmless, object) see text",
    "Will negates (object)",
    #"Will negates (object) Will negates (object) or Fortitude half see text",
    #"Will negates (object) or none see text",
    #"Will negates (see text)",
    #"Will negates or Fortitude negates see text",
    #"Will negates or Will disbelief (if interacted with)",
    #"Will negates see text",
    "Will partial",
    #"Will partial see text",
    "no",
    #"no and Will negates (harmless)",
    "none",
    #"none and Will negates (object)",
    #"none or Reflex half see text",
    #"none or Reflex half, see text",
    #"none or Will disbelief (if interacted with) see text",
    #"none or Will negates (harmless)",
    #"none or Will negates (harmless, object)",
    #"none or Will negates (object)",
    #"none or Will negates see text",
    #"none or Will negates, see text",
    #"none see text",
    #"none, see text",
    "see text"
]
def parse_saves(spell):
    saves = spell['saves'].strip()

    if( saves not in known_saves ):
        #print('{} has non-standard save: {}'.format(spell['name'], spell['saves']))
        return known_saves[0]

    if saves == 'none' or saves == 'no' or saves == 'see text':
        return None

    saveObject = {}

    flags = {
        'harmless': 'isHarmless',
        'object': 'isObject',
        'disbelief': 'isDisbelief',
    }
    types = {
        'Will': 'Will',
        'Fortitude': 'Fort',
        'Reflex': 'Ref',
    }

    for flag, boolean in flags.items():
        # if the '(harmless)' is in 'Will negates (harmless)'
        if flag in saves:
            saveObject[boolean] = True
            saves = saves.replace(flag, '')
    for save, saveType in types.items():
        if save in saves:
            saves = saves.replace(flag, '')
            saveObject['type'] = saveType

    return saveObject


def parse_school(spell):
    schoolText = spell['school']

    # Well that was easy
    schoolName = schoolText.split(' ')[0]
    school = schoolName[:1].upper() + schoolName[1:]

    subschool = None
    subschoolResults = re.search(r'\(([a-z-\s]+)\)', schoolText)
    if subschoolResults:
        # Strip the ()s
        subschool = re.sub(r'[\(\)]+','', subschoolResults[0])

    domains = []
    domainResults = re.search(r'\[[a-z\s,-]+\]', schoolText)
    if domainResults:
        domainString = re.sub(r'\[|\]|\s','', domainResults[0])
        domains = domainString.split(',')

    return {
        'school': school,
        'subschool': subschool,
        'domains': domains,
    }
