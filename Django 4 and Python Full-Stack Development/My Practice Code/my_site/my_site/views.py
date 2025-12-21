from django.http import HttpResponse

#Example of Function Views
def home_view(request):
    return HttpResponse('HOME_VIEW')