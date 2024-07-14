from django.db import models

# Create your models here.

class Language(models.Model):
    code = models.CharField(max_length=120)
    language = models.CharField(max_length=120)


    def _str_(self):
        return self.code