# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-18 18:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0011_class_castertype'),
    ]

    operations = [
        migrations.AddField(
            model_name='class',
            name='playstyleType',
            field=models.CharField(choices=[('0', 'adaptable'), ('1', 'bold'), ('2', 'thoughtful')], default='0', max_length=1),
        ),
    ]
