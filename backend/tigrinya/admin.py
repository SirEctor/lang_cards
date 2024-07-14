from django.contrib import admin
from .models import tigrinya

class tigrinyaAdmin(admin.ModelAdmin):
    list_display = ('otherLang', 'english','langFamily','code')


# Register your models here.

admin.site.register(tigrinya, tigrinyaAdmin)
