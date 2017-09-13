module.exports = [
  {
    "name": "Dancing Lights",
    "short_description": "Creates torches or other lights.",
    "duration": "1 minute",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "medium",
    "level": {
      "bard": 0,
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": null,
    "text": "Depending on the version selected, you create up to four lights that resemble lanterns or torches (and cast that amount of light), or up to four glowing spheres of light (which look like will-o'-wisps), or one faintly glowing, vaguely humanoid shape. The dancing lights must stay within a 10-foot-radius area in relation to each other but otherwise move as you desire (no concentration required): forward or back, up or down, straight or turning corners, or the like. The lights can move up to 100 feet per round. A light winks out if the distance between you and it exceeds the spell's range.You can only have one dancing lights spell active at any one time. If you cast this spell while another casting is still in effect, the previous casting is dispelled. If you make this spell permanent, it does not count against this limit.Dancing lights can be made permanent with a permanency spell.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "light"
    ]
  },
  {
    "name": "Daze",
    "short_description": "A single humanoid creature with 4 HD or less loses its next action.",
    "duration": "1 round",
    "components": "V, S, M (a pinch of wool or similar substance)",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "close",
    "level": {
      "bard": 0,
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": {
      "type": "Will"
    },
    "text": "This spell clouds the mind of a humanoid creature with 4 or fewer Hit Dice so that it takes no actions. Humanoids of 5 or more HD are not affected. A dazed subject is not stunned,\n            so attackers get no special advantage against it. After a creature has been dazed by this spell, it is immune to the effects of this spell for 1 minute.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Flare",
    "short_description": "Dazzles one creature (\u00e2\u20ac\u201c1 on attack rolls).",
    "duration": "instantaneous",
    "components": "V",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "close",
    "level": {
      "bard": 0,
      "druid": 0,
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": {
      "type": "Fort"
    },
    "text": "This cantrip creates a burst of light. If you cause the light to burst in front of a single creature, that creature is dazzled for 1 minute unless it makes a successful Fortitude save. Sightless creatures, as well as creatures already dazzled, are not affected by flare.",
    "subschool": null,
    "domains": [
      "light"
    ]
  },
  {
    "name": "Ghost Sound",
    "short_description": "Figment sounds.",
    "duration": "1 round/level",
    "components": "V, S, M (a bit of wool or a small lump of wax)",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "close",
    "level": {
      "bard": 0,
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": {
      "isDisbelief": true,
      "type": "Will"
    },
    "text": "Ghost sound allows you to create a volume of sound that rises, recedes, approaches, or remains at a fixed place. You choose what type of sound ghost sound creates when casting it and cannot thereafter change the sound's basic character.The volume of sound created depends on your level. You can produce as much noise as four normal humans per caster level (maximum 40 humans). Thus, talking, singing, shouting, walking, marching, or running sounds can be created. The noise a ghost sound spell produces can be virtually any type of sound within the volume limit. A horde of rats running and squeaking is about the same volume as eight humans running and shouting. A roaring lion is equal to the noise from 16 humans, while a roaring dragon is equal to the noise from 32 humans. Anyone who hears a ghost sound receives a Will save to disbelieve.Ghost sound can enhance the effectiveness of a silent image spell.Ghost sound can be made permanent with a permanency spell.",
    "isDispellable": true,
    "subschool": "figment",
    "domains": []
  },
  {
    "name": "Know Direction",
    "short_description": "You discern north.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "personal",
    "level": {
      "bard": 0,
      "druid": 0
    },
    "saves": null,
    "text": "When you cast this spell, you instantly know the direction of north from your current position. The spell is effective in any environment in which \"north\" exists, but it may not work in extraplanar settings. Your knowledge of north is correct at the moment of casting, but you can get lost again within moments if you don't find some external reference point to help you keep track of direction.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Light",
    "short_description": "Object shines like a torch.",
    "duration": "10 min./level",
    "components": "V, M/DF (a firefly)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "touch",
    "level": {
      "bard": 0,
      "cleric": 0,
      "druid": 0,
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": null,
    "text": "This spell causes a touched object to glow like a torch, shedding normal light in a 20-foot radius from the point touched, and increasing the light level for an additional 20 feet by one step, up to normal light (darkness becomes dim light, and dim light becomes normal light). In an area of normal or bright light, this spell has no effect. The effect is immobile, but it can be cast on a movable object.You can only have one light spell active at any one time. If you cast this spell while another casting is still in effect, the previous casting is dispelled. If you make this spell permanent (through permanency or a similar effect), it does not count against this limit. Light can be used to counter or dispel any darkness spell of equal or lower spell level.",
    "subschool": null,
    "domains": [
      "light"
    ]
  },
  {
    "name": "Mage Hand",
    "short_description": "5-pound telekinesis.",
    "duration": "concentration",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "bard": 0,
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": null,
    "text": "You point your finger at an object and can lift it and move it at will from a distance. As a move action, you can propel the object as far as 15 feet in any direction, though the spell ends if the distance between you and the object ever exceeds the spell's range.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Mending",
    "short_description": "Makes minor repairs on an object.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "10 minutes",
    "school": "Transmutation",
    "range": "10 ft.",
    "level": {
      "bard": 0,
      "cleric": 0,
      "druid": 0,
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": null,
    "text": "This spell repairs damaged objects, restoring 1d4 hit points to the object. If the object has the broken condition, this condition is removed if the object is restored to at least half its original hit points. All of the pieces of an object must be present for this spell to function. Magic items can be repaired by this spell, but you must have a caster level equal to or higher than that of the object. Magic items that are destroyed (at 0 hit points or less) can be repaired with this spell, but this spell does not restore their magic abilities. This spell does not affect creatures (including constructs). This spell has no effect on objects that have been warped or otherwise transmuted, but it can still repair damage done to such items.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Message",
    "short_description": "Whisper conversation at distance.",
    "duration": "10 min./level",
    "components": "V, S, F (a piece of copper wire)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "medium",
    "level": {
      "bard": 0,
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": null,
    "text": "You can whisper messages and receive whispered replies. Those nearby can hear these messages with a DC 25 Perception check. You point your finger at each creature you want to receive the message. When you whisper, the whispered message is audible to all targeted creatures within range. Magical silence, 1 foot of stone, 1 inch of common metal (or a thin sheet of lead), or 3 feet of wood or dirt blocks the spell. The message does not have to travel in a straight line. It can circumvent a barrier if there is an open path between you and the subject, and the path's entire length lies within the spell's range. The creatures that receive the message can whisper a reply that you hear. The spell transmits sound, not meaning it doesn't transcend language barriers. To speak a message, you must mouth the words and whisper.",
    "subschool": null,
    "domains": [
      "language-dependent"
    ]
  },
  {
    "name": "Open/Close",
    "short_description": "Opens or closes small or light things.",
    "duration": "instantaneous",
    "components": "V, S, F (a brass key)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "bard": 0,
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": {
      "isObject": true,
      "type": "Will"
    },
    "text": "You can open or close (your choice) a door, chest, box, window, bag, pouch, bottle, barrel, or other container. If anything resists this activity (such as a bar on a door or a lock on a chest), the spell fails. In addition, the spell can only open and close things weighing 30 pounds or less. Thus, doors, chests, and similar objects sized for enormous creatures may be beyond this spell's ability to affect.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Prestidigitation",
    "short_description": "Performs minor tricks.",
    "duration": "1 hour",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Universal",
    "range": "10 ft.",
    "level": {
      "bard": 0,
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": null,
    "text": "Prestidigitations are minor tricks that novice spellcasters use for practice. Once cast, a prestidigitation spell enables you to perform simple magical effects for 1 hour. The effects are minor and have severe limitations. A prestidigitation can slowly lift 1 pound of material. It can color, clean, or soil items in a 1-foot cube each round. It can chill, warm, or flavor 1 pound of nonliving material. It cannot deal damage or affect the concentration of spellcasters. Prestidigitation can create small objects, but they look crude and artificial. The materials created by a prestidigitation spell are extremely fragile, and they cannot be used as tools, weapons, or spell components. Finally, prestidigitation lacks the power to duplicate any other spell effects. Any actual change to an object (beyond just moving, cleaning, or soiling it) persists only 1 hour.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Read Magic",
    "short_description": "Read scrolls and spellbooks.",
    "duration": "10 min./level",
    "components": "V, S, F (a clear crystal or mineral prism)",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "personal",
    "level": {
      "bard": 0,
      "cleric": 0,
      "druid": 0,
      "paladin": 1,
      "ranger": 1,
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": null,
    "text": "Read magic can be made permanent with a permanency spell.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Resistance",
    "short_description": "Subject gains +1 on saving throws.",
    "duration": "1 minute",
    "components": "V, S, M/DF (a miniature cloak)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "bard": 0,
      "cleric": 0,
      "druid": 0,
      "paladin": 1,
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "Resistance can be made permanent with a permanency spell.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Summon Instrument",
    "short_description": "Summons one musical instrument.",
    "duration": "1 min./level",
    "components": "V, S",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "0 ft.",
    "level": {
      "bard": 0
    },
    "saves": null,
    "text": "This spell summons one handheld musical instrument of your choice. This instrument appears in your hands or at your feet (your choice). The instrument is typical for its type. Only one instrument appears per casting, and it will play only for you. You can't summon an instrument too large to be held in two hands. The summoned instrument disappears at the end of this spell.",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": []
  },
  {
    "name": "Alarm",
    "short_description": "Wards an area for 2 hours/level.",
    "duration": "2 hours/level",
    "components": "V, S, F/DF (a tiny bell and a piece of very fine silver wire)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "close",
    "level": {
      "bard": 1,
      "ranger": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "Alarm creates a subtle ward on an area you select. Once the spell effect is in place, it thereafter sounds a mental or audible alarm each time a creature of Tiny or larger size enters the warded area or touches it. A creature that speaks the password (determined by you at the time of casting) does not set off the alarm. You decide at the time of casting whether the alarm will be mental or audible in nature.Mental Alarm: A mental alarm alerts you (and only you) so long as you remain within 1 mile of the warded area. You note a single mental \"ping\" that awakens you from normal sleep but does not otherwise disturb concentration. A silence spell has no effect on a mental alarm.Audible Alarm: An audible alarm produces the sound of a hand bell, and anyone within 60 feet of the warded area can hear it clearly. Reduce the distance by 10 feet for each interposing closed door and by 20 feet for each substantial interposing wall.In quiet conditions, the ringing can be heard faintly as far as 180 feet away. The sound lasts for 1 round. Creatures within a silence spell cannot hear the ringing. Ethereal or astral creatures do not trigger the alarm.Alarm can be made permanent with a permanency spell.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Animate Rope",
    "short_description": "Makes a rope move at your command.",
    "duration": "1 round/level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "medium",
    "level": {
      "bard": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "The possible commands are \"coil\" (form a neat, coiled stack), \"coil and knot,\" \"loop,\" \"loop and knot,\" \"tie and knot,\" and the opposites of all of the above (\"uncoil,\" and so forth). You can give one command each round as a move action, as if directing an active spell.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Cause Fear",
    "short_description": "One creature of 5 HD or less flees for 1d4 rounds.",
    "duration": "1d4 rounds or 1 round see text",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "close",
    "level": {
      "bard": 1,
      "cleric": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "type": "Will"
    },
    "text": "The affected creature becomes frightened. If the subject succeeds on a Will save, it is shaken for 1 round. Creatures with 6 or more HD are immune to this effect. Cause fear counters and dispels remove fear.",
    "subschool": null,
    "domains": [
      "fear",
      "mind-affecting"
    ]
  },
  {
    "name": "Charm Person",
    "short_description": "Makes one person your friend.",
    "duration": "1 hour/level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "close",
    "level": {
      "bard": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "type": "Will"
    },
    "text": "The spell does not enable you to control the charmed person as if it were an automaton, but it perceives your words and actions in the most favorable way. You can try to give the subject orders, but you must win an opposed Charisma check to convince it to do anything it wouldn't ordinarily do. (Retries are not allowed.) An affected creature never obeys suicidal or obviously harmful orders, but it might be convinced that something very dangerous is worth doing. Any act by you or your apparent allies that threatens the charmed person breaks the spell. You must speak the person's language to communicate your commands, or else be good at pantomiming.",
    "subschool": "charm",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Comprehend Languages",
    "short_description": "You understand all spoken and written languages.",
    "duration": "10 min./levelYou can understand the spoken words of creatures or read otherwise incomprehensible written messages. The ability to read does not necessarily impart insight into the material, merely its literal meaning. The spell enables you to understand or read an unknown language, not speak or write it.Written material can be read at the rate of one page (250 words) per minute. Magical writing cannot be read, though the spell reveals that it is magical. This spell can be foiled by certain warding magic (such as the",
    "components": "V, S, M/DF (pinch of soot and salt)",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "personal",
    "level": {
      "bard": 1,
      "cleric": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "You can understand the spoken words of creatures or read otherwise incomprehensible written messages. The ability to read does not necessarily impart insight into the material, merely its literal meaning. The spell enables you to understand or read an unknown language, not speak or write it.Written material can be read at the rate of one page (250 words) per minute. Magical writing cannot be read, though the spell reveals that it is magical. This spell can be foiled by certain warding magic (such as the secret page and illusory script spells). It does not decipher codes or reveal messages concealed in otherwise normal text.Comprehend languages can be made permanent with a permanency spell.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Confusion, Lesser",
    "short_description": "One creature is confused for 1 round.",
    "duration": "1 round/level",
    "components": "V, S, M/DF (three nutshells)",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "medium",
    "level": {
      "bard": 3,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": {
      "type": "Will"
    },
    "text": "This spell causes confusion in the targets, making them unable to determine their actions. Roll on the following table at the start of each subject's turn each round to see what it does in that round.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Detect Secret Doors",
    "short_description": "Reveals hidden doors within 60 ft.",
    "duration": "concentration, up to 1 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "60 ft.",
    "level": {
      "bard": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "You can detect secret doors, compartments, caches, and so forth. Only passages, doors, or openings that have been specifically constructed to escape detection are detected by this spell. The amount of information revealed depends on how long you study a particular area or subject.1st Round: Presence or absence of secret doors.2nd Round: Number of secret doors and the location of each. If an aura is outside your line of sight, then you discern its direction but not its exact location.Each Additional Round: The mechanism or trigger for one particular secret portal closely examined by you. Each round, you can turn to detect secret doors in a new area. The spell can penetrate barriers, but 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt blocks it.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Expeditious Retreat",
    "short_description": "Your base speed increases by 30 ft.",
    "duration": "1 min./level This spell increases your base land speed by 30 feet. This adjustment is treated as an enhancement bonus. There is no effect on other modes of movement, such as burrow, climb, fly, or swim. As with any effect that increases your speed, this spell affects your jumping distance (see the Acrobatics skill).        Report a Problem",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "bard": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "This spell increases your base land speed by 30 feet. This adjustment is treated as an enhancement bonus. There is no effect on other modes of movement, such as burrow, climb, fly, or swim. As with any effect that increases your speed, this spell affects your jumping distance (see the Acrobatics skill).",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Feather Fall",
    "short_description": "Objects or creatures fall slowly.",
    "duration": "1 round/level",
    "components": "V",
    "casting_time": "1 action",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "bard": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "isHarmless": true,
      "isObject": true,
      "type": "Will"
    },
    "text": "The affected creatures or objects fall slowly. Feather fall instantly changes the rate at which the targets fall to a mere 60 feet per round (equivalent to the end of a fall from a few feet), and the subjects take no damage upon landing while the spell is in effect. When the spell duration expires, a normal rate of falling resumes.The spell affects one or more Medium or smaller creatures (including gear and carried objects up to each creature's maximum load) or objects, or the equivalent in larger creatures: a Large creature or object counts as two Medium creatures or objects, a Huge creature or object counts as four Medium creatures or objects, and so forth.This spell has no special effect on ranged weapons unless they are falling quite a distance. If the spell is cast on a falling item, the object does half normal damage based on its weight, with no bonus for the height of the drop.Feather fall works only upon free-falling objects. It does not affect a sword blow or a charging or flying creature.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Grease",
    "short_description": "Makes 10-ft. square or one object slippery.",
    "duration": "1 min./level",
    "components": "V, S, M (butter)",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "bard": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "A grease spell covers a solid surface with a layer of slippery grease. Any creature in the area when the spell is cast must make a successful Reflex save or fall. A creature can walk within or through the area of grease at half normal speed with a DC 10 Acrobatics check. Failure means it can't move that round (and must then make a Reflex save or fall), while failure by 5 or more means it falls (see the Acrobatics skill for details). Creatures that do not move on their turn do not need to make this check and are not considered flat-footed.",
    "isDispellable": true,
    "subschool": "creation",
    "domains": []
  },
  {
    "name": "Hideous Laughter",
    "short_description": "Subject loses actions for 1 round/level.",
    "duration": "1 round/level",
    "components": "V, S, M (tiny fruit tarts and a feather)",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "close",
    "level": {
      "bard": 1,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "type": "Will"
    },
    "text": "This spell afflicts the subject with uncontrollable laughter. It collapses into gales of manic laughter, falling prone. The subject can take no actions while laughing, but is not considered helpless. After the spell ends, it can act normally. On the creature's next turn, it may attempt a new saving throw to end the effect. This is a full round action that does not provoke attacks of opportunity. If this save is successful, the effect ends. If not, the creature continues laughing for the entire duration.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Hypnotism",
    "short_description": "Fascinates 2d4 HD of creatures.",
    "duration": "2d4 rounds",
    "components": "V, S",
    "casting_time": "1 round",
    "school": "Enchantment",
    "range": "close",
    "level": {
      "bard": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "type": "Will"
    },
    "text": "Your gestures and droning incantation fascinate nearby creatures, causing them to stop and stare blankly at you. In addition, you can use their rapt attention to make your suggestions and requests seem more plausible. Roll 2d4 to see how many total HD of creatures you affect. Creatures with fewer HD are affected before creatures with more HD. Only creatures that can see or hear you are affected, but they do not need to understand you to be fascinated.",
    "isDispellable": true,
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Magic Mouth",
    "short_description": "Object speaks once when triggered.",
    "duration": "instantaneous",
    "components": "V, S, M (a small bit of honeycomb and jade dust worth 10 gp)",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "close",
    "level": {
      "bard": 1,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isObject": true,
      "type": "Will"
    },
    "text": "This spell imbues the chosen object or creature with an enchanted mouth that suddenly appears and speaks its message the next time a specified event occurs. The message, which must be 25 or fewer words long, can be in any language known by you and can be delivered over a period of 10 minutes. The mouth cannot utter verbal components, use command words, or activate magical effects. It does, however, move according to the words articulated if it were placed upon a statue, the mouth of the statue would move and appear to speak. Magic mouth can also be placed upon a tree, rock, or any other object or creature.The spell functions when specific conditions are fulfilled according to your command as set in the spell. Commands can be as general or as detailed as desired, although only visual and audible triggers can be used. Triggers react to what appears to be the case. Disguises and illusions can fool them. Normal darkness does not defeat a visual trigger, but magical darkness or invisibility does. Silent movement or magical silence defeats audible triggers. Audible triggers can be keyed to general types of noises or to a specific noise or spoken word. Actions can serve as triggers if they are visible or audible. A magic mouth cannot distinguish alignment, level, Hit Dice, or class except by external garb.The range limit of a trigger is 15 feet per caster level, so a 6th-level caster can command a magic mouth to respond to triggers as far as 90 feet away. Regardless of range, the mouth can respond only to visible or audible triggers and actions in line of sight or within hearing distance.Magic mouth can be made permanent with a permanency spell.",
    "subschool": "glamer",
    "domains": []
  },
  {
    "name": "Obscure Object",
    "short_description": "Masks object against scrying.",
    "duration": "8 hours",
    "components": "V, S, M/DF (chameleon skin)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "bard": 1,
      "cleric": 3,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isObject": true,
      "type": "Will"
    },
    "text": "This spell hides an object from location by divination (scrying) effects, such as the scrying spell or a crystal ball. Such an attempt automatically fails (if the divination is targeted on the object) or fails to perceive the object (if the divination is targeted on a nearby location, object, or person).",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Remove Fear",
    "short_description": "Suppresses fear or gives +4 on saves against fear for one subject + one per four levels.",
    "duration": "10 minutes see text",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "close",
    "level": {
      "bard": 1,
      "cleric": 1
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "Remove fear counters and dispels cause fear.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Silent Image",
    "short_description": "Creates minor illusion of your design.",
    "duration": "concentration",
    "components": "V, S, F (a bit of fleece)",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "long",
    "level": {
      "bard": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "isDisbelief": true,
      "type": "Will"
    },
    "text": "This spell creates the visual illusion of an object, creature, or force, as visualized by you. The illusion does not create sound, smell, texture, or temperature. You can move the image within the limits of the size of the effect.",
    "subschool": "figment",
    "domains": []
  },
  {
    "name": "Sleep",
    "short_description": "Puts 4 HD of creatures into magical slumber.",
    "duration": "1 min./level",
    "components": "V, S, M (fine sand, rose petals, or a live cricket)",
    "casting_time": "1 round",
    "school": "Enchantment",
    "range": "medium",
    "level": {
      "bard": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "type": "Will"
    },
    "text": "A sleep spell causes a magical slumber to come upon 4 HD of creatures. Creatures with the fewest HD are affected first. Among creatures with equal HD, those who are closest to the spell's point of origin are affected first. HD that are not sufficient to affect a creature are wasted. Sleeping creatures are helpless. Slapping or wounding awakens an affected creature, but normal noise does not. Awakening a creature is a standard (an application of the aid another action). Sleep does not target unconscious creatures, constructs, or undead creatures.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Summon Monster I",
    "short_description": "Summons extraplanar creature to fight for you.",
    "duration": "1 round/level",
    "components": "V, S, F/DF (a tiny bag and a small candle)",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "bard": 1,
      "cleric": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells with expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": [
      "seetext"
    ]
  },
  {
    "name": "Undetectable Alignment",
    "short_description": "Conceals alignment from magical detection for 24 hours.",
    "duration": "24 hours",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "close",
    "level": {
      "bard": 1,
      "cleric": 2,
      "paladin": 2
    },
    "saves": {
      "isObject": true,
      "type": "Will"
    },
    "text": "An undetectable alignment spell conceals the alignment of an object or a creature from all forms of divination.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Unseen Servant",
    "short_description": "Invisible force obeys your commands.",
    "duration": "1 hour/level",
    "components": "V, S, M (a piece of string and a bit of wood)",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "bard": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "An unseen servant is an invisible, mindless, shapeless force that performs simple tasks at your command. It can run and fetch things, open unstuck doors, and hold chairs, as well as clean and mend. The servant can perform only one activity at a time, but it repeats the same activity over and over again if told to do so as long as you remain within range. It can open only normal doors, drawers, lids, and the like. It has an effective Strength score of 2 (so it can lift 20 pounds or drag 100 pounds). It can trigger traps and such, but it can exert only 20 pounds of force, which is not enough to activate certain pressure plates and other devices. It can't perform any task that requires a skill check with a DC higher than 10 or that requires a check using a skill that can't be used untrained. This servant cannot fly, climb, or even swim (though it can walk on water). Its base speed is 15 feet.The servant cannot attack in any way it is never allowed an attack roll. It cannot be killed, but it dissipates if it takes 6 points of damage from area attacks. (It gets no saves against attacks.) If you attempt to send it beyond the spell's range (measured from your current position), the servant ceases to exist.",
    "subschool": "creation",
    "domains": []
  },
  {
    "name": "Ventriloquism",
    "short_description": "Throws voice for 1 min./level.",
    "duration": "1 min./level",
    "components": "V, F (parchment rolled into cone)",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "close",
    "level": {
      "bard": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "isDisbelief": true,
      "type": "Will"
    },
    "text": "You can make your voice (or any sound that you can normally make vocally) seem to issue from someplace else. You can speak in any language you know. With respect to such voices and sounds, anyone who hears the sound and rolls a successful save recognizes it as illusory (but still hears it).",
    "isDispellable": true,
    "subschool": "figment",
    "domains": []
  },
  {
    "name": "Alter Self",
    "short_description": "Assume form of a Small or Medium humanoid.",
    "duration": "1 min./level",
    "components": "V, S, M (a piece of the creature whose form you plan to assume)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "bard": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": null,
    "text": "When you cast this spell, you can assume the form of any Small or Medium creature of the humanoid type. If the form you assume has any of the following abilities, you gain the listed ability: darkvision 60 feet, low-light vision, scent, and swim 30 feet.",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Animal Trance",
    "short_description": "Fascinates 2d6 HD of animals.",
    "duration": "concentration",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "close",
    "level": {
      "bard": 2,
      "druid": 2
    },
    "saves": {
      "type": "Will"
    },
    "text": "Your swaying motions and music (or singing, or chanting) compel animals and magical beasts to do nothing but watch you. Only a creature with an Intelligence score of 1 or 2 can be fascinated by this spell. Roll 2d6 to determine the total number of HD worth of creatures that you fascinate. The closest targets are selected first until no more targets within range can be affected.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting",
      "sonic"
    ]
  },
  {
    "name": "Blindness/Deafness",
    "short_description": "Makes subject blinded or deafened.",
    "duration": "permanent",
    "components": "V",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "medium",
    "level": {
      "bard": 2,
      "cleric": 3,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "type": "Fort"
    },
    "text": "You call upon the powers of unlife to render the subject blinded or deafened, as you choose.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Blur",
    "short_description": "Attacks miss subject 20% of the time.",
    "duration": "1 min./level",
    "components": "V",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "touch",
    "level": {
      "bard": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "A see invisibility spell does not counteract the blur effect, but a true seeing spell does.Opponents that cannot see the subject ignore the spell's effect (though fighting an unseen opponent carries penalties of its own).",
    "isDispellable": true,
    "subschool": "glamer",
    "domains": []
  },
  {
    "name": "Calm Emotions",
    "short_description": "Calms creatures, negating emotion effects.",
    "duration": "concentration, up to 1 round/level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "medium",
    "level": {
      "bard": 2,
      "cleric": 2
    },
    "saves": {
      "type": "Will"
    },
    "text": "This spell calms agitated creatures. You have no control over the affected creatures, but calm emotions can stop raging creatures from fighting or joyous ones from reveling. Creatures so affected cannot take violent actions (although they can defend themselves) or do anything destructive. Any aggressive action against or damage dealt to a calmed creature immediately breaks the spell on all calmed creatures.This spell automatically suppresses (but does not dispel) any morale bonuses granted by spells such as bless, good hope, and rage, and also negates a bard's ability to inspire courage or a barbarian's rage ability. It also suppresses any fear effects and removes the confused condition from all targets. While the spell lasts, a suppressed spell, condition, or effect has no effect. When the calm emotions spell ends, the original spell or effect takes hold of the creature again, provided that its duration has not expired in the meantime.",
    "isDispellable": true,
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Cat's Grace",
    "short_description": "Subject gains +4 to Dex for 1 min./level.",
    "duration": "1 min./level",
    "components": "V, S, M (pinch of cat fur)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "bard": 2,
      "druid": 2,
      "ranger": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell functions like cat's grace, except that it affects multiple creatures.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Darkness",
    "short_description": "20-ft. radius of supernatural shadow.",
    "duration": "1 min./level",
    "components": "V, M/DF (bat fur and a piece of coal)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "touch",
    "level": {
      "bard": 2,
      "cleric": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": null,
    "text": "If darkness is cast on a small object that is then placed inside or under a lightproof covering, the spell's effect is blocked until the covering is removed.This spell does not stack with itself. Darkness can be used to counter or dispel any light spell of equal or lower spell level.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "darkness"
    ]
  },
  {
    "name": "Delay Poison",
    "short_description": "Stops poison from harming subject for 1 hour/level.",
    "duration": "1 hour/level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "touch",
    "level": {
      "bard": 2,
      "cleric": 2,
      "druid": 2,
      "paladin": 2,
      "ranger": 1
    },
    "saves": {
      "isHarmless": true,
      "type": "Fort"
    },
    "text": "The subject becomes temporarily immune to poison. Any poison in its system or any poison to which it is exposed during the spell's duration does not affect the subject until the spell's duration has expired. Delay poison does not cure any damage that poison may have already done.",
    "subschool": "healing",
    "domains": []
  },
  {
    "name": "Eagle's Splendor",
    "short_description": "Subject gains +4 to Cha for 1 min./level.",
    "duration": "1 min./level",
    "components": "V, S, M/DF (feathers or droppings from an eagle)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "bard": 2,
      "cleric": 2,
      "paladin": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell functions like eagle's splendor, except that it affects multiple creatures.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Fox's Cunning",
    "short_description": "Subject gains +4 to Int for 1 min./level.",
    "duration": "1 min./level",
    "components": "V, S, M/DF (hairs or dung from a fox)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "bard": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell functions like fox's cunning, except that it affects multiple creatures.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Glitterdust",
    "short_description": "Blinds creatures, outlines invisible creatures.",
    "duration": "1 round/level",
    "components": "V, S, M (ground mica)",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "medium",
    "level": {
      "bard": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": null,
    "text": "A cloud of golden particles covers everyone and everything in the area, causing creatures to become blinded and visibly outlining invisible things for the duration of the spell. All within the area are covered by the dust, which cannot be removed and continues to sparkle until it fades. Each round at the end of their turn blinded creatures may attempt new saving throws to end the blindness effect.",
    "subschool": "creation",
    "domains": []
  },
  {
    "name": "Hypnotic Pattern",
    "short_description": "Fascinates 2d4 + level HD of creatures.",
    "duration": "Concentration + 2 rounds",
    "components": "V (bard only), S, M (a stick of incense or a crystal rod) see text",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "medium",
    "level": {
      "bard": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "type": "Will"
    },
    "text": "A twisting pattern of subtle, shifting colors weaves through the air, fascinating creatures within it. Roll 2d4 and add your caster level (maximum 10) to determine the total number of HD of creatures affected. Creatures with the fewest HD are affected first and, among creatures with equal HD, those who are closest to the spell's point of origin are affected first. HD that are not sufficient to affect a creature are wasted. Affected creatures become fascinated by the pattern of colors. Sightless creatures are not affected.A wizard or sorcerer need not utter a sound to cast this spell, but a bard must perform as a verbal component.",
    "subschool": "pattern",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Invisibility",
    "short_description": "Subject is invisible for 1 min./level or until it attacks.",
    "duration": "1 min./level",
    "components": "V, S, M/DF (an eyelash encased in gum arabic)",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "touch",
    "level": {
      "bard": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "isObject": true,
      "type": "Will"
    },
    "text": "The creature or object touched becomes invisible. If the recipient is a creature carrying gear, that vanishes, too. If you cast the spell on someone else, neither you nor your\n            allies can see the subject, unless you can normally see invisible things or you employ magic to do so.\n        Items dropped or put down by an invisible creature become visible items picked up disappear if tucked into the clothing or pouches worn by the creature. Light, however, never\n            becomes invisible, although a source of light can become so (thus, the effect is that of a light with no visible source). Any part of an item that the subject carries but\n            that extends more than 10 feet from it becomes visible.",
    "isDispellable": true,
    "subschool": "glamer",
    "domains": []
  },
  {
    "name": "Locate Object",
    "short_description": "Senses direction toward object (specific or type).",
    "duration": "1 min./level",
    "components": "V, S, F/DF (a forked twig)",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "long",
    "level": {
      "bard": 2,
      "cleric": 3,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": null,
    "text": "You sense the direction of a well-known or clearly visualized object. You can search for general items, in which case you locate the nearest of its kind if more than one is within range. Attempting to find a certain item requires a specific and accurate mental image if the image is not close enough to the actual object, the spell fails. You cannot specify a unique item unless you have observed that particular item firsthand (not through divination).The spell is blocked by even a thin sheet of lead. Creatures cannot be found by this spell. Polymorph any object and nondetection fool it.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Mirror Image",
    "short_description": "Creates decoy duplicates of you.",
    "duration": "1 min./levelThis spell creates a number of illusory doubles of you that inhabit your square. These doubles make it difficult for enemies to precisely locate and attack you. When mirror image is cast, 1d4 images plus one image per three caster levels (maximum eight images total) are created. These images remain in your space and move with you, mimicking your movements, sounds, and actions exactly. Whenever you are attacked or are the target of a spell that requires an attack roll, there is a possibility that the attack targets one of your images instead. If the attack is a hit, roll randomly to see whether the selected target is real or a figment. If it is a figment, the figment is destroyed. If the attack misses by 5 or less, one of your figments is destroyed by the near miss. Area spells affect you normally and do not destroy any of your figments. Spells and effects that do not require an attack roll affect you normally and do not destroy any of your figments. Spells that require a touch attack are harmlessly discharged if used to destroy a figment.An attacker must be able to see the figments to be fooled. If you are invisible or the attacker is blind, the spell has no effect (although the normal miss chances still apply).        Report a Problem",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "personal",
    "level": {
      "bard": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": null,
    "text": "This spell creates a number of illusory doubles of you that inhabit your square. These doubles make it difficult for enemies to precisely locate and attack you. When mirror image is cast, 1d4 images plus one image per three caster levels (maximum eight images total) are created. These images remain in your space and move with you, mimicking your movements, sounds, and actions exactly. Whenever you are attacked or are the target of a spell that requires an attack roll, there is a possibility that the attack targets one of your images instead. If the attack is a hit, roll randomly to see whether the selected target is real or a figment. If it is a figment, the figment is destroyed. If the attack misses by 5 or less, one of your figments is destroyed by the near miss. Area spells affect you normally and do not destroy any of your figments. Spells and effects that do not require an attack roll affect you normally and do not destroy any of your figments. Spells that require a touch attack are harmlessly discharged if used to destroy a figment.An attacker must be able to see the figments to be fooled. If you are invisible or the attacker is blind, the spell has no effect (although the normal miss chances still apply).",
    "subschool": "figment",
    "domains": []
  },
  {
    "name": "Scare",
    "short_description": "Frightens creatures of less than 6 HD.",
    "duration": "1 round/level or 1 round see text for cause fear",
    "components": "V, S, M (a bone from an undead creature)",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "medium",
    "level": {
      "bard": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "type": "Will"
    },
    "text": "This spell functions like cause fear, except that it causes all targeted creatures of less than 6 HD to become frightened.",
    "subschool": null,
    "domains": [
      "fear",
      "mind-affecting"
    ]
  },
  {
    "name": "Silence",
    "short_description": "Negates sound in 20-ft. radius.",
    "duration": "1 round/level",
    "components": "V, S",
    "casting_time": "1 round",
    "school": "Illusion",
    "range": "long",
    "level": {
      "bard": 2,
      "cleric": 2
    },
    "saves": null,
    "text": "Upon the casting of this spell, complete silence prevails in the affected area. All sound is stopped: Conversation is impossible, spells with verbal components cannot be cast, and no noise whatsoever issues from, enters, or passes through the area. The spell can be cast on a point in space, but the effect is stationary unless cast on a mobile object. The spell can be centered on a creature, and the effect then radiates from the creature and moves as it moves. An unwilling creature can attempt a Will save to negate the spell and can use spell resistance, if any. Items in a creature's possession or magic items that emit sound receive the benefits of saves and spell resistance, but unattended objects and points in space do not. Creatures in an area of a silence spell are immune to sonic or language-based attacks, spells, and effects.",
    "isDispellable": true,
    "subschool": "glamer",
    "domains": []
  },
  {
    "name": "Sound Burst",
    "short_description": "Deals 1d8 sonic damage to subjects; may stun them.",
    "duration": "instantaneous",
    "components": "V, S, F/DF (a musical instrument)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "close",
    "level": {
      "bard": 2,
      "cleric": 2
    },
    "saves": {
      "type": "Fort"
    },
    "text": "You blast an area with a tremendous cacophony. Every creature in the area takes 1d8 points of sonic damage and must succeed on a Fortitude save to avoid being stunned for 1 round. Creatures that cannot hear are not stunned but are still damaged.",
    "subschool": null,
    "domains": [
      "sonic"
    ]
  },
  {
    "name": "Summon Monster II",
    "short_description": "Summons extraplanar creature to fight for you.",
    "duration": "1 round/level",
    "components": "V, S, F/DF (a tiny bag and a small candle)",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "bard": 1,
      "cleric": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells with expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": [
      "seetext"
    ]
  },
  {
    "name": "Summon Swarm",
    "short_description": "Summons swarm of bats, rats, or spiders.",
    "duration": "concentration + 2 rounds",
    "components": "V, S, M/DF (a square of red cloth)",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "bard": 2,
      "druid": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": null,
    "text": "You summon a swarm of bats, rats, or spiders (your choice), which attacks all other creatures within its area. (You may summon the swarm so that it shares the area of other creatures.) If no living creatures are within its area, the swarm attacks or pursues the nearest creature as best it can. The caster has no control over its target or direction of travel.",
    "subschool": "summoning",
    "domains": []
  },
  {
    "name": "Tongues",
    "short_description": "Speak and understand any language.",
    "duration": "10 min./level",
    "components": "V, M/DF (a clay model of a ziggurat)",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "touch",
    "level": {
      "bard": 2,
      "cleric": 4,
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell grants the creature touched the ability to speak and understand the language of any intelligent creature, whether it is a racial tongue or a regional dialect. The subject can speak only one language at a time, although it may be able to understand several languages. Tongues does not enable the subject to speak with creatures who don't speak. The subject can make itself understood as far as its voice carries. This spell does not predispose any creature addressed toward the subject in any way.Tongues can be made permanent with a permanency spell.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Whispering Wind",
    "short_description": "Sends a short message 1 mile/level.",
    "duration": "no more than 1 hour/level or until discharged (destination is reached)",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "1 mile/level",
    "level": {
      "bard": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": null,
    "text": "You send a message or sound on the wind to a designated spot. The whispering wind travels to a specific location within range that is familiar to you, provided that it can find a way to the location. A whispering wind is as gentle and unnoticed as a zephyr until it reaches the location. It then delivers its whisper-quiet message or other sound. Note that the message is delivered regardless of whether anyone is present to hear it. The wind then dissipates.You can prepare the spell to bear a message of no more than 25 words, cause the spell to deliver other sounds for 1 round, or merely have the whispering wind seem to be a faint stirring of the air. You can likewise cause the whispering wind to move as slowly as 1 mile per hour or as quickly as 1 mile per 10 minutes.When the spell reaches its objective, it swirls and remains in place until the message is delivered. As with magic mouth, whispering wind cannot speak verbal components, use command words, or activate magical effects.",
    "subschool": null,
    "domains": [
      "air"
    ]
  },
  {
    "name": "Blink",
    "short_description": "You randomly vanish and reappear for 1 round per level.",
    "duration": "1 round/level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "bard": 3,
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": null,
    "text": "You \"blink\" quickly back and forth between the Material Plane and the Ethereal Plane and look as though you're winking in and out of reality at random. Blink has several effects, as follows.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Confusion",
    "short_description": "Subjects behave oddly for 1 round/level.",
    "duration": "1 round/level",
    "components": "V, S, M/DF (three nutshells)",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "medium",
    "level": {
      "bard": 3,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": {
      "type": "Will"
    },
    "text": "This spell causes confusion in the targets, making them unable to determine their actions. Roll on the following table at the start of each subject's turn each round to see what it does in that round.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Crushing Despair",
    "short_description": "Subjects take \u00e2\u20ac\u201c2 on attack rolls, damage rolls, saves, and checks.",
    "duration": "1 min./level",
    "components": "V, S, M",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "30 ft.",
    "level": {
      "bard": 3,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": {
      "type": "Will"
    },
    "text": "Crushing despair counters and dispels good hope.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Daylight",
    "short_description": "60-ft. radius of bright light.",
    "duration": "10 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "touch",
    "level": {
      "bard": 3,
      "cleric": 3,
      "druid": 3,
      "paladin": 3,
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": null,
    "text": "You touch an object when you cast this spell, causing the object to shed bright light in a 60-foot radius. This illumination increases the light level for an additional 60 feet by one step (darkness becomes dim light, dim light becomes normal light, and normal light becomes bright light). Creatures that take penalties in bright light take them while within the 60-foot radius of this magical light. Despite its name, this spell is not the equivalent of daylight for the purposes of creatures that are damaged or destroyed by such light.If daylight is cast on a small object that is then placed inside or under a light-proof covering, the spell's effects are blocked until the covering is removed.Daylight brought into an area of magical darkness (or vice versa) is temporarily negated, so that the otherwise prevailing light conditions exist in the overlapping areas of effect.Daylight counters or dispels any darkness spell of equal or lower level, such as darkness.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "light"
    ]
  },
  {
    "name": "Dispel Magic",
    "short_description": "Cancels one magical spell or effect.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "medium",
    "level": {
      "bard": 3,
      "cleric": 3,
      "druid": 4,
      "paladin": 3,
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": null,
    "text": "You can use dispel magic to end one ongoing spell that has been cast on a creature or object, to temporarily suppress the magical abilities of a magic item, or to counter another spellcaster's spell. A dispelled spell ends as if its duration had expired. Some spells, as detailed in their descriptions, can't be defeated by dispel magic. Dispel magic can dispel (but not counter) spell-like effects just as it does spells. The effect of a spell with an instantaneous duration can't be dispelled, because the magical effect is already over before the dispel magic can take effect. You choose to use dispel magic in one of two ways: a targeted dispel or a counterspell.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Fear",
    "short_description": "Subjects within cone flee for 1 round/level.",
    "duration": "1 round/level or 1 round see text",
    "components": "V, S, M (the heart of a hen or a white feather)",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "30 ft.",
    "level": {
      "bard": 3,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": {
      "type": "Will"
    },
    "text": "An invisible cone of terror causes each living creature in the area to become panicked unless it succeeds on a Will save. If cornered, a panicked creature begins cowering. If the Will save succeeds, the creature is shaken for 1 round.",
    "subschool": null,
    "domains": [
      "fear",
      "mind-affecting"
    ]
  },
  {
    "name": "Gaseous Form",
    "short_description": "Subject becomes insubstantial and can fly slowly.",
    "duration": "2 min./level",
    "components": "S, M/DF (a bit of gauze and a wisp of smoke)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "bard": 3,
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": null,
    "text": "The subject and all its gear become insubstantial, misty, and translucent. Its material armor (including natural armor) becomes worthless, though its size, Dexterity, deflection bonuses, and armor bonuses from force effects still apply. The subject gains DR 10/magic and becomes immune to poison, sneak attacks, and critical hits. It can't attack or cast spells with verbal, somatic, material, or focus components while in gaseous form. This does not rule out the use of certain spells that the subject may have prepared using the feats Silent Spell, Still Spell, and Eschew Materials. The subject also loses supernatural abilities while in gaseous form. If it has a touch spell ready to use, that spell is discharged harmlessly when the gaseous form spell takes effect.A gaseous creature can't run, but it can fly at a speed of 10 feet and automatically succeeds on all Fly skill checks. It can pass through small holes or narrow openings, even mere cracks, with all it was wearing or holding in its hands, as long as the spell persists. The creature is subject to the effects of wind, and it can't enter water or other liquid. It also can't manipulate objects or activate items, even those carried along with its gaseous form. Continuously active items remain active, though in some cases their effects may be moot.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Geas, Lesser",
    "short_description": "Commands subject of 7 HD or less.",
    "duration": "1 day/level or until discharged",
    "components": "V",
    "casting_time": "1 round",
    "school": "Enchantment",
    "range": "close",
    "level": {
      "bard": 3,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": {
      "type": "Will"
    },
    "text": "A lesser geas places a magical command on a creature to carry out some service or to refrain from some action or course of activity, as desired by you. The creature must have 7 or fewer HD and be able to understand you. While a geas cannot compel a creature to kill itself or perform acts that would result in certain death, it can cause almost any other course of activity.The geased creature must follow the given instructions until the geas is completed, no matter how long it takes.If the instructions involve some open-ended task that the recipient cannot complete through his own actions, the spell remains in effect for a maximum of 1 day per caster level. A clever recipient can subvert some instructions.",
    "isDispellable": true,
    "subschool": "compulsion",
    "domains": [
      "language-dependent",
      "mind-affecting"
    ]
  },
  {
    "name": "Good Hope",
    "short_description": "Subjects gain +2 on attack rolls, damage rolls, saves, and checks.",
    "duration": "1 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "medium",
    "level": {
      "bard": 3
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "Good hope counters and dispels crushing despair.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Haste",
    "short_description": "One creature/level moves faster, +1 on attack rolls, AC, and Reflex saves.",
    "duration": "1 round/level",
    "components": "V, S, M (a shaving of licorice root)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "bard": 3,
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": {
      "isHarmless": true,
      "type": "Fort"
    },
    "text": "The transmuted creatures move and act more quickly than normal. This extra speed has several effects.When making a full attack action, a hasted creature may make one extra attack with one natural or manufactured weapon. The attack is made using the creature's full base attack bonus, plus any modifiers appropriate to the situation. (This effect is not cumulative with similar effects, such as that provided by a speed weapon, nor does it actually grant an extra action, so you can't use it to cast a second spell or otherwise take an extra action in the round.)",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Phantom Steed",
    "short_description": "Magic horse appears for 1 hour/level.",
    "duration": "1 hour/level",
    "components": "V, S",
    "casting_time": "10 minutes",
    "school": "Conjuration",
    "range": "0 ft.",
    "level": {
      "bard": 3,
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": null,
    "text": "You conjure a Large, quasi-real, horselike creature (the exact coloration can be customized as you wish). It can be ridden only by you or by the one person for whom you specifically created the mount. A phantom steed has a black head and body, gray mane and tail, and smoke-colored, insubstantial hooves that make no sound. It has what seems to be a saddle, bit, and bridle. It does not fight, but animals shun it and refuse to attack it.",
    "isDispellable": true,
    "subschool": "creation",
    "domains": []
  },
  {
    "name": "Remove Curse",
    "short_description": "Frees object or person from curse.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "bard": 3,
      "cleric": 3,
      "paladin": 3,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "Remove curse counters and dispels bestow curse.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Scrying",
    "short_description": "Spies on subject from a distance.",
    "duration": "1 min./level",
    "components": "V, S, M/DF (a pool of water), F (a silver mirror worth 1,000 gp)",
    "casting_time": "1 hour",
    "school": "Divination",
    "range": "see text",
    "level": {
      "bard": 3,
      "cleric": 5,
      "druid": 4,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": {
      "type": "Will"
    },
    "text": "If the save fails, you can see and hear the subject and its surroundings (approximately 10 feet in all directions of the subject). If the subject moves, the sensor follows at a speed of up to 150 feet.",
    "subschool": "scrying",
    "domains": []
  },
  {
    "name": "Sculpt Sound",
    "short_description": "Creates new sounds or changes existing ones into new sounds.",
    "duration": "1 hour/level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "bard": 3
    },
    "saves": {
      "isObject": true,
      "type": "Will"
    },
    "text": "You can change the sounds that creatures or objects make. You can create sounds where none exist, deaden sounds, or transform sounds into other sounds. All affected creatures or objects must be transmuted in the same way. Once the transmutation is made, you cannot change it. You can change the qualities of sounds but cannot create words with which you are unfamiliar yourself. A spellcaster whose voice is changed dramatically is unable to cast spells with verbal components.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "See Invisibility",
    "short_description": "Reveals invisible creatures or objects.",
    "duration": "10 min./level You can see any objects or beings that are invisible within your range of vision, as well as any that are ethereal, as if they were normally visible. Such creatures are visible to you as translucent shapes, allowing you easily to discern the difference between visible, invisible, and ethereal creatures.The spell does not reveal the method used to obtain invisibility. It does not reveal illusions or enable you to see through opaque objects. It does not reveal creatures who are simply hiding, concealed, or otherwise hard to see.See invisibility can be made permanent with a permanency spell.        Report a Problem",
    "components": "V, S, M (talc and powdered silver)",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "personal",
    "level": {
      "bard": 3,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": null,
    "text": "You can see any objects or beings that are invisible within your range of vision, as well as any that are ethereal, as if they were normally visible. Such creatures are visible to you as translucent shapes, allowing you easily to discern the difference between visible, invisible, and ethereal creatures.The spell does not reveal the method used to obtain invisibility. It does not reveal illusions or enable you to see through opaque objects. It does not reveal creatures who are simply hiding, concealed, or otherwise hard to see.See invisibility can be made permanent with a permanency spell.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Sepia Snake Sigil",
    "short_description": "Creates text symbol that immobilizes reader.",
    "duration": "permanent or until discharged until released or 1d4 days + 1 day/level see text",
    "components": "V, S, M (powdered amber worth 500 gp and a snake scale)",
    "casting_time": "10 minutes",
    "school": "Conjuration",
    "range": "touch",
    "level": {
      "bard": 3,
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": {
      "type": "Ref"
    },
    "text": "You cause a small symbol to appear in the text of a written work. The text containing the symbol must be at least 25 words long. When anyone reads the text containing the symbol, the sepia snake sigil springs into being, transforming into a large sepia serpent that strikes at the reader, provided there is line of effect between the symbol and the reader.",
    "subschool": "creation",
    "domains": [
      "force"
    ]
  },
  {
    "name": "Slow",
    "short_description": "One subject/level takes only one action/round, \u00e2\u20ac\u201c1 to AC, Reflex saves, and attack rolls.",
    "duration": "1 round/level",
    "components": "V, S, M (a drop of molasses)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "bard": 3,
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": {
      "type": "Will"
    },
    "text": "Multiple slow effects don't stack. Slow counters and dispels haste.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Speak with Animals",
    "short_description": "You can communicate with animals.",
    "duration": "1 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "personal",
    "level": {
      "bard": 3,
      "druid": 1,
      "ranger": 1
    },
    "saves": null,
    "text": "You can ask questions of and receive answers from animals, but the spell doesn't make them any more friendly than normal. Wary and cunning animals are likely to be terse and evasive, while the more stupid ones make inane comments. If an animal is friendly toward you, it may do some favor or service for you.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Summon Monster III",
    "short_description": "Summons extraplanar creature to fight for you.",
    "duration": "1 round/level",
    "components": "V, S, F/DF (a tiny bag and a small candle)",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "bard": 1,
      "cleric": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells with expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": [
      "seetext"
    ]
  },
  {
    "name": "Tiny Hut",
    "short_description": "Creates shelter for 10 creatures.",
    "duration": "2 hours/level",
    "components": "V, S, M (a small crystal bead)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "20 ft.",
    "level": {
      "bard": 3,
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": null,
    "text": "You create an unmoving, opaque sphere of force of any color you desire around yourself. Half the sphere projects above the ground, and the lower hemisphere passes through the ground. As many as nine other Medium creatures can fit into the field with you they can freely pass into and out of the hut without harming it. However, if you remove yourself from the hut, the spell ends.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "force"
    ]
  },
  {
    "name": "Break Enchantment",
    "short_description": "Frees subjects from enchantments, transmutations, and curses.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 minute",
    "school": "Abjuration",
    "range": "close",
    "level": {
      "bard": 4,
      "cleric": 5,
      "paladin": 4,
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "If the spell is one that cannot be dispelled by dispel magic or stone to flesh, break enchantment works only if that spell is 5th level or lower. If the effect comes from a permanent magic item, break enchantment does not remove the curse from the item, but it does free the victim from the item's effects.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Detect Scrying",
    "short_description": "Alerts you to magical eavesdropping",
    "duration": "24 hours",
    "components": "V, S, M (a piece of mirror and a miniature brass hearing trumpet)",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "40 ft.",
    "level": {
      "bard": 4,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": null,
    "text": "You immediately become aware of any attempt to observe you by means of a divination (scrying) spell or effect. The spell's area radiates from you and moves as you move. You know the location of every magical sensor within the spell's area.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Dominate Person",
    "short_description": "Controls humanoid telepathically.",
    "duration": "1 day/level",
    "components": "V, S",
    "casting_time": "1 round",
    "school": "Enchantment",
    "range": "close",
    "level": {
      "bard": 4,
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": {
      "type": "Will"
    },
    "text": "You can control the actions of any humanoid creature through a telepathic link that you establish with the subject's mind.If you and the subject have a common language, you can generally force the subject to perform as you desire, within the limits of its abilities. If no common language exists, you can communicate only basic commands, such as \"Come here,\" \"Go there,\" \"Fight,\" and \"Stand still.\" You know what the subject is experiencing, but you do not receive direct sensory input from it, nor can it communicate with you telepathically.Once you have given a dominated creature a command, it continues to attempt to carry out that command to the exclusion of all other activities except those necessary for day-to-day survival (such as sleeping, eating, and so forth). Because of this limited range of activity, a Sense Motive check against DC 15 (rather than DC 25) can determine that the subject's behavior is being influenced by an enchantment effect (see the Sense Motive skill description).Changing your orders or giving a dominated creature a new command is a move action.By concentrating fully on the spell (a standard), you can receive full sensory input as interpreted by the mind of the subject, though it still can't communicate with you. You can't actually see through the subject's eyes, so it's not as good as being there yourself, but you still get a good idea of what's going on.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Freedom of Movement",
    "short_description": "Subject moves normally despite impediments to movement.",
    "duration": "10 min./level",
    "components": "V, S, M (a leather strip bound to the target), DF",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "bard": 4,
      "cleric": 4,
      "druid": 4,
      "ranger": 4
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell enables you or a creature you touch to move and attack normally for the duration of the spell, even under the influence of magic that usually impedes movement, such as paralysis, solid fog, slow, and web. All combat maneuver checks made to grapple the target automatically fail. The subject automatically succeeds on any combat maneuver checks and Escape Artist checks made to escape a grapple or a pin.The spell also allows the subject to move and attack normally while underwater, even with slashing weapons such as axes and swords or with bludgeoning weapons such as flails, hammers, and maces, provided that the weapon is wielded in the hand rather than hurled. The freedom of movement spell does not, however, grant water breathing.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Hallucinatory Terrain",
    "short_description": "Makes one type of terrain appear like another (field as forest, or the like).",
    "duration": "2 hours/level",
    "components": "V, S, M (a stone, a twig, and a green leaf)",
    "casting_time": "10 minutes",
    "school": "Illusion",
    "range": "long",
    "level": {
      "bard": 4,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": {
      "isDisbelief": true,
      "type": "Will"
    },
    "text": "You make natural terrain look, sound, and smell like some other sort of natural terrain. Structures, equipment, and creatures within the area are not hidden or changed in appearance.",
    "isDispellable": true,
    "subschool": "glamer",
    "domains": []
  },
  {
    "name": "Invisibility, Greater",
    "short_description": "As invisibility, but subject can attack and stay invisible.",
    "duration": "1 min./level",
    "components": "V, S, M/DF (an eyelash encased in gum arabic)",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "touch",
    "level": {
      "bard": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "isObject": true,
      "type": "Will"
    },
    "text": "The creature or object touched becomes invisible. If the recipient is a creature carrying gear, that vanishes, too. If you cast the spell on someone else, neither you nor your allies can see the subject, unless you can normally see invisible things or you employ magic to do so.Items dropped or put down by an invisible creature become visible items picked up disappear if tucked into the clothing or pouches worn by the creature. Light, however, never becomes invisible, although a source of light can become so (thus, the effect is that of a light with no visible source). Any part of an item that the subject carries but that extends more than 10 feet from it becomes visible.",
    "isDispellable": true,
    "subschool": "glamer",
    "domains": []
  },
  {
    "name": "Legend Lore",
    "short_description": "Lets you learn tales about a person, place, or thing.",
    "duration": "see text",
    "components": "V, S, M (incense worth 250 gp), F (four pieces of ivory worth 50 gp each)",
    "casting_time": "see text",
    "school": "Divination",
    "range": "personal",
    "level": {
      "bard": 4,
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": null,
    "text": "During the casting, you cannot engage in other than routine activities: eating, sleeping, and so forth. When completed, the divination brings legends (if any) about the person, place, or things to your mind. These may be legends that are still current, legends that have been forgotten, or even information that has never been generally known. If the person, place, or thing is not of legendary importance, you gain no information. As a rule of thumb, characters who are 11th level and higher are \"legendary,\" as are the sorts of creatures they contend with, the major magic items they wield, and the places where they perform their key deeds.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Neutralize Poison",
    "short_description": "Immunizes subject against poison, detoxifies venom in or on subject.",
    "duration": "instantaneous or 10 min./level see text",
    "components": "V, S, M/DF (charcoal)",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "touch",
    "level": {
      "bard": 4,
      "cleric": 4,
      "druid": 3,
      "paladin": 4,
      "ranger": 3
    },
    "saves": {
      "isHarmless": true,
      "isObject": true,
      "type": "Will"
    },
    "text": "This spell can instead neutralize the poison in a poisonous creature or object for 10 minutes per level, at the caster's option. If cast on a creature, the creature receives a Will save to negate the effect.",
    "subschool": "healing",
    "domains": []
  },
  {
    "name": "Rainbow Pattern",
    "short_description": "Lights fascinate 24 HD of creatures.",
    "duration": "Concentration +1 round/level",
    "components": "V (bard only), S, M (a piece of phosphor), F (a crystal prism) see text",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "medium",
    "level": {
      "bard": 4,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": {
      "type": "Will"
    },
    "text": "A glowing, rainbow-hued pattern of interweaving colors fascinates those within it. Rainbow pattern fascinates a maximum of 24 HD of creatures. Creatures with the fewest HD are affected first. Among creatures with equal HD, those who are closest to the spell's point of origin are affected first. An affected creature that fails its saves is fascinated by the pattern.With a simple gesture (a free action), you can make the rainbow pattern move up to 30 feet per round (moving its effective point of origin). All fascinated creatures follow the moving rainbow of light, trying to remain within the effect. Fascinated creatures who are restrained and removed from the pattern still try to follow it. If the pattern leads its subjects into a dangerous area, each fascinated creature gets a second save. If the view of the lights is completely blocked, creatures who can't see them are no longer affected.The spell does not affect sightless creatures.",
    "isDispellable": true,
    "subschool": "pattern",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Secure Shelter",
    "short_description": "Creates sturdy cottage.",
    "duration": "2 hours/level",
    "components": "V, S, M (a chip of stone, sand, a drop of water, and a wood splinter)",
    "casting_time": "10 minutes",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "bard": 4,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": null,
    "text": "You conjure a sturdy cottage or lodge made of material that is common in the area where the spell is cast. The floor is level, clean, and dry. The lodging resembles a normal cottage, with a sturdy door, two shuttered windows, and a small fireplace.",
    "isDispellable": true,
    "subschool": "creation",
    "domains": []
  },
  {
    "name": "Speak with Plants",
    "short_description": "You can talk to plants and plant creatures.",
    "duration": "1 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "personal",
    "level": {
      "bard": 4,
      "druid": 3,
      "ranger": 2
    },
    "saves": null,
    "text": "You can communicate with normal plants and plant creatures, and can ask questions of and receive answers from them. A normal plant's sense of its surroundings is limited, so it won't be able to give (or recognize) detailed descriptions of creatures or answer questions about events outside its immediate vicinity. The spell doesn't make plant creatures any more friendly or cooperative than normal. Furthermore, wary and cunning plant creatures are likely to be terse and evasive, while the more stupid ones may make inane comments. If a plant creature is friendly, it may do some favor or service for you.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Summon Monster IV",
    "short_description": "Summons extraplanar creature to fight for you.",
    "duration": "1 round/level",
    "components": "V, S, F/DF (a tiny bag and a small candle)",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "bard": 1,
      "cleric": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells with expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": [
      "seetext"
    ]
  },
  {
    "name": "Zone of Silence",
    "short_description": "Keeps eavesdroppers from overhearing you.",
    "duration": "1 hour/level By casting zone of silence",
    "components": "V, S",
    "casting_time": "1 round",
    "school": "Illusion",
    "range": "personal",
    "level": {
      "bard": 4
    },
    "saves": null,
    "text": "By casting zone of silence, you manipulate sound waves in your immediate vicinity so that you and those within the spell's area can converse normally, yet no one outside can hear your voices or any other noises from within, including language-dependent or sonic spell effects. This effect is centered on you and moves with you. Anyone who enters the zone immediately becomes subject to its effects, but those who leave are no longer affected. Note, however, that a successful DC 20 Linguistics check to read lips can still reveal what's said inside a zone of silence.",
    "isDispellable": true,
    "subschool": "glamer",
    "domains": []
  },
  {
    "name": "Dispel Magic, Greater",
    "short_description": "As dispel magic, but with multiple targets.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "medium",
    "level": {
      "bard": 3,
      "cleric": 3,
      "druid": 4,
      "paladin": 3,
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": null,
    "text": "You can use dispel magic to end one ongoing spell that has been cast on a creature or object, to temporarily suppress the magical abilities of a magic item, or to counter another spellcaster's spell. A dispelled spell ends as if its duration had expired. Some spells, as detailed in their descriptions, can't be defeated by dispel magic. Dispel magic can dispel (but not counter) spell-like effects just as it does spells. The effect of a spell with an instantaneous duration can't be dispelled, because the magical effect is already over before the dispel magic can take effect. You choose to use dispel magic in one of two ways: a targeted dispel or a counterspell.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Dream",
    "short_description": "Sends message to anyone sleeping.",
    "duration": "see text",
    "components": "V, S",
    "casting_time": "1 minute",
    "school": "Illusion",
    "range": "unlimited",
    "level": {
      "bard": 5,
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "You, or a messenger you touch, send a message to others in the form of a dream. At the beginning of the spell, you must name the recipient or identify him or her by some title that leaves no doubt as to identity. The messenger then enters a trance, appears in the intended recipient's dream, and delivers the message. The message can be of any length, and the recipient remembers it perfectly upon waking. The communication is one-way. The recipient cannot ask questions or offer information, nor can the messenger gain any information by observing the dreams of the recipient.Once the message is delivered, the messenger's mind returns instantly to its body. The duration of the spell is the time required for the messenger to enter the recipient's dream and deliver the message.If the recipient is awake when the spell begins, the messenger can choose to wake up (ending the spell) or remain in the trance. The messenger can remain in the trance until the recipient goes to sleep, then enter the recipient's dream and deliver the message as normal. A messenger that is disturbed during the trance comes awake, ending the spell.Creatures who don't sleep or don't dream cannot be contacted by this spell.The messenger is unaware of its own surroundings or of the activities around it while in the trance. It is defenseless both physically and mentally (always failing any saving throw) while in the trance.",
    "subschool": "phantasm",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "False Vision",
    "short_description": "Fools scrying with an illusion.",
    "duration": "1 hour/level",
    "components": "V, S, M (crushed jade worth 250 gp)",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "touch",
    "level": {
      "bard": 5,
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "This spell creates a subtle illusion, causing any divination (scrying) spell used to view anything within the area of this spell to instead receive a false image (as the major image spell), as defined by you at the time of casting. As long as the duration lasts, you can concentrate to change the image as desired. While you aren't concentrating, the image remains static.",
    "isDispellable": true,
    "subschool": "glamer",
    "domains": []
  },
  {
    "name": "Mind Fog",
    "short_description": "Subjects in fog get \u00e2\u20ac\u201c10 to Wis and Will checks.",
    "duration": "30 minutes and 2d6 rounds see text",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "medium",
    "level": {
      "bard": 5,
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": {
      "type": "Will"
    },
    "text": "The fog is thin and does not significantly hamper vision.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Shadow Evocation",
    "short_description": "Mimics evocation below 5th level, but only 20% real.",
    "duration": "see text",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "see text",
    "level": {
      "bard": 5,
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": {
      "isDisbelief": true,
      "type": "Will"
    },
    "text": "Nondamaging effects have normal effects except against those who disbelieve them. Against disbelievers, they have no effect.Objects automatically succeed on their Will saves against this spell.Shadow Evocation, GreaterSchool illusion (shadow) Level sorcerer/wizard 8",
    "subschool": "shadow",
    "domains": []
  },
  {
    "name": "Shadow Walk",
    "short_description": "Step into shadow to travel rapidly.",
    "duration": "1 hour/level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "touch",
    "level": {
      "bard": 5,
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": {
      "type": "Will"
    },
    "text": "To use the shadow walk spell, you must be in an area of dim light. You and any creature you touch are then transported along a coiling path of shadowstuff to the edge of the Material Plane where it borders the Plane of Shadow. The effect is largely illusory, but the path is quasi-real. You can take more than one creature along with you (subject to your level limit), but all must be touching each other.In the region of shadow, you move at a rate of 50 miles per hour, moving normally on the borders of the Plane of Shadow but much more rapidly relative to the Material Plane. Thus, you can use this spell to travel rapidly by stepping onto the Plane of Shadow, moving the desired distance, and then stepping back onto the Material Plane.",
    "isDispellable": true,
    "subschool": "shadow",
    "domains": []
  },
  {
    "name": "Summon Monster V",
    "short_description": "Summons extraplanar creature to fight for you.",
    "duration": "1 round/level",
    "components": "V, S, F/DF (a tiny bag and a small candle)",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "bard": 1,
      "cleric": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells with expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": [
      "seetext"
    ]
  },
  {
    "name": "Animate Objects",
    "short_description": "Objects attack your foes.",
    "duration": "1 round/level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "medium",
    "level": {
      "bard": 6,
      "cleric": 6
    },
    "saves": null,
    "text": "You imbue inanimate objects with mobility and a semblance of life. Each such animated object then immediately attacks whomever or whatever you initially designate.An animated object can be of any nonmagical material. You may animate one Small or smaller object or a corresponding number of larger objects as follows: A Medium object counts as two Small or smaller objects, a Large object as four, a Huge object as eight, a Gargantuan object as 16, and a Colossal object as 32. You can change the designated target or targets as a move action, as if directing an active spell.This spell cannot affect objects carried or worn by a creature.Animate objects can be made permanent with a permanency spell.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Cat's Grace, Mass",
    "short_description": "As cat's grace, affects 1 subject/level.",
    "duration": "1 min./level",
    "components": "V, S, M (pinch of cat fur)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "bard": 2,
      "druid": 2,
      "ranger": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell functions like cat's grace, except that it affects multiple creatures.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Eagle's Splendor, Mass",
    "short_description": "As eagle's splendor, 1 subject/level.",
    "duration": "1 min./level",
    "components": "V, S, M/DF (feathers or droppings from an eagle)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "bard": 2,
      "cleric": 2,
      "paladin": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell functions like eagle's splendor, except that it affects multiple creatures.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Eyebite",
    "short_description": "Target becomes panicked, sickened, and comatose.",
    "duration": "1 round/level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "close",
    "level": {
      "bard": 6,
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": null,
    "text": "Each round, you can target a single living creature, striking it with waves of power. Depending on the target's HD, this attack has as many as three effects.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Fox's Cunning, Mass",
    "short_description": "As fox's cunning, affects 1 subject/ level.",
    "duration": "1 min./level",
    "components": "V, S, M/DF (hairs or dung from a fox)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "bard": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell functions like fox's cunning, except that it affects multiple creatures.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Geas/Quest",
    "short_description": "As lesser geas, but affects any creature.",
    "duration": "1 day/level or until discharged",
    "components": "V",
    "casting_time": "1 round",
    "school": "Enchantment",
    "range": "close",
    "level": {
      "bard": 3,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": {
      "type": "Will"
    },
    "text": "A lesser geas places a magical command on a creature to carry out some service or to refrain from some action or course of activity, as desired by you. The creature must have 7 or fewer HD and be able to understand you. While a geas cannot compel a creature to kill itself or perform acts that would result in certain death, it can cause almost any other course of activity.The geased creature must follow the given instructions until the geas is completed, no matter how long it takes.If the instructions involve some open-ended task that the recipient cannot complete through his own actions, the spell remains in effect for a maximum of 1 day per caster level. A clever recipient can subvert some instructions.",
    "isDispellable": true,
    "subschool": "compulsion",
    "domains": [
      "language-dependent",
      "mind-affecting"
    ]
  },
  {
    "name": "Heroes' Feast",
    "short_description": "Food for one creature/level cures and grants combat bonuses.",
    "duration": "1 hour plus 12 hours see text",
    "components": "V, S, DF",
    "casting_time": "10 minutes",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "bard": 6,
      "cleric": 6
    },
    "saves": null,
    "text": "If the feast is interrupted for any reason, the spell is ruined and all effects of the spell are negated.",
    "subschool": null,
    "domains": [
      "creation"
    ]
  },
  {
    "name": "Project Image",
    "short_description": "Illusory double can talk and cast spells.",
    "duration": "1 round/level",
    "components": "V, S, M (a small replica of you worth 5 gp)",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "medium",
    "level": {
      "bard": 6,
      "sorcerer": 7,
      "wizard": 7
    },
    "saves": {
      "isDisbelief": true,
      "type": "Will"
    },
    "text": "You tap energy from the Plane of Shadow to create a quasi-real, illusory version of yourself. The projected image looks, sounds, and smells like you but is intangible. The projected image mimics your actions (including speech) unless you direct it to act differently (which is a move action).You can see through its eyes and hear through its ears as if you were standing where it is, and during your turn you can switch from using its senses to using your own, or back again, as a free action. While you are using its senses, your body is considered blinded and deafened.If you desire, any spell you cast whose range is touch or greater can originate from the projected image instead of from you. The projected image can't cast any spells on itself except for illusion spells. The spells affect other targets normally, despite originating from the projected image.Objects are affected by the projected image as if they had succeeded on their Will save. You must maintain line of effect to the projected image at all times. If your line of effect is obstructed, the spell ends. If you use dimension door, teleport, plane shift, or a similar spell that breaks your line of effect, even momentarily, the spell ends.",
    "isDispellable": true,
    "subschool": "shadow",
    "domains": []
  },
  {
    "name": "Scrying, Greater",
    "short_description": "As scrying, but faster and longer.",
    "duration": "1 min./level",
    "components": "V, S, M/DF (a pool of water), F (a silver mirror worth 1,000 gp)",
    "casting_time": "1 hour",
    "school": "Divination",
    "range": "see text",
    "level": {
      "bard": 3,
      "cleric": 5,
      "druid": 4,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": {
      "type": "Will"
    },
    "text": "If the save fails, you can see and hear the subject and its surroundings (approximately 10 feet in all directions of the subject). If the subject moves, the sensor follows at a speed of up to 150 feet.",
    "subschool": "scrying",
    "domains": []
  },
  {
    "name": "Summon Monster VI",
    "short_description": "Summons extraplanar creature to fight for you.",
    "duration": "1 round/level",
    "components": "V, S, F/DF (a tiny bag and a small candle)",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "bard": 1,
      "cleric": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells with expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": [
      "seetext"
    ]
  },
  {
    "name": "Create Water",
    "short_description": "Creates 2 gallons/level of pure water.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "cleric": 0,
      "druid": 0,
      "paladin": 1
    },
    "saves": null,
    "text": "Note: Conjuration spells can't create substances or objects within a creature. Water weighs about 8 pounds per gallon. One cubic foot of water contains roughly 8 gallons and weighs about 60 pounds.",
    "subschool": "creation",
    "domains": [
      "water"
    ]
  },
  {
    "name": "Detect Poison",
    "short_description": "Detects poison in one creature or small object.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "close",
    "level": {
      "cleric": 0,
      "druid": 0,
      "paladin": 1,
      "ranger": 1,
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": null,
    "text": "You determine whether a creature, object, or area has been poisoned or is poisonous. You can determine the exact type of poison with a DC 20 Wisdom check. A character with the Craft (alchemy) skill may try a DC 20 Craft (alchemy) check if the Wisdom check fails, or may try the Craft (alchemy) check prior to the Wisdom check. The spell can penetrate barriers, but 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt blocks it.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Purify Food and Drink",
    "short_description": "Purifies 1 cu. ft./level of food or water.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "10 ft.",
    "level": {
      "cleric": 0,
      "druid": 0
    },
    "saves": {
      "isObject": true,
      "type": "Will"
    },
    "text": "This spell makes spoiled, rotten, diseased, poisonous, or otherwise contaminated food and water pure and suitable for eating and drinking. This spell does not prevent subsequent natural decay or spoilage. Unholy water and similar food and drink of significance is spoiled by purify food and drink, but the spell has no effect on creatures of any type nor upon magic potions. Water weighs about 8 pounds per gallon. One cubic foot of water contains roughly 8 gallons and weighs about 60 pounds.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Virtue",
    "short_description": "Subject gains 1 temporary hp.",
    "duration": "1 min.",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "cleric": 0,
      "druid": 0,
      "paladin": 1
    },
    "saves": null,
    "text": "With a touch, you infuse a creature with a tiny surge of life, granting the subject 1 temporary hit point.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Bless",
    "short_description": "Allies gain +1 on attack rolls and saves against fear.",
    "duration": "1 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "50 ft.",
    "level": {
      "cleric": 1,
      "paladin": 1
    },
    "saves": null,
    "text": "Bless counters and dispels bane.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Bless Water",
    "short_description": "Makes holy water.",
    "duration": "instantaneous",
    "components": "V, S, M (5 pounds of powdered silver worth 25 gp)",
    "casting_time": "1 minute",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "cleric": 1,
      "paladin": 1
    },
    "saves": {
      "isObject": true,
      "type": "Will"
    },
    "text": "This transmutation imbues a flask (1 pint) of water with positive energy, turning it into holy water.",
    "subschool": null,
    "domains": [
      "good"
    ]
  },
  {
    "name": "Command",
    "short_description": "One subject obeys selected command for 1 round.",
    "duration": "1 round",
    "components": "V",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "close",
    "level": {
      "cleric": 1
    },
    "saves": {
      "type": "Will"
    },
    "text": "You give the subject a single command, which it obeys to the best of its ability at its earliest opportunity. You may select from the following options.Approach: On its turn, the subject moves toward you as quickly and directly as possible for 1 round. The creature may do nothing but move during its turn, and it provokes attacks of opportunity for this movement as normal.Drop: On its turn, the subject drops whatever it is holding. It can't pick up any dropped item until its next turn.Fall: On its turn, the subject falls to the ground and remains prone for 1 round. It may act normally while prone but takes any appropriate penalties.Flee: On its turn, the subject moves away from you as quickly as possible for 1 round. It may do nothing but move during its turn, and it provokes attacks of opportunity for this movement as normal.Halt: The subject stands in place for 1 round. It may not take any actions but is not considered helpless.If the subject can't carry out your command on its next turn, the spell automatically fails.Command, Greater",
    "subschool": "compulsion",
    "domains": [
      "language-dependent",
      "mind-affecting"
    ]
  },
  {
    "name": "Curse Water",
    "short_description": "Makes unholy water.",
    "duration": "instantaneous",
    "components": "V, S, M (5 lbs. of powdered silver worth 25 gp)",
    "casting_time": "1 minute",
    "school": "Necromancy",
    "range": "touch",
    "level": {
      "cleric": 1
    },
    "saves": {
      "isObject": true,
      "type": "Will"
    },
    "text": "This spell imbues a flask (1 pint) of water with negative energy, turning it into unholy water (see Equipment). Unholy water damages good outsiders the way holy water damages undead and evil outsiders.",
    "subschool": null,
    "domains": [
      "evil"
    ]
  },
  {
    "name": "Deathwatch",
    "short_description": "Reveals how near death subjects within 30 ft. are.",
    "duration": "10 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "30 ft.",
    "level": {
      "cleric": 1
    },
    "saves": null,
    "text": "Using the powers of necromancy, you can determine the condition of creatures near death within the spell's range. You instantly know whether each creature within the area is dead, fragile (alive and wounded, with 3 or fewer hit points left), fighting off death (alive with 4 or more hit points), healthy, undead, or neither alive nor dead (such as a construct). Deathwatch sees through any spell or ability that allows creatures to feign death.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Detect Undead",
    "short_description": "Reveals undead within 60 ft.",
    "duration": "concentration, up to 1 minute/ level",
    "components": "V, S, M/DF (earth from a grave)",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "60 ft.",
    "level": {
      "cleric": 1,
      "paladin": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "You can detect the aura that surrounds undead creatures. The amount of information revealed depends on how long you study a particular area.1st Round: Presence or absence of undead auras.2nd Round: Number of undead auras in the area and the strength of the strongest undead aura present. If you are of good alignment, and the strongest undead aura's strength is overwhelming (see below), and the creature has HD of at least twice your character level, you are stunned for 1 round and the spell ends.3rd Round: The strength and location of each undead aura. If an aura is outside your line of sight, then you discern its direction but not its exact location.Aura Strength: The strength of an undead aura is determined by the HD of the undead creature, as given on the table below.Lingering Aura: An undead aura lingers after its original source is destroyed. If detect undead is cast and directed at such a location, the spell indicates an aura strength of dim (even weaker than a faint aura). How long the aura lingers at this dim level depends on its original power, as given on the table below.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Doom",
    "short_description": "One subject takes \u00e2\u20ac\u201c2 on attack rolls, damage rolls, saves, and checks.",
    "duration": "1 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "medium",
    "level": {
      "cleric": 1
    },
    "saves": {
      "type": "Will"
    },
    "text": "This spell fills a single subject with a feeling of horrible dread that causes it to become shaken.",
    "subschool": null,
    "domains": [
      "fear",
      "mind-affecting"
    ]
  },
  {
    "name": "Endure Elements",
    "short_description": "Exist comfortably in hot or cold regions.",
    "duration": "24 hours",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "cleric": 1,
      "druid": 1,
      "paladin": 1,
      "ranger": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "Endure elements doesn't provide any protection from fire or cold damage, nor does it protect against other environmental hazards such as smoke, lack of air, and so forth.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Inflict Light Wounds",
    "short_description": "Touch deals 1d8 damage +1/level (max +5).",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "touch",
    "level": {
      "cleric": 1
    },
    "saves": {
      "type": "Will"
    },
    "text": "Since undead are powered by negative energy, this spell cures such a creature of a like amount of damage, rather than harming it.Inflict Light Wounds, MassSchool necromancy Level cleric 5Casting Time 1 standardComponents V, S",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Magic Weapon",
    "short_description": "Weapon gains +1 bonus.",
    "duration": "1 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "cleric": 1,
      "paladin": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "isHarmless": true,
      "isObject": true,
      "type": "Will"
    },
    "text": "You can't cast this spell on a natural weapon, such as an unarmed strike (instead, see magic fang). A monk's unarmed strike is considered a weapon, and thus it can be enhanced by this spell.Magic Weapon, GreaterSchool transmutation Level cleric 4, paladin 3, sorcerer/wizard 3Casting Time 1 standardComponents V, S, M/DF (powdered lime and carbon)",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Obscuring Mist",
    "short_description": "Fog surrounds you.",
    "duration": "1 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "20 ft.",
    "level": {
      "cleric": 1,
      "druid": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "This spell does not function underwater.",
    "isDispellable": true,
    "subschool": "creation",
    "domains": []
  },
  {
    "name": "Protection from Chaos/Evil/Good/Law",
    "short_description": "+2 to AC and saves, plus additional protection against selected alignment.",
    "duration": "1 min./level",
    "components": "V, S, M/DF",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "cleric": 1,
      "paladin": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell wards a creature from attacks by evil creatures, from mental control, and from summoned creatures. It creates a magical barrier around the subject at a distance of 1 foot. The barrier moves with the subject and has three major effects.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "good"
    ]
  },
  {
    "name": "Sanctuary",
    "short_description": "Opponents can't attack you, and you can't attack.",
    "duration": "1 round/level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "cleric": 1
    },
    "saves": {
      "type": "Will"
    },
    "text": "Any opponent attempting to directly attack the warded creature, even with a targeted spell, must attempt a Will save. If the save succeeds, the opponent can attack normally and is unaffected by that casting of the spell. If the save fails, the opponent can't follow through with the attack, that part of its action is lost, and it can't directly attack the warded creature for the duration of the spell. Those not attempting to attack the subject remain unaffected. This spell does not prevent the warded creature from being attacked or affected by area of effect spells. The subject cannot attack without breaking the spell but may use nonattack spells or otherwise act.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Align Weapon",
    "short_description": "Weapon becomes good, evil, lawful, or chaotic.",
    "duration": "1 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "cleric": 2
    },
    "saves": {
      "isHarmless": true,
      "isObject": true,
      "type": "Will"
    },
    "text": "Align weapon makes a weapon chaotic, evil, good, or lawful, as you choose. A weapon that is aligned can bypass the damage reduction of certain creatures. This spell has no effect on a weapon that already has an alignment. You can't cast this spell on a natural weapon, such as an unarmed strike. When you make a weapon chaotic, evil, good, or lawful, align weapon is a chaotic, evil, good, or lawful spell, respectively.",
    "subschool": null,
    "domains": [
      "seetext"
    ]
  },
  {
    "name": "Augury",
    "short_description": "Learns whether an action will be good or bad.",
    "duration": "instantaneousAn augury can tell you whether a particular action will bring good or bad results for you in the immediate future.",
    "components": "V, S, M (incense worth at least 25 gp), F (a set of marked sticks or bones worth at least 25 gp)",
    "casting_time": "1 minute",
    "school": "Divination",
    "range": "personal",
    "level": {
      "cleric": 2
    },
    "saves": null,
    "text": "An augury can tell you whether a particular action will bring good or bad results for you in the immediate future.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Bear's Endurance",
    "short_description": "Subject gains +4 to Con for 1 min./level.",
    "duration": "1 min./level",
    "components": "V, S, M/DF (a few hairs, or a pinch of dung, from a bear)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "cleric": 2,
      "druid": 2,
      "ranger": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "Mass bear's endurance works like bear's endurance, except that it affects multiple creatures.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Bull's Strength",
    "short_description": "Subject gains +4 to Str for 1 min./level.",
    "duration": "1 min./level",
    "components": "V, S, M/DF (a few hairs, or a pinch of dung, from a bull)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "cleric": 2,
      "druid": 2,
      "paladin": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell functions like bull's strength, except that it affects multiple creatures.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Consecrate",
    "short_description": "Fills area with positive energy, weakening undead.",
    "duration": "2 hours/level",
    "components": "V, S, M (a vial of holy water and 25 gp worth of silver dust), DF",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "close",
    "level": {
      "cleric": 2
    },
    "saves": null,
    "text": "You cannot consecrate an area with a similar fixture of a deity other than your own patron. Instead, the consecrate spell curses the area, cutting off its connection with the associated deity or power. This secondary function, if used, does not also grant the bonuses and penalties relating to undead, as given above.Consecrate counters and dispels desecrate.",
    "subschool": null,
    "domains": [
      "good"
    ]
  },
  {
    "name": "Owl's Wisdom",
    "short_description": "Subject gains +4 to Wis for 1 min./level.",
    "duration": "1 min./level",
    "components": "V, S, M/DF (feathers or droppings from an owl)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "cleric": 2,
      "druid": 2,
      "paladin": 2,
      "ranger": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell functions like owl's wisdom, except that it affects multiple creatures.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Remove Paralysis",
    "short_description": "Frees one or more creatures from paralysis or slow effect.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "cleric": 2,
      "paladin": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "The spell does not restore ability scores reduced by penalties, damage, or drain.",
    "subschool": "healing",
    "domains": []
  },
  {
    "name": "Resist Energy",
    "short_description": "Ignores first 10 (or more) points of damage per attack from specified energy type.",
    "duration": "10 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "cleric": 2,
      "druid": 2,
      "paladin": 2,
      "ranger": 1,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Fort"
    },
    "text": "This abjuration grants a creature limited protection from damage of whichever one of five energy types you select: acid, cold, electricity, fire, or sonic. The subject gains resist energy 10 against the energy type chosen, meaning that each time the creature is subjected to such damage (whether from a natural or magical source), that damage is reduced by 10 points before being applied to the creature's hit points. The value of the energy resistance granted increases to 20 points at 7th level and to a maximum of 30 points at 11th level. The spell protects the recipient's equipment as well.Resist energy absorbs only damage. The subject could still suffer unfortunate side effects.Resist energy overlaps (and does not stack with) protection from energy. If a character is warded by protection from energy and resist energy, the protection spell absorbs damage until its power is exhausted.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Restoration, Lesser",
    "short_description": "Dispels magical ability penalty or repairs 1d4 ability damage.",
    "duration": "instantaneous",
    "components": "V, S, M (diamond dust worth 100 gp or 1,000 gp, see text)",
    "casting_time": "3 rounds",
    "school": "Conjuration",
    "range": "touch",
    "level": {
      "cleric": 4,
      "paladin": 4
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell functions like lesser restoration, except that it also dispels temporary negative levels or one permanent negative level. If this spell is used to dispel a permanent negative level, it has a material component of diamond dust worth 1,000 gp. This spell cannot be used to dispel more than one permanent negative level possessed by a target in a 1-week period.Restoration cures all temporary ability damage, and it restores all points permanently drained from a single ability score (your choice if more than one is drained). It also eliminates any fatigue or exhaustion suffered by the target. Restoration, GreaterSchool conjuration (healing) Level cleric 7Components V, S, M (diamond dust worth 5,000 gp)This spell functions like lesser restoration, except that it dispels all permanent and temporary negative levels afflicting the healed creature. Greater restoration also dispels all magical effects penalizing the creature's abilities, cures all temporary ability damage, and restores all points permanently drained from all ability scores. It also eliminates fatigue and exhaustion, and removes all forms of insanity, confusion, and similar mental effects.Restoration, LesserSchool conjuration (healing) Level cleric 2, druid 2, paladin 1Casting Time 3 roundsComponents V, SRange touchTarget creature touchedDuration instantaneousSaving Throw Will negates (harmless) Spell Resistance yes (harmless)Lesser restoration dispels any magical effects reducing one of the subject's ability scores or cures 1d4 points of temporary ability damage to one of the subject's ability scores. It also eliminates any fatigue suffered by the character, and improves an exhausted condition to fatigued. It does not restore permanent ability drain.",
    "subschool": "healing",
    "domains": []
  },
  {
    "name": "Shield Other",
    "short_description": "You take half of subject's damage.",
    "duration": "1 hour/level",
    "components": "V, S, F (a pair of platinum rings worth 50 gp worn by both you and the target)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "close",
    "level": {
      "cleric": 2,
      "paladin": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "If you and the subject of the spell move out of range of each other, the spell ends.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Spiritual Weapon",
    "short_description": "Magic weapon attacks on its own.",
    "duration": "1 round/level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "medium",
    "level": {
      "cleric": 2
    },
    "saves": null,
    "text": "Each round after the first, you can use a move action to redirect the weapon to a new target. If you do not, the weapon continues to attack the previous round's target. On any round that the weapon switches targets, it gets one attack. Subsequent rounds of attacking that target allow the weapon to make multiple attacks if your base attack bonus would allow it to. Even if the spiritual weapon is a ranged weapon, use the spell's range, not the weapon's normal range increment, and switching targets still is a move action.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "force"
    ]
  },
  {
    "name": "Status",
    "short_description": "Monitors condition, position of allies.",
    "duration": "1 hour/level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "touch",
    "level": {
      "cleric": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "When you need to keep track of comrades who may get separated, status allows you to mentally monitor their relative positions and general condition. You are aware of direction and distance to the creatures and any conditions affecting them: unharmed, wounded, disabled, staggered, unconscious, dying, nauseated, panicked, stunned, poisoned, diseased, confused, or the like. Once the spell has been cast upon the subjects, the distance between them and the caster does not affect the spell as long as they are on the same plane of existence. If a subject leaves the plane, or if it dies, the spell ceases to function for it.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Zone of Truth",
    "short_description": "Subjects within range cannot lie.",
    "duration": "1 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "close",
    "level": {
      "cleric": 2,
      "paladin": 2
    },
    "saves": {
      "type": "Will"
    },
    "text": "Creatures within the emanation area (or those who enter it) can't speak any deliberate and intentional lies. Each potentially affected creature is allowed a save to avoid the effects when the spell is cast or when the creature first enters the emanation area. Affected creatures are aware of this enchantment. Therefore, they may avoid answering questions to which they would normally respond with a lie, or they may be evasive as long as they remain within the boundaries of the truth. Creatures who leave the area are free to speak as they choose.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Animate Dead",
    "short_description": "Creates undead skeletons and zombies out of corpses.",
    "duration": "instantaneous",
    "components": "V, S, M (an onyx gem worth at least 25 gp per Hit Die of the undead)",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "touch",
    "level": {
      "cleric": 3,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": null,
    "text": "This spell turns corpses into undead skeletons or zombies that obey your spoken commands.The undead can be made to follow you, or they can be made to remain in an area and attack any creature (or just a specific kind of creature) entering the place. They remain animated until they are destroyed. A destroyed skeleton or zombie can't be animated again.Regardless of the type of undead you create with this spell, you can't create more HD of undead than twice your caster level with a single casting of animate dead. The desecrate spell doubles this limit.The undead you create remain under your control indefinitely. No matter how many times you use this spell, however, you can control only 4 HD worth of undead creatures per caster level. If you exceed this number, all the newly created creatures fall under your control, and any excess undead from previous castings become uncontrolled. You choose which creatures are released. Undead you control through the Command Undead feat do not count toward this limit.Skeletons: A skeleton can be created only from a mostly intact corpse or skeleton. The corpse must have bones. If a skeleton is made from a corpse, the flesh falls off the bones. Zombies: A zombie can be created only from a mostly intact corpse. The corpse must be that of a creature with a physical anatomy.",
    "subschool": null,
    "domains": [
      "evil"
    ]
  },
  {
    "name": "Bestow Curse",
    "short_description": "\u00e2\u20ac\u201c6 to an ability score; \u00e2\u20ac\u201c4 on attack rolls, saves, and checks; or 50% chance of losing each action.",
    "duration": "permanent",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "touch",
    "level": {
      "cleric": 3,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": {
      "type": "Will"
    },
    "text": "You place a curse on the subject. Choose one of the following.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Contagion",
    "short_description": "Infects subject with chosen disease.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "touch",
    "level": {
      "cleric": 3,
      "druid": 3,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": {
      "type": "Fort"
    },
    "text": "The subject contracts one of the following diseases: blinding sickness, bubonic plague, cackle fever, filth fever, leprosy, mindfire, red ache, shakes, or slimy doom. The disease is contracted immediately (the onset period does not apply). Use the disease's listed frequency and save DC to determine further effects. For more information see Diseases.",
    "subschool": null,
    "domains": [
      "evil"
    ]
  },
  {
    "name": "Continual Flame",
    "short_description": "Makes a permanent, heatless light.",
    "duration": "permanent",
    "components": "V, S, M (ruby dust worth 50 gp)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "touch",
    "level": {
      "cleric": 3,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": null,
    "text": "A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn't use oxygen. A continual flame can be covered and hidden but not smothered or quenched.Light spells counter and dispel darkness spells of an equal or lower level.",
    "subschool": null,
    "domains": [
      "light"
    ]
  },
  {
    "name": "Glyph of Warding",
    "short_description": "Inscription harms those who pass it.",
    "duration": "permanent until discharged",
    "components": "V, S, M (powdered diamond worth 200 gp)",
    "casting_time": "10 minutes",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "cleric": 3
    },
    "saves": null,
    "text": "This powerful inscription harms those who enter, pass, or open the warded area or object. A glyph of warding can guard a bridge or passage, ward a portal, trap a chest or box, and so on.You set all of the conditions of the ward. Typically, any creature entering the warded area or opening the warded object without speaking a password (which you set when casting the spell) is subject to the magic it stores. Alternatively or in addition to a password trigger, glyphs can be set according to physical characteristics (such as height or weight) or creature type, subtype, or kind. Glyphs can also be set with respect to good, evil, law, or chaos, or to pass those of your religion. They cannot be set according to class, HD, or level. Glyphs respond to invisible creatures normally but are not triggered by those who travel past them ethereally. Multiple glyphs cannot be cast on the same area. However, if a cabinet has three different drawers, each can be separately warded.When casting the spell, you weave a tracery of faintly glowing lines around the warding sigil. A glyph can be placed to conform to any shape up to the limitations of your total square footage. When the spell is completed, the glyph and tracery become nearly invisible.Glyphs cannot be affected or bypassed by such means as physical or magical probing, though they can be dispelled. Mislead, polymorph, and nondetection (and similar magical effects) can fool a glyph, though nonmagical disguises and the like can't. Read magic allows you to identify a glyph of warding with a DC 13 Knowledge (arcana) check. Identifying the glyph does not discharge it and allows you to know the basic nature of the glyph (version, type of damage caused, what spell is stored).Note: Magic traps such as glyph of warding are hard to detect and disable. While any character can use Perception to find a glyph, only a character with the trapfinding class feature can use Disable Device to disarm it.Depending on the version selected, a glyph either blasts the intruder or activates a spell.Blast Glyph: A blast glyph deals 1d8 points of damage per two caster levels (maximum 5d8) to the intruder and to all within 5 feet of him or her. This damage is acid, cold, fire, electricity, or sonic (caster's choice, made at time of casting). Each creature affected can attempt a Reflex save to take half damage. Spell resistance applies against this effect.Spell Glyph: You can store any harmful spell of 3rd level or lower that you know. All level-dependent features of the spell are based on your caster level at the time of casting the glyph. If the spell has a target, it targets the intruder. If the spell has an area or an amorphous effect, the area or effect is centered on the intruder. If the spell summons creatures, they appear as close as possible to the intruder and attack. Saving throws and spell resistance operate as normal, except that the DC is based on the level of the spell stored in the glyph.Glyph of Warding, GreaterSchool abjuration Level cleric 6This spell functions like glyph of warding, except that a greater blast glyph deals up to 10d8 points of damage, and a greater spell glyph can store a spell of 6th level or lower.Read magic allows you to identify a greater glyph of warding with a DC 16 Spellcraft check.Material Component: You trace the glyph with incense, which must first be sprinkled with powdered diamond worth at least 400 gp.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Helping Hand",
    "short_description": "Ghostly hand leads subject to you.",
    "duration": "1 hour/level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "5 miles",
    "level": {
      "cleric": 3
    },
    "saves": null,
    "text": "You create the ghostly image of a hand, which you can send to find a creature within 5 miles. The hand then beckons to that creature and leads it to you if the creature is willing to follow.When the spell is cast, you specify a person (or any creature) by physical description, which can include race, gender, and appearance but not ambiguous factors such as level, alignment, or class. When the description is done, the hand streaks off in search of a subject that fits the description. The amount of time it takes to find the subject depends on how far away he is, as detailed on the following table.DistanceTime to Locate100 ft. or less1 round1,000 ft.1 minute1 mile10 minutes2 miles1 hour3 miles2 hours4 miles3 hours5 miles4 hoursOnce the hand locates the subject, it beckons the creature to follow it. If the subject does so, the hand points in your direction, indicating the most direct, feasible route. The hand hovers 10 feet in front of the subject, moving before it at a speed of as much as 240 feet per round. Once the hand leads the subject back to you, it disappears.The subject is not compelled to follow the hand or act in any particular way toward you. If the subject chooses not to follow, the hand continues to beckon for the duration of the spell, then disappears. If the spell expires while the subject is en route to you, the hand disappears the subject must then rely on its own devices to locate you.If more than one subject in a 5-mile radius meets the description, the hand locates the closest creature. If that creature refuses to follow the hand, the hand does not seek out a second subject.If, at the end of 4 hours of searching, the hand has found no subject that matches the description within 5 miles, it returns to you, displays an outstretched palm (indicating that no such creature was found), and disappears.The ghostly hand has no physical form. It is invisible to anyone except you and a potential subject. It cannot engage in combat or execute any other task aside from locating a subject and leading it back to you. The hand can't pass through solid objects but can ooze through small cracks and slits. The hand cannot travel more than 5 miles from the spot it appeared when you cast the spell.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Invisibility Purge",
    "short_description": "Dispels invisibility within 5 ft./level.",
    "duration": "1 min./level You surround yourself with a sphere of power with a radius of 5 feet per caster level that negates all forms of invisibility.Anything invisible becomes visible while in the area.        Report a Problem",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "personal",
    "level": {
      "cleric": 3
    },
    "saves": null,
    "text": "You surround yourself with a sphere of power with a radius of 5 feet per caster level that negates all forms of invisibility.Anything invisible becomes visible while in the area.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Magic Vestment",
    "short_description": "Armor or shield gains +1 enhancement per four levels.",
    "duration": "1 hour/level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "cleric": 3
    },
    "saves": {
      "isHarmless": true,
      "isObject": true,
      "type": "Will"
    },
    "text": "An outfit of regular clothing counts as armor that grants no AC bonus for the purpose of this spell.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Meld into Stone",
    "short_description": "You and your gear merge with stone.",
    "duration": "10 min./levelMeld into stone enables you to meld your body and possessions into a single block of stone. The stone must be large enough to accommodate your body in all three dimensions. When the casting is complete, you and not more than 100 pounds of nonliving gear merge with the stone. If either condition is violated, the spell fails and is wasted.",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "cleric": 3,
      "druid": 3
    },
    "saves": null,
    "text": "Meld into stone enables you to meld your body and possessions into a single block of stone. The stone must be large enough to accommodate your body in all three dimensions. When the casting is complete, you and not more than 100 pounds of nonliving gear merge with the stone. If either condition is violated, the spell fails and is wasted.While in the stone, you remain in contact, however tenuous, with the face of the stone through which you melded. You remain aware of the passage of time and can cast spells on yourself while hiding in the stone. Nothing that goes on outside the stone can be seen, but you can still hear what happens around you. Minor physical damage to the stone does not harm you, but its partial destruction (to the extent that you no longer fit within it) expels you and deals you 5d6 points of damage. The stone's complete destruction expels you and slays you instantly unless you make a DC 18 Fortitude save. Even if you make your save, you still take 5d6 points of damage.Any time before the duration expires, you can step out of the stone through the surface that you entered. If the spell's duration expires or the effect is dispelled before you voluntarily exit the stone, you are violently expelled and take 5d6 points of damage.The following spells harm you if cast upon the stone that you are occupying. Stone to flesh expels you and deals you 5d6 points of damage. Stone shape deals 3d6 points of damage but does not expel you. Transmute rock to mud expels you and then slays you instantly unless you make a DC 18 Fortitude save, in which case you are merely expelled. Finally, passwall expels you without damage.",
    "subschool": null,
    "domains": [
      "earth"
    ]
  },
  {
    "name": "Protection from Energy",
    "short_description": "Absorbs 12 points/level of damage from one kind of energy.",
    "duration": "10 min./level or until discharged",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "cleric": 3,
      "druid": 3,
      "ranger": 2,
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": {
      "isHarmless": true,
      "type": "Fort"
    },
    "text": "Protection from energy grants temporary immunity to the type of energy you specify when you cast it (acid, cold, electricity, fire, or sonic). When the spell absorbs 12 points per caster level of energy damage (to a maximum of 120 points\n            at 10th level), it is discharged.\n        Protection from energy overlaps (and does not stack with) resist energy. If a character is warded by protection from energy and resist energy, the\n            protection spell absorbs damage until its power is exhausted.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Remove Blindness/Deafness",
    "short_description": "Cures normal or magical blindness or deafness.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "touch",
    "level": {
      "cleric": 3,
      "paladin": 3
    },
    "saves": {
      "isHarmless": true,
      "type": "Fort"
    },
    "text": "Remove blindness/deafness cures blindness or deafness (your choice), whether the effect is normal or magical in nature. The spell does not restore ears or eyes that have been lost, but it repairs them if they are damaged.Remove blindness/deafness counters and dispels blindness/deafness.",
    "subschool": "healing",
    "domains": []
  },
  {
    "name": "Remove Disease",
    "short_description": "Cures all diseases affecting subject.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "touch",
    "level": {
      "cleric": 3,
      "druid": 3,
      "ranger": 3
    },
    "saves": {
      "isHarmless": true,
      "type": "Fort"
    },
    "text": "Since the spell's duration is instantaneous, it does not prevent reinfection after a new exposure to the same disease at a later date.",
    "subschool": "healing",
    "domains": []
  },
  {
    "name": "Searing Light",
    "short_description": "Ray deals 1d8/two levels damage (more against undead).",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "medium",
    "level": {
      "cleric": 3
    },
    "saves": null,
    "text": "Focusing divine power like a ray of the sun, you project a blast of light from your open palm. You must succeed on a ranged touch attack to strike your target. A creature struck by this ray of light takes 1d8 points of damage per two caster levels (maximum 5d8). An undead creature takes 1d6 points of damage per caster level (maximum 10d6), and an undead creature particularly vulnerable to bright light takes 1d8 points of damage per caster level (maximum 10d8). A construct or inanimate object takes only 1d6 points of damage per two caster levels (maximum 5d6).",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Water Breathing",
    "short_description": "Subjects can breathe underwater.",
    "duration": "2 hours/level see text",
    "components": "V, S, M/DF (short reed or piece of straw)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "cleric": 3,
      "druid": 3,
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "The transmuted creatures can breathe water freely. Divide the duration evenly among all the creatures you touch. The spell does not make creatures unable to breathe air.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Water Walk",
    "short_description": "Subject treads on water as if solid.",
    "duration": "10 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "cleric": 3,
      "ranger": 3
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "The transmuted creatures can tread on any liquid as if it were firm ground. Mud, oil, snow, quicksand, running water, ice, and even lava can be traversed easily, since the subjects' feet hover an inch or two above the surface. Creatures crossing molten lava still take damage from the heat because they are near it. The subjects can walk, run, charge, or otherwise move across the surface as if it were normal ground.If the spell is cast underwater (or while the subjects are partially or wholly submerged in whatever liquid they are in), the subjects are borne toward the surface at 60 feet per round until they can stand on it.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "water"
    ]
  },
  {
    "name": "Air Walk",
    "short_description": "Subject treads on air as if solid (climb or descend at 45-degree angle).",
    "duration": "10 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "cleric": 4,
      "druid": 4
    },
    "saves": null,
    "text": "The subject can tread on air as if walking on solid ground. Moving upward is similar to walking up a hill. The maximum upward or downward angle possible is 45 degrees, at a rate equal to half the air walker's normal speed.",
    "subschool": null,
    "domains": [
      "air"
    ]
  },
  {
    "name": "Death Ward",
    "short_description": "Grants bonuses against death spells and negative energy.",
    "duration": "1 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "touch",
    "level": {
      "cleric": 4,
      "druid": 5,
      "paladin": 4
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell does not remove negative levels that the subject has already gained, but it does remove the penalties from negative levels for the duration of its effect.Death ward does not protect against other sorts of attacks, even if those attacks might be lethal.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Dimensional Anchor",
    "short_description": "Bars extradimensional movement.",
    "duration": "1 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "medium",
    "level": {
      "cleric": 4,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": null,
    "text": "A green ray springs from your hand. You must make a ranged touch attack to hit the target. Any creature or object struck by the ray is covered with a shimmering emerald field that completely blocks extradimensional travel. Forms of movement barred by a dimensional anchor include astral projection, blink, dimension door, ethereal jaunt, etherealness, gate, maze, plane shift, shadow walk, teleport, and similar spell-like abilities. The spell also prevents the use of a gate or teleportation circle for the duration of the spell.A dimensional anchor does not interfere with the movement of creatures already in ethereal or astral form when the spell is cast, nor does it block extradimensional perception or attack forms. Also, dimensional anchor does not prevent summoned creatures from disappearing at the end of a summoning spell.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Discern Lies",
    "short_description": "Reveals deliberate falsehoods.",
    "duration": "concentration, up to 1 round/level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "close",
    "level": {
      "cleric": 4,
      "paladin": 3
    },
    "saves": {
      "type": "Will"
    },
    "text": "Each round, you concentrate on one target, who must be within range. You know if the target deliberately and knowingly speaks a lie by discerning disturbances in its aura caused by lying. The spell does not reveal the truth, uncover unintentional inaccuracies, or necessarily reveal evasions.Each round, you may concentrate on a different target.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Divination",
    "short_description": "Provides useful advice for specific proposed actions.",
    "duration": "instantaneous Similar to augury but more powerful, a divination",
    "components": "V, S, M (incense and an appropriate offering worth 25 gp)",
    "casting_time": "10 minutes",
    "school": "Divination",
    "range": "personal",
    "level": {
      "cleric": 4
    },
    "saves": null,
    "text": "As with augury, multiple divinations about the same topic by the same caster use the same dice result as the first divination spell and yield the same answer each time.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Giant Vermin",
    "short_description": "Turns centipedes, scorpions, or spiders into giant vermin.",
    "duration": "1 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "cleric": 4,
      "druid": 4
    },
    "saves": null,
    "text": "You turn a number of normal-sized centipedes, scorpions, or spiders into their giant counterparts. Only one type of vermin can be transmuted (so a single casting cannot affect both a centipede and a spider). The number of vermin which can be affected by this spell depends on your caster level, as noted on the table below.Giant vermin created by this spell do not attempt to harm you, but your control of such creatures is limited to simple commands (\"Attack,\" \"Defend,\" \"Stop,\" and so forth). Orders to attack a certain creature when it appears or guard against a particular occurrence are too complex for the vermin to understand. Unless commanded to do otherwise, the giant vermin attack whomever or whatever is near them.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Imbue with Spell Ability",
    "short_description": "Transfer spells to subject.",
    "duration": "permanent until discharged",
    "components": "V, S, DF",
    "casting_time": "10 minutes",
    "school": "Evocation",
    "range": "touch",
    "level": {
      "cleric": 4
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "You transfer some of your currently prepared spells, and the ability to cast them, to another creature. Only a creature with an Intelligence score of at least 5 and a Wisdom score of at least 9 can receive this boon. Only cleric spells from the schools of abjuration, divination, and conjuration (healing) can be transferred. The number and level of spells that the subject can be granted depends on its Hit Dice even multiple castings of imbue with spell ability can't exceed this limit.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Magic Weapon, Greater",
    "short_description": "Weapon gains +1 bonus/four levels (max +5).",
    "duration": "1 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "cleric": 1,
      "paladin": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "isHarmless": true,
      "isObject": true,
      "type": "Will"
    },
    "text": "You can't cast this spell on a natural weapon, such as an unarmed strike (instead, see magic fang). A monk's unarmed strike is considered a weapon, and thus it can be enhanced by this spell.Magic Weapon, GreaterSchool transmutation Level cleric 4, paladin 3, sorcerer/wizard 3Casting Time 1 standardComponents V, S, M/DF (powdered lime and carbon)",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Planar Ally, Lesser",
    "short_description": "Exchange services with a 6 HD extraplanar creature.",
    "duration": "instantaneous",
    "components": "V, S, M (offerings worth 1,250 gp plus payment), DF",
    "casting_time": "10 minutes",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "cleric": 6
    },
    "saves": null,
    "text": "This spell functions like lesser planar ally, except you may call a single creature of 12 HD or less, or two creatures of the same kind whose HD total no more than 12. The creatures agree to help you and request your return payment together.Planar Ally, Greater",
    "subschool": "calling",
    "domains": []
  },
  {
    "name": "Restoration",
    "short_description": "Restores level and ability score drains.",
    "duration": "instantaneous",
    "components": "V, S, M (diamond dust worth 100 gp or 1,000 gp, see text)",
    "casting_time": "3 rounds",
    "school": "Conjuration",
    "range": "touch",
    "level": {
      "cleric": 4,
      "paladin": 4
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell functions like lesser restoration, except that it also dispels temporary negative levels or one permanent negative level. If this spell is used to dispel a permanent negative level, it has a material component of diamond dust worth 1,000 gp. This spell cannot be used to dispel more than one permanent negative level possessed by a target in a 1-week period.Restoration cures all temporary ability damage, and it restores all points permanently drained from a single ability score (your choice if more than one is drained). It also eliminates any fatigue or exhaustion suffered by the target. Restoration, GreaterSchool conjuration (healing) Level cleric 7Components V, S, M (diamond dust worth 5,000 gp)This spell functions like lesser restoration, except that it dispels all permanent and temporary negative levels afflicting the healed creature. Greater restoration also dispels all magical effects penalizing the creature's abilities, cures all temporary ability damage, and restores all points permanently drained from all ability scores. It also eliminates fatigue and exhaustion, and removes all forms of insanity, confusion, and similar mental effects.Restoration, LesserSchool conjuration (healing) Level cleric 2, druid 2, paladin 1Casting Time 3 roundsComponents V, SRange touchTarget creature touchedDuration instantaneousSaving Throw Will negates (harmless) Spell Resistance yes (harmless)Lesser restoration dispels any magical effects reducing one of the subject's ability scores or cures 1d4 points of temporary ability damage to one of the subject's ability scores. It also eliminates any fatigue suffered by the character, and improves an exhausted condition to fatigued. It does not restore permanent ability drain.",
    "subschool": "healing",
    "domains": []
  },
  {
    "name": "Sending",
    "short_description": "Delivers short message anywhere, instantly.",
    "duration": "1 round see text",
    "components": "V, S, M/DF (fine copper wire)",
    "casting_time": "10 minutes",
    "school": "Evocation",
    "range": "see text",
    "level": {
      "cleric": 4,
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "You contact a particular creature with which you are familiar and send a short message of 25 words or less to the subject. The subject recognizes you if it knows you. It can answer in like manner immediately. A creature with an Intelligence score as low as 1 can understand the sending, though the subject's ability to react is limited as normal by its Intelligence. Even if the sending is received, the subject is not obligated to act upon it in any manner.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Spell Immunity",
    "short_description": "Subject is immune to one spell per 4 levels.",
    "duration": "10 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "cleric": 4
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "The warded creature is immune to the effects of one specified spell for every four levels you have. The spells must be of 4th level or lower. The warded creature effectively has unbeatable spell resistance regarding the specified spell or spells. Naturally, that immunity doesn't protect a creature from spells for which spell resistance doesn't apply. Spell immunity protects against spells, spell-like effects of magic items, and innate spell-like abilities of creatures. It does not protect against supernatural or extraordinary abilities, such as breath weapons or gaze attacks.Only a particular spell can be protected against, not a certain domain or school of spells or a group of spells that are similar in effect. A creature can have only one spell immunity or greater spell immunity spell in effect on it at a time.Spell Immunity, GreaterSchool abjuration Level cleric 8This spell functions like spell immunity, except the immunity applies to spells of 8th level or lower. A creature can have only one spell immunity or greater spell immunity spell in effect on it at a time.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Unholy Blight",
    "short_description": "Harms and sickens good creatures (1d8 damage/2 levels).",
    "duration": "instantaneous (1d4 rounds) see text",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "medium",
    "level": {
      "cleric": 4
    },
    "saves": {
      "type": "Will"
    },
    "text": "You call up unholy power to smite your enemies. The power takes the form of a cold, cloying miasma of greasy darkness. Only good and neutral (not evil) creatures are harmed by the spell.The spell deals 1d8 points of damage per two caster levels (maximum 5d8) to a good creature (or 1d6 per caster level, maximum 10d6, to a good outsider) and causes it to be sickened for 1d4 rounds. A successful Will save reduces damage to half and negates the sickened effect. The effects cannot be negated by remove disease or heal, but remove curse is effective.The spell deals only half damage to creatures who are neither evil nor good, and they are not sickened. Such a creature can reduce the damage by half again (down to one-quarter) with a successful Will save.",
    "subschool": null,
    "domains": [
      "evil"
    ]
  },
  {
    "name": "Atonement",
    "short_description": "Removes burden of misdeeds from subject.",
    "duration": "instantaneous",
    "components": "V, S, M (burning incense), F (a set of prayer beads or other prayer device worth at least 500 gp), DF",
    "casting_time": "1 hour",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "cleric": 5,
      "druid": 5
    },
    "saves": null,
    "text": "This spell removes the burden of misdeeds from the subject. The creature seeking atonement must be truly repentant and desirous of setting right its misdeeds. If the atoning creature committed the evil act unwittingly or under some form of compulsion, atonement operates normally at no cost to you. However, in the case of a creature atoning for deliberate misdeeds, you must intercede with your deity (requiring you to expend 2,500 gp in rare incense and offerings). Atonement may be cast for one of several purposes, depending on the version selected.Reverse Magical Alignment Change: If a creature has had its alignment magically changed, atonement returns its alignment to its original status at no additional cost.Restore Class: A paladin, or other class, who has lost her class features due to violating the alignment restrictions of her class may have her class features restored by this spell. Restore Cleric or Druid Spell Powers: A cleric or druid who has lost the ability to cast spells by incurring the anger of her deity may regain that ability by seeking atonement from another cleric of the same deity or another druid. If the transgression was intentional, the casting cleric must expend 2,500 gp in rare incense and offerings for her god's intercession.Redemption or Temptation: You may cast this spell upon a creature of an opposing alignment in order to offer it a chance to change its alignment to match yours. The prospective subject must be present for the entire casting process. Upon completion of the spell, the subject freely chooses whether it retains its original alignment or acquiesces to your offer and changes to your alignment. No duress, compulsion, or magical influence can force the subject to take advantage of the opportunity offered if it is unwilling to abandon its old alignment. This use of the spell does not work on outsiders or any creature incapable of changing its alignment naturally.Though the spell description refers to evil acts, atonement can be used on any creature that has performed acts against its alignment, regardless of the actual alignment in question.Note: Normally, changing alignment is up to the player. This use of atonement offers a method for a character to change his or her alignment drastically, suddenly, and definitively.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Command, Greater",
    "short_description": "As command, but affects one subject/level.",
    "duration": "1 round",
    "components": "V",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "close",
    "level": {
      "cleric": 1
    },
    "saves": {
      "type": "Will"
    },
    "text": "You give the subject a single command, which it obeys to the best of its ability at its earliest opportunity. You may select from the following options.Approach: On its turn, the subject moves toward you as quickly and directly as possible for 1 round. The creature may do nothing but move during its turn, and it provokes attacks of opportunity for this movement as normal.Drop: On its turn, the subject drops whatever it is holding. It can't pick up any dropped item until its next turn.Fall: On its turn, the subject falls to the ground and remains prone for 1 round. It may act normally while prone but takes any appropriate penalties.Flee: On its turn, the subject moves away from you as quickly as possible for 1 round. It may do nothing but move during its turn, and it provokes attacks of opportunity for this movement as normal.Halt: The subject stands in place for 1 round. It may not take any actions but is not considered helpless.If the subject can't carry out your command on its next turn, the spell automatically fails.Command, Greater",
    "subschool": "compulsion",
    "domains": [
      "language-dependent",
      "mind-affecting"
    ]
  },
  {
    "name": "Commune",
    "short_description": "Deity answers one yes-or-no question/level.",
    "duration": "1 round/level",
    "components": "V, S, M (holy or unholy water and incense worth 500 gp), DF",
    "casting_time": "10 minutes",
    "school": "Divination",
    "range": "personal",
    "level": {
      "cleric": 5
    },
    "saves": null,
    "text": "The spell, at best, provides information to aid character decisions. The entities contacted structure their answers to further their own purposes. If you lag, discuss the answers, or go off to do anything else, the spell ends.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Dispel Chaos/Evil/Good/Law",
    "short_description": "+4 bonus against attacks.",
    "duration": "1 round/level or until discharged, whichever comes first ",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "cleric": 5,
      "paladin": 4
    },
    "saves": null,
    "text": "Shimmering, white holy energy surrounds you. This energy has three effects.",
    "subschool": null,
    "domains": [
      "good"
    ]
  },
  {
    "name": "Flame Strike",
    "short_description": "Smites foes with divine fire (1d6/level damage).",
    "duration": "instantaneous",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "medium",
    "level": {
      "cleric": 5,
      "druid": 4
    },
    "saves": {
      "type": "Ref"
    },
    "text": "A flame strike evokes a vertical column of divine fire. The spell deals 1d6 points of damage per caster level (maximum 15d6). Half the damage is fire damage, but the other half results directly from divine power and is therefore not subject to being reduced by resistance to fire-based attacks.",
    "subschool": null,
    "domains": [
      "fire"
    ]
  },
  {
    "name": "Hallow",
    "short_description": "Designates location as holy.",
    "duration": "instantaneous",
    "components": "V, S, M (herbs, oils, and incense worth at least 1,000 gp, plus 1,000 gp per level of the spell to be included in the hallowed area), DF",
    "casting_time": "24 hours",
    "school": "Evocation",
    "range": "touch",
    "level": {
      "cleric": 5,
      "druid": 5
    },
    "saves": null,
    "text": "Hallow makes a particular site, building, or structure a holy site. This has four major effects.First, the site is warded by a magic circle against evil effect.",
    "subschool": null,
    "domains": [
      "good"
    ]
  },
  {
    "name": "Inflict Light Wounds, Mass",
    "short_description": "Deals 1d8 damage + 1/level, affects 1 subject/level.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "touch",
    "level": {
      "cleric": 1
    },
    "saves": {
      "type": "Will"
    },
    "text": "Since undead are powered by negative energy, this spell cures such a creature of a like amount of damage, rather than harming it.Inflict Light Wounds, MassSchool necromancy Level cleric 5Casting Time 1 standardComponents V, S",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Insect Plague",
    "short_description": "Wasp swarms attack creatures.",
    "duration": "1 min./level ",
    "components": "V, S, DF",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "long",
    "level": {
      "cleric": 5,
      "druid": 5
    },
    "saves": null,
    "text": "You summon a number of swarms of wasps (one per three levels, to a maximum of six swarms at 18th level). The swarms must be summoned so that each one is adjacent to at least one other swarm (that is, the swarms must fill one contiguous area). You may summon the wasp swarms so that they share the area of other creatures. Each swarm attacks any creatures occupying its area. The swarms are stationary after being summoned, and won't pursue creatures that flee.",
    "subschool": "summoning",
    "domains": []
  },
  {
    "name": "Mark of Justice",
    "short_description": "Designates action that triggers curse on subject.",
    "duration": "permanent see text",
    "components": "V, S, DF",
    "casting_time": "10 minutes",
    "school": "Necromancy",
    "range": "touch",
    "level": {
      "cleric": 5,
      "paladin": 4
    },
    "saves": null,
    "text": "You mark a subject and state some behavior on the part of the subject that will activate the mark. When activated, the mark curses the subject. Typically, you designate some sort of undesirable behavior that activates the mark, but you can pick any act you please. The effect of the mark is identical with the effect of bestow curse.Since this spell takes 10 minutes to cast and involves writing on the target, you can cast it only on a creature that is willing or restrained.Like the effect of bestow curse, a mark of justice cannot be dispelled, but it can be removed with a break enchantment, limited wish, miracle, remove curse, or wish spell. Remove curse works only if its caster level is equal to or higher than your mark of justice caster level. These restrictions apply regardless of whether the mark has activated.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Righteous Might",
    "short_description": "Your size increases, and you gain bonuses in combat.",
    "duration": "1 round/level Your height immediately doubles, and your weight increases by a factor of eight. This increase changes your size category to the next larger one. You gain a +4 size bonus to Strength and Constitution",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "cleric": 5
    },
    "saves": null,
    "text": "All equipment you wear or carry is similarly enlarged by the spell. Melee weapons deal more damage. Other magical properties are not affected by this spell. Any enlarged item that leaves your possession (including a projectile or thrown weapon) instantly returns to its normal size. This means that thrown and projectile weapons deal their normal damage. Magical effects that increase size do not stack.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "True Seeing",
    "short_description": "Lets you see all things as they really are.",
    "duration": "1 min./level",
    "components": "V, S, M (an eye ointment that costs 250 gp)",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "touch",
    "level": {
      "cleric": 5,
      "druid": 7,
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "You confer on the subject the ability to see all things as they actually are. The subject sees through normal and magical darkness, notices secret doors hidden by magic, sees the exact locations of creatures or objects under blur or displacement effects, sees invisible creatures or objects normally, sees through illusions, and sees the true form of polymorphed, changed, or transmuted things. Further, the subject can focus its vision to see into the Ethereal Plane (but not into extradimensional spaces). The range of true seeing conferred is 120 feet.True seeing, however, does not penetrate solid objects. It in no way confers X-ray vision or its equivalent. It does not negate concealment, including that caused by fog and the like. True seeing does not help the viewer see through mundane disguises, spot creatures who are simply hiding, or notice secret doors hidden by mundane means. In addition, the spell effects cannot be further enhanced with known magic, so one cannot use true seeing through a crystal ball or in conjunction with clairaudience/clairvoyance.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Unhallow",
    "short_description": "Designates location as unholy.",
    "duration": "instantaneous",
    "components": "V, S, M (herbs, oils, and incense worth at least 1,000 gp, plus 1,000 gp per level of the spell to be tied to the unhallowed area)",
    "casting_time": "24 hours",
    "school": "Evocation",
    "range": "touch",
    "level": {
      "cleric": 5,
      "druid": 5
    },
    "saves": null,
    "text": "Unhallow makes a particular site, building, or structure an unholy site. This has three major effects.First, the site or structure is guarded by a magic circle against good effect.",
    "subschool": null,
    "domains": [
      "evil"
    ]
  },
  {
    "name": "Wall of Stone",
    "short_description": "Creates a stone wall that can be shaped.",
    "duration": "instantaneous",
    "components": "V, S, M/DF (a small block of granite)",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "medium",
    "level": {
      "cleric": 5,
      "druid": 6,
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "This spell creates a wall of rock that merges into adjoining rock surfaces. A wall of stone is 1 inch thick per four caster levels and composed of up to one 5-foot square per level. You can double the wall's area by halving its thickness. The wall cannot be conjured so that it occupies the same space as a creature or another object.Unlike a wall of iron, you can create a wall of stone in almost any shape you desire. The wall created need not be vertical, nor rest upon any firm foundation however, it must merge with and be solidly supported by existing stone. It can be used to bridge a chasm, for instance, or as a ramp. For this use, if the span is more than 20 feet, the wall must be arched and buttressed. This requirement reduces the spell's area by half. The wall can be crudely shaped to allow crenellations, battlements, and so forth by likewise reducing the area.",
    "subschool": "creation",
    "domains": [
      "earth"
    ]
  },
  {
    "name": "Antilife Shell",
    "short_description": "10-ft.-radius field hedges out living creatures.",
    "duration": "1 min./level",
    "components": "V, S, DF",
    "casting_time": "1 round",
    "school": "Abjuration",
    "range": "10 ft.",
    "level": {
      "cleric": 6,
      "druid": 6
    },
    "saves": null,
    "text": "You bring into being a mobile, hemispherical energy field that prevents the entrance of most types of living creatures.The effect hedges out animals, aberrations, dragons, fey, giants, humanoids, magical beasts, monstrous humanoids, oozes, plants, and vermin, but not constructs, elementals, outsiders, or undead.This spell may be used only defensively, not aggressively. Forcing an abjuration barrier against creatures that the spell keeps at bay collapses the barrier.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Banishment",
    "short_description": "Banishes 2 HD/level of extraplanar creatures.",
    "duration": "instantaneous",
    "components": "V, S, F (see text)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "close",
    "level": {
      "cleric": 6,
      "sorcerer": 7,
      "wizard": 7
    },
    "saves": {
      "type": "Will"
    },
    "text": "A banishment spell is a more powerful version of the dismissal spell. It enables you to force extraplanar creatures out of your home plane. As many as 2 Hit Dice of creatures per caster level can be banished.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Bear's Endurance, Mass",
    "short_description": "As bear's endurance, affects one subject/level.",
    "duration": "1 min./level",
    "components": "V, S, M/DF (a few hairs, or a pinch of dung, from a bear)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "cleric": 2,
      "druid": 2,
      "ranger": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "Mass bear's endurance works like bear's endurance, except that it affects multiple creatures.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Bull's Strength, Mass",
    "short_description": "As bull's strength, affects 1 subject per level.",
    "duration": "1 min./level",
    "components": "V, S, M/DF (a few hairs, or a pinch of dung, from a bull)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "cleric": 2,
      "druid": 2,
      "paladin": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell functions like bull's strength, except that it affects multiple creatures.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Create Undead",
    "short_description": "Raises ghouls, ghasts, mummies, or mohrgs from physical remains.",
    "duration": "instantaneous",
    "components": "V, S, M (a clay pot filled with grave dirt and an onyx gem worth at least 50 gp per HD of the undead to be created)",
    "casting_time": "1 hour",
    "school": "Necromancy",
    "range": "close",
    "level": {
      "cleric": 6,
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": null,
    "text": "A much more potent spell than animate dead, this evil spell allows you to infuse a dead body with negative energy to create more powerful sorts of undead: ghouls, ghasts, mummies, and mohrgs. The type or types of undead you can create are based on your caster level, as shown on the table below.",
    "subschool": null,
    "domains": [
      "evil"
    ]
  },
  {
    "name": "Glyph of Warding, Greater",
    "short_description": "As glyph of warding, but up to 10d8 damage or 6th-level spell.",
    "duration": "permanent until discharged",
    "components": "V, S, M (powdered diamond worth 200 gp)",
    "casting_time": "10 minutes",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "cleric": 3
    },
    "saves": null,
    "text": "This powerful inscription harms those who enter, pass, or open the warded area or object. A glyph of warding can guard a bridge or passage, ward a portal, trap a chest or box, and so on.You set all of the conditions of the ward. Typically, any creature entering the warded area or opening the warded object without speaking a password (which you set when casting the spell) is subject to the magic it stores. Alternatively or in addition to a password trigger, glyphs can be set according to physical characteristics (such as height or weight) or creature type, subtype, or kind. Glyphs can also be set with respect to good, evil, law, or chaos, or to pass those of your religion. They cannot be set according to class, HD, or level. Glyphs respond to invisible creatures normally but are not triggered by those who travel past them ethereally. Multiple glyphs cannot be cast on the same area. However, if a cabinet has three different drawers, each can be separately warded.When casting the spell, you weave a tracery of faintly glowing lines around the warding sigil. A glyph can be placed to conform to any shape up to the limitations of your total square footage. When the spell is completed, the glyph and tracery become nearly invisible.Glyphs cannot be affected or bypassed by such means as physical or magical probing, though they can be dispelled. Mislead, polymorph, and nondetection (and similar magical effects) can fool a glyph, though nonmagical disguises and the like can't. Read magic allows you to identify a glyph of warding with a DC 13 Knowledge (arcana) check. Identifying the glyph does not discharge it and allows you to know the basic nature of the glyph (version, type of damage caused, what spell is stored).Note: Magic traps such as glyph of warding are hard to detect and disable. While any character can use Perception to find a glyph, only a character with the trapfinding class feature can use Disable Device to disarm it.Depending on the version selected, a glyph either blasts the intruder or activates a spell.Blast Glyph: A blast glyph deals 1d8 points of damage per two caster levels (maximum 5d8) to the intruder and to all within 5 feet of him or her. This damage is acid, cold, fire, electricity, or sonic (caster's choice, made at time of casting). Each creature affected can attempt a Reflex save to take half damage. Spell resistance applies against this effect.Spell Glyph: You can store any harmful spell of 3rd level or lower that you know. All level-dependent features of the spell are based on your caster level at the time of casting the glyph. If the spell has a target, it targets the intruder. If the spell has an area or an amorphous effect, the area or effect is centered on the intruder. If the spell summons creatures, they appear as close as possible to the intruder and attack. Saving throws and spell resistance operate as normal, except that the DC is based on the level of the spell stored in the glyph.Glyph of Warding, GreaterSchool abjuration Level cleric 6This spell functions like glyph of warding, except that a greater blast glyph deals up to 10d8 points of damage, and a greater spell glyph can store a spell of 6th level or lower.Read magic allows you to identify a greater glyph of warding with a DC 16 Spellcraft check.Material Component: You trace the glyph with incense, which must first be sprinkled with powdered diamond worth at least 400 gp.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Heal",
    "short_description": "Cures 10 points/level damage, all diseases and mental conditions.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "touch",
    "level": {
      "cleric": 6,
      "druid": 7
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "Heal enables you to channel positive energy into a creature to wipe away injury and afflictions. It immediately ends any and all of the following adverse conditions affecting the target: ability damage, blinded, confused, dazed, dazzled, deafened, diseased, exhausted, fatigued, feebleminded, insanity, nauseated, poisoned, sickened, and stunned. It also cures 10 hit points of damage per level of the caster, to a maximum of 150 points at 15th level.Heal does not remove negative levels or restore permanently drained ability score points.If used against an undead creature, heal instead acts like harm.Heal, MassSchool conjuration (healing) Level cleric 9",
    "subschool": "healing",
    "domains": []
  },
  {
    "name": "Owl's Wisdom, Mass",
    "short_description": "As owl's wisdom, affects 1 subject/level.",
    "duration": "1 min./level",
    "components": "V, S, M/DF (feathers or droppings from an owl)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "cleric": 2,
      "druid": 2,
      "paladin": 2,
      "ranger": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell functions like owl's wisdom, except that it affects multiple creatures.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Planar Ally",
    "short_description": "As lesser planar ally, but up to 12 HD.",
    "duration": "instantaneous",
    "components": "V, S, M (offerings worth 1,250 gp plus payment), DF",
    "casting_time": "10 minutes",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "cleric": 6
    },
    "saves": null,
    "text": "This spell functions like lesser planar ally, except you may call a single creature of 12 HD or less, or two creatures of the same kind whose HD total no more than 12. The creatures agree to help you and request your return payment together.Planar Ally, Greater",
    "subschool": "calling",
    "domains": []
  },
  {
    "name": "Blasphemy",
    "short_description": "Kills, paralyzes, weakens, or dazes nonevil subjects.",
    "duration": "instantaneous",
    "components": "V",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "40 ft.",
    "level": {
      "cleric": 7
    },
    "saves": {
      "type": "Will"
    },
    "text": "Any nonevil creature within the area of a blasphemy spell suffers the following ill effects.",
    "subschool": null,
    "domains": [
      "evil",
      "sonic"
    ]
  },
  {
    "name": "Destruction",
    "short_description": "Kills subject and destroys remains.",
    "duration": "instantaneous",
    "components": "V, S, F (holy or unholy symbol costing 500 gp)",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "close",
    "level": {
      "cleric": 7
    },
    "saves": {
      "type": "Fort"
    },
    "text": "This spell instantly delivers 10 points of damage per caster level. If the spell slays the target, it consumes the remains utterly in holy (or unholy) fire (but not its equipment or possessions). If the target's Fortitude saving throw succeeds, it instead takes 10d6 points of damage. The only way to restore life to a character who has failed to save against this spell (and was slain) is to use true resurrection, a carefully worded wish spell followed by resurrection, or miracle.",
    "subschool": null,
    "domains": [
      "death"
    ]
  },
  {
    "name": "Ethereal Jaunt",
    "short_description": "You become ethereal for 1 round/level.",
    "duration": "1 round/level You become ethereal, along with your equipment. For the duration of the spell, you are in the Ethereal Plane, which overlaps the Material Plane. When the spell expires, you return to material existence.An ethereal creature is invisible, insubstantial, and capable of moving in any direction, even up or down, albeit at half normal speed. As an insubstantial creature, you can move through solid objects, including living creatures. An ethereal creature can see and hear on the Material Plane, but everything looks gray and ephemeral. Sight and hearing onto the Material Plane are limited to 60 feet.",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "cleric": 7,
      "sorcerer": 7,
      "wizard": 7
    },
    "saves": null,
    "text": "You become ethereal, along with your equipment. For the duration of the spell, you are in the Ethereal Plane, which overlaps the Material Plane. When the spell expires, you return to material existence.An ethereal creature is invisible, insubstantial, and capable of moving in any direction, even up or down, albeit at half normal speed. As an insubstantial creature, you can move through solid objects, including living creatures. An ethereal creature can see and hear on the Material Plane, but everything looks gray and ephemeral. Sight and hearing onto the Material Plane are limited to 60 feet.Force effects and abjurations affect an ethereal creature normally. Their effects extend onto the Ethereal Plane from the Material Plane, but not vice versa. An ethereal creature can't attack material creatures, and spells you cast while ethereal affect only other ethereal things. Certain material creatures or objects have attacks or effects that work on the Ethereal Plane.Treat other ethereal creatures and ethereal objects as if they were material. If you end the spell and become material while inside a material object (such as a solid wall), you are shunted off to the nearest open space and take 1d6 points of damage per 5 feet that you so travel.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Holy Word",
    "short_description": "Kills, paralyzes, blinds, or deafens nongood subjects.",
    "duration": "instantaneous",
    "components": "V",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "40 ft.",
    "level": {
      "cleric": 7
    },
    "saves": {
      "type": "Will"
    },
    "text": "Any nongood creature within the area of a holy word spell suffers the following ill effects.",
    "subschool": null,
    "domains": [
      "good",
      "sonic"
    ]
  },
  {
    "name": "Refuge",
    "short_description": "Alters item to transport its possessor to your abode.",
    "duration": "permanent until discharged",
    "components": "V, S, M (a prepared object worth 1,500 gp)",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "touch",
    "level": {
      "cleric": 7,
      "sorcerer": 9,
      "wizard": 9
    },
    "saves": null,
    "text": "When you cast this spell, you create powerful magic in a specially prepared object. This object contains the power to instantly transport its possessor across any distance within the same plane to your abode. Once the item is so enhanced, you must give it willingly to a creature and at the same time inform it of a command word to be spoken when the item is used. To make use of the item, the subject speaks the command word at the same time that it rends or breaks the item (a standard). When this is done, the individual and all objects it is wearing and carrying (to a maximum of the character's heavy load) are instantly transported to your abode. No other creatures are affected (aside from a familiar or animal companion that is touching the subject).You can alter the spell when casting it so that it transports you to within 10 feet of the possessor of the item when it is broken and the command word spoken. You will have a general idea of the location and situation of the item possessor at the time the refuge spell is discharged, but once you decide to alter the spell in this fashion, you have no choice whether or not to be transported.",
    "subschool": "teleportation",
    "domains": []
  },
  {
    "name": "Regenerate",
    "short_description": "Subject's severed limbs grow back, cures 4d8 damage +1/level (max +35).",
    "duration": "instantaneous",
    "components": "V, S, DF",
    "casting_time": "3 full rounds",
    "school": "Conjuration",
    "range": "touch",
    "level": {
      "cleric": 7,
      "druid": 9
    },
    "saves": {
      "isHarmless": true,
      "type": "Fort"
    },
    "text": "The subject's severed body members (fingers, toes, hands, feet, arms, legs, tails, or even heads of multiheaded creatures), broken bones, and ruined organs grow back. After the spell is cast, the physical regeneration is complete in 1 round if the severed members are present and touching the creature. It takes 2d10 rounds otherwise.",
    "subschool": "healing",
    "domains": []
  },
  {
    "name": "Repulsion",
    "short_description": "Creatures can't approach you.",
    "duration": "1 round/level",
    "components": "V, S, F/DF (a pair of canine statuettes worth 50 gp)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "up to 10 ft./level",
    "level": {
      "cleric": 7,
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": {
      "type": "Will"
    },
    "text": "An invisible, mobile field surrounds you and prevents creatures from approaching you. You decide how big the field is at the time of casting (to the limit your level allows). Any creature within or entering the field must attempt a save. If it fails, it becomes unable to move toward you for the duration of the spell. Repelled creatures' actions are not otherwise restricted. They can fight other creatures and can cast spells and attack you with ranged weapons. If you move closer to an affected creature, nothing happens. The creature is not forced back. The creature is free to make melee attacks against you if you come within reach. If a repelled creature moves away from you and then tries to turn back toward you, it cannot move any closer if it is still within the spell's area.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Restoration, Greater",
    "short_description": "As restoration, plus restores all levels and ability scores.",
    "duration": "instantaneous",
    "components": "V, S, M (diamond dust worth 100 gp or 1,000 gp, see text)",
    "casting_time": "3 rounds",
    "school": "Conjuration",
    "range": "touch",
    "level": {
      "cleric": 4,
      "paladin": 4
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell functions like lesser restoration, except that it also dispels temporary negative levels or one permanent negative level. If this spell is used to dispel a permanent negative level, it has a material component of diamond dust worth 1,000 gp. This spell cannot be used to dispel more than one permanent negative level possessed by a target in a 1-week period.Restoration cures all temporary ability damage, and it restores all points permanently drained from a single ability score (your choice if more than one is drained). It also eliminates any fatigue or exhaustion suffered by the target. Restoration, GreaterSchool conjuration (healing) Level cleric 7Components V, S, M (diamond dust worth 5,000 gp)This spell functions like lesser restoration, except that it dispels all permanent and temporary negative levels afflicting the healed creature. Greater restoration also dispels all magical effects penalizing the creature's abilities, cures all temporary ability damage, and restores all points permanently drained from all ability scores. It also eliminates fatigue and exhaustion, and removes all forms of insanity, confusion, and similar mental effects.Restoration, LesserSchool conjuration (healing) Level cleric 2, druid 2, paladin 1Casting Time 3 roundsComponents V, SRange touchTarget creature touchedDuration instantaneousSaving Throw Will negates (harmless) Spell Resistance yes (harmless)Lesser restoration dispels any magical effects reducing one of the subject's ability scores or cures 1d4 points of temporary ability damage to one of the subject's ability scores. It also eliminates any fatigue suffered by the character, and improves an exhausted condition to fatigued. It does not restore permanent ability drain.",
    "subschool": "healing",
    "domains": []
  },
  {
    "name": "Summon Monster VII",
    "short_description": "Summons extraplanar creature to fight for you.",
    "duration": "1 round/level",
    "components": "V, S, F/DF (a tiny bag and a small candle)",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "bard": 1,
      "cleric": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells with expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": [
      "seetext"
    ]
  },
  {
    "name": "Antimagic Field",
    "short_description": "Negates magic within 10 ft.",
    "duration": "10 min./level",
    "components": "V, S, M/DF (pinch of powdered iron or iron filings)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "10 ft.",
    "level": {
      "cleric": 8,
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": null,
    "text": "An invisible barrier surrounds you and moves with you. The space within this barrier is impervious to most magical effects, including spells, spell-like abilities, and supernatural abilities. Likewise, it prevents the functioning of any magic items or spells within its confines.An antimagic field suppresses any spell or magical effect used within, brought into, or cast into the area, but does not dispel it. Time spent within an antimagic field counts against the suppressed spell's duration.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Cloak of Chaos",
    "short_description": "+4 to AC, +4 resistance, and SR 25 against lawful spells.",
    "duration": "1 round/level",
    "components": "V, S, F (a tiny reliquary worth 500 gp)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "20 ft.",
    "level": {
      "cleric": 8
    },
    "saves": null,
    "text": "A random pattern of color surrounds the subjects, protecting them from attacks, granting them resistance to spells cast by lawful creatures, and causing lawful creatures that strike the subjects to become confused. This abjuration has four effects.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "chaotic"
    ]
  },
  {
    "name": "Dimensional Lock",
    "short_description": "Teleportation and interplanar travel blocked for 1 day/level.",
    "duration": "1 day/level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "medium",
    "level": {
      "cleric": 8,
      "sorcerer": 8,
      "wizard": 8
    },
    "saves": null,
    "text": "You create a shimmering emerald barrier that completely blocks extradimensional travel. Forms of movement barred include astral projection, blink, dimension door, ethereal jaunt, etherealness, gate, maze, plane shift, shadow walk, teleport, and similar spell-like abilities. Once dimensional lock is in place, extradimensional travel into or out of the area is not possible.A dimensional lock does not interfere with the movement of creatures already in ethereal or astral form when the spell is cast, nor does it block extradimensional perception or attack forms. Also, the spell does not prevent summoned creatures from disappearing at the end of a summoning spell.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Discern Location",
    "short_description": "Reveals exact location of creature or object.",
    "duration": "instantaneous",
    "components": "V, S, DF",
    "casting_time": "10 minutes",
    "school": "Divination",
    "range": "unlimited",
    "level": {
      "cleric": 8,
      "sorcerer": 8,
      "wizard": 8
    },
    "saves": null,
    "text": "A discern location spell is among the most powerful means of locating creatures or objects. Nothing short of a mind blank spell or the direct intervention of a deity keeps you from learning the exact location of a single individual or object. Discern location circumvents normal means of protection from scrying or location. The spell reveals the name of the creature or object's location (place, name, business name, building name, or the like), community, county (or similar political division), country, continent, and the plane of existence where the target lies.To find a creature with the spell, you must have seen the creature or have some item that once belonged to it. To find an object, you must have touched it at least once.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Earthquake",
    "short_description": "Intense tremor shakes 80-ft.-radius.",
    "duration": "1 round",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "long",
    "level": {
      "cleric": 8,
      "druid": 8
    },
    "saves": null,
    "text": "Cave, Cavern, or Tunnel: The roof collapses, dealing 8d6 points of damage to any creature caught under the cave-in (Reflex DC 15 half) and pinning that creature beneath the rubble (see below). An earthquake cast on the roof of a very large cavern could also endanger those outside the actual area but below the falling debris and rubble.Cliffs: Earthquake causes a cliff to crumble, creating a landslide that travels horizontally as far as it falls vertically. Any creature in the path takes 8d6 points of bludgeoning damage (Reflex DC 15 half) and is pinned beneath the rubble (see below).",
    "subschool": null,
    "domains": [
      "earth"
    ]
  },
  {
    "name": "Fire Storm",
    "short_description": "Deals 1d6/level fire damage.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "medium",
    "level": {
      "cleric": 8,
      "druid": 7
    },
    "saves": {
      "type": "Ref"
    },
    "text": "When a fire storm spell is cast, the whole area is shot through with sheets of roaring flame. The raging flames do not harm natural vegetation, ground cover, or any plant creatures in the area that you wish to exclude from damage. Any other creature within the area takes 1d6 points of fire damage per caster level (maximum 20d6). Creatures that fail their Reflex save catch on fire, taking 4d6 points of fire damage each round until the flames are extinguished. Extinguishing the flames is a full-round action that requires a DC 20 Reflex save.",
    "subschool": null,
    "domains": [
      "fire"
    ]
  },
  {
    "name": "Holy Aura",
    "short_description": "+4 to AC, +4 resistance, and SR 25 against evil spells.",
    "duration": "1 round/level",
    "components": "V, S, F (a tiny reliquary worth 500 gp)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "20 ft.",
    "level": {
      "cleric": 8
    },
    "saves": null,
    "text": "A brilliant divine radiance surrounds the subjects, protecting them from attacks, granting them resistance to spells cast by evil creatures, and causing evil creatures to become blinded when they strike the subjects. This abjuration has four effects.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "good"
    ]
  },
  {
    "name": "Planar Ally, Greater",
    "short_description": "As lesser planar ally, but up to 18 HD.",
    "duration": "instantaneous",
    "components": "V, S, M (offerings worth 1,250 gp plus payment), DF",
    "casting_time": "10 minutes",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "cleric": 6
    },
    "saves": null,
    "text": "This spell functions like lesser planar ally, except you may call a single creature of 12 HD or less, or two creatures of the same kind whose HD total no more than 12. The creatures agree to help you and request your return payment together.Planar Ally, Greater",
    "subschool": "calling",
    "domains": []
  },
  {
    "name": "Shield of Law",
    "short_description": "+4 to AC, +4 resistance, and SR 25 against chaotic spells.",
    "duration": "1 round/level",
    "components": "V, S, F (a reliquary worth 500 gp)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "20 ft.",
    "level": {
      "cleric": 8
    },
    "saves": null,
    "text": "A dim, blue glow surrounds the subjects, protecting them from attacks, granting them resistance to spells cast by chaotic creatures, and slowing chaotic creatures when they strike the subjects. This abjuration has four effects.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "lawful"
    ]
  },
  {
    "name": "Spell Immunity, Greater",
    "short_description": "As spell immunity, but up to 8th-level spells.",
    "duration": "10 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "cleric": 4
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "The warded creature is immune to the effects of one specified spell for every four levels you have. The spells must be of 4th level or lower. The warded creature effectively has unbeatable spell resistance regarding the specified spell or spells. Naturally, that immunity doesn't protect a creature from spells for which spell resistance doesn't apply. Spell immunity protects against spells, spell-like effects of magic items, and innate spell-like abilities of creatures. It does not protect against supernatural or extraordinary abilities, such as breath weapons or gaze attacks.Only a particular spell can be protected against, not a certain domain or school of spells or a group of spells that are similar in effect. A creature can have only one spell immunity or greater spell immunity spell in effect on it at a time.Spell Immunity, GreaterSchool abjuration Level cleric 8This spell functions like spell immunity, except the immunity applies to spells of 8th level or lower. A creature can have only one spell immunity or greater spell immunity spell in effect on it at a time.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Summon Monster VIII",
    "short_description": "Summons extraplanar creature to fight for you.",
    "duration": "1 round/level",
    "components": "V, S, F/DF (a tiny bag and a small candle)",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "bard": 1,
      "cleric": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells with expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": [
      "seetext"
    ]
  },
  {
    "name": "Symbol of Death",
    "short_description": "Triggered rune kills nearby creatures.",
    "duration": "see text",
    "components": "V, S, M (mercury and phosphorus, plus powdered diamond and opal worth 5,000 gp each)",
    "casting_time": "10 minutes",
    "school": "Necromancy",
    "range": "0 ft. see text",
    "level": {
      "cleric": 8,
      "sorcerer": 8,
      "wizard": 8
    },
    "saves": {
      "type": "Fort"
    },
    "text": "This spell allows you to scribe a potent rune of power upon a surface. When triggered, a symbol of death kills one or more creatures within 60 feet of the symbol (treat as a burst) whose combined total current hit points do not exceed 150. The symbol of death affects the closest creatures first, skipping creatures with too many hit points to affect. Once triggered, the symbol becomes active and glows, lasting for 10 minutes per caster level or until it has affected 150 hit points' worth of creatures, whichever comes first. A creature that enters the area while the symbol of death is active is subject to its effect, whether or not that creature was in the area when it was triggered. A creature need save against the symbol only once as long as it remains within the area, though if it leaves the area and returns while the symbol is still active, it must save again.Until it is triggered, the symbol of death is inactive (though visible and legible at a distance of 60 feet). To be effective, a symbol of death must always be placed in plain sight and in a prominent location. Covering or hiding the rune renders the symbol of death ineffective, unless a creature removes the covering, in which case the symbol of death works normally.As a default, a symbol of death is triggered whenever a creature does one or more of the following, as you select: looks at the rune reads the rune touches the rune passes over the rune or passes through a portal bearing the rune. Regardless of the trigger method or methods chosen, a creature more than 60 feet from a symbol of death can't trigger it (even if it meets one or more of the triggering conditions, such as reading the rune). Once the spell is cast, a symbol of death's triggering conditions cannot be changed.In this case, \"reading\" the rune means any attempt to study it, identify it, or fathom its meaning. Throwing a cover over a symbol of death to render it inoperative triggers it if the symbol reacts to touch. You can't use a symbol of death offensively for instance, a touch-triggered symbol of death remains untriggered if an item bearing the symbol of death is used to touch a creature. Likewise, a symbol of death cannot be placed on a weapon and set to activate when the weapon strikes a foe.You can also set special triggering limitations of your own. These can be as simple or elaborate as you desire. Special conditions for triggering a symbol of death can be based on a creature's name, identity, or alignment, but otherwise must be based on observable actions or qualities. Intangibles such as level, class, HD, and hit points don't qualify. When scribing a symbol of death, you can specify a password or phrase that prevents a creature using it from triggering the symbol's effect. Anyone using the password remains immune to that particular rune's effects so long as the creature remains within 60 feet of the rune. If the creature leaves the radius and returns later, it must use the password again.You also can attune any number of creatures to the symbol of death, but doing this can extend the casting time. Attuning one or two creatures takes negligible time, and attuning a small group (as many as 10 creatures) extends the casting time to 1 hour. Attuning a large group (as many as 25 creatures) takes 24 hours. Attuning larger groups takes an additional 24 hours per 25 creatures. Any creature attuned to a symbol of death cannot trigger it and is immune to its effects, even if within its radius when it is triggered. You are automatically considered attuned to your own symbols of death, and thus always ignore the effects and cannot inadvertently trigger them.",
    "subschool": null,
    "domains": [
      "death"
    ]
  },
  {
    "name": "Unholy Aura",
    "short_description": "+4 to AC, +4 resistance, and SR 25 against good spells.",
    "duration": "1 round/level",
    "components": "V, S, F (a tiny reliquary worth 500 gp)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "20 ft.",
    "level": {
      "cleric": 8
    },
    "saves": null,
    "text": "A malevolent darkness surrounds the subjects, protecting them from attacks, granting them resistance to spells cast by good creatures, and weakening good creatures when they strike the subjects. This abjuration has four effects.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "evil"
    ]
  },
  {
    "name": "Astral Projection",
    "short_description": "Projects you and companions onto Astral Plane.",
    "duration": "see text",
    "components": "V, S, M (jacinth worth 1,000 gp)",
    "casting_time": "30 minutes",
    "school": "Necromancy",
    "range": "touch",
    "level": {
      "cleric": 9,
      "sorcerer": 9,
      "wizard": 9
    },
    "saves": null,
    "text": "By freeing your spirit from your physical body, this spell allows you to project an astral body onto another plane altogether. You can bring the astral forms of other willing creatures with you, provided that these subjects are linked in a circle with you at the time of the casting. These fellow travelers are dependent upon you and must accompany you at all times. If something happens to you during the journey, your companions are stranded wherever you left them.You project your astral self onto the Astral Plane, leaving your physical body behind on the Material Plane in a state of suspended animation. The spell projects an astral copy of you and all you wear or carry onto the Astral Plane. Since the Astral Plane touches upon other planes, you can travel astrally to any of these other planes as you will. To enter one, you leave the Astral Plane, forming a new physical body (and equipment) on the plane of existence you have chosen to enter.While you are on the Astral Plane, your astral body is connected at all times to your physical body by an incorporeal silver cord. If the cord is broken, you are killed, astrally and physically. Luckily, very few things can destroy a silver cord. When a second body is formed on a different plane, the silver cord remains invisibly attached to the new body. If the second body or the astral form is slain, the cord simply returns to your body where it rests on the Material Plane, thereby reviving it from its state of suspended animation. This is a traumatic affair, however, and you gain two permanent negative levels if your second body or astral form is slain. Although astral projections are able to function on the Astral Plane, their actions affect only creatures existing on the Astral Plane a physical body must be materialized on other planes.You and your companions may travel through the Astral Plane indefinitely. Your bodies simply wait behind in a state of suspended animation until you choose to return your spirits to them. The spell lasts until you desire to end it, or until it is terminated by some outside means, such as dispel magic cast upon either the physical body or the astral form, the breaking of the silver cord, or the destruction of your body back on the Material Plane (which kills you).When this spell ends, your astral body and all of its gear, vanishes.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Gate",
    "short_description": "Connects two planes for travel or summoning.",
    "duration": "instantaneous or concentration (up to 1 round/level) see text",
    "components": "V, S, M (see text)",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "medium",
    "level": {
      "cleric": 9,
      "sorcerer": 9,
      "wizard": 9
    },
    "saves": null,
    "text": "Casting a gate spell has two effects. First, it creates an interdimensional connection between your plane of existence and a plane you specify, allowing travel between those two planes in either direction.Second, you may then call a particular individual or kind of being through the gate.The gate itself is a circular hoop or disk from 5 to 20 feet in diameter (caster's choice) oriented in the direction you desire when it comes into existence (typically vertical and facing you). It is a two-dimensional window looking into the plane you specified when casting the spell, and anyone or anything that moves through is shunted instantly to the other side.A gate has a front and a back. Creatures moving through the gate from the front are transported to the other plane creatures moving through it from the back are not.",
    "subschool": "creation or calling",
    "domains": []
  },
  {
    "name": "Heal, Mass",
    "short_description": "As heal, but affects 1 subject/level.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "touch",
    "level": {
      "cleric": 6,
      "druid": 7
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "Heal enables you to channel positive energy into a creature to wipe away injury and afflictions. It immediately ends any and all of the following adverse conditions affecting the target: ability damage, blinded, confused, dazed, dazzled, deafened, diseased, exhausted, fatigued, feebleminded, insanity, nauseated, poisoned, sickened, and stunned. It also cures 10 hit points of damage per level of the caster, to a maximum of 150 points at 15th level.Heal does not remove negative levels or restore permanently drained ability score points.If used against an undead creature, heal instead acts like harm.Heal, MassSchool conjuration (healing) Level cleric 9",
    "subschool": "healing",
    "domains": []
  },
  {
    "name": "Implosion",
    "short_description": "Inflict 10 damage/level to one creature/round.",
    "duration": "concentration (up to 1 round per 2 levels)",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "close",
    "level": {
      "cleric": 9
    },
    "saves": {
      "type": "Fort"
    },
    "text": "This spell causes a destructive resonance in a corporeal creature's body. Each round you concentrate (including the first), you can cause one creature to collapse in on itself, inflicting 10 points of damage per caster level. If you break concentration, the spell immediately ends, though any implosions that have already happened remain in effect. You can target a particular creature only once with each casting of the spell. Implosion has no effect on creatures in gaseous form or on incorporeal creatures.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Miracle",
    "short_description": "Requests a deity's intercession.",
    "duration": "see text",
    "components": "V, S see text",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "see text",
    "level": {
      "cleric": 9
    },
    "saves": null,
    "text": "You don't so much cast a miracle as request one. You state what you would like to have happen and request that your deity (or the power you pray to for spells) intercede.A miracle can do any of the following things. Duplicate any cleric spell of 8th level or lower.  Duplicate any other spell of 7th level or lower. Undo the harmful effects of certain spells, such as feeblemind or insanity. Have any effect whose power level is in line with the above effects.Alternatively, a cleric can make a very powerful request. Casting such a miracle costs the cleric 25,000 gp in powdered diamond because of the powerful divine energies involved. Examples of especially powerful miracles of this sort could include the following: Swinging the tide of a battle in your favor by raising fallen allies to continue fighting. Moving you and your allies, with all your and their gear, from one plane to a specific locale through planar barriers with no chance of error. Protecting a city from an earthquake, volcanic eruption, flood, or other major natural disaster.In any event, a request that is out of line with the deity's (or alignment's) nature is refused.A duplicated spell allows saving throws and spell resistance as normal, but the save DCs are as for a 9th-level spell. When a miracle spell duplicates a spell with a material component that costs more than 100 gp, you must provide that component.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Soul Bind",
    "short_description": "Traps newly dead soul to prevent resurrection.",
    "duration": "permanent",
    "components": "V, S, F (see text)",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "close",
    "level": {
      "cleric": 9,
      "sorcerer": 9,
      "wizard": 9
    },
    "saves": {
      "type": "Will"
    },
    "text": "You draw the soul from a newly dead body and imprison it in a black sapphire gem. The subject must have been dead no more than 1 round per caster level. The soul, once trapped in the gem, cannot be returned through clone, raise dead, reincarnation, resurrection, true resurrection, or even a miracle or a wish. Only by destroying the gem or dispelling the spell on the gem can one free the soul (which is then still dead).The focus for this spell is a black sapphire of at least 1,000 gp value for every HD possessed by the creature whose soul is to be bound. If the gem is not valuable enough, it shatters when the binding is attempted. (While creatures have no concept of level or HD as such, the value of the gem needed to trap an individual can be researched.)",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Storm of Vengeance",
    "short_description": "Storm rains acid, lightning, and hail.",
    "duration": "concentration (maximum 10 rounds)",
    "components": "V, S",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "long",
    "level": {
      "cleric": 9,
      "druid": 9
    },
    "saves": null,
    "text": "2nd Round: Acid rains down in the area, dealing 1d6 points of acid damage (no save).3rd Round: You call six bolts of lightning down from the cloud. You decide where the bolts strike. No two bolts may be directed at the same target. Each bolt deals 10d6 points of electricity damage. A creature struck can attempt a Reflex save for half damage.4th Round: Hailstones rain down in the area, dealing 5d6 points of bludgeoning damage (no save).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": []
  },
  {
    "name": "Summon Monster IX",
    "short_description": "Summons extraplanar creature to fight for you.",
    "duration": "1 round/level",
    "components": "V, S, F/DF (a tiny bag and a small candle)",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "bard": 1,
      "cleric": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells with expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": [
      "seetext"
    ]
  },
  {
    "name": "Calm Animals",
    "short_description": "Calms 2d4 + level HD of animals.",
    "duration": "1 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "close",
    "level": {
      "druid": 1,
      "ranger": 1
    },
    "saves": {
      "type": "Will"
    },
    "text": "The affected creatures remain where they are and do not attack or flee. They are not helpless and defend themselves normally if attacked. Any threat breaks the spell on the threatened creatures.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Detect Animals or Plants",
    "short_description": "Detects kinds of animals or plants.",
    "duration": "concentration, up to 10 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "long",
    "level": {
      "druid": 1,
      "ranger": 1
    },
    "saves": null,
    "text": "You can detect a particular kind of animal or plant in a cone emanating out from you in whatever direction you face. You must think of a kind of animal or plant when using the spell, but you can change the animal or plant kind each round. The amount of information revealed depends on how long you search a particular area or focus on a specific kind of animal or plant.1st Round: Presence or absence of that kind of animal or plant in the area.2nd Round: Number of individuals of the specified kind in the area and the condition of the healthiest specimen.3rd Round: The condition (see below) and location of each individual present. If an animal or a plant is outside your line of sight, then you discern its direction but not its exact location.Conditions: For purposes of this spell, the categories of condition are as follows:",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Detect Snares and Pits",
    "short_description": "Reveals natural or primitive traps.",
    "duration": "concentration, up to 10 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "60 ft.",
    "level": {
      "druid": 1,
      "ranger": 1
    },
    "saves": null,
    "text": "You can detect simple pits, deadfalls, and snares as well as mechanical traps constructed of natural materials. The spell does not detect complex traps, including trapdoor traps.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Entangle",
    "short_description": "Plants entangle everyone in 40-ft. radius.",
    "duration": "1 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "long",
    "level": {
      "druid": 1,
      "ranger": 1
    },
    "saves": null,
    "text": "This spell causes tall grass, weeds, and other plants to wrap around creatures in the area of effect or those that enter the area. Creatures that fail their save gain the entangled condition. Creatures that make their save can move as normal, but those that remain in the area must save again at the end of your turn. Creatures that move into the area must save immediately. Those that fail must end their movement and gain the entangled condition. Entangled creatures can attempt to break free as a move action, making a Strength or Escape Artist check. The DC for this check is equal to the DC of the spell. The entire area of effect is considered difficult terrain while the effect lasts.If the plants in the area are covered in thorns, those in the area take 1 point of damage each time they fail a save against the entangle or fail a check made to break free. Other effects, depending on the local plants, might be possible at GM discretion.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Goodberry",
    "short_description": "2d4 berries each cure 1 hp (max 8 hp/24 hours).",
    "duration": "1 day/level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "druid": 1
    },
    "saves": null,
    "text": "Casting goodberry makes 2d4 freshly picked berries magical. You (as well as any other druid of 3rd or higher level) can immediately discern which berries are affected. Each transmuted berry provides nourishment as if it were a normal meal for a Medium creature. The berry also cures 1 point of damage when eaten, subject to a maximum of 8 points of such curing in any 24-hour period.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Hide from Animals",
    "short_description": "Animals can't perceive one subject/level.",
    "duration": "10 min./level",
    "components": "S, DF",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "druid": 1,
      "ranger": 1
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "Animals cannot sense the warded creatures. Even extraordinary or supernatural sensory capabilities, such as blindsense, blindsight, scent, and tremorsense, cannot detect or locate warded creatures. Animals simply act as though the warded creatures are not there. If a warded character touches an animal or attacks any creature, even with a spell, the spell ends for all recipients.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Magic Fang",
    "short_description": "One natural weapon of subject creature gets +1 on attack and damage rolls.",
    "duration": "1 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "druid": 1,
      "ranger": 1
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "Magic fang can be made permanent with a permanency spell.Magic Fang, GreaterSchool transmutation Level druid 3, ranger 3",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Pass without Trace",
    "short_description": "One subject/level leaves no tracks.",
    "duration": "1 hour/level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "druid": 1,
      "ranger": 1
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "The subject or subjects of this spell do not leave footprints or a scent trail while moving. Tracking the subjects is impossible by nonmagical means.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Produce Flame",
    "short_description": "1d6 damage + 1/level, touch or thrown.",
    "duration": "1 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "0 ft.",
    "level": {
      "druid": 1
    },
    "saves": null,
    "text": "Flames as bright as a torch appear in your open hand. The flames harm neither you nor your equipment.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "fire"
    ]
  },
  {
    "name": "Summon Nature's Ally I",
    "short_description": "Summons creature to fight for you.",
    "duration": "1 round/level",
    "components": "V, S, DF",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "druid": 1,
      "ranger": 1
    },
    "saves": null,
    "text": "This spell summons to your side a natural creature (typically an animal, fey, magical beast, outsider with the elemental subtype, or a giant). The summoned ally appears where you designate and acts immediately, on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it not to attack, to attack particular enemies, or to perform other actions as you command.A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells that have expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": []
  },
  {
    "name": "Chill Metal",
    "short_description": "Cold metal damages those who touch it.",
    "duration": "7 rounds",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "druid": 2
    },
    "saves": {
      "isObject": true,
      "type": "Will"
    },
    "text": "Chill metal makes metal extremely cold. Unattended, nonmagical metal gets no saving throw. Magical metal is allowed a saving throw against the spell. An item in a creature's possession uses the creature's saving throw bonus unless its own is higher.A creature takes cold damage if its equipment is chilled. It takes full damage if its armor, shield, or weapon is affected. The creature takes minimum damage (1 point or 2 points see the table) if it's not wearing or wielding such an item.On the first round of the spell, the metal becomes chilly and uncomfortable to touch but deals no damage. The same effect also occurs on the last round of the spell's duration. During the second (and also the next-to-last) round, icy coldness causes pain and damage. In the third, fourth, and fifth rounds, the metal is freezing cold, and causes more damage, as shown on the table below.",
    "subschool": null,
    "domains": [
      "cold"
    ]
  },
  {
    "name": "Flaming Sphere",
    "short_description": "Rolling ball of fire deals 3d6 fire damage.",
    "duration": "1 round/level",
    "components": "V, S, M/DF (tallow, brimstone, and powdered iron)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "medium",
    "level": {
      "druid": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "type": "Ref"
    },
    "text": "A burning globe of fire rolls in whichever direction you point and burns those it strikes. It moves 30 feet per round. As part of this movement, it can ascend or jump up to 30 feet to strike a target. If it enters a space with a creature, it stops moving for the round and deals 3d6 points of fire damage to that creature, though a successful Reflex save negates that damage. A flaming sphere rolls over barriers less than 4 feet tall. It ignites flammable substances it touches and illuminates the same area as a torch would.The sphere moves as long as you actively direct it (a move action for you) otherwise, it merely stays at rest and burns. It can be extinguished by any means that would put out a normal fire of its size. The surface of the sphere has a spongy, yielding consistency and so does not cause damage except by its flame. It cannot push aside unwilling creatures or batter down large obstacles. A flaming sphere winks out if it exceeds the spell's range.",
    "subschool": null,
    "domains": [
      "fire"
    ]
  },
  {
    "name": "Fog Cloud",
    "short_description": "Fog obscures vision.",
    "duration": "10 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "medium",
    "level": {
      "druid": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": null,
    "text": "The spell does not function underwater.",
    "subschool": "creation",
    "domains": []
  },
  {
    "name": "Gust of Wind",
    "short_description": "Blows away or knocks down smaller creatures.",
    "duration": "1 round",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "60 ft.",
    "level": {
      "druid": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "type": "Fort"
    },
    "text": "Small creatures are knocked prone by the force of the wind.Medium or smaller creatures are unable to move forward against the force of the wind unless they succeed at a DC 15 Strength check.Large or larger creatures may move normally within a gust of wind effect.This spell can't move a creature beyond the limit of its range.",
    "subschool": null,
    "domains": [
      "air"
    ]
  },
  {
    "name": "Heat Metal",
    "short_description": "Makes metal so hot it damages those who touch it.",
    "duration": "7 rounds ",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "druid": 2
    },
    "saves": {
      "isObject": true,
      "type": "Will"
    },
    "text": "Heat metal causes metal objects to become red-hot. Unattended, nonmagical metal gets no saving throw. Magical metal is allowed a saving throw against the spell. An item in a creature's possession uses the creature's saving throw bonus unless its own is higher.A creature takes fire damage if its equipment is heated. It takes full damage if its armor, shield, or weapon is affected. The creature takes minimum damage (1 point or 2 points see the table) if it's not wearing or wielding such an item.On the first round of the spell, the metal becomes warm and uncomfortable to touch but deals no damage. The same effect also occurs on the last round of the spell's duration. During the second (and also the next-to-last) round, intense heat causes pain and damage. In the third, fourth, and fifth rounds, the metal is searing hot, and causes more damage, as shown on the table below.",
    "subschool": null,
    "domains": [
      "fire"
    ]
  },
  {
    "name": "Reduce Animal",
    "short_description": "Shrinks one willing animal.",
    "duration": "1 hour/level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "druid": 2,
      "ranger": 3
    },
    "saves": null,
    "text": "This spell functions like reduce person, except that it affects a single willing animal. Reduce the damage dealt by the animal's natural attacks as appropriate for its new size (see Equipment how to adjust damage for size).",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Soften Earth and Stone",
    "short_description": "Turns stone to clay, or dirt to sand or mud.",
    "duration": "instantaneous",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "druid": 2
    },
    "saves": null,
    "text": "When this spell is cast, all natural, undressed earth or stone in the spell's area is softened. Wet earth becomes thick mud, dry earth becomes loose sand or dirt, and stone becomes soft clay that is easily molded or chopped. You affect a 10-foot square area to a depth of 1 to 4 feet, depending on the toughness or resilience of the ground at that spot. Magical, enchanted, dressed, or worked stone cannot be affected. Earth or stone creatures are not affected.A creature in mud must succeed on a Reflex save or be caught for 1d2 rounds and unable to move, attack, or cast spells. A creature that succeeds on its save can move through the mud at half speed, and it can't run or charge. Loose dirt is not as troublesome as mud, but all creatures in the area can move at only half their normal speed and can't run or charge over the surface. Stone softened into clay does not hinder movement, but it does allow characters to cut, shape, or excavate areas they may not have been able to affect before.While this spell does not affect dressed or worked stone, cavern ceilings or vertical surfaces such as cliff faces can be affected. Usually, this causes a moderate collapse or landslide as the loosened material peels away from the face of the wall or roof and falls (treat as a cave-in with no bury zone, see Environment).A moderate amount of structural damage can be dealt to a manufactured structure by softening the ground beneath it, causing it to settle. However, most well-built structures will only be damaged by this spell, not destroyed.",
    "subschool": null,
    "domains": [
      "earth"
    ]
  },
  {
    "name": "Summon Nature's Ally II",
    "short_description": "Summons creature to fight for you.",
    "duration": "1 round/level",
    "components": "V, S, DF",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "druid": 1,
      "ranger": 1
    },
    "saves": null,
    "text": "This spell summons to your side a natural creature (typically an animal, fey, magical beast, outsider with the elemental subtype, or a giant). The summoned ally appears where you designate and acts immediately, on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it not to attack, to attack particular enemies, or to perform other actions as you command.A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells that have expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": []
  },
  {
    "name": "Warp Wood",
    "short_description": "Bends wood.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "druid": 2
    },
    "saves": {
      "isObject": true,
      "type": "Will"
    },
    "text": "You may warp one Small or smaller object or its equivalent per caster level. A Medium object counts as two Small objects, a Large object as four, a Huge object as eight, a Gargantuan object as 16, and a Colossal object as 32.Alternatively, you can unwarp wood (effectively warping it back to normal) with this spell. Make whole, on the other hand, does no good in repairing a warped item.You can combine multiple consecutive warp wood spells to warp (or unwarp) an object that is too large for you to warp with a single spell. Until the object is completely warped, it suffers no ill effects.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Call Lightning",
    "short_description": "Calls down lightning bolts (3d6 per bolt) from sky.",
    "duration": "1 min./level",
    "components": "V, S",
    "casting_time": "1 round",
    "school": "Evocation",
    "range": "medium",
    "level": {
      "druid": 3
    },
    "saves": {
      "type": "Ref"
    },
    "text": "Immediately upon completion of the spell, and once per round thereafter, you may call down a 5-foot-wide, 30-foot-long, vertical bolt of lightning that deals 3d6 points of electricity damage. The bolt of lightning flashes down in a vertical stroke at whatever target point you choose within the spell's range (measured from your position at the time). Any creature in the target square or in the path of the bolt is affected.You need not call a bolt of lightning immediately other actions, even spellcasting, can be performed first. Each round after the first you may use a standard (concentrating on the spell) to call a bolt. You may call a total number of bolts equal to your caster level (maximum 10 bolts).",
    "subschool": null,
    "domains": [
      "electricity"
    ]
  },
  {
    "name": "Diminish Plants",
    "short_description": "Reduces size or blights growth of normal plants.",
    "duration": "instantaneous",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "see text",
    "level": {
      "druid": 3,
      "ranger": 3
    },
    "saves": null,
    "text": "This spell has two versions.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Dominate Animal",
    "short_description": "One animal obeys your silent mental commands and orders.",
    "duration": "1 round/level",
    "components": "V, S",
    "casting_time": "1 round",
    "school": "Enchantment",
    "range": "close",
    "level": {
      "druid": 3
    },
    "saves": {
      "type": "Will"
    },
    "text": "This spell allows you to enchant the targeted animal and direct it with simple commands such as \"Attack,\" \"Run,\" and \"Fetch.\" Suicidal or self-destructive commands (including an order to attack a creature two or more size categories larger than the dominated animal) are simply ignored.Dominate animal establishes a mental link between you and the subject creature. The animal can be directed by silent mental command as long as it remains in range. You need not see the creature to control it. You do not receive direct sensory input from the creature, but you know what it is experiencing. Because you are directing the animal with your own intelligence, it may be able to undertake actions normally beyond its own comprehension. You need not concentrate exclusively on controlling the creature unless you are trying to direct it to do something it normally couldn't do. Changing your instructions or giving a dominated creature a new command is the equivalent of redirecting a spell, so it is a move action.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Magic Fang, Greater",
    "short_description": "One natural weapon gets + 1/four levels (max. +5).",
    "duration": "1 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "druid": 1,
      "ranger": 1
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "Magic fang can be made permanent with a permanency spell.Magic Fang, GreaterSchool transmutation Level druid 3, ranger 3",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Plant Growth",
    "short_description": "Grows vegetation, improves crops.",
    "duration": "instantaneous",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "see text",
    "level": {
      "druid": 3,
      "ranger": 3
    },
    "saves": null,
    "text": "Plant growth has different effects depending on the version chosen.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Sleet Storm",
    "short_description": "Hampers vision and movement.",
    "duration": "1 round/level",
    "components": "V, S, M/DF (dust and water)",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "long",
    "level": {
      "druid": 3,
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": null,
    "text": "Driving sleet blocks all sight (even darkvision) within it and causes the ground in the area to be icy. A creature can walk within or through the area of sleet at half normal speed with a DC 10 Acrobatics check. Failure means it can't move in that round, while failure by 5 or more means it falls (see the Acrobatics skill for details).The sleet extinguishes torches and small fires.",
    "subschool": "creation",
    "domains": [
      "cold"
    ]
  },
  {
    "name": "Snare",
    "short_description": "Creates a magic booby trap.",
    "duration": "Until triggered or broken",
    "components": "V, S, DF",
    "casting_time": "3 rounds",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "druid": 3,
      "ranger": 2
    },
    "saves": null,
    "text": "This spell enables you to make a snare that functions as a magic trap. The snare can be made from any supple vine, a thong, or a rope. When you cast snare upon it, the cordlike object blends with its surroundings (DC 23 Perception check for a character with the trapfinding ability to locate). One end of the snare is tied in a loop that contracts around one or more of the limbs of any creature stepping inside the circle.If a strong and supple tree is nearby, the snare can be fastened to it. The spell causes the tree to bend, straightening when the loop is triggered, dealing 1d6 points of damage to the creature trapped and lifting it off the ground by the trapped limb or limbs. If no such tree is available, the cordlike object tightens around the creature, dealing no damage but causing it to be entangled.The snare is magical. To escape, a trapped creature must make a DC 23 Escape Artist check or a DC 23 Strength check that is a full-round action. The snare has AC 7 and 5 hit points. A successful escape from the snare breaks the loop and ends the spell.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Spike Growth",
    "short_description": "Creatures in area take 1d4 damage, may be slowed.",
    "duration": "1 hour/level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "medium",
    "level": {
      "druid": 3,
      "ranger": 2
    },
    "saves": {
      "type": "Ref"
    },
    "text": "Any ground-covering vegetation in the spell's area becomes very hard and sharply pointed without changing its appearance.In areas of bare earth, roots and rootlets act in the same way. Typically, spike growth can be cast in any outdoor setting except open water, ice, heavy snow, sandy desert, or bare stone. Any creature moving on foot into or through the spell's area takes 1d4 points of piercing damage for each 5 feet of movement through the spiked area.Any creature that takes damage from this spell must also succeed on a Reflex save or suffer injuries to its feet and legs that slow its land speed by half. This speed penalty lasts for 24 hours or until the injured creature receives a cure spell (which also restores lost hit points). Another character can remove the penalty by taking 10 minutes to dress the injuries and succeeding on a Heal check against the spell's save DC.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Summon Nature's Ally III",
    "short_description": "Summons creature to fight for you.",
    "duration": "1 round/level",
    "components": "V, S, DF",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "druid": 1,
      "ranger": 1
    },
    "saves": null,
    "text": "This spell summons to your side a natural creature (typically an animal, fey, magical beast, outsider with the elemental subtype, or a giant). The summoned ally appears where you designate and acts immediately, on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it not to attack, to attack particular enemies, or to perform other actions as you command.A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells that have expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": []
  },
  {
    "name": "Antiplant Shell",
    "short_description": "Keeps animated plants at bay.",
    "duration": "1 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "10 ft.",
    "level": {
      "druid": 4
    },
    "saves": null,
    "text": "The antiplant shell spell creates an invisible, mobile barrier that keeps all creatures within the shell protected from attacks by plant creatures or animated plants. As with many abjuration spells, forcing the barrier against creatures that the spell keeps at bay strains and collapses the field.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Blight",
    "short_description": "Withers one plant or deals 1d6/level damage to plant creature.",
    "duration": "instantaneous",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "touch",
    "level": {
      "druid": 4,
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": {
      "type": "Fort"
    },
    "text": "This spell withers a single plant of any size. An affected plant creature takes 1d6 points of damage per level (maximum 15d6) and may attempt a Fortitude saving throw for half damage. A plant that isn't a creature doesn't receive a save and immediately withers and dies.This spell has no effect on the soil or surrounding plant life.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Command Plants",
    "short_description": "Sway the actions of plant creatures.",
    "duration": "1 day/level",
    "components": "V",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "druid": 4,
      "ranger": 3
    },
    "saves": {
      "type": "Will"
    },
    "text": "This spell allows you some degree of control over one or more plant creatures. Affected plant creatures can understand you, and they perceive your words and actions in the most favorable way (treat their attitude as friendly). They will not attack you while the spell lasts. You can try to give a subject orders, but you must win an opposed Charisma check to convince it to do anything it wouldn't ordinarily do. (Retries are not allowed.) A commanded plant never obeys suicidal or obviously harmful orders, but it might be convinced that something very dangerous is worth doing.You can affect a number of plant creatures whose combined level or HD do not exceed twice your level.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Rusting Grasp",
    "short_description": "Your touch corrodes iron and alloys.",
    "duration": "see text",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "druid": 4
    },
    "saves": null,
    "text": "Any iron or iron alloy item you touch crumbles into rust. If the item is so large that it cannot fit within a 3-foot radius, a 3-foot-radius volume of the metal is rusted and destroyed. Magic items made of metal are immune to this spell.You may employ rusting grasp in combat with a successful melee touch attack. Rusting grasp used in this way instantaneously destroys 1d6 points of AC gained from metal armor (to the maximum amount of protection the armor offers) through corrosion. Weapons in use by an opponent targeted by the spell are more difficult to grasp. You must succeed on a melee touch attack against the weapon. A metal weapon that is hit is destroyed. Striking at an opponent's weapon provokes an attack of opportunity. Also, you must touch the weapon and not the other way around.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Spike Stones",
    "short_description": "Creatures in area take 1d8 damage, may also be slowed.",
    "duration": "1 hour/level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "medium",
    "level": {
      "druid": 4
    },
    "saves": {
      "type": "Ref"
    },
    "text": "Rocky ground, stone floors, and similar surfaces shape themselves into long, sharp points that blend into the background.Spike stones impede progress through an area and deal damage. Any creature moving on foot into or through the spell's area moves at half speed. In addition, each creature moving through the area takes 1d8 points of piercing damage for each 5 feet of movement through the spiked area.Any creature that takes damage from this spell must also succeed on a Reflex save to avoid injuries to its feet and legs. A failed save causes the creature's speed to be reduced to half normal for 24 hours or until the injured creature receives a cure spell (which also restores lost hit points). Another character can remove the penalty by taking 10 minutes to dress the injuries and succeeding on a Heal check against the spell's save DC.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "earth"
    ]
  },
  {
    "name": "Summon Nature's Ally IV",
    "short_description": "Summons creature to fight for you.",
    "duration": "1 round/level",
    "components": "V, S, DF",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "druid": 1,
      "ranger": 1
    },
    "saves": null,
    "text": "This spell summons to your side a natural creature (typically an animal, fey, magical beast, outsider with the elemental subtype, or a giant). The summoned ally appears where you designate and acts immediately, on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it not to attack, to attack particular enemies, or to perform other actions as you command.A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells that have expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": []
  },
  {
    "name": "Animal Growth",
    "short_description": "One animal doubles in size.",
    "duration": "1 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "medium",
    "level": {
      "druid": 5,
      "ranger": 4,
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": {
      "type": "Fort"
    },
    "text": "All equipment worn or carried by the animal is similarly enlarged by the spell, though this change has no effect on the magical properties of any such equipment.Any enlarged item that leaves the enlarged creature's possession instantly returns to its normal size.The spell gives no means of command over an enlarged animal.Multiple magical effects that increase size do not stack.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Awaken",
    "short_description": "Animal or tree gains human intellect.",
    "duration": "instantaneous",
    "components": "V, S, M (herbs and oils worth 2,000 gp), DF",
    "casting_time": "24 hours",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "druid": 5
    },
    "saves": {
      "type": "Will"
    },
    "text": "An awakened tree has characteristics as if it were an animated object, except that it gains the plant type and its Intelligence, Wisdom, and Charisma scores are each 3d6. An awakened plant gains the ability to move its limbs, roots, vines, creepers, and so forth, and it has senses similar to a human's.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Baleful Polymorph",
    "short_description": "Turns subject into harmless animal.",
    "duration": "permanent",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "druid": 5,
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "If the spell succeeds, the subject must also make a Will save. If this second save fails, the creature loses its extraordinary, supernatural, and spell-like abilities, loses its ability to cast spells (if it had the ability), and gains the alignment, special abilities, and Intelligence, Wisdom, and Charisma scores of its new form in place of its own. It still retains its class and level (or HD), as well as all benefits deriving therefrom (such as base attack bonus, base save bonuses, and hit points). It retains any class features (other than spellcasting) that aren't extraordinary, supernatural, or spell-like abilities.Any polymorph effects on the target are automatically dispelled when a target fails to resist the effects of baleful polymorph, and as long as baleful polymorph remains in effect, the target cannot use other polymorph spells or effects to assume a new form. Incorporeal or gaseous creatures are immune to baleful polymorph, and a creature with the shapechanger subtype can revert to its natural form as a standard.",
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Commune with Nature",
    "short_description": "Learn about terrain for 1 mile/level.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "10 minutes",
    "school": "Divination",
    "range": "personal",
    "level": {
      "druid": 5,
      "ranger": 4
    },
    "saves": null,
    "text": "You become one with nature, attaining knowledge of the surrounding territory. You instantly gain knowledge of as many as three facts from among the following subjects: the ground or terrain, plants, minerals, bodies of water, people, general animal population, presence of woodland creatures, presence of powerful unnatural creatures, or even the general state of the natural setting.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Control Winds",
    "short_description": "Changes wind direction and speed.",
    "duration": "10 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "40 ft./level",
    "level": {
      "druid": 5
    },
    "saves": {
      "type": "Fort"
    },
    "text": "You alter wind force in the area surrounding you. You can make the wind blow in a certain direction or manner, increase its strength, or decrease its strength. The new wind direction and strength persist until the spell ends or until you choose to alter your handiwork, which requires concentration. You may create an \"eye\" of calm air up to 80 feet in diameter at the center of the area if you so desire, and you may choose to limit the area to any cylindrical area less than your full limit.Wind Direction: You may choose one of four basic wind patterns to function over the spell's area. A downdraft blows from the center outward in equal strength in all directions. An updraft blows from the outer edges in toward the center in equal strength from all directions, veering upward before impinging on the eye in the center. Rotation causes the winds to circle the center in clockwise or counterclockwise fashion. A blast simply causes the winds to blow in one direction across the entire area from one side to the other.Wind Strength: For every three caster levels, you can increase or decrease wind strength by one level. Each round on your turn, a creature in the wind must make a Fortitude save or suffer the effect of being in the windy area. See Environment for more details.",
    "subschool": null,
    "domains": [
      "air"
    ]
  },
  {
    "name": "Stoneskin",
    "short_description": "Grants DR 10/adamantine.",
    "duration": "10 min./level or until discharged",
    "components": "V, S, M (granite and diamond dust worth 250 gp)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "druid": 5,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "The warded creature gains resistance to blows, cuts, stabs, and slashes. The subject gains DR 10/adamantine. It ignores the first 10 points of damage each time it takes damage from a weapon, though an adamantine weapon bypasses the reduction. Once the spell has prevented a total of 10 points of damage per caster level (maximum 150 points), it is discharged.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Summon Nature's Ally V",
    "short_description": "Summons creature to fight.",
    "duration": "1 round/level",
    "components": "V, S, DF",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "druid": 1,
      "ranger": 1
    },
    "saves": null,
    "text": "This spell summons to your side a natural creature (typically an animal, fey, magical beast, outsider with the elemental subtype, or a giant). The summoned ally appears where you designate and acts immediately, on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it not to attack, to attack particular enemies, or to perform other actions as you command.A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells that have expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": []
  },
  {
    "name": "Transmute Mud to Rock",
    "short_description": "Transforms two 10-ft. cubes per level.",
    "duration": "permanent",
    "components": "V, S, M/DF (sand, lime, and water)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "medium",
    "level": {
      "druid": 5,
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "This spell permanently transforms normal mud or quicksand of any depth into soft stone (sandstone or a similar mineral).Any creature in the mud is allowed a Reflex save to escape before the area is hardened to stone.Transmute mud to rock counters and dispels transmute rock to mud.",
    "subschool": null,
    "domains": [
      "earth"
    ]
  },
  {
    "name": "Transmute Rock to Mud",
    "short_description": "Transforms two 10-ft. cubes per level.",
    "duration": "permanent see text",
    "components": "V, S, M/DF (clay and water)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "medium",
    "level": {
      "druid": 5,
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "If transmute rock to mud is cast upon the ceiling of a cavern or tunnel, the mud falls to the floor and spreads out in a pool at a depth of 5 feet. The falling mud and the ensuing cave-in deal 8d6 points of bludgeoning damage to anyone caught directly beneath the targeted area, or half damage to those who succeed on Reflex saves.Castles and large stone buildings are generally immune to the effect of the spell, since transmute rock to mud can't affect worked stone and doesn't reach deep enough to undermine such buildings' foundations. However, small buildings or structures often rest upon foundations shallow enough to be damaged or even partially toppled by this spell.",
    "subschool": null,
    "domains": [
      "earth"
    ]
  },
  {
    "name": "Tree Stride",
    "short_description": "Step from one tree to another far away.",
    "duration": "1 hour/level or until expended see textWhen you cast this spell, you gain the ability to step into a tree, magically infusing yourself with the plant. Once within a tree, you can teleport from that particular tree to another tree. The trees you enter must be of the same kind, must be living, and must have girth at least equal to yours. By moving into an oak tree (for example), you instantly know the location of all other oak trees within transport range (see below) and may choose whether you want to pass into one or simply step back out of the tree you moved into. You may choose to pass to any tree of the appropriate kind within the transport range as shown on the following table.Type of TreeTransport RangeOak, ash, yew3,000 feetElm, linden2,000 feetOther deciduous1,500 feetAny coniferous1,000 feet",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "personal",
    "level": {
      "druid": 5,
      "ranger": 4
    },
    "saves": null,
    "text": "When you cast this spell, you gain the ability to step into a tree, magically infusing yourself with the plant. Once within a tree, you can teleport from that particular tree to another tree. The trees you enter must be of the same kind, must be living, and must have girth at least equal to yours. By moving into an oak tree (for example), you instantly know the location of all other oak trees within transport range (see below) and may choose whether you want to pass into one or simply step back out of the tree you moved into. You may choose to pass to any tree of the appropriate kind within the transport range as shown on the following table.Type of TreeTransport RangeOak, ash, yew3,000 feetElm, linden2,000 feetOther deciduous1,500 feetAny coniferous1,000 feetYou may move into a tree up to one time per caster level (passing from one tree to another counts only as moving into one tree). The spell lasts until the duration expires or you exit a tree. Each transport is a full-round action.You can, at your option, remain within a tree without transporting yourself, but you are forced out when the spell ends. If the tree in which you are concealed is chopped down or burned, you are slain if you do not exit before the process is complete.",
    "subschool": "teleportation",
    "domains": []
  },
  {
    "name": "Wall of Fire",
    "short_description": "Deals 2d4 fire damage out to 10 ft. and 1d4 out to 20 ft. Passing through wall deals 2d6 damage + 1/level.",
    "duration": "concentration + 1 round/level",
    "components": "V, S, M/DF (a piece of phosphor)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "medium",
    "level": {
      "druid": 5,
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": null,
    "text": "If you evoke the wall so that it appears where creatures are, each creature takes damage as if passing through the wall. If any 5-foot length of wall takes 20 points or more of cold damage in 1 round, that length goes away. (Do not divide cold damage by 2, as normal for objects.)Wall of fire can be made permanent with a permanency spell. A permanent wall of fire that is extinguished by cold damage becomes inactive for 10 minutes, then reforms at normal strength.",
    "subschool": null,
    "domains": [
      "fire"
    ]
  },
  {
    "name": "Wall of Thorns",
    "short_description": "Thorns damage anyone who tries to pass.",
    "duration": "10 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "medium",
    "level": {
      "druid": 5
    },
    "saves": null,
    "text": "A wall of thorns spell creates a barrier of very tough, pliable, tangled brush bearing needle-sharp thorns as long as a human's finger. Any creature forced into or attempting to move through a wall of thorns takes piercing damage per round of movement equal to 25 minus the creature's AC. Dexterity and dodge bonuses to AC do not count for this calculation. (Creatures with an AC of 25 or higher, without considering Dexterity and dodge bonuses, take no damage from contact with the wall.)You can make the wall as thin as 5 feet thick, which allows you to shape the wall as a number of 10-by-10-by-5-foot blocks equal to twice your caster level. This has no effect on the damage dealt by the thorns, but any creature attempting to break through takes that much less time to force its way through the barrier.Creatures can force their way slowly through the wall by making a Strength check as a full-round action. For every 5 points by which the check exceeds 20, a creature moves 5 feet (up to a maximum distance equal to its normal land speed). Of course, moving or attempting to move through the thorns incurs damage as described above. A creature trapped in the thorns can choose to remain motionless in order to avoid taking any more damage.Any creature within the area of the spell when it is cast takes damage as if it had moved into the wall and is caught inside. In order to escape, it must attempt to push its way free, or it can wait until the spell ends. Creatures with the ability to pass through overgrown areas unhindered can pass through a wall of thorns at normal speed without taking damage.A wall of thorns can be breached by slow work with edged weapons. Chopping away at the wall creates a safe passage 1 foot deep for every 10 minutes of work. Normal fire cannot harm the barrier, but magical fire burns it away in 10 minutes.",
    "isDispellable": true,
    "subschool": "creation",
    "domains": []
  },
  {
    "name": "Liveoak",
    "short_description": "Oak becomes treant guardian.",
    "duration": "1 day/level",
    "components": "V, S",
    "casting_time": "10 minutes",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "druid": 6
    },
    "saves": null,
    "text": "This spell turns an oak tree into a protector or guardian. The spell can only be cast on a single tree at a time while liveoak is in effect, you can't cast it again on another tree. Liveoak must be cast on a healthy, Huge oak. A triggering phrase of up to one word per caster level is placed on the targeted oak. The liveoak spell triggers the tree into animating as a treant. If liveoak is dispelled, the tree takes root immediately wherever it happens to be. If released by you, the tree tries to return to its original location before taking root.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Move Earth",
    "short_description": "Digs trenches and builds hills.",
    "duration": "instantaneous",
    "components": "V, S, M (clay, loam, sand, and an iron blade)",
    "casting_time": "see text",
    "school": "Transmutation",
    "range": "long",
    "level": {
      "druid": 6,
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": null,
    "text": "Move earth moves dirt (clay, loam, sand, and soil), possibly collapsing embankments, moving hillocks, shifting dunes, and so forth.In no event can rock formations be collapsed or moved. The area to be affected determines the casting time. For every 150-foot square (up to 10 feet deep), casting takes 10 minutes. The maximum area, 750 feet by 750 feet, takes 4 hours and 10 minutes to move.This spell does not violently break the surface of the ground. Instead, it creates wavelike crests and troughs, with the earth reacting with glacial fluidity until the desired result is achieved. Trees, structures, rock formations, and such are mostly unaffected except for changes in elevation and relative topography.The spell cannot be used for tunneling and is generally too slow to trap or bury creatures. Its primary use is for digging or filling moats or for adjusting terrain contours before a battle.This spell has no effect on earth creatures.",
    "subschool": null,
    "domains": [
      "earth"
    ]
  },
  {
    "name": "Repel Wood",
    "short_description": "Pushes away wooden objects.",
    "duration": "1 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "60 ft.",
    "level": {
      "druid": 6
    },
    "saves": null,
    "text": "Waves of energy roll forth from you, moving in the direction that you determine, causing all wooden objects in the path of the spell to be pushed away from you to the limit of the range. Wooden objects larger than 3 inches in diameter that are fixed firmly are not affected, but loose objects are. Objects 3 inches in diameter or smaller that are fixed in place splinter and break, and the pieces move with the wave of energy. Objects affected by the spell are repelled at the rate of 40 feet per round.Objects such as wooden shields, spears, wooden weapon shafts and hafts, and arrows and bolts are pushed back, dragging those carrying them along. A creature being dragged by an item it is carrying can let go. A creature being dragged by a shield can loose it as a move action and drop it as a free action. If a spear is planted (set) in a way that prevents this forced movement, it splinters. Even magic items with wooden sections are repelled, although an antimagic field blocks the effects.The waves of energy continue to sweep down the set path for the spell's duration. After you cast the spell, the path is set, and you can then do other things or go elsewhere without affecting the spell's power.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Spellstaff",
    "short_description": "Stores one spell in wooden quarterstaff.",
    "duration": "permanent until discharged",
    "components": "V, S, F (the staff that stores the spell)",
    "casting_time": "10 minutes",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "druid": 6
    },
    "saves": {
      "isObject": true,
      "type": "Will"
    },
    "text": "You store one spell that you can normally cast in a wooden quarterstaff. Only one such spell can be stored in a staff at a given time, and you cannot have more than one spellstaff at any given time. You can cast a spell stored within a staff just as though it were among those you had prepared, but it does not count against your normal allotment for a given day. You use up any applicable material components required to cast the spell when you store it in the spellstaff.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Stone Tell",
    "short_description": "Talk to natural or worked stone.",
    "duration": "1 min./level",
    "components": "V, S, DF",
    "casting_time": "10 minutes",
    "school": "Divination",
    "range": "personal",
    "level": {
      "druid": 6
    },
    "saves": null,
    "text": "You gain the ability to speak with stones, which relate to you who or what has touched them as well as revealing what is covered or concealed behind or under them. The stones relate complete descriptions if asked. A stone's perspective, perception, and knowledge may prevent the stone from providing the details you are looking for. You can speak with natural or worked stone.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Summon Nature's Ally VI",
    "short_description": "Summons creature to fight.",
    "duration": "1 round/level",
    "components": "V, S, DF",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "druid": 1,
      "ranger": 1
    },
    "saves": null,
    "text": "This spell summons to your side a natural creature (typically an animal, fey, magical beast, outsider with the elemental subtype, or a giant). The summoned ally appears where you designate and acts immediately, on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it not to attack, to attack particular enemies, or to perform other actions as you command.A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells that have expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": []
  },
  {
    "name": "Transport via Plants",
    "short_description": "Move instantly from one plant to another of the same kind.",
    "duration": "1 round",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "unlimited",
    "level": {
      "druid": 6
    },
    "saves": null,
    "text": "You can enter any normal plant (equal to your size or larger) and pass any distance to a plant of the same kind in a single round, regardless of the distance separating the two. The plants must be alive. The destination plant need not be familiar to you. If you are uncertain of the location of a particular kind of destination plant, you need merely designate direction and distance and the transport via plants spell moves you as close as possible to the desired location. If a particular destination plant is desired but the plant is not living, the spell fails and you are ejected from the entry plant.You can bring along objects as long as their weight doesn't exceed your maximum load. You may also bring one additional willing Medium or smaller creature (carrying gear or objects up to its maximum load) or its equivalent per three caster levels. Use the following equivalents to determine the maximum number of larger creatures you can bring along: a Large creature counts as two Medium creatures, a Huge creature counts as four Medium creatures, and so forth. All creatures to be transported by the spell must be in physical contact with one another, and at least one of those creatures must be in contact with you.You can't use this spell to travel through plant creatures.The destruction of an occupied plant slays you and any creatures you have brought along, and ejects the bodies and all carried objects from it.",
    "subschool": "teleportation",
    "domains": []
  },
  {
    "name": "Animate Plants",
    "short_description": "One or more plants animate and fight for you.",
    "duration": "1 round/level or 1 hour/level see text",
    "components": "V",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "druid": 7
    },
    "saves": null,
    "text": "You imbue inanimate plants with mobility and a semblance of life. Each animated plant then immediately attacks whomever or whatever you initially designate as though it were an animated object of the appropriate size category. You may animate one Large or smaller plant, or a number of larger plants as follows: a Huge plant counts as two Large or smaller plants, a Gargantuan plant as four, and a Colossal plant as eight. You can change the designated target or targets as a move action, as if directing an active spell.Use the statistics for animated objects, except that plants smaller than Large don't have hardness.Animate plants cannot affect plant creatures, nor does it affect nonliving vegetable material.Entangle: Alternatively, you may imbue all plants within range with a degree of mobility, which allows them to entwine around creatures in the area. This usage of the spell duplicates the effect of an entangle spell. Spell resistance does not keep creatures from being entangled. This effect lasts 1 hour per caster level.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Changestaff",
    "short_description": "Your staff becomes a treant on command.",
    "duration": "1 hour/level",
    "components": "V, S, F (a quarterstaff that has been carved and polished for 28 days)",
    "casting_time": "1 round",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "druid": 7
    },
    "saves": null,
    "text": "You change a specially prepared quarterstaff into a Huge treant-like creature, about 24 feet tall. When you plant the end of the staff in the ground and speak a special command to conclude the casting of the spell, your staff turns into a creature that looks and fights just like a treant. The staff-treant defends you and obeys any spoken commands. However, it is by no means a true treant it cannot converse with actual treants or control trees. If the staff-treant is reduced to 0 or fewer hit points, it crumbles to powder and the staff is destroyed. Otherwise, the staff returns to its normal form when the spell duration expires (or when the spell is dismissed), and it can be used as the focus for another casting of the spell. The staff-treant is always at full strength when created, despite any wounds it may have incurred the last time it appeared.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Summon Nature's Ally VII",
    "short_description": "Summons creature to fight.",
    "duration": "1 round/level",
    "components": "V, S, DF",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "druid": 1,
      "ranger": 1
    },
    "saves": null,
    "text": "This spell summons to your side a natural creature (typically an animal, fey, magical beast, outsider with the elemental subtype, or a giant). The summoned ally appears where you designate and acts immediately, on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it not to attack, to attack particular enemies, or to perform other actions as you command.A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells that have expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": []
  },
  {
    "name": "Transmute Metal to Wood",
    "short_description": "Metal within 40 ft. becomes wood.",
    "duration": "instantaneous",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "long",
    "level": {
      "druid": 7
    },
    "saves": null,
    "text": "Only limited wish, miracle, wish, or similar magic can restore a transmuted object to its metallic state.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Control Plants",
    "short_description": "Controls actions of one or more plant creatures.",
    "duration": "1 min./level",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "druid": 8
    },
    "saves": {
      "type": "Will"
    },
    "text": "This spell enables you to control the actions of one or more plant creatures for a short period of time. You command the creatures by voice and they understand you, no matter what language you speak. Even if vocal communication is impossible, the controlled plants do not attack you. At the end of the spell, the subjects revert to their normal behavior.Suicidal or self-destructive commands are simply ignored.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Repel Metal or Stone",
    "short_description": "Pushes away metal and stone.",
    "duration": "1 round/level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "60 ft.",
    "level": {
      "druid": 8
    },
    "saves": null,
    "text": "This spell creates waves of invisible energy that roll forth from you. All metal or stone objects in the path of the spell are pushed away from you to the limit of the range. Fixed metal or stone objects larger than 3 inches in diameter and loose objects weighing more than 500 pounds are not affected. Anything else, including animated objects, small boulders, and creatures in metal armor, moves back. Fixed objects 3 inches in diameter or smaller bend or break, and the pieces move with the wave of energy. Objects affected by the spell are repelled at the rate of 40 feet per round.Objects such as metal armor, swords, and the like are pushed back, dragging their bearers with them. Even magic items with metal components are repelled, although an antimagic field blocks the effects. A creature being dragged by an item it is carrying can let go. A creature being dragged by a shield can loose it as a move action and drop it as a free action.The waves of energy continue to sweep down the set path for the spell's duration. After you cast the spell, the path is set, and you can then do other things or go elsewhere without affecting the spell's power.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "earth"
    ]
  },
  {
    "name": "Summon Nature's Ally VIII",
    "short_description": "Summons creature to fight.",
    "duration": "1 round/level",
    "components": "V, S, DF",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "druid": 1,
      "ranger": 1
    },
    "saves": null,
    "text": "This spell summons to your side a natural creature (typically an animal, fey, magical beast, outsider with the elemental subtype, or a giant). The summoned ally appears where you designate and acts immediately, on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it not to attack, to attack particular enemies, or to perform other actions as you command.A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells that have expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": []
  },
  {
    "name": "Antipathy",
    "short_description": "Object or location affected by spell repels certain creatures.",
    "duration": "2 hours/level",
    "components": "V, S, M/DF (a lump of alum soaked in vinegar)",
    "casting_time": "1 hour",
    "school": "Enchantment",
    "range": "close",
    "level": {
      "druid": 9,
      "sorcerer": 8,
      "wizard": 8
    },
    "saves": {
      "type": "Will"
    },
    "text": "You cause an object or location to emanate magical vibrations that repel either a specific kind of intelligent creature or creatures of a particular alignment, as defined by you. The kind of creature to be affected must be named specifically. A creature subtype is not specific enough. Likewise, the specific alignment to be repelled must be named.Creatures of the designated kind or alignment feel an urge to leave the area or to avoid the affected item.A compulsion forces them to abandon the area or item, shunning it and never willingly returning to it while the spell is in effect. A creature that makes a successful saving throw can stay in the area or touch the item but feels uncomfortable doing so. This distracting discomfort reduces the creature's Dexterity score by 4 points.Antipathy counters and dispels sympathy.",
    "isDispellable": true,
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Elemental Swarm",
    "short_description": "Summons multiple elementals.",
    "duration": "10 min./level",
    "components": "V, S",
    "casting_time": "10 minutes",
    "school": "Conjuration",
    "range": "medium",
    "level": {
      "druid": 9
    },
    "saves": null,
    "text": "This spell opens a portal to an Elemental Plane and summons elementals from it. A druid can choose any plane (Air, Earth, Fire, or Water) a cleric opens a portal to the plane matching his domain.When the spell is complete, 2d4 Large elementals appear. Ten minutes later, 1d4 Huge elementals appear. Ten minutes after that, one greater elemental appears. Each elemental has maximum hit points per HD. Once these creatures appear, they serve you for the duration of the spell.The elementals obey you explicitly and never attack you, even if someone else manages to gain control over them. You do not need to concentrate to maintain control over the elementals. You can dismiss them singly or in groups at any time.When you use a summoning spell to summon an air, earth, fire, or water creature, it is a spell of that type.",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": [
      "seetext"
    ]
  },
  {
    "name": "Shapechange",
    "short_description": "Transforms you into certain creatures, and lets you change forms once per round.",
    "duration": "10 min./level This spell allows you to take the form of a wide variety of creatures. This spell can function as",
    "components": "V, S, F (jade circlet worth 1,500 gp)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "druid": 9,
      "sorcerer": 9,
      "wizard": 9
    },
    "saves": null,
    "text": "This spell allows you to take the form of a wide variety of creatures. This spell can function as alter self, beast shape IV, elemental body IV, form of the dragon III, giant form II, and plant shape III depending on what form you take. You can change form once each round as a free action. The change takes place either immediately before your regular action or immediately after it, but not during the action.",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Summon Nature's Ally IX",
    "short_description": "Summons creature to fight.",
    "duration": "1 round/level",
    "components": "V, S, DF",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "druid": 1,
      "ranger": 1
    },
    "saves": null,
    "text": "This spell summons to your side a natural creature (typically an animal, fey, magical beast, outsider with the elemental subtype, or a giant). The summoned ally appears where you designate and acts immediately, on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it not to attack, to attack particular enemies, or to perform other actions as you command.A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells that have expensive material components (such as wish).",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": []
  },
  {
    "name": "Bless Weapon",
    "short_description": "Weapon strikes true against evil foes.",
    "duration": "1 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "paladin": 1
    },
    "saves": null,
    "text": "In addition, all critical hit rolls against evil foes are automatically successful, so every threat is a critical hit. This last effect does not apply to any weapon that already has a magical effect related to critical hits, such as a keen weapon or a vorpal sword.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Protection from Chaos/Evil",
    "short_description": "+2 to AC and saves, plus additional protection against selected alignment.",
    "duration": "1 min./level",
    "components": "V, S, M/DF",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "cleric": 1,
      "paladin": 1,
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell wards a creature from attacks by evil creatures, from mental control, and from summoned creatures. It creates a magical barrier around the subject at a distance of 1 foot. The barrier moves with the subject and has three major effects.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "good"
    ]
  },
  {
    "name": "Heal Mount",
    "short_description": "As heal on horse or other special mount.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "touch",
    "level": {
      "paladin": 3
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell functions like heal, but it affects only the paladin's special mount (typically a horse).",
    "subschool": "healing",
    "domains": []
  },
  {
    "name": "Dispel Evil",
    "short_description": "+4 bonus against attacks by evil creatures.",
    "duration": "1 round/level or until discharged, whichever comes first ",
    "components": "V, S, DF",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "cleric": 5,
      "paladin": 4
    },
    "saves": null,
    "text": "Shimmering, white holy energy surrounds you. This energy has three effects.",
    "subschool": null,
    "domains": [
      "good"
    ]
  },
  {
    "name": "Holy Sword",
    "short_description": "Weapon becomes +5, deals +2d6 damage against evil.",
    "duration": "1 round/level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "touch",
    "level": {
      "paladin": 4
    },
    "saves": null,
    "text": "If this spell is cast on a magic weapon, the powers of the spell supercede any that the weapon normally has, rendering the normal enhancement bonus and powers of the weapon inoperative for the duration of the spell. This spell is not cumulative with bless weapon or any other spell that might modify the weapon in any way. This spell does not work on artifacts. A masterwork weapon's bonus to attack does not stack with an enhancement bonus to attack.",
    "subschool": null,
    "domains": [
      "good"
    ]
  },
  {
    "name": "Darkvision",
    "short_description": "See 60 ft. in total darkness.",
    "duration": "1 hour/level",
    "components": "V, S, M (either a pinch of dried carrot or an agate)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "ranger": 3,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "The subject gains the ability to see 60 feet even in total darkness. Darkvision is black and white only but otherwise like normal sight.Darkvision can be made permanent with a permanency spell.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Nondetection",
    "short_description": "Hides subject from divination, scrying.",
    "duration": "1 hour/level",
    "components": "V, S, M (diamond dust worth 50 gp)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "ranger": 4,
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": {
      "isHarmless": true,
      "isObject": true,
      "type": "Will"
    },
    "text": "If cast on a creature, nondetection wards the creature's gear as well as the creature itself.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Acid Splash",
    "short_description": "Orb deals 1d3 acid damage.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": null,
    "text": "You fire a small orb of acid at the target. You must succeed on a ranged touch attack to hit your target. The orb deals 1d3 points of acid damage. This acid disappears after 1 round.",
    "subschool": "creation",
    "domains": [
      "acid"
    ]
  },
  {
    "name": "Ray of Frost",
    "short_description": "Ray deals 1d3 cold damage.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "close",
    "level": {
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": null,
    "text": "A ray of freezing air and ice projects from your pointing finger. You must succeed on a ranged touch attack with the ray to deal damage to a target. The ray deals 1d3 points of cold damage.",
    "subschool": null,
    "domains": [
      "cold"
    ]
  },
  {
    "name": "Disrupt Undead",
    "short_description": "Deals 1d6 damage to one undead.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "close",
    "level": {
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": null,
    "text": "You direct a ray of positive energy. You must make a ranged touch attack to hit, and if the ray hits an undead creature, it deals 1d6 points of damage to it.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Touch of Fatigue",
    "short_description": "Touch attack fatigues target.",
    "duration": "1 round/level",
    "components": "V, S, M (a drop of sweat)",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "touch",
    "level": {
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": {
      "type": "Fort"
    },
    "text": "You channel negative energy through your touch, fatiguing the target. You must succeed on a touch attack to strike a target. The subject is immediately fatigued for the spell's duration.This spell has no effect on a creature that is already fatigued. Unlike with normal fatigue, the effect ends as soon as the spell's duration expires.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Arcane Mark",
    "short_description": "Inscribes a personal rune on an object or creature (visible or invisible).",
    "duration": "permanent",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Universal",
    "range": "touch",
    "level": {
      "sorcerer": 0,
      "wizard": 0
    },
    "saves": null,
    "text": "This spell allows you to inscribe your personal rune or mark, which can consist of no more than six characters. The writing can be visible or invisible. An arcane mark spell enables you to etch the rune upon any substance without harm to the material upon which it is placed. If an invisible mark is made, a detect magic spell causes it to glow and be visible, though not necessarily understandable.See invisibility, true seeing, a gem of seeing, or a robe of eyes likewise allows the user to see an invisible arcane mark. A read magic spell reveals the words, if any. The mark cannot be dispelled, but it can be removed by the caster or by an erase spell.If an arcane mark is placed on a living being, the effect gradually fades in about a month.Arcane mark must be cast on an object prior to casting instant summons on the same object (see that spell description for details).",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Mage Armor",
    "short_description": "Gives subject +4 armor bonus.",
    "duration": "1 hour/level",
    "components": "V, S, F (a piece of cured leather)",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "touch",
    "level": {
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "Unlike mundane armor, mage armor entails no armor check penalty, arcane spell failure chance, or speed reduction. Since mage armor is made of force, incorporeal creatures can't bypass it the way they do normal armor.",
    "isDispellable": true,
    "subschool": "creation",
    "domains": [
      "force"
    ]
  },
  {
    "name": "Mount",
    "short_description": "Summons riding horse for 2 hours/level.",
    "duration": "2 hours/level",
    "components": "V, S, M (a bit of horse hair)",
    "casting_time": "1 round",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "You summon a light horse or a pony (your choice) to serve you as a mount. The steed serves willingly and well. The mount comes with a bit and bridle and a riding saddle.",
    "isDispellable": true,
    "subschool": "summoning",
    "domains": []
  },
  {
    "name": "Burning Hands",
    "short_description": "1d4/level fire damage (max 5d4).",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "15 ft.",
    "level": {
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "type": "Ref"
    },
    "text": "A cone of searing flame shoots from your fingertips. Any creature in the area of the flames takes 1d4 points of fire damage per caster level (maximum 5d4). Flammable materials burn if the flames touch them. A character can extinguish burning items as a full-round action.",
    "subschool": null,
    "domains": [
      "fire"
    ]
  },
  {
    "name": "Floating Disk",
    "short_description": "Creates 3-ft.-diameter horizontal disk that holds 100 lbs./level.",
    "duration": "1 hour/level",
    "components": "V, S, M (a drop of mercury)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "close",
    "level": {
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "You create a slightly concave, circular plane of force that follows you about and carries loads for you. The disk is 3 feet in diameter and 1 inch deep at its center. It can hold 100 pounds of weight per caster level. If used to transport a liquid, its capacity is 2 gallons. The disk floats approximately 3 feet above the ground at all times and remains level. It floats along horizontally within spell range and will accompany you at a rate of no more than your normal speed each round. If not otherwise directed, it maintains a constant interval of 5 feet between itself and you. The disk winks out of existence when the spell duration expires. The disk also winks out if you move beyond its range or try to take the disk more than 3 feet away from the surface beneath it. When the disk winks out, whatever it was supporting falls to the surface beneath it.",
    "subschool": null,
    "domains": [
      "force"
    ]
  },
  {
    "name": "Magic Missile",
    "short_description": "1d4+1 damage; +1 missile per two levels above 1st (max 5).",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "medium",
    "level": {
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": null,
    "text": "The missile strikes unerringly, even if the target is in melee combat, so long as it has less than total cover or total concealment. Specific parts of a creature can't be singled out. Objects are not damaged by the spell.",
    "subschool": null,
    "domains": [
      "force"
    ]
  },
  {
    "name": "Color Spray",
    "short_description": "Knocks unconscious, blinds, and/or stuns weak creatures.",
    "duration": "instantaneous see text",
    "components": "V, S, M (red, yellow, and blue powder or colored sand)",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "15 ft.",
    "level": {
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "type": "Will"
    },
    "text": "A vivid cone of clashing colors springs forth from your hand, causing creatures to become stunned, perhaps also blinded, and possibly knocking them unconscious. Each creature within the cone is affected according to its HD.2 HD or less: The creature is unconscious, blinded, and stunned for 2d4 rounds, then blinded and stunned for 1d4 rounds, and then stunned for 1 round. (Only living creatures are knocked unconscious.)3 or 4 HD: The creature is blinded and stunned for 1d4 rounds, then stunned for 1 round.5 or more HD: The creature is stunned for 1 round.Sightless creatures are not affected by color spray.",
    "subschool": "pattern",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Enlarge Person",
    "short_description": "Humanoid creature doubles in size.",
    "duration": "1 min./level",
    "components": "V, S, M (powdered iron)",
    "casting_time": "1 round",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "type": "Fort"
    },
    "text": "A humanoid creature whose size increases to Large has a space of 10 feet and a natural reach of 10 feet. This spell does not change the target's speed.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Reduce Person",
    "short_description": "Humanoid creature halves in size.",
    "duration": "1 min./level",
    "components": "V, S, M (a pinch of powdered iron)",
    "casting_time": "1 round",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "type": "Fort"
    },
    "text": "A Small humanoid creature whose size decreases to Tiny has a space of 2-1/2 feet and a natural reach of 0 feet (meaning that it must enter an opponent's square to attack). A Large humanoid creature whose size decreases to Medium has a space of 5 feet and a natural reach of 5 feet. This spell doesn't change the target's speed.All equipment worn or carried by a creature is similarly reduced by the spell.Melee and projectile weapons deal less damage. Other magical properties are not affected by this spell. Any reduced item that leaves the reduced creature's possession (including a projectile or thrown weapon) instantly returns to its normal size. This means that thrown weapons deal their normal damage (projectiles deal damage based on the size of the weapon that fired them).Multiple magical effects that reduce size do not stack. Reduce person counters and dispels enlarge person.Reduce person can be made permanent with a permanency spell.Reduce Person, MassSchool transmutation Level sorcerer/wizard 4Target one humanoid creature/level, no two of which can be more than 30 ft. apartThis spell functions like reduce person, except that it affects multiple creatures.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Arcane Lock",
    "short_description": "Magically locks a portal or chest.",
    "duration": "permanent",
    "components": "V, S, M (gold dust worth 25 gp)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": null,
    "text": "An arcane lock spell cast upon a door, chest, or portal magically locks it. You can freely pass your own arcane lock without affecting it. If the locked object has a lock, the DC to open that lock increases by 10 while it remains attached to the object. If the object does not have a lock, this spell creates one that can only be opened with a DC 20 Disable Device skill check. A door or object secured with this spell can be opened only by breaking in or with a successful dispel magic or knock spell. Add 10 to the normal DC to break open a door or portal affected by this spell. A knock spell does not remove an arcane lock it only suppresses the effect for 10 minutes.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Protection from Arrows",
    "short_description": "Subject gains DR 10/magic against ranged attacks.",
    "duration": "1 hour/level or until discharged",
    "components": "V, S, F (a piece of tortoiseshell or turtle shell)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "The warded creature gains resistance to ranged weapons. The subject gains damage reduction 10/magic against ranged weapons. This spell doesn't grant you the ability to damage creatures with similar damage reduction. Once the spell has prevented a total of 10 points of damage per caster level (maximum 100 points), it is discharged.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Touch of Idiocy",
    "short_description": "Subject takes 1d6 penalty to Int, Wis, and Cha.",
    "duration": "10 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "touch",
    "level": {
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": null,
    "text": "With a touch, you reduce the target's mental faculties. Your successful melee touch attack applies a 1d6 penalty to the target's Intelligence, Wisdom, and Charisma scores. This penalty can't reduce any of these scores below 1.This spell's effect may make it impossible for the target to cast some or all of its spells, if the requisite ability score drops below the minimum required to cast spells of that level.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Scorching Ray",
    "short_description": "Ranged touch attack deals 4d6 fire damage, + 1 ray/four levels (max 3).",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "close",
    "level": {
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": null,
    "text": "You blast your enemies with a searing beam of fire. You may fire one ray, plus one additional ray for every four levels beyond 3rd (to a maximum of three rays at 11th level). Each ray requires a ranged touch attack to hit and deals 4d6 points of fire damage. The rays may be fired at the same or different targets, but all rays must be aimed at targets within 30 feet of each other and fired simultaneously.",
    "subschool": null,
    "domains": [
      "fire"
    ]
  },
  {
    "name": "Phantom Trap",
    "short_description": "Makes item seem trapped.",
    "duration": "permanent",
    "components": "V, S, M (special dust worth 50 gp)",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "touch",
    "level": {
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": null,
    "text": "This spell makes a lock or other small mechanism seem to be trapped to anyone who can detect traps. You place the spell upon any small mechanism or device, such as a lock, hinge, hasp, cork, cap, or ratchet. Any character able to detect traps, or who uses any spell or device enabling trap detection, is certain a real trap exists. Of course, the effect is illusory and nothing happens if the trap is \"sprung\" its primary purpose is to frighten away thieves or make them waste precious time.If another phantom trap is active within 50 feet when the spell is cast, the casting fails.",
    "isDispellable": true,
    "subschool": "glamer",
    "domains": []
  },
  {
    "name": "Levitate",
    "short_description": "Subject moves up and down at your direction.",
    "duration": "1 min./level",
    "components": "V, S, F (a leather loop or golden wire bent into a cup shape)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal or close (25 ft. + 5 ft./2 levels)",
    "level": {
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": null,
    "text": "Levitate allows you to move yourself, another creature, or an object up and down as you wish. A creature must be willing to be levitated, and an object must be unattended or possessed by a willing creature. You can mentally direct the recipient to move up or down as much as 20 feet each round doing so is a move action. You cannot move the recipient horizontally, but the recipient could clamber along the face of a cliff, for example, or push against a ceiling to move laterally (generally at half its base land speed).",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Rope Trick",
    "short_description": "As many as eight creatures hide in extradimensional space.",
    "duration": "1 hour/level",
    "components": "V, S, M (powdered corn and a twisted loop of parchment)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": null,
    "text": "When this spell is cast upon a piece of rope from 5 to 30 feet long, one end of the rope rises into the air until the whole rope hangs perpendicular to the ground, as if affixed at the upper end. The upper end is, in fact, fastened to an extradimensional space that is outside the usual multiverse of extradimensional spaces. Creatures in the extradimensional space are hidden, beyond the reach of spells (including divinations), unless those spells work across planes. The space holds as many as eight creatures (of any size). The rope cannot be removed or hidden. The rope can support up to 16,000 pounds. A weight greater than that can pull the rope free.Spells cannot be cast across the extradimensional interface, nor can area effects cross it. Those in the extradimensional space can see out of it as if a 3-foot-by-5-foot window were centered on the rope. The window is invisible, and even creatures that can see the window can't see through it. Anything inside the extradimensional space drops out when the spell ends. The rope can be climbed by only one person at a time. The rope trick spell enables climbers to reach a normal place if they do not climb all the way to the extradimensional space.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Explosive Runes",
    "short_description": "Deals 6d6 damage when read.",
    "duration": "permanent until discharged",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "touch",
    "level": {
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": null,
    "text": "You trace mystic runes upon a book, map, scroll, or similar object bearing written information. The explosive runes detonate when read, dealing 6d6 points of force damage. Anyone next to the explosive runes (close enough to read them) takes the full damage with no saving throw any other creature within 10 feet of the explosive runes is entitled to a Reflex save for half damage. The object on which the explosive runes were written also takes full damage (no saving throw).You and any characters you specifically instruct can read the protected writing without triggering the explosive runes. Likewise, you can remove the explosive runes whenever desired. Another creature can remove them with a successful dispel magic or erase spell, but attempting to dispel or erase the explosive runes and failing to do so triggers the explosion.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "force"
    ]
  },
  {
    "name": "Arcane Sight",
    "short_description": "Magical auras become visible to you.",
    "duration": "1 min./level This spell makes your eyes glow blue and allows you to see magical auras within 120 feet of you. The effect is similar to that of a",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "personal",
    "level": {
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": null,
    "text": "This spell makes your eyes glow blue and allows you to see magical auras within 120 feet of you. The effect is similar to that of a detect magic spell, but arcane sight does not require concentration and discerns aura location and power more quickly.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Fireball",
    "short_description": "1d6 damage per level, 20-ft. radius.",
    "duration": "instantaneous",
    "components": "V, S, M (a ball of bat guano and sulfur)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "long",
    "level": {
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": {
      "type": "Ref"
    },
    "text": "A fireball spell generates a searing explosion of flame that detonates with a low roar and deals 1d6 points of fire damage per caster level (maximum 10d6) to every creature within the area. Unattended objects also take this damage. The explosion creates almost no pressure.You point your finger and determine the range (distance and height) at which the fireball is to burst. A glowing, pea-sized bead streaks from the pointing digit and, unless it impacts upon a material body or solid barrier prior to attaining the prescribed range, blossoms into the fireball at that point. An early impact results in an early detonation. If you attempt to send the bead through a narrow passage, such as through an arrow slit, you must \"hit\" the opening with a ranged touch attack, or else the bead strikes the barrier and detonates prematurely.The fireball sets fire to combustibles and damages objects in the area. It can melt metals with low melting points, such as lead, gold, copper, silver, and bronze. If the damage caused to an interposing barrier shatters or breaks through it, the fireball may continue beyond the barrier if the area permits otherwise it stops at the barrier just as any other spell effect does.",
    "subschool": null,
    "domains": [
      "fire"
    ]
  },
  {
    "name": "Lightning Bolt",
    "short_description": "Electricity deals 1d6/level damage.",
    "duration": "instantaneous",
    "components": "V, S, M (fur and a glass rod)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "120 ft.",
    "level": {
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": {
      "type": "Ref"
    },
    "text": "You release a powerful stroke of electrical energy that deals 1d6 points of electricity damage per caster level (maximum 10d6) to each creature within its area. The bolt begins at your fingertips.The lightning bolt sets fire to combustibles and damages objects in its path. It can melt metals with a low melting point, such as lead, gold, copper, silver, or bronze. If the damage caused to an interposing barrier shatters or breaks through it, the bolt may continue beyond the barrier if the spell's range permits otherwise, it stops at the barrier just as any other spell effect does.",
    "subschool": null,
    "domains": [
      "electricity"
    ]
  },
  {
    "name": "Beast Shape I",
    "short_description": "You take the form and some of the powers of a Small or Medium animal.",
    "duration": "1 min./level",
    "components": "V, S, M (a piece of the creature whose form you plan to assume)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": null,
    "text": "When you cast this spell, you can assume the form of any Small or Medium creature of the animal type. If the form you assume has any of the following abilities, you gain the listed ability: climb 30 feet, fly 30 feet (average maneuverability), swim 30 feet, darkvision 60 feet, low-light vision, and scent.",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Flame Arrow",
    "short_description": "Arrows deal +1d6 fire damage.",
    "duration": "10 min./level",
    "components": "V, S, M (a drop of oil and a small piece of flint)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": null,
    "text": "This spell allows you to turn ammunition (such as arrows, crossbow bolts, shuriken, and sling stones) into fiery projectiles. Each piece of ammunition deals an extra 1d6 points of fire damage to any target it hits. A flaming projectile can easily ignite a flammable object or structure, but it won't ignite a creature it strikes.",
    "subschool": null,
    "domains": [
      "fire"
    ]
  },
  {
    "name": "Fly",
    "short_description": "Subject flies at speed of 60 ft.",
    "duration": "1 min./level",
    "components": "V, S, F (a wing feather)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "The subject can fly at a speed of 60 feet (or 40 feet if it wears medium or heavy armor, or if it carries a medium or heavy load). It can ascend at half speed and descend at double speed, and its maneuverability is good. Using a fly spell requires only as much concentration as walking, so the subject can attack or cast spells normally. The subject of a fly spell can charge but not run, and it cannot carry aloft more weight than its maximum load, plus any armor it wears. The subject gains a bonus on Fly skill checks equal to 1/2 your caster level.Should the spell duration expire while the subject is still aloft, the magic fails slowly. The subject floats downward 60 feet per round for 1d6 rounds. If it reaches the ground in that amount of time, it lands safely. If not, it falls the rest of the distance, taking 1d6 points of damage per 10 feet of fall. Since dispelling a spell effectively ends it, the subject also descends safely in this way if the fly spell is dispelled, but not if it is negated by an antimagic field.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Keen Edge",
    "short_description": "Doubles normal weapon's threat range.",
    "duration": "10 min./level ",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": {
      "isHarmless": true,
      "isObject": true,
      "type": "Will"
    },
    "text": "Multiple effects that increase a weapon's threat range (such as the keen special weapon property and the Improved Critical feat) don't stack. You can't cast this spell on a natural weapon, such as a claw.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Shrink Item",
    "short_description": "Object shrinks to one-sixteenth size.",
    "duration": "1 day/level see text",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": {
      "isObject": true,
      "type": "Will"
    },
    "text": "You are able to shrink one nonmagical item (if it is within the size limit) to 1/16 of its normal size in each dimension (to about 1/4,000 the original volume and mass). This change effectively reduces the object's size by four categories. Optionally, you can also change its now shrunken composition to a clothlike one. Objects changed by a shrink item spell can be returned to normal composition and size merely by tossing them onto any solid surface or by a word of command from the original caster. Even a burning fire and its fuel can be shrunk by this spell. Restoring the shrunken object to its normal size and composition ends the spell.Shrink item can be made permanent with a permanency spell, in which case the affected object can be shrunk and expanded an indefinite number of times, but only by the original caster.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Globe of Invulnerability, Lesser",
    "short_description": "Stops 1st- through 3rd-level spell effects.",
    "duration": "1 round/level",
    "components": "V, S, M (a glass or crystal bead)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "10 ft.",
    "level": {
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": null,
    "text": "This spell functions like lesser globe of invulnerability, except that it also excludes 4th-level spells and spell-like effects.Globe of Invulnerability, LesserSchool abjuration Level sorcerer/wizard 4Casting Time 1 standardComponents V, S, M (a glass or crystal bead)Range 10 ft.Area 10-ft.-radius spherical emanation, centered on youDuration 1 round/level (D)Saving Throw none Spell Resistance noAn immobile, faintly shimmering magical sphere surrounds you and excludes all spell effects of 3rd level or lower. The area or effect of any such spells does not include the area of the lesser globe of invulnerability. Such spells fail to affect any target located within the globe. Excluded effects include spell-like abilities and spells or spell-like effects from items. Any type of spell, however, can be cast through or out of the magical globe. Spells of 4th level and higher are not affected by the globe, nor are spells already in effect when the globe is cast. The globe can be brought down by a dispel magic spell. You can leave and return to the globe without penalty.Note that spell effects are not disrupted unless their effects enter the globe, and even then they are merely suppressed, not dispelled. If a given spell has more than one level depending on which character class is casting it, use the level appropriate to the caster to determine whether lesser globe of invulnerability stops it.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Black Tentacles",
    "short_description": "Tentacles grapple all creatures within a 20-ft. spread.",
    "duration": "1 round/level",
    "components": "V, S, M (octopus or squid tentacle)",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "medium",
    "level": {
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": null,
    "text": "This spell causes a field of rubbery black tentacles to appear, burrowing up from the floor and reaching for any creature in the area.",
    "isDispellable": true,
    "subschool": "creation",
    "domains": []
  },
  {
    "name": "Minor Creation",
    "short_description": "Creates one cloth or wood object.",
    "duration": "1 hour/level",
    "components": "V, S, M (a tiny piece of matter of the same sort of item you plan to create with minor creation)",
    "casting_time": "1 minute",
    "school": "Conjuration",
    "range": "0 ft.",
    "level": {
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": null,
    "text": "You create a nonmagical, unattended object of nonliving vegetable matter. The volume of the item created cannot exceed 1 cubic foot per caster level. You must succeed on an appropriate Craft skill check to make a complex item.Attempting to use any created object as a material component causes the spell to fail.",
    "isDispellable": true,
    "subschool": "creation",
    "domains": []
  },
  {
    "name": "Arcane Eye",
    "short_description": "Invisible floating eye moves 30 ft./round.",
    "duration": "1 min./level",
    "components": "V, S, M (a bit of bat fur)",
    "casting_time": "10 minutes",
    "school": "Divination",
    "range": "unlimited",
    "level": {
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": null,
    "text": "You create an invisible magical sensor that sends you visual information. You can create the arcane eye at any point you can see, but it can then travel outside your line of sight without hindrance. An arcane eye travels at 30 feet per round (300 feet per minute) if viewing an area ahead as a human would (primarily looking at the floor) or 10 feet per round (100 feet per minute) if examining the ceiling and walls as well as the floor ahead. It sees exactly as you would see if you were there.The eye can travel in any direction as long as the spell lasts. Solid barriers block its passage, but it can pass through a hole or space as small as 1 inch in diameter. The eye can't enter another plane of existence, even through a gate or similar magical portal.You must concentrate to use an arcane eye. If you do not concentrate, the eye is inert until you again concentrate.",
    "isDispellable": true,
    "subschool": "scrying",
    "domains": []
  },
  {
    "name": "Fire Shield",
    "short_description": "Creatures attacking you take fire damage; you're protected from heat or cold.",
    "duration": "1 round/level",
    "components": "V, S, M (phosphorus for the warm shield a firefly or glowworm for the chill shield)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "personal",
    "level": {
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": null,
    "text": "This spell wreathes you in flame and causes damage to each creature that attacks you in melee. The flames also protect you from either cold-based or fire-based attacks, depending on if you choose cool or warm flames for your fire shield.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "fireorcold"
    ]
  },
  {
    "name": "Resilient Sphere",
    "short_description": "Force globe protects but traps one subject.",
    "duration": "1 min./level",
    "components": "V, S, F (a crystal sphere)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "close",
    "level": {
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": {
      "type": "Ref"
    },
    "text": "A globe of shimmering force encloses a creature, provided the creature is small enough to fit within the diameter of the sphere. The sphere contains its subject for the spell's duration. The sphere functions as a wall of force, except that it can be negated by dispel magic. A subject inside the sphere can breathe normally. The sphere cannot be physically moved either by people outside it or by the struggles of those within.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "force"
    ]
  },
  {
    "name": "Illusory Wall",
    "short_description": "Wall, floor, or ceiling looks real, but anything can pass through.",
    "duration": "permanent",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "close",
    "level": {
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": {
      "isDisbelief": true,
      "type": "Will"
    },
    "text": "This spell creates the illusion of a wall, floor, ceiling, or similar surface. It appears absolutely real when viewed, but physical objects can pass through it without difficulty. When the spell is used to hide pits, traps, or normal doors, any detection abilities that do not require sight work normally. Touch or a probing search reveals the true nature of the surface, though such measures do not cause the illusion to disappear. Although the caster can see through his illusory wall, other creatures cannot, even if they succeed at their will save (but they do learn that it is not real).",
    "subschool": "figment",
    "domains": []
  },
  {
    "name": "Phantasmal Killer",
    "short_description": "Fearsome illusion kills subject or deals 3d6 damage.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "medium",
    "level": {
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": {
      "isDisbelief": true,
      "type": "Fort"
    },
    "text": "You create a phantasmal image of the most fearsome creature imaginable to the subject simply by forming the fears of the subject's subconscious mind into something that its conscious mind can visualize: this most horrible beast. Only the spell's\n            subject can see the phantasmal killer. You see only a vague shape. The target first gets a Will save to recognize the image as unreal. If that save fails, the phantasm touches\n            the subject, and the subject must succeed on a Fortitude save or die from fear. Even if the Fortitude save\n            is successful, the subject takes 3d6 points of damage.\n        If the subject of a phantasmal killer attack succeeds in disbelieving and possesses telepathy or is wearing a helm of telepathy, the beast can be turned upon you. You must then disbelieve it or become subject to its deadly fear attack.",
    "subschool": "phantasm",
    "domains": [
      "fear",
      "mind-affecting"
    ]
  },
  {
    "name": "Enervation",
    "short_description": "Subject gains 1d4 negative levels.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "close",
    "level": {
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": null,
    "text": "You point your finger and fire a black ray of negative energy that suppresses the life force of any living creature it strikes. You must make a ranged touch attack to hit. If you hit, the subject gains 1d4 temporary negative levels (see Special Abilities). Negative levels stack.Assuming the subject survives, it regains lost levels after a number of hours equal to your caster level (maximum 15 hours). Usually, negative levels have a chance of becoming permanent, but the negative levels from enervation don't last long enough to do so.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Beast Shape II",
    "short_description": "You take the form and some of the powers of a Tiny or Large animal.",
    "duration": "1 min./level",
    "components": "V, S, M (a piece of the creature whose form you plan to assume)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": null,
    "text": "When you cast this spell, you can assume the form of any Small or Medium creature of the animal type. If the form you assume has any of the following abilities, you gain the listed ability: climb 30 feet, fly 30 feet (average maneuverability), swim 30 feet, darkvision 60 feet, low-light vision, and scent.",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Elemental Body I",
    "short_description": "Turns you into a Small elemental.",
    "duration": "1 min/level When you cast this spell, you can assume the form of a Small air, earth, fire, or water elemental. The abilities you gain depend upon the type of elemental into which you change. Elemental abilities based on size, such as burn, vortex, and whirlwind, use the size of the elemental you transform into to determine their effect.Air elemental",
    "components": "V, S, M (the element you plan to assume)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": null,
    "text": "When you cast this spell, you can assume the form of a Small air, earth, fire, or water elemental. The abilities you gain depend upon the type of elemental into which you change. Elemental abilities based on size, such as burn, vortex, and whirlwind, use the size of the elemental you transform into to determine their effect.",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Enlarge Person, Mass",
    "short_description": "1 humanoid creature/level doubles in size.",
    "duration": "1 min./level",
    "components": "V, S, M (powdered iron)",
    "casting_time": "1 round",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "type": "Fort"
    },
    "text": "A humanoid creature whose size increases to Large has a space of 10 feet and a natural reach of 10 feet. This spell does not change the target's speed.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Reduce Person, Mass",
    "short_description": "As reduce person, but affects 1 humanoid creature/level.",
    "duration": "1 min./level",
    "components": "V, S, M (a pinch of powdered iron)",
    "casting_time": "1 round",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "sorcerer": 1,
      "wizard": 1
    },
    "saves": {
      "type": "Fort"
    },
    "text": "A Small humanoid creature whose size decreases to Tiny has a space of 2-1/2 feet and a natural reach of 0 feet (meaning that it must enter an opponent's square to attack). A Large humanoid creature whose size decreases to Medium has a space of 5 feet and a natural reach of 5 feet. This spell doesn't change the target's speed.All equipment worn or carried by a creature is similarly reduced by the spell.Melee and projectile weapons deal less damage. Other magical properties are not affected by this spell. Any reduced item that leaves the reduced creature's possession (including a projectile or thrown weapon) instantly returns to its normal size. This means that thrown weapons deal their normal damage (projectiles deal damage based on the size of the weapon that fired them).Multiple magical effects that reduce size do not stack. Reduce person counters and dispels enlarge person.Reduce person can be made permanent with a permanency spell.Reduce Person, MassSchool transmutation Level sorcerer/wizard 4Target one humanoid creature/level, no two of which can be more than 30 ft. apartThis spell functions like reduce person, except that it affects multiple creatures.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Mage's Private Sanctum",
    "short_description": "Prevents anyone from viewing or scrying an area for 24 hours.",
    "duration": "24 hours",
    "components": "V, S, M (a sheet of lead, a piece of glass, a wad of cotton, and powdered chrysolite)",
    "casting_time": "10 minutes",
    "school": "Abjuration",
    "range": "close",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "This spell ensures privacy. Anyone looking into the area from outside sees only a dark, foggy mass. Darkvision cannot penetrate it. No sounds, no matter how loud, can escape the area, so nobody can eavesdrop from outside. Those inside can see out normally.Divination (scrying) spells cannot perceive anything within the area, and those within are immune to detect thoughts. The ward prevents speech between those inside and those outside (because it blocks sound), but it does not prevent other communication, such as a sending or message spell, or telepathic communication, such as that between a wizard and his familiar.The spell does not prevent creatures or objects from moving into and out of the area.Mage's private sanctum can be made permanent with a permanency spell.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Mage's Faithful Hound",
    "short_description": "Phantom dog can guard a location and attack intruders.",
    "duration": "1 hour/caster level or until discharged, then 1 round/caster level see text",
    "components": "V, S, M (a tiny silver whistle, a piece of bone, and a thread)",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "You conjure up a phantom watchdog that is invisible to everyone but yourself. It then guards the area where it was conjured (it does not move). The hound immediately starts barking loudly if any Small or larger creature approaches within 30 feet of it. (Those within 30 feet of the hound when it is conjured may move about in the area, but if they leave and return, they activate the barking.) The hound sees invisible and ethereal creatures. It does not react to figments, but it does react to shadow illusions.",
    "subschool": "creation",
    "domains": []
  },
  {
    "name": "Planar Binding, Lesser",
    "short_description": "Traps extraplanar creature of 6 HD or less until it performs a task.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "10 minutes",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": {
      "type": "Will"
    },
    "text": "This spell functions like lesser planar binding, except that you may call a single creature of 12 HD or less, or up to three creatures of the same kind whose Hit Dice total no more than 12. Each creature gets a saving throw, makes an independent attempt to escape, and must be individually persuaded to aid you.Planar Binding, Greater",
    "subschool": "calling",
    "domains": []
  },
  {
    "name": "Secret Chest",
    "short_description": "Hides expensive chest on Ethereal Plane; you retrieve it at will.",
    "duration": "60 days or until discharged",
    "components": "V, S, F (the chest and its replica)",
    "casting_time": "10 minutes",
    "school": "Conjuration",
    "range": "see text",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "The chest must be exceptionally well crafted and expensive, constructed for you by master crafters. The cost of such a chest is never less than 5,000 gp. Once it is constructed, you must make a tiny replica (of the same materials and perfect in every detail) so that the miniature of the chest appears to be a perfect copy. (The replica costs 50 gp.) The chests are nonmagical and can be fitted with locks, wards, and so on, just as any normal chest can be.",
    "subschool": "summoning",
    "domains": []
  },
  {
    "name": "Contact Other Plane",
    "short_description": "Lets you ask question of extraplanar entity.",
    "duration": "concentration",
    "components": "V",
    "casting_time": "10 minutes",
    "school": "Divination",
    "range": "personal",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "You send your mind to another plane of existence (an Elemental Plane or some plane farther removed) in order to receive advice and information from powers there. See the accompanying table for possible consequences and results of the attempt. The powers reply in a language you understand, but they resent such contact and give only brief answers to your questions. All questions are answered with \"yes,\" \"no,\" \"maybe,\" \"never,\" \"irrelevant,\" or some other one-word answer.You must concentrate on maintaining the spell (a standard) in order to ask questions at the rate of one per round. A question is answered by the power during the same round. You may ask one question for every two caster levels.Contact with minds far removed from your home plane increases the probability that you will incur a decrease in Intelligence and Charisma due to your brain being overwhelmed, but also increases the chance of the power knowing the answer and answering correctly. Once the Outer Planes are reached, the power of the deity contacted determines the effects. (Random results obtained from the table are subject to the personalities of individual deities.) On rare occasions, this divination may be blocked by an act of certain deities or forces.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Prying Eyes",
    "short_description": "1d4 + 1/level floating eyes scout for you.",
    "duration": "1 hour/level see text",
    "components": "V, S, M (a handful of crystal marbles)",
    "casting_time": "1 minute",
    "school": "Divination",
    "range": "1 mile",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "When you create the eyes, you specify instructions you want them to follow in a command of no more than 25 words. Any knowledge you possess is known by the eyes as well.In order to report their findings, the eyes must return to your hand. Each replays in your mind all it has seen during its existence. It takes an eye 1 round to replay 1 hour of recorded images. After relaying its findings, an eye disappears. If an eye ever gets more than 1 mile away from you, it instantly ceases to exist. However, your link with the eye is such that you won't know if the eye was destroyed because it wandered out of range or because of some other event.The eyes exist for up to 1 hour per caster level or until they return to you. Dispel magic can destroy eyes. Roll separately for each eye caught in an area dispel. Of course, if an eye is sent into darkness, it could hit a wall or similar obstacle and destroy itself.Prying Eyes, GreaterSchool divination Level sorcerer/wizard 8",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Telepathic Bond",
    "short_description": "Link lets allies communicate.",
    "duration": "10 min./level",
    "components": "V, S, M (two eggshells from two different creatures)",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "close",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "You forge a telepathic bond among yourself and a number of willing creatures, each of which must have an Intelligence score of 3 or higher. Each creature included in the link is linked to all the others. The creatures can communicate telepathically through the bond regardless of language. No special power or influence is established as a result of the bond. Once the bond is formed, it works over any distance (although not from one plane to another).If desired, you may leave yourself out of the telepathic bond forged. This decision must be made at the time of casting.Telepathic bond can be made permanent with a permanency spell, though it only bonds two creatures per casting of permanency.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Cone of Cold",
    "short_description": "1d6/level cold damage.",
    "duration": "instantaneous",
    "components": "V, S, M (a small crystal or glass cone)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "60 ft.",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": {
      "type": "Ref"
    },
    "text": "Cone of cold creates an area of extreme cold, originating at your hand and extending outward in a cone. It drains heat, dealing 1d6 points of cold damage per caster level (maximum 15d6).",
    "subschool": null,
    "domains": [
      "cold"
    ]
  },
  {
    "name": "Interposing Hand",
    "short_description": "Hand provides cover against 1 opponent.",
    "duration": "1 round/level",
    "components": "V, S, F (a soft glove)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "medium",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "The hand never provokes attacks of opportunity from opponents. It cannot push through a wall of force or enter an antimagic field, but it suffers the full effect of a prismatic wall or prismatic sphere. The hand makes saving throws as its caster.Disintegrate or a successful dispel magic destroys it.Any creature weighing 2,000 pounds or less that tries to push past the hand is slowed to half its normal speed. The hand cannot reduce the speed of a creature weighing more than 2,000 pounds, but it still affects the creature's attacks. Directing the spell to a new target is a move action.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "force"
    ]
  },
  {
    "name": "Wall of Force",
    "short_description": "Wall is immune to damage.",
    "duration": "1 round /level",
    "components": "V, S, M (powdered quartz)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "close",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "A wall of force creates an invisible wall of pure force. The wall cannot move and is not easily destroyed. A wall of force is immune to dispel magic, although a mage's disjunction can still dispel it. A wall of force can be damaged by spells as normal, except for disintegrate, which automatically destroys it. It can be damaged by weapons and supernatural abilities, but a wall of force has hardness 30 and a number of hit points equal to 20 per caster level. Contact with a sphere of annihilation or rod of cancellation instantly destroys a wall of force.Breath weapons and spells cannot pass through a wall of force in either direction, although dimension door, teleport, and similar effects can bypass the barrier. It blocks ethereal creatures as well as material ones (though ethereal creatures can usually circumvent the wall by going around it, through material floors and ceilings). Gaze attacks can operate through a wall of force.The caster can form the wall into a flat, vertical plane whose area is up to one 10-foot square per level. The wall must be continuous and unbroken when formed. If its surface is broken by any object or creature, the spell fails.Wall of force can be made permanent with a permanency spell.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "force"
    ]
  },
  {
    "name": "Waves of Fatigue",
    "short_description": "Several targets become fatigued.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "30 ft.",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "Waves of negative energy render all living creatures in the spell's area fatigued. This spell has no effect on a creature that is already fatigued.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Beast Shape III",
    "short_description": "You take the form of a Diminutive or Huge animal, or Small or Medium magical beast.",
    "duration": "1 min./level",
    "components": "V, S, M (a piece of the creature whose form you plan to assume)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": null,
    "text": "When you cast this spell, you can assume the form of any Small or Medium creature of the animal type. If the form you assume has any of the following abilities, you gain the listed ability: climb 30 feet, fly 30 feet (average maneuverability), swim 30 feet, darkvision 60 feet, low-light vision, and scent.",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Elemental Body II",
    "short_description": "Turns you into a Medium elemental.",
    "duration": "1 min/level When you cast this spell, you can assume the form of a Small air, earth, fire, or water elemental. The abilities you gain depend upon the type of elemental into which you change. Elemental abilities based on size, such as burn, vortex, and whirlwind, use the size of the elemental you transform into to determine their effect.Air elemental",
    "components": "V, S, M (the element you plan to assume)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": null,
    "text": "When you cast this spell, you can assume the form of a Small air, earth, fire, or water elemental. The abilities you gain depend upon the type of elemental into which you change. Elemental abilities based on size, such as burn, vortex, and whirlwind, use the size of the elemental you transform into to determine their effect.",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Fabricate",
    "short_description": "Transforms raw materials into finished items.",
    "duration": "instantaneous",
    "components": "V, S, M (the original material, which costs the same amount as the raw materials required to craft the item to be created)",
    "casting_time": "see text",
    "school": "Transmutation",
    "range": "close",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "You convert material of one sort into a product that is of the same material. Creatures or magic items cannot be created or transmuted by the fabricate spell. The quality of items made by this spell is commensurate with the quality of material used as the basis for the new fabrication. If you work with a mineral, the target is reduced to 1 cubic foot per level instead of 10 cubic feet.You must make an appropriate Craft check to fabricate articles requiring a high degree of craftsmanship.Casting requires 1 round per 10 cubic feet of material to be affected by the spell.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Passwall",
    "short_description": "Creates passage through wood or stone wall.",
    "duration": "1 hour/level",
    "components": "V, S, M (sesame seeds)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "You create a passage through wooden, plaster, or stone walls, but not through metal or other harder materials. The passage is 10 feet deep plus an additional 5 feet deep per three caster levels above 9th (15 feet at 12th, 20 feet at 15th, and a maximum of 25 feet deep at 18th level). If the wall's thickness is more than the depth of the passage created, then a single passwall simply makes a niche or short tunnel. Several passwall spells can then form a continuing passage to breach very thick walls. When passwall ends, creatures within the passage are ejected out the nearest exit. If someone dispels the passwall or you dismiss it, creatures in the passage are ejected out the far exit, if there is one, or out the sole exit if there is only one.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Plant Shape I",
    "short_description": "Turns you into a Small or Medium plant.",
    "duration": "1 min./level",
    "components": "V, S, M (a piece of the creature whose form you plan to assume)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "When you cast this spell you can assume the form of any Small or Medium creature of the plant type. If the form you assume has any of the following abilities, you gain the listed ability: darkvision 60 feet, low-light vision, constrict, grab, and poison. If the form you assume does not possess the ability to move, your speed is reduced to 5 feet and you lose all other forms of movement. If the creature has vulnerability to an element, you gain that vulnerability.",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Polymorph",
    "short_description": "Gives one willing subject a new form.",
    "duration": "1 min/level",
    "components": "V, S, M (a piece of the creature whose form you choose)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell transforms a willing creature into an animal, humanoid or elemental of your choosing the spell has no effect on unwilling creatures, nor can the creature being targeted by this spell influence the new form assumed (apart from conveying its wishes, if any, to you verbally).If you use this spell to cause the target to take on the form of an animal, the spell functions as beast shape II. If the form is that of an elemental, the spell functions as elemental body I. If the form is that of a humanoid, the spell functions as alter self. The subject may choose to resume its normal form as a full-round action doing so ends the spell for that subject.Polymorph, GreaterSchool transmutation (polymorph) Level sorcerer/wizard 7This spell functions as polymorph except that it allows the creature to take on the form of a dragon or plant creature. If you use this spell to cause the target to take on the form of an animal or magical beast, it functions as beast shape IV. If the form is that of an elemental, the spell functions as elemental body III. If the form is that of a humanoid, the spell functions as alter self. If the form is that of a plant, the spell functions as plant shape II. If the form is that of a dragon, the spell functions as form of the dragon I. The subject may choose to resume its normal form as a full-round action doing so ends the spell.",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Permanency",
    "short_description": "Makes certain spells permanent.",
    "duration": "permanent see text",
    "components": "V, S, M (see tables below)",
    "casting_time": "2 rounds",
    "school": "Universal",
    "range": "see text",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "This spell makes the duration of certain other spells permanent. You first cast the desired spell and then follow it with the permanency spell. Depending on the spell, you must be of a minimum caster level and must expend a specific gp value of diamond dust as a material component.You can make the following spells permanent in regard to yourself.SpellMinimum Caster LevelGP CostArcane sight 11th7,500 gpComprehend languages 9th2,500 gpDarkvision 10th5,000 gpDetect magic 9th2,500 gpRead magic 9th2,500 gpSee invisibility 10th5,000 gpTongues 11th7,500 gpYou cannot cast these spells on other creatures. This application of permanency can be dispelled only by a caster of higher level than you were when you cast the spell.In addition to personal use, permanency can be used to make the following spells permanent on yourself, another creature, or an object (as appropriate).",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Globe of Invulnerability",
    "short_description": "As lesser globe of invulnerability, plus 4th-level spell effects.",
    "duration": "1 round/level",
    "components": "V, S, M (a glass or crystal bead)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "10 ft.",
    "level": {
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": null,
    "text": "This spell functions like lesser globe of invulnerability, except that it also excludes 4th-level spells and spell-like effects.Globe of Invulnerability, LesserSchool abjuration Level sorcerer/wizard 4Casting Time 1 standardComponents V, S, M (a glass or crystal bead)Range 10 ft.Area 10-ft.-radius spherical emanation, centered on youDuration 1 round/level (D)Saving Throw none Spell Resistance noAn immobile, faintly shimmering magical sphere surrounds you and excludes all spell effects of 3rd level or lower. The area or effect of any such spells does not include the area of the lesser globe of invulnerability. Such spells fail to affect any target located within the globe. Excluded effects include spell-like abilities and spells or spell-like effects from items. Any type of spell, however, can be cast through or out of the magical globe. Spells of 4th level and higher are not affected by the globe, nor are spells already in effect when the globe is cast. The globe can be brought down by a dispel magic spell. You can leave and return to the globe without penalty.Note that spell effects are not disrupted unless their effects enter the globe, and even then they are merely suppressed, not dispelled. If a given spell has more than one level depending on which character class is casting it, use the level appropriate to the caster to determine whether lesser globe of invulnerability stops it.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Guards and Wards",
    "short_description": "Array of magic effects protect area.",
    "duration": "2 hours/level",
    "components": "V, S, M (burning incense, a small measure of brimstone and oil, a knotted string, and a small amount of blood), F (a small silver rod)",
    "casting_time": "30 minutes",
    "school": "Abjuration",
    "range": "anywhere within the area to be warded",
    "level": {
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": null,
    "text": "This powerful spell is primarily used to defend a stronghold or fortress by creating a number of magical wards and effects. The ward protects 200 square feet per caster level. The warded area can be as much as 20 feet high, and shaped as you desire. You can ward several stories of a stronghold by dividing the area among them you must be somewhere within the area to be warded to cast the spell. The spell creates the following magical effects within the warded area.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Acid Fog",
    "short_description": "Fog deals acid damage.",
    "duration": "1 round/level",
    "components": "V, S, M (powdered peas and an animal hoof)",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "medium",
    "level": {
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": null,
    "text": "Acid fog creates a billowing mass of misty vapors like the solid fog spell. In addition to slowing down creatures and obscuring sight, this spell's vapors are highly acidic. Each round on your turn, starting when you cast the spell, the fog deals 2d6 points of acid damage to each creature and object within it.",
    "subschool": "creation",
    "domains": [
      "acid"
    ]
  },
  {
    "name": "Planar Binding",
    "short_description": "As lesser planar binding, but up to 12 HD.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "10 minutes",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": {
      "type": "Will"
    },
    "text": "This spell functions like lesser planar binding, except that you may call a single creature of 12 HD or less, or up to three creatures of the same kind whose Hit Dice total no more than 12. Each creature gets a saving throw, makes an independent attempt to escape, and must be individually persuaded to aid you.Planar Binding, Greater",
    "subschool": "calling",
    "domains": []
  },
  {
    "name": "Wall of Iron",
    "short_description": "30 hp/four levels; can topple onto foes.",
    "duration": "instantaneous",
    "components": "V, S, M (a small iron sheet plus gold dust worth 50 gp)",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "medium",
    "level": {
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": null,
    "text": "You cause a flat, vertical iron wall to spring into being. The wall inserts itself into any surrounding nonliving material if its area is sufficient to do so. The wall cannot be conjured so that it occupies the same space as a creature or another object. It must always be a flat plane, though you can shape its edges to fit the available space.",
    "subschool": "creation",
    "domains": []
  },
  {
    "name": "Chain Lightning",
    "short_description": "1d6/level damage and 1 secondary bolt/level.",
    "duration": "instantaneous",
    "components": "V, S, F (a bit of fur a piece of amber, glass, or a crystal rod plus one silver pin per caster level)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "long",
    "level": {
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": {
      "type": "Ref"
    },
    "text": "This spell creates an electrical discharge that begins as a single stroke commencing from your fingertips. Unlike lightning bolt, chain lightning strikes one object or creature initially, then arcs to other targets.The bolt deals 1d6 points of electricity damage per caster level (maximum 20d6) to the primary target. After it strikes, lightning can arc to a number of secondary targets equal to your caster level (maximum 20). The secondary bolts each strike one target and deal as much damage as the primary bolt.Each target can attempt a Reflex saving throw for half damage. The Reflex DC to halve the damage of the secondary bolts is 2 lower than the DC to halve the damage of the primary bolt. You choose secondary targets as you like, but they must all be within 30 feet of the primary target, and no target can be struck more than once. You can choose to affect fewer secondary targets than the maximum.",
    "subschool": null,
    "domains": [
      "electricity"
    ]
  },
  {
    "name": "Circle of Death",
    "short_description": "Kills 1d4/level HD of creatures.",
    "duration": "instantaneous",
    "components": "V, S, M (a crushed black pearl worth 500 gp)",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "medium",
    "level": {
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": {
      "type": "Fort"
    },
    "text": "Circle of death snuffs out the life force of living creatures, killing them instantly. The spell slays 1d4 HD worth of living creatures per caster level (maximum 20d4). Creatures with the fewest HD are affected first among creatures with equal HD, those who are closest to the burst's point of origin are affected first. No creature of 9 or more HD can be affected, and HD that are not sufficient to affect a creature are wasted.",
    "subschool": null,
    "domains": [
      "death"
    ]
  },
  {
    "name": "Beast Shape IV",
    "short_description": "You take the form of a Diminutive to Huge animal or a Tiny to Large magical beast.",
    "duration": "1 min./level",
    "components": "V, S, M (a piece of the creature whose form you plan to assume)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": null,
    "text": "When you cast this spell, you can assume the form of any Small or Medium creature of the animal type. If the form you assume has any of the following abilities, you gain the listed ability: climb 30 feet, fly 30 feet (average maneuverability), swim 30 feet, darkvision 60 feet, low-light vision, and scent.",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Disintegrate",
    "short_description": "Reduces one creature or object to dust.",
    "duration": "instantaneous",
    "components": "V, S, M/DF (a lodestone and a pinch of dust)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "medium",
    "level": {
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": {
      "isObject": true,
      "type": "Fort"
    },
    "text": "A thin, green ray springs from your pointing finger. You must make a successful ranged touch attack to hit. Any creature struck by the ray takes 2d6 points of damage per caster level (to a maximum of 40d6). Any creature reduced to 0 or fewer hit points by this spell is entirely disintegrated, leaving behind only a trace of fine dust. A disintegrated creature's equipment is unaffected.When used against an object, the ray simply disintegrates as much as a 10-foot cube of nonliving matter. Thus, the spell disintegrates only part of any very large object or structure targeted. The ray affects even objects constructed entirely of force, such as forceful hand or a wall of force, but not magical effects such as a globe of invulnerability or an antimagic field.A creature or object that makes a successful Fortitude save is partially affected, taking only 5d6 points of damage. If this damage reduces the creature or object to 0 or fewer hit points, it is entirely disintegrated.Only the first creature or object struck can be affected that is, the ray affects only one target per casting.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Elemental Body III",
    "short_description": "Turns you into a Large elemental.",
    "duration": "1 min/level When you cast this spell, you can assume the form of a Small air, earth, fire, or water elemental. The abilities you gain depend upon the type of elemental into which you change. Elemental abilities based on size, such as burn, vortex, and whirlwind, use the size of the elemental you transform into to determine their effect.Air elemental",
    "components": "V, S, M (the element you plan to assume)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": null,
    "text": "When you cast this spell, you can assume the form of a Small air, earth, fire, or water elemental. The abilities you gain depend upon the type of elemental into which you change. Elemental abilities based on size, such as burn, vortex, and whirlwind, use the size of the elemental you transform into to determine their effect.",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Flesh to Stone",
    "short_description": "Turns subject creature into statue.",
    "duration": "instantaneous",
    "components": "V, S, M (lime, water, and earth)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "medium",
    "level": {
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": {
      "type": "Fort"
    },
    "text": "The subject, along with all its carried gear, turns into a mindless, inert statue. If the statue resulting from this spell is broken or damaged, the subject (if ever returned to its original state) has similar damage or deformities. The creature is not dead, but it does not seem to be alive either when viewed with spells such as deathwatch.Only creatures made of flesh are affected by this spell.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Form of the Dragon I",
    "short_description": "Turns you into a Medium dragon.",
    "duration": "1 min./level",
    "components": "V, S, M (a scale of the dragon type you plan to assume)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": null,
    "text": "Black dragon: 60-foot line of acid, resist acid 20, swim 60 feetBlue dragon: 60-foot line of electricity, resist electricity 20, burrow 20 feetGreen dragon: 30-foot cone of acid, resist acid 20, swim 40 feetRed dragon: 30-foot cone of fire, resist fire 30, vulnerability to coldWhite dragon: 30-foot cone of cold, resist cold 20, swim 60 feet, vulnerability to fireBrass dragon: 60-foot line of fire, resist fire 20, burrow 30 feet, vulnerability to coldBronze dragon: 60-foot line of electricity, resist electricity 20, swim 60 feetCopper dragon: 60-foot line of acid, resist acid 20, spider climb (always active)Gold dragon: 30-foot cone of fire, resist fire 20, swim 60 feetSilver dragon: 30-foot cone of cold, resist cold 30, vulnerability to fireForm of the Dragon IISchool transmutation (polymorph) Level sorcerer/wizard 7",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Mage's Lucubration",
    "short_description": "Wizard only. Recalls spell of 5th level or lower.",
    "duration": "instantaneousYou instantly prepare any one spell of 5th level or lower that you have used during the past 24 hours. The spell must have been actually cast during that period. The chosen spell is stored in your mind as through prepared in the normal fashion.If the recalled spell requires material components, you must provide them. The recovered spell is not usable until the material components are available.        Report a Problem",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "wizard": 6
    },
    "saves": null,
    "text": "You instantly prepare any one spell of 5th level or lower that you have used during the past 24 hours. The spell must have been actually cast during that period. The chosen spell is stored in your mind as through prepared in the normal fashion.If the recalled spell requires material components, you must provide them. The recovered spell is not usable until the material components are available.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Plant Shape II",
    "short_description": "Turns you into a Large plant creature.",
    "duration": "1 min./level",
    "components": "V, S, M (a piece of the creature whose form you plan to assume)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "When you cast this spell you can assume the form of any Small or Medium creature of the plant type. If the form you assume has any of the following abilities, you gain the listed ability: darkvision 60 feet, low-light vision, constrict, grab, and poison. If the form you assume does not possess the ability to move, your speed is reduced to 5 feet and you lose all other forms of movement. If the creature has vulnerability to an element, you gain that vulnerability.",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Transformation",
    "short_description": "You gain combat bonuses.",
    "duration": "1 round/level",
    "components": "V, S, M (a",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": null,
    "text": "You lose your spellcasting ability, including your ability to use spell activation or spell completion magic items, just as if the spells were no longer on your class list.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Spell Turning",
    "short_description": "Reflect 1d4+6 spell levels back at caster.",
    "duration": "until expended or 10 min./level",
    "components": "V, S, M/DF (a small silver mirror)",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "personal",
    "level": {
      "sorcerer": 7,
      "wizard": 7
    },
    "saves": null,
    "text": "When you are targeted by a spell of higher level than the amount of spell turning you have left, that spell is partially turned. Subtract the amount of spell turning left from the spell level of the incoming spell, then divide the result by the spell level of the incoming spell to see what fraction of the effect gets through. For damaging spells, you and the caster each take a fraction of the damage. For nondamaging spells, each of you has a proportional chance to be the one who is affected. If you and a spellcasting attacker are both warded by spell turning effects in operation, a resonating field is created. Roll randomly to determine the result.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Instant Summons",
    "short_description": "Prepared object appears in your hand.",
    "duration": "permanent until discharged",
    "components": "V, S, M (sapphire worth 1,000 gp)",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "see text",
    "level": {
      "sorcerer": 7,
      "wizard": 7
    },
    "saves": null,
    "text": "You call some nonliving item directly to your hand from virtually any location.First, you must place your arcane mark on the item. Then you cast this spell, which magically and invisibly inscribes the name of the item on a sapphire worth at least 1,000 gp. Thereafter, you can summon the item by speaking a special word (set by you when the spell is cast) and crushing the gem. The item appears instantly in your hand. Only you can use the gem in this way.If the item is in the possession of another creature, the spell does not work, but you know who the possessor is and roughly where that creature is located when the summons occurs.The inscription on the gem is invisible. It is also unreadable, except by means of a read magic spell, to anyone but you.The item can be summoned from another plane, but only if no other creature has claimed ownership of it.",
    "subschool": "summoning",
    "domains": []
  },
  {
    "name": "Mage's Magnificent Mansion",
    "short_description": "Door leads to extradimensional mansion.",
    "duration": "2 hours/level",
    "components": "V, S, F (a miniature ivory door, a piece of polished marble, and a silver spoon, each worth 5 gp)",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "sorcerer": 7,
      "wizard": 7
    },
    "saves": null,
    "text": "You conjure up an extradimensional dwelling that has a single entrance on the plane from which the spell was cast. The entry point looks like a faint shimmering in the air that is 4 feet wide and 8 feet high. Only those you designate may enter the mansion, and the portal is shut and made invisible behind you when you enter. You may open it again from your own side at will. Once observers have passed beyond the entrance, they are in a magnificent foyer with numerous chambers beyond. The atmosphere is clean, fresh, and warm.You can create any floor plan you desire to the limit of the spell's effect. The place is furnished and contains sufficient foodstuffs to serve a nine-course banquet to a dozen people per caster level. A staff of near-transparent servants (as many as two per caster level), liveried and obedient, wait upon all who enter. The servants function as unseen servant spells except that they are visible and can go anywhere in the mansion.Since the place can be entered only through its special portal, outside conditions do not affect the mansion, nor do conditions inside it pass to the plane beyond.",
    "isDispellable": true,
    "subschool": "creation",
    "domains": []
  },
  {
    "name": "Phase Door",
    "short_description": "Creates an invisible passage through a barrier.",
    "duration": "one usage per two levels",
    "components": "V",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "touch",
    "level": {
      "sorcerer": 7,
      "wizard": 7
    },
    "saves": null,
    "text": "This spell creates an ethereal passage through wooden, plaster, or stone walls, but not other materials. The phase door is invisible and inaccessible to all creatures except you, and only you can use the passage. You disappear when you enter the phase door and appear when you exit. If you desire, you can take one other creature (Medium or smaller) through the door. This counts as two uses of the door. The door does not allow light, sound, or spell effects through it, nor can you see through it without using it. Thus, the spell can provide an escape route, though certain creatures, such as phase spiders, can follow with ease. A gem of true seeing or similar magic reveals the presence of a phase door but does not allow its use.A phase door is subject to dispel magic. If anyone is within the passage when it is dispelled, he is harmlessly ejected just as if he were inside a passwall effect.You can allow other creatures to use the phase door by setting some triggering condition for the door. Such conditions can be as simple or elaborate as you desire. They can be based on a creature's name, identity, or alignment, but otherwise must be based on observable actions or qualities. Intangibles such as level, class, HD, and hit points don't qualify.Phase door can be made permanent with a permanency spell.",
    "subschool": "creation",
    "domains": []
  },
  {
    "name": "Arcane Sight, Greater",
    "short_description": "As arcane sight, but also reveals magic effects on creatures and objects.",
    "duration": "1 min./level This spell makes your eyes glow blue and allows you to see magical auras within 120 feet of you. The effect is similar to that of a",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Divination",
    "range": "personal",
    "level": {
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": null,
    "text": "This spell makes your eyes glow blue and allows you to see magical auras within 120 feet of you. The effect is similar to that of a detect magic spell, but arcane sight does not require concentration and discerns aura location and power more quickly.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Insanity",
    "short_description": "Subject suffers continuous confusion.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "medium",
    "level": {
      "sorcerer": 7,
      "wizard": 7
    },
    "saves": {
      "type": "Will"
    },
    "text": "The affected creature suffers from a continuous confusion effect, as the spell.Remove curse does not remove insanity. Greater restoration, heal, limited wish, miracle, or wish can restore the creature.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Power Word Blind",
    "short_description": "Blinds creature with 200 hp or less.",
    "duration": "see text",
    "components": "V",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "close",
    "level": {
      "sorcerer": 7,
      "wizard": 7
    },
    "saves": null,
    "text": "You utter a single word of power that causes a creature to become blinded, whether the creature can hear the word or not. The duration of the spell depends on the target's current hit point total. Any creature that currently has 201 or more hit points is unaffected.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Forcecage",
    "short_description": "Cube or cage of force imprisons all inside.",
    "duration": "1 round/level",
    "components": "V, S, M (ruby dust worth 500 gp)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "close",
    "level": {
      "sorcerer": 7,
      "wizard": 7
    },
    "saves": {
      "type": "Ref"
    },
    "text": "This spell creates an immobile, invisible cubical prison composed of either bars of force or solid walls of force (your choice).Creatures within the area are caught and contained unless they are too big to fit inside, in which case the spell automatically fails. Teleportation and other forms of astral travel provide a means of escape, but the force walls or bars extend into the Ethereal Plane, blocking ethereal travel.Like a wall of force, a forcecage resists dispel magic, although a mage's disjunction still functions. The walls of a forcecage can be damaged by spells as normal, except for disintegrate, which automatically destroys it. The walls of a forcecage can be damaged by weapons and supernatural abilities, but they have a Hardness of 30 and a number of hit points equal to 20 per caster level. Contact with a sphere of annihilation or rod of cancellation instantly destroys a forcecage.Barred Cage: This version of the spell produces a 20-foot cube made of bands of force (similar to a wall of force spell) for bars. The bands are a half-inch wide, with half-inch gaps between them. Any creature capable of passing through such a small space can escape others are confined within the barred cage. You can't attack a creature in a barred cage with a weapon unless the weapon can fit between the gaps. Even against such weapons (including arrows and similar ranged attacks), a creature in the barred cage has cover. All spells and breath weapons can pass through the gaps in the bars.Windowless Cell: This version of the spell produces a 10-foot cube with no way in and no way out. Solid walls of force form its six sides.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "force"
    ]
  },
  {
    "name": "Mage's Sword",
    "short_description": "Floating magic blade strikes opponents.",
    "duration": "1 round/level",
    "components": "V, S, F (a miniature platinum sword worth 250 gp)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "close",
    "level": {
      "sorcerer": 7,
      "wizard": 7
    },
    "saves": null,
    "text": "The sword always strikes from your direction. It does not get a bonus for flanking or help a combatant get one. If the sword goes beyond the spell range from you, goes out of your sight, or you are not directing it, it returns to you and hovers.Each round after the first, you can use a standard to switch the sword to a new target. If you do not, the sword continues to attack the previous round's target.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "force"
    ]
  },
  {
    "name": "Prismatic Spray",
    "short_description": "Rays hit subjects with variety of effects.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "60 ft.",
    "level": {
      "sorcerer": 7,
      "wizard": 7
    },
    "saves": null,
    "text": "This spell causes seven shimmering, multicolored beams of light to spray from your hand. Each beam has a different power. Creatures in the area of the spell with 8 HD or less are automatically blinded for 2d4 rounds. Every creature in the area is randomly struck by one or more beams, which have additional effects.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Invisibility, Mass",
    "short_description": "As invisibility, but affects all in range.",
    "duration": "1 min./level",
    "components": "V, S, M/DF (an eyelash encased in gum arabic)",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "touch",
    "level": {
      "bard": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": {
      "isHarmless": true,
      "isObject": true,
      "type": "Will"
    },
    "text": "The creature or object touched becomes invisible. If the recipient is a creature carrying gear, that vanishes, too. If you cast the spell on someone else, neither you nor your allies can see the subject, unless you can normally see invisible things or you employ magic to do so.Items dropped or put down by an invisible creature become visible items picked up disappear if tucked into the clothing or pouches worn by the creature. Light, however, never becomes invisible, although a source of light can become so (thus, the effect is that of a light with no visible source). Any part of an item that the subject carries but that extends more than 10 feet from it becomes visible.",
    "isDispellable": true,
    "subschool": "glamer",
    "domains": []
  },
  {
    "name": "Simulacrum",
    "short_description": "Creates partially real double of a creature.",
    "duration": "instantaneous",
    "components": "V, S, M (ice sculpture of the target plus powdered rubies worth 500 gp per HD of the simulacrum)",
    "casting_time": "12 hours",
    "school": "Illusion",
    "range": "0 ft.",
    "level": {
      "sorcerer": 7,
      "wizard": 7
    },
    "saves": null,
    "text": "Simulacrum creates an illusory duplicate of any creature. The duplicate creature is partially real and formed from ice or snow. It appears to be the same as the original, but it has only half of the real creature's levels or HD (and the appropriate hit points, feats, skill ranks, and special abilities for a creature of that level or HD). You can't create a simulacrum of a creature whose HD or levels exceed twice your caster level. You must make a Disguise check when you cast the spell to determine how good the likeness is. A creature familiar with the original might detect the ruse with a successful Perception check (opposed by the caster's Disguise check) or a DC 20 Sense Motive check.At all times, the simulacrum remains under your absolute command. No special telepathic link exists, so command must be exercised in some other manner. A simulacrum has no ability to become more powerful. It cannot increase its level or abilities. If reduced to 0 hit points or otherwise destroyed, it reverts to snow and melts instantly into nothingness. A complex process requiring at least 24 hours, 100 gp per hit point, and a fully equipped magical laboratory can repair damage to a simulacrum.",
    "subschool": "shadow",
    "domains": []
  },
  {
    "name": "Control Undead",
    "short_description": "Undead don't attack you while under your command.",
    "duration": "1 min./level",
    "components": "V, S, M (a piece of bone and a piece of raw meat)",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "close",
    "level": {
      "sorcerer": 7,
      "wizard": 7
    },
    "saves": {
      "type": "Will"
    },
    "text": "This spell enables you to control undead creatures for a short period of time. You command them by voice and they understand you, no matter what language you speak. Even if vocal communication is impossible, the controlled undead do not attack you. At the end of the spell, the subjects revert to their normal behavior.Intelligent undead creatures remember that you controlled them, and they may seek revenge after the spell's effects end.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Waves of Exhaustion",
    "short_description": "Several targets become exhausted.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "60 ft.",
    "level": {
      "sorcerer": 7,
      "wizard": 7
    },
    "saves": null,
    "text": "Waves of negative energy cause all living creatures in the spell's area to become exhausted. This spell has no effect on a creature that is already exhausted.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Elemental Body IV",
    "short_description": "Turns you into a Huge elemental.",
    "duration": "1 min/level When you cast this spell, you can assume the form of a Small air, earth, fire, or water elemental. The abilities you gain depend upon the type of elemental into which you change. Elemental abilities based on size, such as burn, vortex, and whirlwind, use the size of the elemental you transform into to determine their effect.Air elemental",
    "components": "V, S, M (the element you plan to assume)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "sorcerer": 4,
      "wizard": 4
    },
    "saves": null,
    "text": "When you cast this spell, you can assume the form of a Small air, earth, fire, or water elemental. The abilities you gain depend upon the type of elemental into which you change. Elemental abilities based on size, such as burn, vortex, and whirlwind, use the size of the elemental you transform into to determine their effect.",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Form of the Dragon II",
    "short_description": "Turns you into a Large dragon.",
    "duration": "1 min./level",
    "components": "V, S, M (a scale of the dragon type you plan to assume)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": null,
    "text": "Black dragon: 60-foot line of acid, resist acid 20, swim 60 feetBlue dragon: 60-foot line of electricity, resist electricity 20, burrow 20 feetGreen dragon: 30-foot cone of acid, resist acid 20, swim 40 feetRed dragon: 30-foot cone of fire, resist fire 30, vulnerability to coldWhite dragon: 30-foot cone of cold, resist cold 20, swim 60 feet, vulnerability to fireBrass dragon: 60-foot line of fire, resist fire 20, burrow 30 feet, vulnerability to coldBronze dragon: 60-foot line of electricity, resist electricity 20, swim 60 feetCopper dragon: 60-foot line of acid, resist acid 20, spider climb (always active)Gold dragon: 30-foot cone of fire, resist fire 20, swim 60 feetSilver dragon: 30-foot cone of cold, resist cold 30, vulnerability to fireForm of the Dragon IISchool transmutation (polymorph) Level sorcerer/wizard 7",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Plant Shape III",
    "short_description": "Turns you into a Huge plant.",
    "duration": "1 min./level",
    "components": "V, S, M (a piece of the creature whose form you plan to assume)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "When you cast this spell you can assume the form of any Small or Medium creature of the plant type. If the form you assume has any of the following abilities, you gain the listed ability: darkvision 60 feet, low-light vision, constrict, grab, and poison. If the form you assume does not possess the ability to move, your speed is reduced to 5 feet and you lose all other forms of movement. If the creature has vulnerability to an element, you gain that vulnerability.",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Polymorph, Greater",
    "short_description": "Gives one willing subject a new, more powerful form.",
    "duration": "1 min/level",
    "components": "V, S, M (a piece of the creature whose form you choose)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "This spell transforms a willing creature into an animal, humanoid or elemental of your choosing the spell has no effect on unwilling creatures, nor can the creature being targeted by this spell influence the new form assumed (apart from conveying its wishes, if any, to you verbally).If you use this spell to cause the target to take on the form of an animal, the spell functions as beast shape II. If the form is that of an elemental, the spell functions as elemental body I. If the form is that of a humanoid, the spell functions as alter self. The subject may choose to resume its normal form as a full-round action doing so ends the spell for that subject.Polymorph, GreaterSchool transmutation (polymorph) Level sorcerer/wizard 7This spell functions as polymorph except that it allows the creature to take on the form of a dragon or plant creature. If you use this spell to cause the target to take on the form of an animal or magical beast, it functions as beast shape IV. If the form is that of an elemental, the spell functions as elemental body III. If the form is that of a humanoid, the spell functions as alter self. If the form is that of a plant, the spell functions as plant shape II. If the form is that of a dragon, the spell functions as form of the dragon I. The subject may choose to resume its normal form as a full-round action doing so ends the spell.",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Statue",
    "short_description": "Subject can become a statue at will.",
    "duration": "1 hour/level",
    "components": "V, S, M (lime, sand, and a drop of water stirred by an iron spike)",
    "casting_time": "1 round",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "sorcerer": 7,
      "wizard": 7
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "A statue spell turns the subject to solid stone, along with any garments and equipment worn or carried. In statue form, the subject gains hardness 8. The subject retains its own hit points. The subject can see, hear, and smell normally, but it does not need to eat or breathe. Feeling is limited to those sensations that can affect the granite-hard substance of the individual's body. Chipping is equal to a mere scratch, but breaking off one of the statue's arms constitutes serious damage. The subject of a statue spell can return to its normal state, act, and then return instantly to the statue state (a free action) if it so desires as long as the spell duration is in effect.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Prismatic Wall",
    "short_description": "Wall's colors have array of effects.",
    "duration": "10 min./level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "close",
    "level": {
      "sorcerer": 8,
      "wizard": 8
    },
    "saves": null,
    "text": "The wall's maximum proportions are 4 feet wide per caster level and 2 feet high per caster level. A prismatic wall spell cast to materialize in a space occupied by a creature is disrupted, and the spell is wasted.Each color in the wall has a special effect. The accompanying table shows the seven colors of the wall, the order in which they appear, their effects on creatures trying to attack you or pass through the wall, and the magic needed to negate each color.The wall can be destroyed, color by color, in consecutive order, by casting the specified spells on the wall however, the first color must be brought down before the second can be affected, and so on. A rod of cancellation or a mage's disjunction spell destroys a prismatic wall, but an antimagic field fails to penetrate it. Dispel magic and greater dispel magic can only be used on the wall once all the other colors have been destroyed. Spell resistance is effective against a prismatic wall, but the caster level check must be repeated for each color present.Prismatic wall can be made permanent with a permanency spell.",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Incendiary Cloud",
    "short_description": "Cloud deals 6d6 fire damage/round.",
    "duration": "1 round/level",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "medium",
    "level": {
      "sorcerer": 8,
      "wizard": 8
    },
    "saves": null,
    "text": "An incendiary cloud spell creates a cloud of roiling smoke shot through with white-hot embers. The smoke obscures all sight as a fog cloud does. In addition, the white-hot embers within the cloud deal 6d6 points of fire damage to everything within the cloud on your turn each round. All targets can make Reflex saves each round to take half damage.As with a cloudkill spell, the smoke moves away from you at 10 feet per round. Figure out the smoke's new spread each round based on its new point of origin, which is 10 feet farther away from where you were when you cast the spell. By concentrating, you can make the cloud move as much as 60 feet each round. Any portion of the cloud that would extend beyond your maximum range dissipates harmlessly, reducing the remainder's spread thereafter.As with fog cloud, wind disperses the smoke, and the spell can't be cast underwater.",
    "isDispellable": true,
    "subschool": "creation",
    "domains": [
      "fire"
    ]
  },
  {
    "name": "Maze",
    "short_description": "Traps subject in extradimensional maze.",
    "duration": "see text",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "sorcerer": 8,
      "wizard": 8
    },
    "saves": null,
    "text": "You banish the subject into an extradimensional labyrinth. Each round on its turn, it may attempt a DC 20 Intelligence check to escape the labyrinth as a full-round action. If the subject doesn't escape, the maze disappears after 10 minutes, freeing the subject.On escaping or leaving the maze, the subject reappears where it had been when the maze spell was cast. If this location is filled with a solid object, the subject appears in the nearest open space. Spells and abilities that move a creature within a plane, such as teleport and dimension door, do not help a creature escape a maze spell, although a plane shift spell allows it to exit to whatever plane is designated in that spell. Minotaurs are not affected by this spell.",
    "subschool": "teleportation",
    "domains": []
  },
  {
    "name": "Planar Binding, Greater",
    "short_description": "As lesser planar binding, but up to 18 HD.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "10 minutes",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": {
      "type": "Will"
    },
    "text": "This spell functions like lesser planar binding, except that you may call a single creature of 12 HD or less, or up to three creatures of the same kind whose Hit Dice total no more than 12. Each creature gets a saving throw, makes an independent attempt to escape, and must be individually persuaded to aid you.Planar Binding, Greater",
    "subschool": "calling",
    "domains": []
  },
  {
    "name": "Trap the Soul",
    "short_description": "Imprisons subject within gem.",
    "duration": "permanent see text",
    "components": "V, S, M (gem worth 1,000 gp per HD of the trapped creature)",
    "casting_time": "1 standard or see text",
    "school": "Conjuration",
    "range": "close",
    "level": {
      "sorcerer": 8,
      "wizard": 8
    },
    "saves": null,
    "text": "Trap the soul forces a creature's life force (and its material body) into a gem. The gem holds the trapped entity indefinitely or until the gem is broken and the life force is released, which allows the material body to reform. If the trapped creature is a powerful creature from another plane, it can be required to perform a service immediately upon being freed. Otherwise, the creature can go free once the gem imprisoning it is broken.Depending on the version selected, the spell can be triggered in one of two ways.Spell Completion: First, the spell can be completed by speaking its final word as a standard as if you were casting a regular spell at the subject. This allows spell resistance (if any) and a Will save to avoid the effect. If the creature's name is spoken as well, any spell resistance is ignored and the save DC increases by 2. If the save or spell resistance is successful, the gem shatters.Trigger Object: The second method is far more insidious, for it tricks the subject into accepting a trigger object inscribed with the final spell word, automatically placing the creature's soul in the trap. To use this method, both the creature's name and the trigger word must be inscribed on the trigger object when the gem is enspelled. A sympathy spell can also be placed on the trigger object. As soon as the subject picks up or accepts the trigger object, its life force is automatically transferred to the gem without the benefit of spell resistance or a save.",
    "subschool": "summoning",
    "domains": []
  },
  {
    "name": "Prying Eyes, Greater",
    "short_description": "As prying eyes, but eyes have true seeing.",
    "duration": "1 hour/level see text",
    "components": "V, S, M (a handful of crystal marbles)",
    "casting_time": "1 minute",
    "school": "Divination",
    "range": "1 mile",
    "level": {
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": null,
    "text": "When you create the eyes, you specify instructions you want them to follow in a command of no more than 25 words. Any knowledge you possess is known by the eyes as well.In order to report their findings, the eyes must return to your hand. Each replays in your mind all it has seen during its existence. It takes an eye 1 round to replay 1 hour of recorded images. After relaying its findings, an eye disappears. If an eye ever gets more than 1 mile away from you, it instantly ceases to exist. However, your link with the eye is such that you won't know if the eye was destroyed because it wandered out of range or because of some other event.The eyes exist for up to 1 hour per caster level or until they return to you. Dispel magic can destroy eyes. Roll separately for each eye caught in an area dispel. Of course, if an eye is sent into darkness, it could hit a wall or similar obstacle and destroy itself.Prying Eyes, GreaterSchool divination Level sorcerer/wizard 8",
    "isDispellable": true,
    "subschool": null,
    "domains": []
  },
  {
    "name": "Power Word Stun",
    "short_description": "Stuns creature with 150 hp or less.",
    "duration": "See text",
    "components": "V",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "close",
    "level": {
      "sorcerer": 8,
      "wizard": 8
    },
    "saves": null,
    "text": "You utter a single word of power that instantly causes one creature of your choice to become stunned, whether the creature can hear the word or not. The duration of the spell depends on the target's current hit point total. Any creature that currently has 151 or more hit points is unaffected by power word stun.",
    "subschool": "compulsion",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Polar Ray",
    "short_description": "Ranged touch attack deals 1d6/level cold damage and 1d4 points of Dexterity drain.",
    "duration": "instantaneous",
    "components": "V, S, F (a white ceramic cone or prism)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "medium",
    "level": {
      "sorcerer": 8,
      "wizard": 8
    },
    "saves": null,
    "text": "A blue-white ray of freezing air and ice springs from your hand. You must succeed on a ranged touch attack with the ray to deal damage to a target. The ray deals 1d6 points of cold damage per caster level (maximum 25d6) and 1d4 points of Dexterity drain.",
    "subschool": null,
    "domains": [
      "cold"
    ]
  },
  {
    "name": "Telekinetic Sphere",
    "short_description": "As resilient sphere, but you move the sphere telekinetically.",
    "duration": "1 min./level",
    "components": "V, S, M (a crystal sphere and a pair of small magnets)",
    "casting_time": "1 standard",
    "school": "Evocation",
    "range": "close",
    "level": {
      "sorcerer": 8,
      "wizard": 8
    },
    "saves": {
      "isObject": true,
      "type": "Ref"
    },
    "text": "You can move the sphere, along with the objects and creatures it contains that weigh a total of 5,000 pounds or less, by concentrating on the sphere. You can begin moving a sphere in the round after casting the spell. If you concentrate on doing so (a standard), you can move the sphere as much as 30 feet in a round. If you cease concentrating, the sphere does not move in that round (if on a level surface) or descends at its falling rate (if aloft) until it reaches a level surface. You can resume concentrating on your next turn or any later turn during the spell's duration.The sphere falls at a rate of only 60 feet per round, which is not fast enough to cause damage to the contents of the sphere.You can move the sphere telekinetically even if you are in it.",
    "isDispellable": true,
    "subschool": null,
    "domains": [
      "force"
    ]
  },
  {
    "name": "Scintillating Pattern",
    "short_description": "Twisting colors confuse, stun, or render unconscious.",
    "duration": "concentration + 2 rounds",
    "components": "V, S, M (a crystal prism)",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "close",
    "level": {
      "sorcerer": 8,
      "wizard": 8
    },
    "saves": null,
    "text": "A twisting pattern of coruscating colors weaves through the air, affecting creatures within. The spell affects a total number of HD of creatures equal to your caster level (maximum 20). Creatures with the fewest HD are affected first, and among creatures with equal HD, those who are closest to the spell's point of origin are affected first. HD that are not sufficient to affect a creature are wasted. The spell affects each subject according to its HD.6 or less: Unconscious for 1d4 rounds, then stunned for 1d4 rounds, and then confused for 1d4 rounds. (Treat an unconscious result as stunned for nonliving creatures.)7 to 12: Stunned for 1d4 rounds, then confused for an additional 1d4 rounds. 13 or more: Confused for 1d4 rounds. Sightless creatures are not affected by scintillating pattern.",
    "subschool": "pattern",
    "domains": [
      "mind-affecting"
    ]
  },
  {
    "name": "Shadow Evocation, Greater",
    "short_description": "As shadow evocation, but up to 7th level and 60% real.",
    "duration": "see text",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "see text",
    "level": {
      "bard": 5,
      "sorcerer": 5,
      "wizard": 5
    },
    "saves": {
      "isDisbelief": true,
      "type": "Will"
    },
    "text": "Nondamaging effects have normal effects except against those who disbelieve them. Against disbelievers, they have no effect.Objects automatically succeed on their Will saves against this spell.Shadow Evocation, GreaterSchool illusion (shadow) Level sorcerer/wizard 8",
    "subschool": "shadow",
    "domains": []
  },
  {
    "name": "Clone",
    "short_description": "Duplicate awakens when original dies.",
    "duration": "instantaneous",
    "components": "V, S, M (laboratory supplies worth 1,000 gp), F (special laboratory equipment costing 500 gp)",
    "casting_time": "10 minutes",
    "school": "Necromancy",
    "range": "0 ft.",
    "level": {
      "sorcerer": 8,
      "wizard": 8
    },
    "saves": null,
    "text": "This spell makes an inert duplicate of a creature. If the original individual has been slain, its soul immediately transfers to the clone, creating a replacement (provided that the soul is free and willing to return). The original's physical remains, should they still exist, become inert and cannot thereafter be restored to life. If the original creature has reached the end of its natural life span (that is, it has died of natural causes), any cloning attempt fails.To create the duplicate, you must have a piece of flesh (not hair, nails, scales, or the like) with a volume of at least 1 cubic inch that was taken from the original creature's living body. The piece of flesh need not be fresh, but it must be kept from rotting. Once the spell is cast, the duplicate must be grown in a laboratory for 2d4 months.When the clone is completed, the original's soul enters it immediately, if that creature is already dead. The clone is physically identical to the original and possesses the same personality and memories as the original. In other respects, treat the clone as if it were the original character raised from the dead, including its gaining of two permanent negative levels, just as if it had been hit by an energy-draining creature. If the subject is 1st level, it takes 2 points of Constitution drain instead (if this would reduce its Con to 0 or less, it can't be cloned). If the original creature gained permanent negative levels since the flesh sample was taken, the clone gains these negative levels as well.The spell duplicates only the original's body and mind, not its equipment. A duplicate can be grown while the original still lives, or when the original soul is unavailable, but the resulting body is merely a soulless bit of inert flesh which rots if not preserved.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Horrid Wilting",
    "short_description": "Deals 1d6/level damage within 30 ft.",
    "duration": "instantaneous",
    "components": "V, S, M/DF (a bit of sponge)",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "long",
    "level": {
      "sorcerer": 8,
      "wizard": 8
    },
    "saves": {
      "type": "Fort"
    },
    "text": "This spell evaporates moisture from the body of each subject living creature, causing flesh to wither and crack and crumble to dust. This deals 1d6 points of damage per caster level (maximum 20d6). This spell is especially devastating to water elementals and plant creatures, which instead take 1d8 points of damage per caster level (maximum 20d8).",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Form of the Dragon III",
    "short_description": "Turns you into a Huge dragon.",
    "duration": "1 min./level",
    "components": "V, S, M (a scale of the dragon type you plan to assume)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "sorcerer": 6,
      "wizard": 6
    },
    "saves": null,
    "text": "Black dragon: 60-foot line of acid, resist acid 20, swim 60 feetBlue dragon: 60-foot line of electricity, resist electricity 20, burrow 20 feetGreen dragon: 30-foot cone of acid, resist acid 20, swim 40 feetRed dragon: 30-foot cone of fire, resist fire 30, vulnerability to coldWhite dragon: 30-foot cone of cold, resist cold 20, swim 60 feet, vulnerability to fireBrass dragon: 60-foot line of fire, resist fire 20, burrow 30 feet, vulnerability to coldBronze dragon: 60-foot line of electricity, resist electricity 20, swim 60 feetCopper dragon: 60-foot line of acid, resist acid 20, spider climb (always active)Gold dragon: 30-foot cone of fire, resist fire 20, swim 60 feetSilver dragon: 30-foot cone of cold, resist cold 30, vulnerability to fireForm of the Dragon IISchool transmutation (polymorph) Level sorcerer/wizard 7",
    "isDispellable": true,
    "subschool": "polymorph",
    "domains": []
  },
  {
    "name": "Temporal Stasis",
    "short_description": "Puts subject into suspended animation.",
    "duration": "permanent",
    "components": "V, S, M (powdered diamond, emerald, ruby, and sapphire dust worth 5,000 gp)",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "touch",
    "level": {
      "sorcerer": 8,
      "wizard": 8
    },
    "saves": {
      "type": "Fort"
    },
    "text": "You must succeed on a melee touch attack. You place the subject into a state of suspended animation. For the creature, time ceases to flow, and its condition becomes fixed. The creature does not grow older. Its body functions virtually cease, and no force or effect can harm it. This state persists until the magic is removed (such as by a successful dispel magic spell or a freedom spell).",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Freedom",
    "short_description": "Releases creature from imprisonment.",
    "duration": "instantaneous",
    "components": "V, S",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "close",
    "level": {
      "sorcerer": 9,
      "wizard": 9
    },
    "saves": {
      "isHarmless": true,
      "type": "Will"
    },
    "text": "The subject is freed from spells and effects that restrict movement, including binding, entangle, grappling, imprisonment, maze, paralysis, petrification, pinning, sleep, slow, stunning, temporal stasis, and web. To free a creature from imprisonment or maze, you must know its name and background, and you must cast this spell at the spot where it was entombed or banished into the maze.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Mage's Disjunction",
    "short_description": "Dispels magic, disenchants magic items.",
    "duration": "1 minute/level",
    "components": "V",
    "casting_time": "1 standard",
    "school": "Abjuration",
    "range": "close",
    "level": {
      "sorcerer": 9,
      "wizard": 9
    },
    "saves": {
      "isObject": true,
      "type": "Will"
    },
    "text": "All magical effects and magic items within the radius of the spell, except for those that you carry or touch, are disjoined. That is, spells and spell-like effects are unraveled and destroyed completely (ending the effect as a dispel magic spell does), and each permanent magic item must make a successful Will save or be turned into a normal item for the duration of this spell. An item in a creature's possession uses its own Will save bonus or its possessor's Will save bonus, whichever is higher. If an item's saving throw results in a natural 1 on the die, the item is destroyed instead of being suppressed.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Teleportation Circle",
    "short_description": "Teleports creatures inside circle.",
    "duration": "10 min./level",
    "components": "V, M (amber dust to cover circle worth 1,000 gp)",
    "casting_time": "10 minutes",
    "school": "Conjuration",
    "range": "0 ft.",
    "level": {
      "sorcerer": 9,
      "wizard": 9
    },
    "saves": null,
    "text": "You create a circle on the floor or other horizontal surface that teleports, as greater teleport, any creature who stands on it to a designated spot. Once you designate the destination for the circle, you can't change it. The spell fails if you attempt to set the circle to teleport creatures into a solid object, to a place with which you are not familiar and have no clear description, or to another plane.The circle itself is subtle and nearly impossible to notice. If you intend to keep creatures from activating it accidentally, you need to mark the circle in some way.Teleportation circle can be made permanent with a permanency spell. A permanent teleportation circle that is disabled becomes inactive for 10 minutes, then can be triggered again as normal.",
    "isDispellable": true,
    "subschool": "teleportation",
    "domains": []
  },
  {
    "name": "Power Word Kill",
    "short_description": "Kills one creature with 100 hp or less.",
    "duration": "instantaneous",
    "components": "V",
    "casting_time": "1 standard",
    "school": "Enchantment",
    "range": "close",
    "level": {
      "sorcerer": 9,
      "wizard": 9
    },
    "saves": null,
    "text": "You utter a single word of power that instantly kills one creature of your choice, whether the creature can hear the word or not. Any creature that currently has 101 or more hit points is unaffected by power word kill.",
    "subschool": "compulsion",
    "domains": [
      "death",
      "mind-affecting"
    ]
  },
  {
    "name": "Wail of the Banshee",
    "short_description": "Deals 10 damage/level to 1 creature/level.",
    "duration": "instantaneous",
    "components": "V",
    "casting_time": "1 standard",
    "school": "Necromancy",
    "range": "close",
    "level": {
      "sorcerer": 9,
      "wizard": 9
    },
    "saves": {
      "type": "Fort"
    },
    "text": "When you cast this spell, you emit a terrible, soul-chilling scream that possibly kills creatures that hear it (except for yourself). The spell affects up to one creature per caster level, inflicting 10 points of damage per caster level. Creatures closest to the point of origin are affected first.",
    "subschool": null,
    "domains": [
      "death",
      "sonic"
    ]
  },
  {
    "name": "Time Stop",
    "short_description": "You act freely for 1d4+1 rounds.",
    "duration": "1d4+1 rounds (apparent time) see textThis spell seems to make time cease to flow for everyone but you. In fact, you speed up so greatly that all other creatures seem frozen, though they are actually still moving at their normal speeds. You are free to act for 1d4+1 rounds of apparent time. Normal and magical fire, cold, gas, and the like can still harm you. While the time stop is in effect, other creatures are invulnerable to your attacks and spells you cannot target such creatures with any attack or spell. A spell that affects an area and has a duration longer than the remaining duration of the time stop have their normal effects on other creatures once the time stop ends. Most spellcasters use the additional time to improve their defenses, summon allies, or flee from combat.",
    "components": "V",
    "casting_time": "1 standard",
    "school": "Transmutation",
    "range": "personal",
    "level": {
      "sorcerer": 9,
      "wizard": 9
    },
    "saves": null,
    "text": "You cannot move or harm items held, carried, or worn by a creature stuck in normal time, but you can affect any item that is not in another creature's possession.You are undetectable while time stop lasts. You cannot enter an area protected by an antimagic field while under the effect of time stop.",
    "subschool": null,
    "domains": []
  },
  {
    "name": "Minor Image",
    "short_description": "As silent image, plus some sound.",
    "duration": "concentration + 2 rounds\n        This spell functions like",
    "components": "V, S, F (a bit of fleece)",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "long",
    "level": {
      "bard": 2,
      "sorcerer": 2,
      "wizard": 2
    },
    "saves": null,
    "text": "This spell functions like silent image, except that minor image includes some minor sounds but not understandable speech.",
    "subschool": "figment",
    "domains": []
  },
  {
    "name": "Invisibility Sphere",
    "short_description": "Makes everyone within 10 ft. invisible.",
    "duration": "1 min./level",
    "components": "V, S, M/DF (an eyelash encased in gum arabic)",
    "casting_time": "1 standard",
    "school": "Illusion",
    "range": "touch",
    "level": {
      "bard": 3,
      "sorcerer": 3,
      "wizard": 3
    },
    "saves": null,
    "text": "This spell functions like invisibility, except that this spell confers invisibility upon all creatures within 10 feet of the recipient at the time the spell is cast. The center of the effect\n            is mobile with the recipient.\n        Those affected by this spell can see each other and themselves as if unaffected by the spell. Any affected creature moving out of the area becomes visible, but creatures moving into the area after the spell is cast do not become invisible.\n            Affected creatures (other than the recipient) who attack negate the invisibility only for themselves. If the spell recipient attacks, the invisibility sphere ends.",
    "subschool": "glamer",
    "domains": []
  }
]
