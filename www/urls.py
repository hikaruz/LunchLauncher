from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView

from . import views

app_name = 'www'
urlpatterns = [
    path('', views.index, name='index'),
    path('login', LoginView.as_view(template_name='www/login.html'), name='login'),
    path('logout', LogoutView.as_view(next_page='www:login'), name='logout'),
]
