
from django.urls import path, include
from student.views import home, henry

urlpatterns = [
    path('', home, name='home'),
     path('henry/', henry, name='henry'),
]        
