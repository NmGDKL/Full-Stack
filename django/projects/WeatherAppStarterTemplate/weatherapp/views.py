from multiprocessing import context
from django.shortcuts import render
from decouple import config
import requests
from pprint import pprint
from django.contrib import messages

from weatherapp.models import City

# https://api.openweathermap.org/data/2.5/weather?q=izmir&units=metric&appid=ac083b4c88408ad72956909a36f1093d
def home(request):
    API_KEY=config('API_KEY')
    u_city = request.GET.get('city')
    if u_city:
        url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}&units=metric'
        response = requests.get(url)
        if response.ok:
            content = response.json()
            r_city = content['name']
            if City.objects.filter(name=r_city):
                messages.warning(request, f'{r_city} already exists in the database')
            else:
                City.objects.create(name=r_city)
                messages.success(request, f'{r_city} added to the database')
            
        else:
            messages.error(request, 'City not found')

        


    content = response.json()
   

    url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}&units=metric'
    response = requests.get(url)
    content = response.json()

    context = {
        'city': content['name'],
        'temp': content['main']['temp'],
        'icon': content['weather'][0]['icon'],
        'desc': content['weather'][0]['description'],
    }
    return render(request, 'weatherapp/home.html', context)