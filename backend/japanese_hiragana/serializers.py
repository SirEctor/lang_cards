from rest_framework import serializers
from .models import Japanese_Hiragana

class Japanese_HiraganaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Japanese_Hiragana
        fields = ('id', 'otherLang', 'english','langFamily','code')
        ordering = "?" 