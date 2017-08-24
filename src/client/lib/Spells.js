
const spellList = {
  'Message': {
    level: 0,
    school: 'Transmutation',
    short_description: 'You can whisper messages and receive whispered replies.',
    range: 'medium',
    target: '1 creature / caster_level',
    effect: {
      save: {
        type: 'Will',
        isHarmless: true,
      },
      duration: '10 min / caster_level',
      text: 'You point your finger at each creature you want to receive the message. When you whisper, the whispered message is audible to all targeted creatures within range. The creatures that receive the message can whisper a reply that you hear. The spell transmits sound, not meaning; it doesn’t transcend language barriers. To speak a message, you must mouth the words and whisper.',
      extra: 'Those nearby can hear these messages with a DC 25 Perception check. Magical silence, 1 foot of stone, 1 inch of common metal (or a thin sheet of lead), or 3 feet of wood or dirt blocks the spell. The message does not have to travel in a straight line. It can circumvent a barrier if there is an open path between you and the subject, and the path’s entire length lies within the spell’s range.',
    },
  },
  'Ghost Sound': {
    level: 0,
    school: 'Illusion',
    short_description: 'Make sound figments',
    range: 'close',
    effect: {
      duration: '1 rounds / caster_level',
      save: {
        type: 'Will',
        isDisbelief: true,
      },
      text: 'Ghost sound allows you to create a volume of sound that rises, recedes, approaches, or remains at a fixed place. You choose what type of sound ghost sound creates when casting it and cannot thereafter change the sound’s basic character.',
    },
  },
  'Phantasmal Killer': {
    level: 4,
    school: 'Illusion',
    short_description: 'Fuck one guy up super hard',
    range: 'medium',
    target: '1 creature',
    effect: {
      save: {
        type: 'Will',
        isDisbelief: true,
      },
      text: 'The phantasm touches the subject, and the subject must succeed on a Fortitude save {dc} or die from fear. Even if the Fortitude save is successful, the subject takes {3d6} points of damage.',
      extra: 'You create a phantasmal image of the most fearsome creature imaginable to the subject simply by forming the fears of the subject\'s subconscious mind into something that its conscious mind can visualize: this most horrible beast. Only the spell\'s subject can see the phantasmal killer. You see only a vague shape.',
    },
  },
  'Secure Shelter': {
    level: 4,
    school: 'Conjuration',
    short_description: 'You conjure a sturdy cottage for 8 creatures',
    range: 'close',
    effect: {
      duration: '2 hour / caster_level',
      text: 'You conjure a sturdy cottage or lodge made of material that is common in the area where the spell is cast. The floor is level, clean, and dry. The lodging resembles a normal cottage, with a sturdy door, two shuttered windows, and a small fireplace. The shelter must be heated as a normal dwelling, and extreme heat adversely affects it and its occupants. The dwelling does, however, provide considerable security otherwise – it is as strong as a normal stone building, regardless of its material composition. The dwelling resists flames and fire as if it were stone. It is impervious to normal missiles (but not the sort cast by siege engines or giants). The door, shutters, and even chimney are secure against intrusion, the former two being secured with arcane lock and the latter by an iron grate at the top and a narrow flue. In addition, these three areas are protected by an alarm spell. Finally, an unseen servant is conjured to provide service to you for the duration of the shelter. The secure shelter contains crude furnishings – eight bunks, a trestle table, eight stools, and a writing desk.',
    },
  },
  'Pup Shape': {
    level: 3,
    school: 'Transmutation',
    short_description: 'Target animal takes on a younger form of itself',
    range: 'close',
    target: '1 animal',
    effect: {
      duration: '1 round / caster_level',
      save: {
        type: 'Fort',
      },
      text: 'You transform the subject animal into a Small magical beast (or a magical beast one size category smaller than the original creature, whichever is smaller), creating a young magical version of itself for a short period of time. While in this form, the target has only 1 HD (maximum hit points), and the target takes a –4 penalty to Strength, Constitution, Intelligence and Wisdom (minimum 1). The creature also gains a +4 size bonus to Dexterity and a +2 natural bonus.',
      extra: 'Any nonevil creature that attempts to attack a creature in this form must succeed at a Will saving throw {dc} to overcome feelings of guilt and protectiveness toward the young and innocent-seeming creature. On a failed saving throw, it cannot follow through with the attack, that part of the action is lost, and it can’t directly attack the transformed creature for the duration of the spell or until the spell’s target attacks it. This part of the spell is a mind-affecting (emotion) effect. Evil creatures have no qualms about attacking the target of this spell, in fact, some particularly heinous creatures might go out of their ways to do the target harm.',
    },
  },
  'Unnatural Lust': {
    level: 2,
    school: 'Enchantment',
    short_description: 'Your target is filled with lust and desire for a single creature or object',
    target: '1 creature',
    range: 'close',
    effect: {
      save: {
        type: 'Will',
      },
      duration: '1 round',
      text: 'Your target is filled with lust and desire for a single creature or object as designated by you at the time of casting. That creature or object must be within the spell’s range and perceivable by the target of the spell. The target is filled with the compulsion to rush to the subject of its lust and passionately kiss or caress that subject on its next turn, taking no other actions. If the target would not normally have lustful feelings toward the designated creature or object, it receives a +4 bonus on its saving throw.'
    },
  },
  'Mage Armour': {
    level: 1,
    school: 'Conjuration',
    short_description: 'You gain +4 AC.',
    range: 'touch',
    target: 'creature touched',
    effect: {
      duration: '1 hour / caster_level',
      text: 'You are surrounded by a magical force field that gives a +4 force bonus to armour',
    },
  },
  'Daze': {
    level: 0,
    school: 'Enchantment',
    short_description: 'Attacker loses next action',
    target: '1 humanoid',
    range: 'close',
    effect: {
      duration: '1 round',
      save: {
        type: 'Will'
      },
      text: 'This spell clouds the mind of a humanoid creature with 4 or fewer Hit Dice so that it takes no actions. Humanoids of 5 or more HD are not affected. A dazed subject is not stunned, so attackers get no special advantage against it. After a creature has been dazed by this spell, it is immune to the effects of this spell for 1 minute.',
    },
  },
  'Invisibility': {
    level: 2,
    range: 'touch',
    school: 'Illusion',
    target: '1 creature',
    short_description: 'Turn you or an ally invisible',
    effect: {
      duration: '1 min / level',
      save: {
        type: 'Will',
        isHarmless: true,
      },
      text: 'The creature or object touched becomes invisible. If the recipient is a creature carrying gear, that vanishes, too. If you cast the spell on someone else, neither you nor your allies can see the subject, unless you can normally see invisible things or you employ magic to do so.',
      extra: 'Items dropped or put down by an invisible creature become visible; items picked up disappear if tucked into the clothing or pouches worn by the creature. Light, however, never becomes invisible, although a source of light can become so (thus, the effect is that of a light with no visible source). Any part of an item that the subject carries but that extends more than 10 feet from it becomes visible. Of course, the subject is not magically silenced, and certain other conditions can render the recipient detectable (such as swimming in water or stepping in a puddle). If a check is required, a stationary invisible creature has a +40 bonus on its Stealth checks. This bonus is reduced to +20 if the creature is moving. The spell ends if the subject attacks any creature. For purposes of this spell, an attack includes any spell targeting a foe or whose area or effect includes a foe. Exactly who is a foe depends on the invisible character’s perceptions. Actions directed at unattended objects do not break the spell. Causing harm indirectly is not an attack. Thus, an invisible being can open doors, talk, eat, climb stairs, summon monsters and have them attack, cut the ropes holding a rope bridge while enemies are on the bridge, remotely trigger traps, open a portcullis to release attack dogs, and so forth. If the subject attacks directly, however, it immediately becomes visible along with all its gear. Spells such as bless that specifically affect allies but not foes are not attacks for this purpose, even when they include foes in their area.',
    },
  },
  'Fly': {
    level: 3,
    range: 'touch',
    school: 'Transmutation',
    target: '1 creature',
    short_description: 'Take to the skies!',
    effect: {
      duration: '1 min / level',
      save: {
        type: 'Will',
        isHarmless: true,
      },
      text: 'The subject can fly at a speed of 60 feet (or 40 feet if it wears medium or heavy armor, or if it carries a medium or heavy load). It can ascend at half speed and descend at double speed, and its maneuverability is good.',
      extra: 'Using a fly spell requires only as much concentration as walking, so the subject can attack or cast spells normally. The subject of a fly spell can charge but not run, and it cannot carry aloft more weight than its maximum load, plus any armor it wears. The subject gains a bonus on Fly skill checks equal to 1/2 your caster level. Should the spell duration expire while the subject is still aloft, the magic fails slowly. The subject floats downward 60 feet per round for 1d6 rounds. If it reaches the ground in that amount of time, it lands safely. If not, it falls the rest of the distance, taking 1d6 points of damage per 10 feet of fall. Since dispelling a spell effectively ends it, the subject also descends safely in this way if the fly spell is dispelled, but not if it is negated by an antimagic field.'
    },
  },
  'Invisibility Sphere': {
    level: 3,
    school: 'Illusion',
    range: 'touch',
    short_description: 'Create a sphere of invisibility',
    effect: {
      duration: '1 min / level',
      save: {
        type: 'Will',
        isHarmless: true,
      },
      text: 'This spell functions like invisibility, except that this spell confers invisibility upon all creatures within 10 feet of the recipient at the time the spell is cast. The center of the effect is mobile with the recipient.',
    }
  }
};

export const Spells = {
  getAll: () => {
    return Promise.resolve(spellList);
  },
};
