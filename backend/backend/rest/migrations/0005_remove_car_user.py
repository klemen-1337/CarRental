# Generated by Django 4.1.4 on 2023-02-03 12:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rest', '0004_car_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='car',
            name='user',
        ),
    ]