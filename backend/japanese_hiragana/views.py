from django.shortcuts import render
from rest_framework import viewsets
from .serializers import Japanese_HiraganaSerializer
from .models import Japanese_Hiragana

# Create your views here.

class Japanese_HiraganaView(viewsets.ModelViewSet):
    serializer_class = Japanese_HiraganaSerializer
    queryset = Japanese_Hiragana.objects.all().order_by('?')