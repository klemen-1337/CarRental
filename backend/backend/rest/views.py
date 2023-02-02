# views.py
from rest_framework.views import APIView
from rest_framework import status
from .serializers import CarSerializer
from rest_framework.response import Response
from .models import Car


class CarViewSet(APIView):

    def get(self, request):
        queryset = Car.objects.all()
        serializer_class = CarSerializer(queryset, many=True)
        return Response(serializer_class.data, status=status.HTTP_200_OK)

    def post(self, request):

        data = request.data

        serializer = CarSerializer(data=data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        car = serializer.create(serializer.data)
        car = CarSerializer(car)

        return Response(car.data, status=status.HTTP_201_CREATED)

    def delete(self, request):
        pass


