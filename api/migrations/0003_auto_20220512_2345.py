# Generated by Django 3.2.9 on 2022-05-12 23:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_careers'),
    ]

    operations = [
        migrations.CreateModel(
            name='DiscussionPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(blank=True, null=True)),
                ('author', models.TextField(max_length=50)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('content', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.AlterField(
            model_name='careers',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='note',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
