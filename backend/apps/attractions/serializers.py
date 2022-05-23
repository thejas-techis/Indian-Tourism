from .models import Attraction
from rest_framework import serializers


class AttractionSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Attraction
        fields = '__all__'
