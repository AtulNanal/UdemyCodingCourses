from django.apps import AppConfig


# The name MyAppConfig is directly derived by Django --- 
# removes the snake casing of my_app and makes it camel casing with config suffixed
class MyAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'my_app'
