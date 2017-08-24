
// TODO: make every loadash import look like this
import * as _ from 'lodash';


import { Utils } from './Utils';
import * as Races from './fixtures/Races';
import { Classes } from './fixtures/Classes';


const pig = {

  // Basic things
  name: 'Pig',
  exp: 37000,
  height: 32,
  weight: 40,

  // Race
  race: 'Goblin',
  // size: -1,

  // Classes
  levels: {
    'wizard': 7,
  },
  // TODO: infer this in creation
  'caster_level': 7, // highest value of class caster levels
  'hd': 7, // all values of levels added up

  // Rolls
  // Before modifications
  base_stats: {
    str: 11,
    dex: 13,
    con: 13,
    int: 17,
    wis: 10,
    cha: 10,
  },

  // This is all the selections made all the way now
  choices: [{
    hash: 'feature_wizard_school_specialisation_illusion',
    type: 'feature',
    selection: 'Illusion',
    reason: 'Wizard',
    name: 'School Specialisation',
  },{
    hash: 'feature_wizard_banned_school_evocation',
    type: 'feature',
    selection: 'Evocation',
    reason: 'Wizard',
    name: 'Banned School',
  },{
    hash: 'feature_wizard_banned_school_necromancy',
    type: 'feature',
    selection: 'Necromancy',
    reason: 'Wizard',
    name: 'Banned School',
  },{
    hash: 'feat_spell_focus',
    type: 'feat',
    selection: 'Spell Focus',
    reason: 1,
  }, {
    hash: 'feat_craft_wonderous_item',
    type: 'feat',
    selection: 'Craft Wonderous Item',
    reason: 3,
  }, {
    hash: 'stat_int',
    type: 'stat',
    selection: 'int',
    reason: 4,
  }, {
    type: 'feat',
    selection: '---',
    reason: 5,
  }, {
    type: 'feat',
    selection: 'Craft Magic Arms and Armour',
    reason: 'wizard feat 5',
  }, {
    type: 'feat',
    selection: 'Greater Spell Focus',
    reason: 7,
  }],

  // Skill ranks for the character
  skills: {
    'Appraise': 3,
    'Craft': 1,
    'Escape Artist': 1,
    'Fly': 1,
    'Knowledge (arcana)': 3,
    'Knowledge (dungeoneering)': 5,
    'Knowledge (engineering)': 1,
    'Knowledge (geography)': 1,
    'Knowledge (nobility)': 1,
    'Knowledge (plains)': 1,
    'Knowledge (religion)': 1,
    'Linguistics': 5,
    'Sleight of Hand': 2,
    'Stealth': 5,
    'Spellcraft': 7,
  },
  skillBonuses: {
    'Stealth': {
      'goblin': 4,
    },
    'Ride': {
      'goblin': 4,
    },
  },

  // These are the feats that the character has
  feats: [
    'Scribe Scroll',
    {
      name: 'Spell Focus',
      target: 'Illusion',
    },
    'Craft Wonderous Item',
    'Craft Magic Arms and Armour',
    {
      name: 'Greater Spell Focus',
      target: 'Illusion',
  }],

  // These are the spells known in the form:
  // source: {
  //   class: {
  //     location: {
  spells_known: {
    arcane: {
      wizard: {
        spell_book: [
          'Daze',
          'Ghost Sound',
          //'Mage Hand',
          //'Mending',
          'Message',
          //'Open / Close',
          //'Resistance',
          //'Alarm',
          //'Color Spray',
          //'Disguise Self',
          //'Endure Elements',
          //'Englarge Person',
          //'Expedious Retreat',
          //'Feather Fall',
          //'Grease',
          //'Identify',
          'Mage Armour',
          //'Magic Weapon',
          //'Minor Image',
          //'Obscuring Mist',
          //'Reduce Person',
          //'Silent Image',
          //'Ventriloquism',
          //'Blur',
          //'Bull\'s Strength',
          //'Fox\'s Cunning',
          'Invisibility',
          //'Knock',
          //'Resist Energy',
          //'Returning Weapon',
          'Unnatural Lust',
          //'Explosive Runes',
          'Fly',
          'Invisibility Sphere',
          'Pup Shape',
          'Phantasmal Killer',
          'Secure Shelter',
        ], // stored in the spell_book
      }, // cast with stat
    }, // arcane
  }, // spells_known
};


export const Character = {
  getByName: (name) => {

    return Races.getByName(pig.race).then( race => {

      // Create these with the race
      // and various other bonuses
      pig.stats = {};
      const statIncreasesFromLeveling = _.filter(pig.choices, { type: 'stat' });

      // Get stats
      for( let stat in pig.base_stats ) {
        pig.stats[stat] = Utils.createComposite({
          'base': pig.base_stats[stat],
        });
        // Racial bonus to stat
        if( race.stats[stat] ) {
          pig.stats[stat].add(race.name, race.stats[stat]);
        }

        // Now if they've chosen it along the way
        let statIncrease = _.filter(statIncreasesFromLeveling, { selection: stat });
        statIncrease.forEach( inc => {
          // It's from leveling
          if( typeof inc.reason === 'number' ) {
            pig.stats[stat].add('Stat increase at level ' + inc.reason, 1);
          }
          else {
            throw new Error('What the fuck reason is ' + inc.reason);
          }
        });
      }

      // Get the size
      pig.size = race.size;


      pig.base_attack_bonus = Utils.createComposite({});
      pig.saves = {
        fort: Utils.createComposite({}),
        ref: Utils.createComposite({}),
        will: Utils.createComposite({}),
      };

      // Onto things like HP, BAB, etc
      for( let className in pig.levels ) {
        let cls = Classes.getByName(className);
        let level = cls.atLevel(pig.levels[className]);
        let text = `Level ${pig.levels[className]} ${className}`;

        pig.base_attack_bonus.add(text, level.base_attack_bonus);
        pig.saves.fort.add(text, level.saves.fort);
        pig.saves.ref.add(text, level.saves.ref);
        pig.saves.will.add(text, level.saves.will);
      }

      console.log(pig);

      return pig;
    });
  },
};
