
import json

pig_spells = [
    'Daze',
    'Ghost Sound',
    'Mage Hand',
    'Mending',
    'Message',
    'Open/Close',
    'Resistance',
    'Alarm',
    'Color Spray',
    #'Disguise Self',
    'Endure Elements',
    #'Englarge Person',
    #'Expedious Retreat',
    'Feather Fall',
    'Grease',
    #'Identify',
    'Mage Armor',
    'Magic Weapon',
    'Minor Image',
    'Obscuring Mist',
    'Reduce Person',
    'Silent Image',
    'Ventriloquism',
    'Blur',
    'Bull\'s Strength',
    'Fox\'s Cunning',
    'Invisibility',
    #'Knock',
    'Resist Energy',
    #'Returning Weapon',
    #'Unnatural Lust',
    'Explosive Runes',
    'Fly',
    'Invisibility Sphere',
    #'Pup Shape',
    'Tongues',
    'Fireball',
    'Blink',
    #'Beast Shape 1',
    #'Rage',
    'Phantasmal Killer',
    'Secure Shelter',
]

def show_pig_spells(spell_info):

    have_spells = []
    dont_spells = []

    for spell in spell_info:
        if spell['name'] in pig_spells:
            have_spells.append(spell['name'])

    print('Dont have:')
    for spellName in pig_spells:
        if spellName not in have_spells:
            print('    ' + spellName)
            dont_spells.append(spellName)

    print('{} of {} spells are parsed'.format(
        len(have_spells),
        len(pig_spells),
    ))

    #print('Dont have: {}'.format(json.dumps(dont_have, indent=4)))
    return dont_spells
