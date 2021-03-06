# pathfinder-app

## About

### Introduction 

It is first and foremost a tool that will replace a character sheet and the ever watching eye of an experienced player, as it will guide the player through character set up and specific rules for strange edge cases (such as non-lethal damage regenerating at 1pt / hr, while lethal regenerates at 1 / character level / rest x 2 if the characters are subject to a Heal DC check of 15; or how much to roll if the player is being tripped by a Giant and is a level 5 Dwarf barbarian that has had Enlarge Person cast on them), and of course, it does all the tedious math (which is shown to the player in a breakdown window when it's touched: +19 stealth: [+5 ranks, +3 class skill, +3 dexterity modifier, +4 small size bonus, +4 goblin bonus])

The app is meant to be a companion to the rule-book and gaming. It is meant to be a modern equivalent of a character sheet, that the player has at their side during combat. The advantage of a digital character sheet is having the player be able to prepare spells and never erasing them. Quickly bringing up each spell's information and parsing all the distances and durations for them. It gives the players options during combat when they're stuck just charging and making full-attacks (which I see many new players doing) because the options aren't presented to them clearly.

### The Bane of Gaming in Digital Character Sheets

Digital dice-rollers. Dice rollers are the anti-thesis of table-top gaming. They pull the players away from the action and the board, and of course, they lose the kinesthetic feedback and distinct sound of a tabletop game by pulling that out of it. For the larger effects in spells and damage, picking up seven dice and tossing them all close to the battlefield just feels good. Implementing a dice roller in an app is incredibly simple, but this app will never do it. It works against the very nature of table-top gaming. It will of course say how many dice to roll, and show a picture of them, with all applicable modifiers, but you will not be able to roll them. Screw your sense of convenience. I will not budge.

## Features

 - Parses d20 nomenclature into units and is able to compute and make sense of the time/distance/target. _eg: The app takes in "10 minutes / level" and is able to determine that based on a level 7 wizard, the spell will last for 1.17 hours, and it can compute that back to rounds if the GM needs._ (right now: Only about 60% of all spells are parsed, some not correctly)
 - Shows advancement options for the character, including skill points, feats, class features, and hitpoint rolls. _eg: When the character levels up, they are told they get 1 feat, or an ability stat increase, a certain amount of skill ranks etc. The player selects "Advancement Options (3)" and are led through the process._ (right now: feats, and class features need to be added)
 - Infers most likely combat and world options, based on skill points, class selection. _eg: A player whose added several ranks to Stealth will see "Sneak" combat option in the combat screen. If they have the Power Attack feat, they will see the Power Attack option beside their melee attack._ (right now: only skills points of the highest bonuses are shown)

## License

The code is under the MIT license, so feel free to look at it and use it in your own projects. If you feel it's helped a lot, a beer would be cool. Only the code is under this license (meaning everything in this repo, and not the sources).

*Disclaimer:* I am not associated with any rule book publisher. I am just a nerd with lots of spare time, and knowledge of how to make mobile/web applications.

