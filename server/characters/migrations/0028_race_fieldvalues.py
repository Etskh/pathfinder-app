# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-25 17:59
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0027_auto_20170924_1835'),
    ]

    operations = [
        migrations.AddField(
            model_name='race',
            name='fieldValues',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='characters.FieldValues'),
        ),
    ]