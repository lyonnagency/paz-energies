from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(label='Nombre', required=True, widget=forms.TextInput(
        attrs={'class': 'input-contacto col-lg-10 offset-1 col-9 form-control','placeholder':'Tu nombre'}
    ), min_length=3, max_length=100)
    email = forms.EmailField(label='Email', required=True, widget=forms.EmailInput(
        attrs={'class': 'input-contacto col-lg-10 offset-1 col-9 form-control','placeholder':'Tu correo electrónico'}
    ), min_length=3, max_length=100)
    phone = forms.IntegerField(label='Telefono', required=True, widget=forms.NumberInput(
        attrs={'class': 'input-contacto col-lg-10 offset-1 col-9 form-control','placeholder':'Tu telefono'}
    ))
    mensaje = forms.CharField(label='Mensaje', required=True, widget=forms.Textarea(
        attrs={'class': 'input-contacto col-lg-10 offset-1 col-9 form-control mensaje-control  ml-lg-0 ml-2','rows':1,'placeholder':'Cuentanos tu problema'}
    ),min_length=3, max_length=1000)
