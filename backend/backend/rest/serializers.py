# serializers.py
from rest_framework import serializers
from .models import Car
class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'

    def create(self, data):

        car = Car.objects.create(**data)

        return car