# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-18 18:38
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0013_auto_20170918_1129'),
    ]

    operations = [
        migrations.AddField(
            model_name='class',
            name='classSkills',
            field=models.ManyToManyField(blank=True, to='characters.Field'),
        ),
    ]
