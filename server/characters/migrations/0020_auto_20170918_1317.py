# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-18 20:17
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0019_attack_ammunition'),
    ]

    operations = [
        migrations.AddField(
            model_name='itemtype',
            name='cost',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='itemtype',
            name='weight',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
        migrations.AlterField(
            model_name='itemtype',
            name='subtype',
            field=models.IntegerField(choices=[(0, 'miscellaneous'), (1, 'weapon'), (2, 'ammunition')], default=0),
        ),
    ]
