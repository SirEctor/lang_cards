from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ModeSerializer
from .models import Mode

# Create your views here.
class ModeView(viewsets.ModelViewSet):
    serializer_class = ModeSerializer
    queryset = Mode.objects.all()