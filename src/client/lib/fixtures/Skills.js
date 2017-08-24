'use strict';

import { Classes } from './Classes';
import { Utils } from '../Utils';


const skillLists = [{
  name: 'Acrobatics',
  description: 'White goblins cant jump',
  stat: 'dex',
}, {
  name: 'Appraise',
  description: 'Exist easily on Ferenginar motherfucker',
  stat: 'int',
}, {
  name: 'Bluff',
  description: 'Lies! LIES!',
  stat: 'cha',
}, {
  name: 'Climb',
  description: 'Like a monkey',
  stat: 'str',
}, {
  name: 'Craft',
  description: 'Makin shit',
  stat: 'int',
}, {
  name: 'Diplomacy',
  description: 'Make friends',
  stat: 'cha',
}, {
  name: 'Disable Device',
  description: 'Sabotage your friends toys',
  stat: 'dex',
}, {
  name: 'Disguise',
  description: 'Halloween mastery',
  stat: 'cha',
}, {
  name: 'Escape Artist',
  description: 'Get out of a tight spot',
  stat: 'dex',
}, {
  name: 'Fly',
  description: 'Like a bird,',
  stat: 'dex',
}, {
  name: 'Handle Animal',
  description: 'Be Snow White on your own',
  stat: 'cha',
}, {
  name: 'Heal',
  description: 'Do first-aid on your friends',
  stat: 'wis',
}, {
  name: 'Intimidate',
  description: 'Make people do what you yell at them',
  stat: 'cha',
}, {
  name: 'Knowledge (arcana)',
  description: 'Know magic shit',
  stat: 'int',
}, {
  name: 'Knowledge (dungeoneering)',
  description: 'Know dungeon shit',
  stat: 'int',
}, {
  name: 'Knowledge (engineering)',
  description: 'Know physics shit',
  stat: 'int',
}, {
  name: 'Knowledge (geography)',
  description: 'Know map shit',
  stat: 'int',
}, {
  name: 'Knowledge (history)',
  description: 'Know about old shit',
  stat: 'int',
}, {
  name: 'Knowledge (local)',
  description: 'Know local shit',
  stat: 'int',
}, {
  name: 'Knowledge (nature)',
  description: 'Know about trees n\' shit',
  stat: 'int',
}, {
  name: 'Knowledge (nobility)',
  description: 'Know that shitty king',
  stat: 'int',
}, {
  name: 'Knowledge (planes)',
  description: 'Know about dimensional shit',
  stat: 'int',
}, {
  name: 'Knowledge (religion)',
  description: 'Know bullshit',
  stat: 'int',
}, {
  name: 'Linguistics',
  description: 'Speak good',
  stat: 'int',
}, {
  name: 'Stealth',
  description: 'Be a sneaky mf',
  stat: 'dex',
  smallBonus: true,
  // Actions that the player gets during the game
  combatActions: [{
    name: 'Hide',
    opposedBy: 'Perception',
    effect: 'hidden',
  }],
  worldActions: [],
},{
  //
  name: 'Spellcraft',
  description: 'Do magic shit',
  stat: 'int',
  // Actions that the player gets during the game
  combatActions: [],
  worldActions: [],
}];

const getCharacterSkills = (character) => {
  const skills = [];
  let classSkills = [];

  for( const className in character.levels) {
    const cls = Classes.getByName(className);
    classSkills = classSkills.concat(cls.skills);
  }

  skillLists.forEach( skill => {
    const skillRanks = character.skills[skill.name] ? character.skills[skill.name] : 0;

    // The base skill will be ranks and bonuses
    //
    const bonuses = Utils.createComposite({
      modifier: Utils.getMod(character.stats[ skill.stat ].getTotal()),
      ranks: skillRanks,
    });

    // If it's a class skill, add 3 if they put ranks in
    //
    if( classSkills.indexOf(skill.name) !== -1 && skillRanks > 0 ) {
      bonuses.add('class skill', 3);
    }

    // Add miscellaneous bonuses to skills
    //
    if( character.skillBonuses && character.skillBonuses[skill.name] ) {
      for( const reason in character.skillBonuses[skill.name]) {
        bonuses.add(reason, character.skillBonuses[skill.name][reason]);
      }
    }

    // Add size bonuses to skills
    //
    // TODO: if the charater changes size, I guess this should change
    //
    if( skill.smallBonus ) {
      let sizeNames = [
        'fine',
        'diminutive',
        'tiny',
        'small',
        'medium',
        'large',
        'huge',
        'gargantuan',
        'collosal',
      ];
      // TODO: size should be an object
      bonuses.add(
        sizeNames[character.size+4] + ' size bonus',
        character.size * -4);
    }

    skills.push({
      name: skill.name,
      bonus: bonuses,
    });
  });

  return skills;
};

export const Skills = {
  getCharacterSkills: getCharacterSkills,
};
