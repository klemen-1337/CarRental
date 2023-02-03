# models.py
from django.db import models

class Car(models.Model):
    name = models.CharField(max_length=60)
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    vin = models.CharField(max_length=17, unique=True)
    #user = models.ForeignKey('users.UserAccount', on_delete=models.CASCADE)

    def __str__(self):
        return self.make + ' ' + self.model + ' ' + str(self.year)