# Generated by Django 4.0.5 on 2022-06-08 14:21

from django.db import migrations, models
import users.models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(default='dummy_user_man.png', upload_to=users.models.user_profile_path),
        ),
    ]
