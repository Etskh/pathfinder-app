#!/bin/sh

python manage.py makemigrations characters
python manage.py migrate
