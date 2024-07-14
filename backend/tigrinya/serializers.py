from rest_framework import serializers
from .models import tigrinya

class tigrinyaSerializer(serializers.ModelSerializer):
    class Meta:
        model = tigrinya
        fields = ('id', 'otherLang', 'english','langFamily','code')

