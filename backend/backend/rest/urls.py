# myapi/urls.py
from django.urls import path
from .views import CarViewSet

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('cars', CarViewSet.as_view())
]