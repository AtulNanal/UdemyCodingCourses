from django.urls import path
from . import views

#app_name is special variable that Django looks for
#Ths statement below registers the app name space 
#This registration is needed for using url names as Django Templates Tags
app_name = 'my_app'

urlpatterns = [
    path('', views.example_view, name='Example'),
    path('variable/', views.variable_view, name='Variable')
]