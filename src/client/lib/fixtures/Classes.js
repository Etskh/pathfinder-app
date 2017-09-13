
const classList = [{
  name: 'Wizard',
  hd: 6,
  skillBase: 2,
  caster: 'strong',
  bab: 'slow',
  fort: 'weak',
  ref: 'weak',
  will: 'strong',
  skills: [
    'Appraise',
    'Craft',
    'Escape Artist',
    'Fly',
    'Knowledge (arcana)',
    'Linguistics',
    'Spellcraft',
  ],
}, {
  name: 'Ranger',
  hd: 10,
  skillBase: 6,
  caster: 'weak',
  bab: 'fast',
  fort: 'strong',
  ref: 'strong',
  will: 'weak',
  skills: [
    'Climb',
    'Craft',
    'Handle Animal',
    'Heal',
    'Intimidate',
    'Knowledge (dungeoneering)',
    'Knowledge (geography)',
    'Knowledge (nature)',
    'Perception',
    'Profession',
    'Ride',
    'Spellcraft',
    'Stealth',
    'Survival',
    'Swim',
  ],
}];


const getCasterLevelByLevel = ( casterType, level ) => {
  switch ( casterType ) {
  case 'strong':
    return level;
  case 'weak':
    return Math.max(0, level - 3);
  }
  return 0;
}

const getBabByLevel = ( bab, level ) => {
  switch( bab ) {
  case 'fast':
    return level;
  case 'slow':
    return Math.floor(level / 2);
  }
  return -1;
};

const getSaveByLevel = ( save, level ) => {
  switch( save ) {
  case 'weak':
    return Math.floor(level / 3);
  case 'strong':
    return Math.floor(level / 2 + 2);
  }
  return -1;
};


export const Classes = {
  getByName: (name) => {
    const wiz = classList[0];

    wiz.atLevel = ( level ) => {
      return {
        base_attack_bonus: getBabByLevel( wiz.bab, level ),
        saves: {
          fort: getSaveByLevel( wiz.fort, level ),
          ref: getSaveByLevel( wiz.ref, level ),
          will: getSaveByLevel( wiz.will, level ),
        },
        caster_level: getCasterLevelByLevel( wiz.caster, level ),
      };
    };

    return wiz;
  },
};
