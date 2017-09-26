import json
from collections import defaultdict

from django.db import models
from django.db.models import Q
from django.utils import timezone

# TODO: Spells are imported from the web and placed... in here?
# TODO: THis belongs in ruleset
SPELL_SOURCES = (
    ('0', 'arcane'),
    ('1', 'divine'),
)
SPELL_LOCATIONS = (
    ('0', 'mind'),
    ('1', 'spell_book'),
)
class Spell(models.Model):
    SPELL_SCHOOL_CHOICES = (
        ('Abjuration', 'Abjuration'),
        ('Conjuration', 'Conjuration'),
        ('Divination', 'Divination'),
        ('Enchantment', 'Enchantment'),
        ('Evocation', 'Evocation'),
        ('Illusion', 'Illusion'),
        ('Necromancy', 'Necromancy'),
        ('Transmutation', 'Transmutation'),
        ('Universal', 'Universal'),
    )
    name = models.CharField(max_length=255)
    text = models.CharField(max_length=1024, blank=True)
    shortDescription = models.CharField(max_length=255, blank=True, default='')
    duration = models.CharField(max_length=255, blank=True, null=True, default=None)
    school = models.CharField(max_length=255, default='Enchantment', choices=SPELL_SCHOOL_CHOICES)
    maxRange = models.CharField(max_length=255, null=True, blank=True, default=None)
    castingTime = models.CharField(max_length=255, null=True, blank=True, default=None)

    def __str__(self):
        return self.name


# TODO: This belongs in ruleset
class ChoiceType(models.Model):
    name = models.CharField(max_length=255)

    # TODO: add description to describe this choice type
    # TODO: add priority to this choice! 0 is IMMEDIATE and higher is lower priority

    def __str__(self):
        return self.name


# TODO: This belongs in ruleset
class FieldType(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name


# TODO: This belongs in ruleset
class Field(models.Model):
    name = models.CharField(max_length=255)
    fieldType = models.ForeignKey(FieldType, on_delete=models.CASCADE)
    defaultValue = models.CharField(max_length=255, blank=True, null=True, default=None)

    def __str__(self):
        return '{name} ({type})'.format(
            name=self.name,
            type=self.fieldType.name,
        )


class FieldValues(models.Model):
    values = models.TextField(default='{}')

    def __str__(self):
        return '[FieldValues {}]'.format(self.pk)

    def toJson(self):

        # Parse the JSON - if we cant, then return empty
        fieldValueJson = {}
        try:
            fieldJson = json.loads(str(self.values))
        except Exception as e:
            print('Failed to parse json')
            print(e)
            return {}

        # For each fields
        for field in Field.objects.all():
            fieldValues = {}
            typeName = field.fieldType.name

            # Add the value from the object, or the default
            try:
                fieldValues[field.name] = fieldJson[typeName][field.name]
            except KeyError:
                #fieldValues[field.name] = field.defaultValue
                pass

            # Add the value to the returned object,
            # or set the dictionary to the newly created field
            try:
                fieldValueJson[typeName].update(fieldValues)
            except:
                fieldValueJson[typeName] = fieldValues

        return fieldValueJson

# TODO: This belongs specifically to DND-like rulesets
class Attack(models.Model):
    DAMAGE_CHOICES = (
        (0, '1'),
        (1, '1d2'),
        (2, '1d3'),
        (3, '1d4'),
        (4, '1d6'),
        (5, '1d8'),
        (6, '1d10'),
        (7, '2d6'),
        (8, '1d12'),
    )
    DAMAGE_TYPES = (
        (0, 'bludgeoning'),
        (1, 'slashing'),
        (2, 'piercing'),
    )
    ISNONLETHAL_CHOICES = (
        (0, 'lethal'),
        (1, 'non-lethal'),
    )
    ISTHROWN_CHOICES = (
        (0, 'not thrown'),
        (1, 'thrown'),
    )
    damage = models.IntegerField(default=5, choices=DAMAGE_CHOICES)
    damageType = models.IntegerField(default=5, choices=DAMAGE_TYPES)
    isNonLethal = models.IntegerField(default=0, choices=ISNONLETHAL_CHOICES)
    rangeIncrement = models.IntegerField(blank=True, null=True, default=None)
    isThrown = models.IntegerField(default=0, choices=ISTHROWN_CHOICES)
    ammunition = models.ForeignKey('ItemType', null=True, blank=True, default=None)

    def __str__(self):
        other=''
        if self.rangeIncrement:
            other += ' range:' + str(self.rangeIncrement)
            if self.isThrown == 1:
                other += ', thrown'
        if self.isNonLethal == 1:
            other += ' (non-lethal)'

        return '{damage} {type}{other}'.format(
            damage=Attack.DAMAGE_CHOICES[self.damage][1],
            type=Attack.DAMAGE_TYPES[self.damageType][1],
            other=other,
        )


# TODO: This belongs specifically to DND-like rulesets
class Weapon(models.Model):
    COMPLEXITY_CHOICES = (
        (0, 'simple'),
        (1, 'martial'),
        (2, 'exotic'),
    )
    attacks = models.ManyToManyField(Attack, blank=True)
    complexity = models.IntegerField(default=0, choices=COMPLEXITY_CHOICES)

    def getAttackStrings(self):
        return [str(x) for x in self.attacks.all()]

    def __str__(self):
        return '{complexity} weapon: [{attacks}]'.format(
            complexity=Weapon.COMPLEXITY_CHOICES[self.complexity][1],
            attacks=','.join(self.getAttackStrings()),
        )


# TODO: This belongs specifically to DND-like rulesets
class ItemType(models.Model):
    SUBTYPE_CHOICES = (
        (0, 'miscellaneous'),
        (1, 'weapon'),
        (2, 'ammunition'),
        (3, 'container'),
    )

    name = models.CharField(max_length=255)
    subtype = models.IntegerField(default=0, choices=SUBTYPE_CHOICES)
    weapon = models.ForeignKey(Weapon, blank=True, null=True)
    weight = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    cost = models.IntegerField(default=0)

    def __str__(self):

        itemType = ''
        if self.weapon:
            itemType = self.weapon

        return '{name} ({type})'.format(
            name=self.name,
            type=itemType,
        )


# TODO: move this to own place, outside character
# TODO: This can be in "game data" and not ruleset
class Class(models.Model):
    DEFAULT_PK = 1
    BASE_ATTACK_BONUS_CHOICES = (
        ('0', 'slow'),
        ('1', 'medium'),
        ('2', 'fast'),
    )
    SPELLS_KNOWN_TYPE = (
        ('0', 'knows-all'), # druids, paladins, rangers
        ('1', 'selected'), # sorcerers, bards
        ('2', 'selected-can-copy'), # wizards
    )
    CASTER_TYPE = (
        ('0', 'none'),
        ('1', 'weak'),
        ('2', 'strong'),
    )
    PLAYSTYLE_TYPE = (
        ('0', 'adaptable'),
        ('1', 'bold'),
        ('2', 'thoughtful'),
    )

    name = models.CharField(max_length=200)
    bab = models.CharField(max_length=1, choices=BASE_ATTACK_BONUS_CHOICES)
    spellsKnown = models.CharField(max_length=1, choices=SPELLS_KNOWN_TYPE, default='0')
    casterType = models.CharField(max_length=1, choices=CASTER_TYPE, default='0')
    playstyleType = models.CharField(max_length=1, choices=PLAYSTYLE_TYPE, default='0')
    skillPointsPerLevel = models.IntegerField(default=2)
    hd = models.IntegerField(default=8)
    classSkills = models.ManyToManyField(Field, blank=True)

    def __str__(self):
        return self.name

    def toJson(self):
        return {
            'name': self.name,
            'bab': Class.BASE_ATTACK_BONUS_CHOICES[ int(self.bab)][1],
            'spellsKnown': Class.SPELLS_KNOWN_TYPE[ int(self.spellsKnown)][1],
            'casterType': Class.CASTER_TYPE[ int(self.casterType)][1],
            'playstyleType': Class.PLAYSTYLE_TYPE[ int(self.playstyleType)][1],
            'skillPointsPerLevel': self.skillPointsPerLevel,
            'hd': self.hd,
            'classSkills': [ x.name for x in self.classSkills.all()],
        }


class Race(models.Model):
    SIZE_CHOICES = (
        (-4, 'fine'),
        (-3, 'diminutive'),
        (-2, 'tiny'),
        (-1, 'small'),
        ( 0, 'medium'),
        ( 1, 'large'),
        ( 2, 'huge'),
        ( 3, 'gargantuan'),
        ( 4, 'collosal'),
    )
    # puny	short	average	tall	towering
    HEIGHT_CHOICES = (
        (0, 'puny'),
        (1, 'short'),
        (2, 'average'),
        (3, 'tall'),
        (4, 'towering'),
    )
    # frail	thin	average	built	heavy
    WEIGHT_CHOICES = (
        (0, 'frail'),
        (1, 'thin'),
        (2, 'average'),
        (3, 'built'),
        (4, 'heavy'),
    )

    name = models.CharField(max_length=200)
    trait = models.CharField(max_length=200)
    size = models.IntegerField(choices=SIZE_CHOICES, default=0)
    height = models.IntegerField(choices=HEIGHT_CHOICES, default=2)
    weight = models.IntegerField(choices=WEIGHT_CHOICES, default=2)
    ageScale = models.DecimalField(max_digits=5, decimal_places=2, default=1.0)
    fieldValues = models.ForeignKey(FieldValues, default=None, null=True)

    def __str__(self):
        return self.name

    def toJson(self):
        raceObject = {
            'name': self.name,
            'trait': self.trait,
            'size': int(self.size),
            'ageScale': float(self.ageScale),
            'height': Race.HEIGHT_CHOICES[self.height][1],
            'weight': Race.WEIGHT_CHOICES[self.weight][1],
        }

        fieldJson = {}
        try:
            fieldJson = self.fieldValues.toJson()
        except Exception as e:
            print(e)
        raceObject.update(fieldJson)

        return raceObject


class Character(models.Model):
    created_on = models.DateTimeField('date created')
    name = models.CharField(max_length=255)
    fieldValues = models.ForeignKey(FieldValues, default=None, null=True)

    @staticmethod
    def createNew():
        character = Character.objects.create(
            name='New Character',
            created_on=timezone.now(),
            fieldValues=FieldValues.objects.create(),
            )
        character.save()
        return character

    def __str__(self):
        return self.name

    def toJson(self):
        characterJson = {
            'id': self.pk,
            'name': self.name,
            'choices': [x.toJson() for x in self.characterchoice_set.all()],
        }

        #print( self.fieldValues )
        try:
            fieldVals = self.fieldValues.toJson()
            characterJson.update(fieldVals)
        except:
            # We don't have a fieldValues, but that's fine
            print('No field values found for ' + self.name )
            pass

        return characterJson


class CharacterChoice(models.Model):
    character = models.ForeignKey(Character, on_delete=models.CASCADE)
    choiceType = models.ForeignKey(ChoiceType, related_name='+', on_delete=models.CASCADE)
    reason = models.CharField(max_length=255, default='unknown')
    outcome = models.CharField(max_length=255, default=None, blank=True, null=True )

    def __str__(self):
        return '{character} ({choiceType}): {outcome}'.format(
            character=self.character.name,
            choiceType=self.choiceType.name,
            outcome=self.outcome,
        )

    def toJson(self):
        return {
            'type': self.choiceType.name,
            'reason': self.reason,
            'outcome': self.outcome,
        }


class Item(models.Model):
    character = models.ForeignKey(Character, on_delete=models.CASCADE)
    archetype = models.ForeignKey(ItemType, on_delete=models.CASCADE)
    # TODO: put some durability or magic stuff in here
    # TODO: also put some container placement in here
