from django.db import models

# Create your models here.
class Mode(models.Model):
    code = models.CharField(max_length=120)
    mode = models.CharField(max_length=120)

    def _str_(self):
        return self.mode