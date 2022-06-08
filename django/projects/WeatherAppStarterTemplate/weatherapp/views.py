from multiprocessing import context
from django.shortcuts import render
from decouple import config
import requests
from pprint import pprint

# https://api.openweathermap.org/data/2.5/weather?q=izmir&units=metric&appid=ac083b4c88408ad72956909a36f1093d
def home(request):
    API_KEY=config('API_KEY')
    city = 'Sakarya'
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