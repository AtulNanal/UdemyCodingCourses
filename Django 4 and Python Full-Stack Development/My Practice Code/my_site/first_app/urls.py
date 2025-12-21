from django.urls import path
from . import views

# The url patterns that are given here are not going to be used as it is 
# The project urls.py has entry path('first_app/', include('first_app.urls'))   
# So the route given here will be 'appended' to the route given in that file to 
# get full route ... so it will be 'first_app/<path in app urls.py>' 
urlpatterns = [
    path('', views.simple_view),  # domain.com/first_app

    path('arts', views.arts_view),  # domain.com/first_app/arts

    #Dynamic Routing 
    # path('<str:topic>/') tells Django to match any string after first_app/
    # <str:topic> is a path converter that captures the value and passes it to the view as a parameter.

    path('<int:page_num>/', views.numbered_page_views),

    path('<str:topic>/', views.news_view, name='Topic-Pages'),

    path('<int:num1>/<int:num2>', views.addition_view)
]