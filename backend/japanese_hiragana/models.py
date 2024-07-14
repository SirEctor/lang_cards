from django.db import models

# Create your models here.

class Japanese_Hiragana(models.Model):
    otherLang = models.CharField(max_length=120)
    english = models.CharField(max_length=120)
    langFamily = models.CharField(max_length=120)
    code = models.CharField(max_length=120)

    def _str_(self):
        return self.otherLang
        