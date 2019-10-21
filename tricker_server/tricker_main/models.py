from django.db import models


# Create your models here.
class Image(models.Model):
    pub_date = models.DateTimeField('date published')
    main_photo = models.ImageField(upload_to='tricker_main/static/to_predict', height_field=None, width_field=None,
                                   max_length=100)
    probability = models.DecimalField(max_digits=5, decimal_places=2)
