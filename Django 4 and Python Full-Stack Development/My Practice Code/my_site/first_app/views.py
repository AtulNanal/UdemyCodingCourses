from django.shortcuts import render
from django.http.response import HttpResponse, HttpResponseNotFound, Http404, HttpResponseRedirect
from django.urls import reverse

articles = {
    'arts' : 'Arts_page',
    'sports' : 'Sports Page',
    'finance' : 'Finance Page',
    'politics' : 'Politics Page',
}

# Create your views here.
def simple_view(request):
    #return HttpResponse('SIMPLE_VIEW')   # Simple response

    # HTML TEMPLATE File with (JINJA) Templating
    # looks for this folder inside settings.py --> DIR where we configured BASE_DIR + templates\ as one path to look for this folder
    return render(request, 'first_app/example.html')   

def arts_view(request):
    try:
        result = articles['arts']
        return HttpResponse(result)
    except:
        #result = 'The Requested URL not Found'
        #return HttpResponseNotFound(result)        
        raise Http404('404 Generic Error')  # 404.html template later on 

def news_view(request, topic):
    try:
        result = articles[topic]
        return HttpResponse(result)
    except:
        #result = 'The Requested URL not Found'
        #return HttpResponseNotFound(result)
        raise Http404('404 Generic Error')    # 404.html template later on      

 

# domain-name.com/first_app/0 ---> domain-name.com/first_app/arts etc
def numbered_page_views(request, page_num):
    topics = list(articles.keys())
    try:
        selected_topic = topics[page_num]
        #return HttpResponseRedirect(f'/first_app/{selected_topic}')  # This will also work but following is using named urls
        return HttpResponseRedirect(reverse('Topic-Pages', args=[selected_topic]))
    except IndexError:
        raise Http404('Invalid page number')

def addition_view(request, num1, num2):
    try:
        # if user types in domain:name/first_app/num1/num2 then result is num1+num2
        add_result = num1 + num2
        result = f'{num1} + {num2} = {add_result}'
        return HttpResponse(result)
    except:
        #result = 'The Requested URL not Found'
        #return HttpResponseNotFound(result)        
        raise Http404('404 Generic Error')  # 404.html template later on 



