
// TODO: make every loadash import look like this
import * as _ from 'lodash';

import * as LocalCharacters from './fixtures/LocalCharacters';
import { Utils } from './Utils';
import * as Fetch from './Fetch';
import * as Races from './fixtures/Races';
import { Classes } from './fixtures/Classes';

export const Character = {
  getAll: () => {
    return Fetch.fromWeb('character', 'all').then( payload => {
      return payload.characters;
    });
  },
  setActive: (character) => {
    return Fetch.toLocal('character', character);
  },
  getActive: () => {
    return Fetch.fromLocal('activeCharacter');
    // Promise.resolve(null);
  },
  createNew: () => {
    /*const character = {
      exp: 0,
      hitpoints: {},
      levels: {},
      skills: {},
      skillBonuses: {},
      enchantments: {},
      spells_known: {},
      outstandingChoices: [{
        type: 'choose-name',
        choices: 'text',
        reason: 1,
      }, {
        type: 'choose-race',
        isRequired: true,
        reason: 1,
      }, {
        type: 'choose-class',
        isRequired: true,
        reason: 1,
      }],
    };*/

    // TODO: ask fetch to make us a new one

    return Promise.resolve(character);
  },

  getByName: (name) => {
    const pig = _.find( LocalCharacters, { name: name });
    if( !pig ) {
      return Promise.reject(`No character called ${name}`);
    }
    return Character.get(pig);
  },

  get: (pig) => {
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
      pig.hp = Utils.createComposite({});
      pig.saves = {
        fort: Utils.createComposite({
          'con_mod': Utils.getMod(pig.stats.con.getTotal()),
        }),
        ref: Utils.createComposite({
          'dex_mod': Utils.getMod(pig.stats.dex.getTotal()),
        }),
        will: Utils.createComposite({
          'wis_mod': Utils.getMod(pig.stats.wis.getTotal()),
        }),
      };

      // Onto things like HP, BAB, etc
      for( let className in pig.levels ) {
        let cls = Classes.getByName(className);
        let level = cls.atLevel(pig.levels[className]);
        let text = `Level ${pig.levels[className]} ${className}`;

        pig.base_attack_bonus.add(text, level.base_attack_bonus);
        pig.hp.add('Con mod for '+ text,
          Utils.getMod(pig.stats.con.getTotal()) * pig.levels[className]
        );
        pig.saves.fort.add(text, level.saves.fort);
        pig.saves.ref.add(text, level.saves.ref);
        pig.saves.will.add(text, level.saves.will);
      }

      pig.hp.add('First level', pig.hitpoints.first);
      for(let roll=0; roll < pig.hitpoints.after.length; roll++ ) {
        pig.hp.add('Level '+ (roll+2), pig.hitpoints.after[roll] );
      }

      pig.ac = Utils.createComposite({
        base: 10,
        dex_mod: Utils.getMod(pig.stats.dex.getTotal()),
        size_modifier: pig.size * -1,
      });

      pig.ranged_touch_attack = Utils.createComposite({
        bab: pig.base_attack_bonus,
        dex_mod: Utils.getMod(pig.stats.dex.getTotal()),
      });
      pig.melee_touch_attack = Utils.createComposite({
        bab: pig.base_attack_bonus,
        str_mod: Utils.getMod(pig.stats.str.getTotal()),
      });

      console.log(pig);

      return pig;
    });
  },
};
