# Generated by Django 2.2.27 on 2022-05-14 19:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20220514_1616'),
    ]

    operations = [
        migrations.AddField(
            model_name='professionalstory',
            name='imagePath',
            field=models.URLField(default='https://raw.githubusercontent.com/TheWITProject/GOT/main/frontend/src/assets/icons/softwareEngineer.png'),
        ),
    ]