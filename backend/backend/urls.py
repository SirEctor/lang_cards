"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from tigrinya import views as tigrinya_views
from language import views as language_views
from mode import views as mode_views
from japanese_hiragana import views as japanese_hiragana_views

router = routers.DefaultRouter()
router.register(r'tigrinya', tigrinya_views.tigrinyaView, 'tigrinya')
router.register(r'language',language_views.LanguageView, 'language')
router.register(r'mode', mode_views.ModeView, 'mode')
router.register(r'japanese_hiragana', japanese_hiragana_views.Japanese_HiraganaView, 'japanese_hiragana')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
