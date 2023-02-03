# serializers.py
from rest_framework import serializers
from .models import Car, CarDetails
class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'

    def validate(self, data):
        return data

    def create(self, validated_data):
        car = Car.objects.create(**validated_data)
        return car

class CarDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model=CarDetails
        fields = '__all__'

    def validate(self, data):
        return data

    def create(self, validated_data):
        car_details = CarDetails.objects.create(**validated_data)
        return car_details