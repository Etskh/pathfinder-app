'use strict';

import { createComposite } from './Core';


export const getExpByLevel = ( level ) => {
  const experiences = [
    0,
    2000,
    5000, // 3
    9000,
    15000, // 5
    23000,
    35000, // 7
    51000,
    75000,
    105000,
    155000,
    220000,
    315000,
    445000,
    635000,
    890000,
    1300000,
    1800000,
    2550000,
    3600000,
  ];
  return experiences[ level - 1];
}

export const getMod = (score) => {
  return Math.floor(parseFloat((score/2) - 5))
};

export const createPrimaryStats = (character) => {
  return {
    str_mod: getMod(character.stats.str.getTotal()),
    dex_mod: getMod(character.stats.dex.getTotal()),
    con_mod: getMod(character.stats.con.getTotal()),
    wis_mod: getMod(character.stats.wis.getTotal()),
    int_mod: getMod(character.stats.int.getTotal()),
    cha_mod: getMod(character.stats.cha.getTotal()),
    // Class based-things
    base_attack_bonus: character.base_attack_bonus.getTotal(),
  };
}



export const createContext = (character) => {

  const context = createPrimaryStats(character);

  context.melee_touch_attack = createComposite({
    base_attack_bonus: context.base_attack_bonus,
    dex_mod: context.dex_mod,
  });

  return context;
}
