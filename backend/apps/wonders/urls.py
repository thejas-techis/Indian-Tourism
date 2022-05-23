from django.urls import path
from . import views

urlpatterns = [
    path('', views.WonderList.as_view(), name='wonder_list'),
]
