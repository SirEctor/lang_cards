from django.contrib import admin
from .models import Mode

# Register your models here.
class ModeAdmin(admin.ModelAdmin):
    list_display = ('code', 'mode')


admin.site.register(Mode, ModeAdmin)