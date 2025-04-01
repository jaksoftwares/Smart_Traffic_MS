from django.db import models
from django.db import models
from django.db.models.functions import Lower
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Report(models.Model):
    name = models.CharField(
        verbose_name= 'Name',
        max_length= 75,
        unique= True,
        null=True,
        blank= True,
        default= 'TrafficMS User'
    )

    email = models.EmailField(
        verbose_name= 'Email',
        max_length= 75,
        unique= True,
        null= True,
        blank= True,
        default= 'reports@trafficms.co.ke'
    )

    incident_type = models.CharField(
        verbose_name= 'Incident Type',
        max_length= 75,
        null= True,
        blank= True
    )

    location = models.CharField(
        verbose_name= 'Location',
        max_length= 75,
        null= True,
        blank= True
    )

    details = models.TextField(
        verbose_name= 'Details',
        null= True,
        blank= True
    )

    date = models.DateTimeField(
        verbose_name= 'Date',
        auto_now_add= True
    )


    
