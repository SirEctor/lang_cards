from django.shortcuts import render
from rest_framework import viewsets
from .serializers import tigrinyaSerializer
from .models import tigrinya

# Create your views here.
class tigrinyaView(viewsets.ModelViewSet):
    serializer_class = tigrinyaSerializer
    queryset = tigrinya.objects.all()