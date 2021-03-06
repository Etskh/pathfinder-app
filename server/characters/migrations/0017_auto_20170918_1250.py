# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-18 19:50
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0016_auto_20170918_1213'),
    ]

    operations = [
        migrations.CreateModel(
            name='Attack',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('damage', models.IntegerField(choices=[(0, '1'), (1, '1d2'), (2, '1d3'), (3, '1d4'), (4, '1d6'), (5, '1d8'), (6, '1d10'), (7, '2d6'), (8, '1d12')], default=5)),
                ('damageType', models.IntegerField(choices=[(0, 'bludgeoning'), (1, 'slashing'), (2, 'piercing')], default=5)),
                ('isNonLethal', models.IntegerField(choices=[(0, 'lethal'), (1, 'non-lethal')], default=0)),
                ('rangeIncrement', models.IntegerField(blank=True, default=None, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='ItemType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('subtype', models.IntegerField(choices=[(0, 'miscellaneous')], default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Weapon',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('complexity', models.IntegerField(choices=[(0, 'simple'), (1, 'martial'), (2, 'exotic')], default=0)),
                ('attacks', models.ManyToManyField(blank=True, to='characters.Attack')),
            ],
        ),
        migrations.RemoveField(
            model_name='level',
            name='character',
        ),
        migrations.RemoveField(
            model_name='level',
            name='levelClass',
        ),
        migrations.RemoveField(
            model_name='spellknown',
            name='character',
        ),
        migrations.RemoveField(
            model_name='spellknown',
            name='learnedClass',
        ),
        migrations.RemoveField(
            model_name='spellknown',
            name='spell',
        ),
        migrations.DeleteModel(
            name='Level',
        ),
        migrations.DeleteModel(
            name='SpellKnown',
        ),
        migrations.AddField(
            model_name='itemtype',
            name='weapon',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='characters.Weapon'),
        ),
        migrations.AddField(
            model_name='item',
            name='archetype',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='characters.ItemType'),
        ),
        migrations.AddField(
            model_name='item',
            name='character',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='characters.Character'),
        ),
    ]
