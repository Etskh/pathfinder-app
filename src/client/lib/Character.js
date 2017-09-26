
// TODO: make every loadash import look like this
import * as _ from 'lodash';

import * as LocalCharacters from './fixtures/LocalCharacters';
import { Utils } from './Utils';
import * as Fetch from './Fetch';
import * as Races from './Races';
//import * as Races from './fixtures/Races';
import { Classes } from './fixtures/Classes';

export const Character = {

  getAll: () => {
    return Fetch.fromWeb('character', 'all').then( payload => {
      const characters = [];
      payload.characters.forEach( character => {
        characters.push( Character.get(character) );
      })
      return Promise.all(characters).then( characters => {
        console.log(characters);
        return characters;
      });
    });
  },

  setActive: (character) => {
    return Fetch.toLocal('character', character.id).then( characterId => {
      return character;
    });
  },

  getActive: () => {
    return Fetch.fromLocal('character').then( characterId => {
      if ( !characterId ) {
        return null;
      }
      return Fetch.fromWeb('character', characterId ).then( character => {
        return Character.get(character);
      });
    });
  },

  get: (pig) => {

    // Get .levels: { ... } from choices
    pig.levels = {};
    const levelUpChoices = _.filter( pig.choices, { type: 'Class' });
    levelUpChoices.forEach( levelUps => {
      if( ! pig.levels[ levelUps.outcome ]) {
        pig.levels[ levelUps.outcome ] = 0;
      }
      pig.levels[ levelUps.outcome ]++;
    });

    // If the base_stats don't exist, add them
    if( !pig.base_stats ) {
      pig.base_stats = {};
    }
    let stats = ['str', 'dex', 'con', 'wis', 'int', 'cha',];
    stats.forEach( stat => {
      if( typeof pig.base_stats[stat] === 'undefined') {
        pig.base_stats[stat] = 10;
      }
    });

    const raceChoice = _.get( pig.choices, { type: 'Race' });
    if( raceChoice ) {
      pig.race = raceChoice.outcome;
    }

    // If there's no skill points, let's put it in there
    if( ! pig.skills ) {
      pig.skills = {};
    }

    return Races.getByName(pig.race).then( race => {

      // Create these with the race
      // and various other bonuses
      pig.stats = {};
      const statIncreasesFromLeveling = _.filter(pig.choices, { type: 'Stat Increase' });

      // Get stats
      console.log(pig);
      for( let stat in pig.base_stats ) {
        pig.stats[stat] = Utils.createComposite({
          'base': pig.base_stats[stat],
        });
        // Racial bonus to stat
        if( race.stats[stat] ) {
          pig.stats[stat].add(race.name, race.stats[stat]);
        }

        // Now if they've chosen it along the way
        let statIncrease = _.filter(statIncreasesFromLeveling, { outcome: stat });
        statIncrease.forEach( inc => {
          pig.stats[stat].add(inc.reason, 1);
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

      if ( !pig.hitpoints ) {
        pig.hitpoints = { first: 0, after: [] };
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

      return pig;
    });
  },
};
