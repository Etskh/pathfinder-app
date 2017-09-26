# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-25 01:35
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0026_auto_20170922_1606'),
    ]

    operations = [
        migrations.CreateModel(
            name='FieldValues',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('values', models.TextField(default='{}')),
            ],
        ),
        migrations.RemoveField(
            model_name='fieldvalue',
            name='character',
        ),
        migrations.RemoveField(
            model_name='fieldvalue',
            name='field',
        ),
        migrations.AlterField(
            model_name='character',
            name='fieldValues',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='characters.FieldValues'),
        ),
        migrations.DeleteModel(
            name='FieldValue',
        ),
    ]
