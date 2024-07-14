from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LanguageSerializer
from .models import Language

# Create your views here.
class LanguageView(viewsets.ModelViewSet):
    serializer_class = LanguageSerializer
    queryset = Language.objects.all()