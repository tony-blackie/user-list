# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2017-07-01 08:19
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dinosaurs', '0002_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='secondName',
            new_name='lastName',
        ),
    ]