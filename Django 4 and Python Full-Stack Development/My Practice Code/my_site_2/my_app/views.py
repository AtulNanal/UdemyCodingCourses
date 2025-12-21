from django.shortcuts import render
from datetime import datetime

# Create your views here.

def example_view(request):
    #my_app/templates/my_app/example.html
    return render(request, 'my_app/example.html')


def variable_view(request):

    my_var = {'first_name':'Rosalind', 
              'last_name':'FraNKlin',
              'some_list':[1, 2, 3],
              'some_dict':{'inside_key':'inside_value', 'one_more_key':'one_more_value'},
              'user_logged_in':True,
              'date': datetime.now()
              }

    return render(request, 'my_app/variable.html', context=my_var)

