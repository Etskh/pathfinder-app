# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-19 02:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0020_auto_20170918_1317'),
    ]

    operations = [
        migrations.DeleteModel(
            name='StatBlock',
        ),
        migrations.AddField(
            model_name='spell',
            name='duration',
            field=models.CharField(blank=True, default=None, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='spell',
            name='maxRange',
            field=models.CharField(blank=True, default=None, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='spell',
            name='school',
            field=models.CharField(choices=[('Abjuration', 'Abjuration'), ('Conjuration', 'Conjuration'), ('Divination', 'Divination'), ('Enchantment', 'Enchantment'), ('Evocation', 'Evocation'), ('Illusion', 'Illusion'), ('Necromancy', 'Necromancy'), ('Transmutation', 'Transmutation'), ('Universal', 'Universal')], default='Enchantment', max_length=255),
        ),
        migrations.AddField(
            model_name='spell',
            name='shortDescription',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='spell',
            name='text',
            field=models.CharField(blank=True, max_length=1024),
        ),
        migrations.AlterField(
            model_name='itemtype',
            name='subtype',
            field=models.IntegerField(choices=[(0, 'miscellaneous'), (1, 'weapon'), (2, 'ammunition'), (3, 'container')], default=0),
        ),
    ]