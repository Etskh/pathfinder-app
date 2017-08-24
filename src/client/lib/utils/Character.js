'use strict';

import { createComposite } from './Core';

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
