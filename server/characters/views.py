import json

from django.http import HttpResponse
from django.http import JsonResponse
from django.views import View

from .models import Character

from .models import FieldType, Field, FieldValues
from .models import Spell, Class, Race

class CharacterApi(View):
    def send(self, output, status=200):
        response = JsonResponse(output, status=status)
        response['Cache-Control'] = 'no-cache'
        response['Access-Control-Allow-Origin'] = '*'
        return response

    def sendError(self, code, message):
        return self.send({
                'error': message
            }, code)

    def post(self, request, *args, **kwargs):
        # get the character-id from the path
        charater_id = kwargs['character_id']

        # if it's "new", then we need to create new one - not resty, but makes sense to me
        if charater_id == 'new':
            character = Character.createNew()
            return self.send(character.toJson())

        try:
            character = Character.objects.get(pk=charater_id)
        except:
            return self.sendError(404, 'No character with id ' + charater_id)

        # Get the request body
        try:
            body = request.body.decode("utf-8", "strict")
        except UnicodeEncodeError as e:
            return self.sendError(400, 'Unparseable unicode characters in request body')

        try:
            body = json.loads(body)
        except json.decoder.JSONDecodeError as e:
            return self.sendError(400, 'Mal-formed JSON request body: ' + str(e))


        # Now here, start editing the object
        output = {}
        for fieldTypeName, field in body.items():
            # if the value is a string, we should find the field

            if isinstance(field, str):
                # It is a string, so we should check if it's the character's name
                if fieldTypeName == 'name':
                    character.name = field
                    character.save()
                    continue

            if fieldTypeName == 'choices':
                print('Skipping parsing choices for character')
                pass
            else:
                for fieldName, valueToSet in field.items():
                    try:
                        field = Field.objects.get(name=fieldName)
                    except:
                        return self.sendError(400, 'No field called {field} found. If you want to make a new field, add it to the fixtures list in the views.py of the app, and run /api/normalize' + fieldName )

        # TODO: send only what we need back! This is just for debugging!
        output.update( character.toJson() )

        return self.send(output)



    def get(self, request, *args, **kwargs):
        # <view logic>
        #characterId = request.GET.get('id', None)
        charater_id = kwargs['character_id']
        response = None

        if charater_id == 'all':
            # We should return a list of characters
            characters = Character.objects.all()
            return self.send({
                'characters': [c.toJson() for c in characters]
            })

        try:
            character = Character.objects.get(pk=charater_id)
        except:
            return self.sendError(404, 'No character with id ' + charater_id)

        return self.send(character.toJson())


class ClassApi(View):
    def send(self, output, status=200):
        response = JsonResponse(output, status=status)
        response['Cache-Control'] = 'no-cache'
        response['Access-Control-Allow-Origin'] = '*'
        return response

    def sendError(self, code, message):
        return self.send({
                'error': message
            }, code)
    def get(self, request, *args, **kwargs):
        # <view logic>
        #characterId = request.GET.get('id', None)
        class_name = kwargs['class_name']
        response = None

        if class_name == 'all':
            # We should return a list of characters
            classes = Class.objects.all()
            return self.send({
                'classes': [c.toJson() for c in classes]
            })

        try:
            classObject = Class.objects.get(name=class_name)
        except:
            return self.sendError(404, 'No class with name ' + class_name)

        return self.send(classObject.toJson())



class RaceApi(View):
    def send(self, output, status=200):
        response = JsonResponse(output, status=status)
        response['Cache-Control'] = 'no-cache'
        response['Access-Control-Allow-Origin'] = '*'
        return response

    def sendError(self, code, message):
        return self.send({
                'error': message
            }, code)

    def get(self, request, *args, **kwargs):
        # <view logic>
        #characterId = request.GET.get('id', None)
        race_name = kwargs['race_name']
        response = None

        if race_name == 'all':
            # We should return a list of characters
            races = Race.objects.all()
            return self.send({
                'races': [r.toJson() for r in races]
            })

        try:
            raceObject = Race.objects.get(name=race_name)
        except:
            return self.sendError(404, 'No race with name ' + race_name)

        return self.send(raceObject.toJson())





class NormalizeCharacters(View):
    def get(self, request, *args, **kwargs):

        fields = [
            # Base stats, treated differently from others
            ('Stat', 'str', 10),
            ('Stat', 'dex', 10),
            ('Stat', 'con', 10),
            ('Stat', 'int', 10),
            ('Stat', 'wis', 10),
            ('Stat', 'cha', 10),

            # Levels of classes
            ('Levels', 'Ranger', None),
            ('Levels', 'Wizard', None),

            # Current values for stats
            ('Current', 'Exp', 0),
            ('Current', 'Hitpoints', 0),

            # Skill ranks
            ('Skill', 'Appraise', 0),
            ('Skill', 'Acrobatics', 0),
            ('Skill', 'Bluff', 0),
            ('Skill', 'Climb', 0),
            ('Skill', 'Craft (alchemy)', 0),
            ('Skill', 'Craft (armour)', 0),
            ('Skill', 'Craft (baskets)', 0),
            ('Skill', 'Craft (books)', 0),
            ('Skill', 'Craft (bows)', 0),
            ('Skill', 'Craft (calligraphy)', 0),
            ('Skill', 'Craft (carpentry)', 0),
            ('Skill', 'Craft (cloth)', 0),
            ('Skill', 'Craft (clothing)', 0),
            ('Skill', 'Craft (glass)', 0),
            ('Skill', 'Craft (jewelry)', 0),
            ('Skill', 'Craft (leather)', 0),
            ('Skill', 'Craft (locks)', 0),
            ('Skill', 'Craft (paintings)', 0),
            ('Skill', 'Craft (pottery)', 0),
            ('Skill', 'Craft (sculptures)', 0),
            ('Skill', 'Craft (ships)', 0),
            ('Skill', 'Craft (shoes)', 0),
            ('Skill', 'Craft (stonemasonry)', 0),
            ('Skill', 'Craft (traps)', 0),
            ('Skill', 'Craft (weapons)', 0),
            ('Skill', 'Diplomacy', 0),
            ('Skill', 'Disable Device', 0),
            ('Skill', 'Disguise', 0),
            ('Skill', 'Escape Artist', 0),
            ('Skill', 'Fly', 0),
            ('Skill', 'Handle Animal', 0),
            ('Skill', 'Heal', 0),
            ('Skill', 'Intimidate', 0),
            ('Skill', 'Knowledge (arcana)', 0),
            ('Skill', 'Knowledge (dungeoneering)', 0),
            ('Skill', 'Knowledge (engineering)', 0),
            ('Skill', 'Knowledge (geography)', 0),
            ('Skill', 'Knowledge (history)', 0),
            ('Skill', 'Knowledge (local)', 0),
            ('Skill', 'Knowledge (nature)', 0),
            ('Skill', 'Knowledge (nobility)', 0),
            ('Skill', 'Knowledge (planes)', 0),
            ('Skill', 'Knowledge (religion)', 0),
            ('Skill', 'Linguistics', 0),
            ('Skill', 'Perception', 0),
            ('Skill', 'Perform (tbd)', 0),
            ('Skill', 'Profession (tbd)', 0),
            ('Skill', 'Stealth', 0),
            ('Skill', 'Spellcraft', 0),
        ]

        output = []
        for field_data in fields:
            # Try to get the field type or make a new one
            try:
                fieldType = FieldType.objects.get(name=field_data[0])
                output.append('Found FieldType {name}'.format(name=field_data[0]))
            except:
                output.append('FieldType {name} not found'.format(name=field_data[0]))
                fieldType = FieldType.objects.create(name=field_data[0])
                fieldType.save()
                output.append('FieldType {name} created'.format(name=field_data[0]))

            # Now try to get the field
            try:
                field = Field.objects.get(name=field_data[1])
                output.append('Found Field {name}'.format(name=field_data[1]))
            except:
                output.append('Field {name} not found'.format(name=field_data[1]))
                field = Field.objects.create(name=field_data[1],fieldType=fieldType,defaultValue=field_data[2])
                field.save()
                output.append('Field {name} created'.format(name=field_data[1]))


            # IF there's no default, then whatever
            if field_data[2] == None:
                continue

            # Now we have teh field for sure
            for character in Character.objects.all():
                value = field_data[2]
                character.createFieldValue(field, value)

        return JsonResponse({
            'output': output,
            })


class ImportAll(View):
    def get(self, request, *args, **kwargs):
        output = []

        output.append('Importing spells...')

        with open('../pathfinder/tools/output/spell-out.json') as allSpellData:
            spellList = json.loads(allSpellData.read())
            for spellData in spellList:
                #
                try:
                    spell = Spell.objects.get(name=spellData['name'])
                    isDirty = False
                    output.append('Found Spell {name}'.format(name=spell.name))
                    if spellData['duration'].lower() == 'instantaneous' and spell.duration != None:
                        spell.duration = None
                        isDirty = True
                        output.append('Setting duration to None')

                    if spell.castingTime != spellData['casting_time']:
                        spell.castingTime = spellData['casting_time']
                        isDirty = True
                        output.append('Setting castingTime to ' + spellData['casting_time'])

                    if isDirty:
                        spell.save()
                except:
                    output.append('Spell {name} not found'.format(name=spellData['name']))
                    spell = Spell.objects.create(
                        name=spellData['name'],
                        text=spellData['text'] or '',
                        shortDescription=spellData['short_description'],
                        duration=spellData['duration'],
                        school=spellData['school'],
                        maxRange=spellData['range'],
                    )
                    spell.save()
                    output.append('Created spell {name}'.format(name=spell.name))

        return JsonResponse({
            'output': output,
            })
