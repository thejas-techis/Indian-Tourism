from django.db import models
from cloudinary.models import CloudinaryField
from apps.categories.models import Category

# Create your models here.

class Attraction(models.Model):
   
    class Meta(object):
        db_table = 'attraction'

    name = models.CharField(
        'Name', max_length=100, db_index=True, null=False, blank=False
    )

    description = models.CharField(
        'Description', max_length=500000, db_index=True, null=False, blank=False
    )

    image = CloudinaryField(
        'Image', blank=False
    )
   

    time_to_travel = models.CharField(
        'Time To Travel', max_length=100, null=False, blank=False
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