"""djangofinder URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from characters.views import CharacterApi, ClassApi, RaceApi, NormalizeCharacters, ImportAll

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/normalize$', NormalizeCharacters.as_view(), name='Normalize'),
    url(r'^api/import$', ImportAll.as_view(), name='ImportAll'),
    url(r'^api/class/(?P<class_name>[a-zA-Z]+)$', ClassApi.as_view(), name='Class Api'),
    url(r'^api/race/(?P<race_name>[a-zA-Z]+)$', RaceApi.as_view(), name='Race Api'),
    url(r'^api/character/(?P<character_id>[a-z0-9]+)$', CharacterApi.as_view(), name='Character Api'),
]
