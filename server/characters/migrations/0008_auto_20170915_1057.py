# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-15 17:57
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0007_auto_20170914_1752'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fieldvalue',
            name='field',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='characters.Field'),
        ),
    ]
