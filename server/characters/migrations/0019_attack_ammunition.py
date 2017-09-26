# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-18 20:09
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0018_attack_isthrown'),
    ]

    operations = [
        migrations.AddField(
            model_name='attack',
            name='ammunition',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='characters.ItemType'),
        ),
    ]
