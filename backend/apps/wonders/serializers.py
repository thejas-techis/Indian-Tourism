from .models import Wonder
from rest_framework import serializers


class WonderSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Wonder
        fields = '__all__'
