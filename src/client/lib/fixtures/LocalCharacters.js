module.exports = [{
  id: 2,
  name: 'Kazrah',
  exp: 37000,
  height: 75,
  weight: 205,
  race: 'Half-orc',
  levels: {
    ranger: 7,
  },
  hitpoints: {
    first: 10,
    after: [
      5,4,5,4,5,4
    ],
  },
  base_stats: {
    str: 16,
    dex: 15,
    con: 13,
    int: 8,
    wis: 14,
    cha: 10,
  },
}, {
  id: 1,
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

  // Hitpoints
  hitpoints: {
    first: 6,
    after: [
      4,
      2,
      2,
      3,
      4,
      4,
      3
    ],
    current: 35,
    nonlethal: 0,
    temporary: 0,
  },

  // Features
  features: [{
    // What its called
    name: 'Blinding Ray',
    // Where should this exist
    type: 'Combat',
    // Relates to a choice hash
    reason: 'feature_wizard_school_specialisation_illusion',
    // How many per day this can be used
    limit: ['3', 'int_mod'],
    // The "spell-like" action that it shows
    action: {
      // Either spell-like, supernatural, extraordinary, or natural
      type: 'Spell-Like',
      // Should be parseable distance
      range: 6,
      // Type should be 'per-round-effect', 'ray', or other
      type: 'ray',
      // SHould be parseable time
      casting_time: '1 standard',
      // This is the effect that happens
      effect: 'blindness or dazzled',
    },
  }],

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

  outstandingChoices: [{

    // These are added after the selection of a class
    // is made
    type: 'learn_spell',
    choices: 'wizard-spell-list',
    reason: 8,
  }, {
    type: 'learn_spell',
    choices: 'wizard-spell-list',
    reason: 8,
  }, {
    type: 'skill_point',
    choices: 'skill',
    reason: 8,
    count: 6
  }, {
    type: 'roll_hitpoints',
    choices: [ 1, 2, 3, 4, 5, 6],
    reason: 8,
  }, {
    // These are added regardless of class selection
    type: 'stat',
    reason: 8,
  }],

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
    hash: 'stat_4_int',
    type: 'stat',
    selection: 'int',
    reason: 4,
  }, {
    hash: 'stat_8_dex',
    type: 'stat',
    selection: 'dex',
    reason: 8,
  }, {
    type: 'feat',
    selection: 'Create Construct',
    reason: 5,
  }, {
    type: 'feat',
    selection: 'Craft Magic Arms and Armour',
    reason: 'wizard feat 5',
  }, {
    type: 'feat',
    selection: 'Greater Spell Focus',
    reason: 7,
  }, {
    type: 'skill',
    selection: 'Linguistics',
    reason: 7,
    target: 'Skald',
  }],

  // Skill ranks for the character
  skills: {
    'Appraise': 5,
    'Craft (weapons)': 4,
    'Escape Artist': 1,
    'Fly': 1,
    'Knowledge (arcana)': 3,
    'Knowledge (dungeoneering)': 6,
    'Knowledge (engineering)': 1,
    'Knowledge (geography)': 1,
    'Knowledge (nobility)': 1,
    'Knowledge (plains)': 1,
    'Knowledge (religion)': 1,
    'Linguistics': 6,
    'Sleight of Hand': 3,
    'Stealth': 5,
    'Spellcraft': 8,
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
    'Create Construct',
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
          'Mage Hand',
          //'Mending', // unit
          'Message',
          //'Open/Close',
          'Resistance',
          'Alarm',
          //'Color Spray', //  unit
          //'Disguise Self',
          'Endure Elements', // unit       //'Englarge Person',
          //'Expedious Retreat',
          'Feather Fall',
          'Grease',
          //'Identify',
          //'Mage Armor',
          'Magic Weapon',
          //'Minor Image', // Needs better spell shit
          //'Obscuring Mist', // unit
          'Reduce Person',
          'Silent Image',
          'Ventriloquism',
          'Blur',
          //'Bull\'s Strength', // '
          //'Fox\'s Cunning', // '
          'Invisibility',
          //'Knock',
          'Resist Energy',
          //'Returning Weapon',
          //'Unnatural Lust',
          'Explosive Runes',
          'Fly',
          'Invisibility Sphere',
          //'Pup Shape',
          'Tongues',
          'Fireball',
          'Blink',
          //'Beast Shape 1',
          //'Rage',
          'Phantasmal Killer',
          'Secure Shelter',
        ], // stored in the spell_book
      }, // cast with stat
    }, // arcane
  }, // spells_known

  /*companions: [{
    name: 'Napoleon',
    type: 'familiar',
    // Should just have name and be inferred
    template: {
      name: 'pig',
      hd: 8,
      base_stats: {
        str: 11,
        dex: 12,
        con: 15,
        int: 2,
        wis: 13,
        cha: 4,
      },
      feats: [
        'Great Fortitude'
      ],
      skills: {
        'Perception': 5,
      },
    }, // template
  }],*/
}];
