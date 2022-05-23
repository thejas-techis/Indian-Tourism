from rest_framework import generics, filters
from .serializers import WonderSerializer
from django.http import JsonResponse
from .models import Wonder
from django_filters.rest_framework import DjangoFilterBackend

class WonderList(generics.ListAPIView):
    # Get all Wonders, limit = 20
    queryset = Wonder.objects.all()
    serializer_class = WonderSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['name', 'description']

