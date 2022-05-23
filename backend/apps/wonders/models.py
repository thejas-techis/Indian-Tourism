from django.db import models
from cloudinary.models import CloudinaryField
from apps.categories.models import Category

# Create your models here.

class Wonder(models.Model):
   
    class Meta(object):
        db_table = 'wonder'

    name = models.CharField(
        'Name', max_length=100, db_index=True, null=False, blank=False
    )

    description = models.CharField(
        'Description', max_length=5000, db_index=True, null=False, blank=False
    )

    image = CloudinaryField(
        'Image', blank=False
    )
   

    time_to_travel1 = models.CharField(
        'Time To Travel1', max_length=100, null=False, blank=False
    )

    time_to_travel2 = models.CharField(
        'Time To Travel2', max_length=100, null=False, blank=False
    )

    time_to_travel3 = models.CharField(
        'Time To Travel3', max_length=100, null=False, blank=False
    )
    googel_map_link = models.CharField(
        'Googel Map Link', max_length=500, null=False, blank=False
    )

    google_map_image = CloudinaryField(
        'Google Map Image', blank=False
    )

    created_at = models.DateTimeField(
        'Created_at',auto_now_add=True, null=False, blank=False
    )


    updated_at = models.DateTimeField(
        'Updated_at', auto_now_add=True, null=False, blank=False
    )

    def __str__(self):
        return self.name