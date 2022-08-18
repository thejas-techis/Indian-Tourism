from rest_framework import generics, filters
from .serializers import AttractionSerializer
from django.http import JsonResponse
from .models import Attraction
from django_filters.rest_framework import DjangoFilterBackend

class AttractionList(generics.ListAPIView):
    # Get all Attractions, limit = 20
    queryset = Attraction.objects.all()
    serializer_class = AttractionSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['name']

