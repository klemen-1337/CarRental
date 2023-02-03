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

class CarDetails(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    transmission = models.CharField(max_length=10, choices=(('manual', 'Manual'), ('automatic', 'Automatic')))
    horsepower = models.IntegerField()
    registration_date = models.DateField()

    def __str__(self):
        return self.car.make + self.car.model + str(self.car.year)