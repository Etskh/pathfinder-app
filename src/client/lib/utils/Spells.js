'use strict';

import { parseUnit } from './Units';
import { createComposite, createConditional } from './Core';
import { getMod, createContext } from './Character';


const schools = [
  'Universal',
  'Abjuration',
  'Conjuration',
  'Enchantment',
  'Evocation',
  'Illusion',
  'Necromancy',
  'Divination',
  'Transmutation',
];


const createSpell = ( spell, context, character ) => {

  // Check that we have all the fields we want...
  // and check that they're the values we need

  //
  // {
  //   name: reqd, string
  //   school: reqd, one of school
  //   level: reqd, integer or { string: integer }
  //   casting_time: optional, parseable time, default: 1 standard action
  //   effect: {
  //
  //   }

  if ( typeof spell.name !== 'string' ) {
    throw new Error(`Spell doesn't have a name`);
  }
  if ( schools.indexOf(spell.school) === -1 ) {
    throw new Error(`${spell.school} isn't a known school for the spell ${spell.name}`);
  }
  if ( typeof spell.level !== 'number' && typeof spell.level !== 'object' ) {
    throw new Error(`${spell.name} doesn't have a level`);
  }
  spell.level = typeof spell.level === 'number' ? spell.level : spell.level[context.className]
  if ( typeof spell.range !== 'string' && typeof spell.range !== 'object' ) {
    throw new Error(`${spell.name} doesn't have a range`)
  }

  // Optional domains for the spell
  if( !spell.domains ) {
    spell.domains = [];
    if( spell.domain ) {
      spell.domains.push(spell.domain);
    }
  }

  // Optional casting time, make it 1 standard action
  if ( !spell.casting_time ) {
    spell.casting_time = '1 standard';
  }
  spell.casting_time = parseUnit(spell.casting_time, context);

  // Parse the range
  spell.range = parseUnit(spell.range, context);

  // Optional target
  if( spell.target ) {
    spell.target = parseUnit(spell.target, context);
  }

  if( spell.duration ) {
    spell.duration = parseUnit(spell.duration, context);
  }

  spell.dc = createComposite({
    'base': 10,
    'spell level': spell.level,
    'modifier': context.casting_stat,
  });

  // Check for spell focus for this school
  character.feats.forEach(feat => {
    if( feat.name === 'Spell Focus' && feat.target === spell.school ) {
      spell.dc.add('Spell Focus (' + feat.target + ')', 1);
    }
    if( feat.name === 'Greater Spell Focus' && feat.target === spell.school ) {
      spell.dc.add('Greater Spell Focus (' + feat.target + ')', 1);
    }
  });

  return spell;
}


export const getKnownSpells = (spell_list, character) => {

  //console.log(spell_list);

  const spells = [];
  const sources = [
    'arcane',
  ];

  sources.forEach( source => {
    const castingClasses = character.spells_known[source];
    for( const castingClass in castingClasses ) {
      const locationList = castingClasses[castingClass];
      if( locationList ) {
        // we have "arcane" spells
        for( const location in locationList ) {

          const context = createContext(character);

          // TODO: should infer these class-based stats from the class object
          const castingStat = 'int';
          const casterLevel = character.levels[castingClass];

          context.className = castingClass;
          context.caster_level = casterLevel;
          context.level = casterLevel;
          context.casting_stat = context[castingStat + '_mod'];

          // we have "mind" or "spell_book" for where it's stored
          locationList[location].forEach( spellName => {
            // find source:
            const spell = _.find(spell_list, { name: spellName});
            if( !spell ) {
              throw new Error('Wtf - no spell named ' + spellName );
            }

            // Create a spell
            spell.name = spellName;
            spell.id = spellName.replace(' ','-');
            spell.source = source;
            spell.location = location;
            spells.push(createSpell(spell, context, character));
          });
        }
      }
    }
  });

  // Sort spells by level, descending
  spells.sort(function(a,b){
    return b.level - a.level;
  });

  return spells;
};



const standardiseSpellSlots = ( character, spellSlots) => {
  const slots = [];

  spellSlots.forEach( spellSlot => {
    // Create the slots as requires and constraints
    // If there's no requires, then it must be short-hand
    if( !spellSlot.requires ) {
      spellSlot.requires = createConditional();
    }

    if( !spellSlot.constraints ) {
      spellSlot.constraints = createConditional();
    }

    //
    // Get the special words for the flags
    //
    const stat_flags = [
      'int',
      'cha',
      'wis',
    ];
    for (var needs in spellSlot) {
      // needs a certain class level
      if( needs.indexOf('class') === 0) {
        let className = needs.split('_')[1];
        spellSlot.requires.atLeast['levels.' + className] = spellSlot[needs];
      }
      else {
        let statIndex = stat_flags.indexOf(needs);
        if( statIndex !== -1 ) {
          spellSlot.requires.atLeast['stats.' + stat_flags[statIndex] ] = spellSlot[needs];
        }
      }
    }
    // Transform the choice into a choice object
    if( spellSlot.choice ) {
      spellSlot.requires.has.choices = {
        hash: spellSlot.choice,
      };
    }



    // Grab the spell level
    if( typeof spellSlot.spell_level === 'number' ) {
      spellSlot.constraints.atMost.level = spellSlot.spell_level;
    }
    // Grab the school
    if( typeof spellSlot.spell_school === 'string' ) {
      spellSlot.constraints.has.school = spellSlot.spell_school;
    }


    const slot = {
      id: spellSlot.id,
      reason: spellSlot.reason,
      requires: createConditional(spellSlot.requires),
      constraints: createConditional(spellSlot.constraints),
    };

    slots.push(slot);
  });

  return slots;
}



const getClassSlots = () => {

  let guid = 0;
  const slots = [];
  let needs_level = 1;

  // Add wonky 0-level spells
  slots.push({
    id: 'wizard-' + ++guid,
    reason: 'Wizard level 1',
    spell_level: 0,
    class_wizard: 1,
  });
  slots.push({
    id: 'wizard-' + ++guid,
    reason: 'Wizard level 1',
    spell_level: 0,
    class_wizard: 1,
  });
  slots.push({
    id: 'wizard-' + ++guid,
    reason: 'Wizard level 1',
    spell_level: 0,
    class_wizard: 1,
  });
  slots.push({
    id: 'wizard-' + ++guid,
    reason: 'Wizard level 2',
    spell_level: 0,
    class_wizard: 2,
  });

  for(let spell_level = 1; spell_level < 10; spell_level++) {
    needs_level = (spell_level * 2) - 1;

    slots.push({
      id: 'wizard-' + ++guid,
      reason: 'Wizard level ' + needs_level,
      spell_level: spell_level,
      class_wizard: needs_level,
    });
    slots.push({
      id: 'wizard-' + ++guid,
      reason: 'Wizard level ' + (needs_level + 2),
      spell_level: spell_level,
      class_wizard: needs_level + 2,
    });
    slots.push({
      id: 'wizard-' + ++guid,
      reason: 'Wizard level ' + (needs_level + 4),
      spell_level: spell_level,
      class_wizard: needs_level + 4,
    });
    slots.push({
      id: 'wizard-' + ++guid,
      reason: 'Wizard level ' + (needs_level + 7),
      spell_level: spell_level,
      class_wizard: needs_level + 7,
    });
  }
  // Stats Wizard
  const highest_mod = 10;
  for(let spell_level = 1; spell_level < 10; spell_level++) {
    needs_level = (spell_level * 2) - 1;
    for( let mod = highest_mod; mod >= 0; mod--) {
      // If the mod is divisible by four then
      if( mod % 4 === 0 ) {
        let stat = (mod + 6)*2 + ((spell_level-1) * 2);
        // Bonus spells
        slots.push({
          id: 'wizard-' + ++guid,
          reason: 'Smart Wizard ' + stat,
          spell_level: spell_level,
          class_wizard: needs_level,
          int: stat,
        });
      }
    }
  }

  // Special Wizard
  const adjectives = {
    'Universal': 'Universalist',
    'Abjuration': 'Abjurer',
    'Conjuration': 'Conjuror',
    'Enchantment': 'Enchanter',
    'Evocation': 'Evoker',
    'Illusion': 'Illusionist',
    'Necromancy': 'Necromancer',
    'Transmutation': 'Transmuter',
  };
  schools.forEach( school => {
    for(let spell_level = 1; spell_level < 10; spell_level++) {
      needs_level = (spell_level * 2) - 1;

      slots.push({
        id: 'wizard-' + ++guid,
        reason: adjectives[school] + ' ' + needs_level,
        class_wizard: needs_level,
        choice: 'feature_wizard_school_specialisation_' + school.toLowerCase(),
        spell_school: school,
        spell_level: spell_level,
      });
    }
  });

  return slots;
}




export const getAvailableSlots = (character) => {

  //let slots =_spellSlots;

  // TODO: generate class-specific stat bonuses in here
  // based on class inforamtion
  // Base Wizard
  let slots = getClassSlots();

  slots = standardiseSpellSlots( character, slots );
  const slotsToAdd = [];
  slots.forEach( slot => {
    if( slot.requires.checkObject(character) ) {
      slotsToAdd.push(slot);
    }
  });

  // Sort by level, descending
  slotsToAdd.sort( (a, b) => {
    return b.constraints.atMost.level - a.constraints.atMost.level;
  });

  return slotsToAdd;
};
