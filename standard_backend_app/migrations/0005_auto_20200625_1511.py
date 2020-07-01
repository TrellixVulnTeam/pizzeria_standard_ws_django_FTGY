# Generated by Django 3.0.6 on 2020-06-25 18:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('standard_backend_app', '0004_auto_20200625_1507'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pedido',
            name='dateTime',
            field=models.DateTimeField(blank=True, default='2020-06-25T15:11:20.077465-03:00', null=True, verbose_name='Data do Registro'),
        ),
        migrations.AlterField(
            model_name='produto',
            name='dateRegister',
            field=models.DateTimeField(blank=True, default='2020-06-25T15:11:19.994493-03:00', null=True, verbose_name='Data do Último Registro'),
        ),
    ]
