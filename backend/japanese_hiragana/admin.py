from django.contrib import admin
from .models import Japanese_Hiragana

# Register your models here.

class Japanese_HiraganaAdmin(admin.ModelAdmin):
    list_display = ('otherLang', 'english','langFamily','code')


admin.site.register(Japanese_Hiragana, Japanese_HiraganaAdmin)