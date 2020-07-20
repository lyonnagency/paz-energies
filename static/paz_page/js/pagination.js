'use strict'
// crear el html de la página para las imagenes
// dejar un cuerpo htmtl en el archivo HTML para dejar seo a las imagenes
// crear el cambio de categoría en las imagenes
// crear el páginador de la galeria
var static_django = $('.static_url')[0].href
console.log(static_django)


function crearImagenes(selector, arr_img_sliced) {
    console.log(arr_img_sliced)
    console.log('|^ esta el array a color')
    var imagenes_html = '';
    arr_img_sliced.forEach((imagen) => {
        imagenes_html += `
            <div class="img-proyecto"><img src="${static_django}/img/${imagen.nombre}" alt="${static_django}/img/${imagen.alt}" class="img-fluid"></div>
            `;
    })
    $(selector).html(imagenes_html)
    modalImagenes()
    //console.log(imagenes_html)
}

function paginador(arr_img) {
    $('.controls-pag').remove()
    $('.contenedor-control').html('<div class="controls-pag"></div>')
    var itemsPP = 8;
    let total = Math.ceil(arr_img.length / itemsPP);
    console.log(arr_img)

    var paginacion_var = $('.controls-pag').twbsPagination({
        totalPages: total,
        visiblePages: total,
        first: '',
        last: '',
        prev: '',
        next: '',
        pageClass: 'item-paz',
        anchorClass: 'page-link-paz',
        onPageClick: function (event, page) {
            // console.log(arr_img)
            let ini_page = (page == 1) ? 0 : (page - 1) * itemsPP;
            let fin_page = (ini_page + itemsPP >= arr_img.length) ? arr_img.length : (ini_page + itemsPP);
            // console.log(ini_page)
            // console.log(fin_page)
            // console.log(arr_img.length)
            let arr_img_sliced = arr_img.slice(ini_page, fin_page)

            crearImagenes('.images-proyectos', arr_img_sliced)
        }
    });
    // console.log(paginacion_var)
}

//cambio de clase para el menu de proyectos
function cambioMenuProy() {
    var menu = document.querySelectorAll('.menu-proy>li')
    // console.log(menu)

    menu.forEach((item, indice) => {
        item.addEventListener('click', () => {
            document.querySelector('.active-proyectos').classList.remove('active-proyectos')
            item.classList.add('active-proyectos')
            // enviar el array a mostrar
            //console.log(bd_imagenes[indice])
            // console.log(indice)
            paginador(bd_imagenes[indice])
        })
    })
}


function modalImagenes(){
    var imagenes=document.querySelectorAll('.img-proyecto');
    imagenes.forEach((imagen)=>{
        console.log(imagen)
        imagen.addEventListener('click',(elem)=>{
            console.log(elem.target.currentSrc)
            $('.modal-content').html(`<img src="${elem.target.currentSrc}" alt="" class="img-fluid">`)
            $('#modal-imagenes').modal('show');
        })
    })
}
window.addEventListener('load', () => {
    cambioMenuProy();
    paginador(bd_imagenes[0])
    modalImagenes()
})


// Array con el nombre de las  imágenes que se mostrarán
var bd_imagenes = [
    [
        {
            nombre: 'pr-1.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-2.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-3.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-4.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-5.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-6.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-7.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-8.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-9.jpg',
            alt: 'Paz electricistas'
        },

    ],
    //Segunda galeria
    [
        {
            nombre: 'pr-8.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-7.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-2.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-9.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-1.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-6.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-7.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-8.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-5.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-1.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-9.jpg',
            alt: 'Paz electricistas'
        },
    ],
    //**************************************
    [
        {
            nombre: 'pr-9.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-2.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-8.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-5.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-5.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-6.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-7.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-3.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-9.jpg',
            alt: 'Paz electricistas'
        },

    ],
    //*********************************************
    [
        {
            nombre: 'pr-5.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-1.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-6.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-3.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-5.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-6.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-7.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-3.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-9.jpg',
            alt: 'Paz electricistas'
        },

    ],
    //************************
    [
        {
            nombre: 'pr-5.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-1.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-8.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-9.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-5.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-1.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-7.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-8.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-1.jpg',
            alt: 'Paz electricistas'
        },

    ],
    //***********************
    [
        {
            nombre: 'pr-4.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-2.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-1.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-3.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-5.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-6.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-5.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-1.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-4.jpg',
            alt: 'Paz electricistas'
        },
                {
            nombre: 'pr-3.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-5.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-6.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-5.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-1.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-4.jpg',
            alt: 'Paz electricistas'
        },
                {
            nombre: 'pr-3.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-5.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-6.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-5.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-1.jpg',
            alt: 'Paz electricistas'
        },
        {
            nombre: 'pr-4.jpg',
            alt: 'Paz electricistas'
        },

    ],
]

