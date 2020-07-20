from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from django.shortcuts import render, redirect
from .forms import ContactForm
from django.urls import reverse
from django.core.mail import EmailMessage
from django.conf import settings

from django.http import HttpResponse
# Create your views here.
def index(request):
    contact_form = ContactForm()
    men = settings.DEFAULT_FROM_EMAIL
    allow_send=0
    if request.method == 'POST':
        # si se ha recibido una peticion post y en esta respuesta, tambien se obtienen los errores del formulario
        contact_form = ContactForm(request.POST)
        if contact_form.is_valid():
            # men='es válido'
            name = request.POST.get('name', '')
            email = request.POST.get('email', '')
            phone = request.POST.get('phone', '')
            mensaje = request.POST.get('mensaje', '')
            # se envia el correo
            email = EmailMessage(
                'Correo desde el portal de la página de paz electricistas',  # asutno
                'De {} <{}> con el telefono {}\n\n Escribió\n\n{}'.format(name,email ,phone, mensaje),
                settings.DEFAULT_FROM_EMAIL,  # email de origen,
                ['fpurecol@gmail.com', 'francis_chelas@hotmail.com'],
                # reply_to=[email]
            )
            # email.send()
            try:
                email.send()
                return redirect(reverse('index')+'?ok#contacto')
            except :
               return redirect(reverse('index')+'?fail#contacto')

    return render(request, 'paz_page/index.html', {'form': contact_form, 'men': men,'allow_send':allow_send})
