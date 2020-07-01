# Generated by Django 3.0.6 on 2020-06-25 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('standard_backend_app', '0002_auto_20200625_1432'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='size_option',
        ),
        migrations.AlterField(
            model_name='pedido',
            name='dateTime',
            field=models.DateTimeField(blank=True, default='2020-06-25T14:48:36.304952-03:00', null=True, verbose_name='Data do Registro'),
        ),
        migrations.AlterField(
            model_name='produto',
            name='dateRegister',
            field=models.DateTimeField(blank=True, default='2020-06-25T14:48:36.220021-03:00', null=True, verbose_name='Data do Último Registro'),
        ),
    ]
