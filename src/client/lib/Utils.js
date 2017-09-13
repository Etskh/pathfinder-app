'use strict';

import { createUUID, createComposite } from './utils/Core';
import { getMod, getExpByLevel, createContext } from './utils/Character';
import { parseUnit } from './utils/Units';
import { getKnownSpells, getAvailableSlots } from './utils/Spells';

export const Utils = {
  // Core
  createUuid: createUUID,
  createUUID: createUUID,
  createComposite: createComposite,

  // Character
  getMod: getMod,
  getExpByLevel: getExpByLevel,
  createContext: createContext,

  // Units
  parseUnit: parseUnit,

  // Spells
  getKnownSpells: getKnownSpells,
  getAvailableSlots: getAvailableSlots,
}
