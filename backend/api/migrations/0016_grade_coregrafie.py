# Generated by Django 2.2.7 on 2019-11-13 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_auto_20191113_1509'),
    ]

    operations = [
        migrations.AddField(
            model_name='grade',
            name='coregrafie',
            field=models.IntegerField(null=True),
        ),
    ]
