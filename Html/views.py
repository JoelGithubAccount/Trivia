from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'index.html')
    
def historia(request):
    return render(request, 'historia/pregunta_1.html') 



