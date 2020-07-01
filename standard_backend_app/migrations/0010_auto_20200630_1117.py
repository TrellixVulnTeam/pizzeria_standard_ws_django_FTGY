# Generated by Django 3.0.6 on 2020-06-30 14:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('standard_backend_app', '0009_auto_20200629_1110'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='tamanho',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='standard_backend_app.Tamanho'),
        ),
        migrations.AlterField(
            model_name='pedido',
            name='dateTime',
            field=models.DateTimeField(blank=True, default='2020-06-30T11:17:45.521134-03:00', null=True, verbose_name='Data do Registro'),
        ),
        migrations.AlterField(
            model_name='produto',
            name='dateRegister',
            field=models.DateTimeField(blank=True, default='2020-06-30T11:17:45.437182-03:00', null=True, verbose_name='Data do Último Registro'),
        ),
    ]
