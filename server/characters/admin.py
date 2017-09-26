from django.contrib import admin
from django import forms

from .models import Character, CharacterChoice, FieldValues

from .models import Spell, ChoiceType, FieldType, Field, Class, Race, ItemType, Weapon, Attack



class CharacterAdmin( admin.ModelAdmin ):
    pass


admin.site.register(Character, CharacterAdmin)
admin.site.register(CharacterChoice)
admin.site.register(FieldValues)


# TODO: Move to their own app
admin.site.register(Class)
admin.site.register(Race)
admin.site.register(Spell)
admin.site.register(ChoiceType)
admin.site.register(FieldType)
admin.site.register(Field)
admin.site.register(ItemType)
admin.site.register(Weapon)
admin.site.register(Attack)
