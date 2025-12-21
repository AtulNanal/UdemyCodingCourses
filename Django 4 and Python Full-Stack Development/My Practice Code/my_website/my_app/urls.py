from django.urls import path
from . import views  # import views file from same folder as this one (from . import)

urlpatterns = [
                path('', views.index, name='index') # This will show up as /my_apps ---> Project urls.py
]