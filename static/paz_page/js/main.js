'use strict'

function menu_selec() {
    var items = document.querySelectorAll('#navbarSupportedContent > ul > li.selectable');


    items.forEach((i) => {
        i.addEventListener('click', (elem) => {
            document.querySelector('#navbarSupportedContent > ul > li.active-menu')
            document.querySelector('#navbarSupportedContent > ul > li.active-menu').classList.remove('active-menu')
            elem.target.parentElement.classList.add('active-menu')
        })
    })

    document.querySelector('.burger').addEventListener('click', () => {
        setTimeout(() => {
            if (document.querySelector('.navbar-toggler').getAttribute('aria-expanded') == 'true') {
                document.querySelector('.burger').style.backgroundImage = `url("static/paz_page/img/iconos/close.svg")`
            } else {
                document.querySelector('.burger').style.backgroundImage = `url("static/paz_page/img/iconos/burger-menu.svg")`
                document.querySelector('.burger').style.padding = `10px`
            }
        }, 10)
        //console.log(document.querySelector('.burger').style.background_image= `url("static/paz_page/img/iconos/close.svg")`)
    })
}

var services_collection = [
    `    <div class="text-gray-soft flex-wrap flex-lg-nowrap row containe px-lg-5 mt-5">
            <div class="bg-white px-4 py-5 m-2 col">
                <div class="d-flex justify-content-center flex-wrap flex-column">
                    <span class="residencial-ico icon-cards"></span>
                    <h5 class="text-center py-4 servicios-tit">Residencial</h5>
                    <ul class="list-electricistas">
                        <li>Hello</li>
                        <li>don’t have volt electrics.</li>
                        <li>Hello, don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                        <li>Fixing re-volting work</li>
                        <li>Don’t have volt electrics.</li>
                        <li>Don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                    </ul>
                    <span class="sol-ico-sm my-4"></span>
                </div>
            </div>
            <div class="bg-white m-2 px-4 py-5 col active-services">
                <div class="d-flex justify-content-center flex-wrap flex-column">
                    <span class="comercial-ico icon-cards"></span>
                    <h5 class="text-center py-4 servicios-tit">Comercial</h5>
                    <ul class="list-electricistas">
                        <li>Fixing re-volting work.</li>
                        <li>Don’t have volt electrics.</li>
                        <li>Don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                        <li>Fixing re-volting work</li>
                        <li>Don’t have volt electrics.</li>
                        <li>Don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                    </ul>
                    <span class="sol-ico-sm my-4"></span>
                </div>
            </div>
            <div class="bg-white px-4 py-5 m-2 col">
                <div class="d-flex justify-content-center flex-wrap flex-column">
                    <span class="industrial-ico icon-cards"></span>
                    <h5 class="text-center py-4 servicios-tit">Industrial</h5>
                    <ul class="list-electricistas">
                        <li>Fixing re-volting work.</li>
                        <li>Don’t have volt electrics.</li>
                        <li>Don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                        <li>Fixing re-volting work</li>
                        <li>Don’t have volt electrics.</li>
                        <li>Don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                    </ul>
                    <span class="sol-ico-sm my-4"></span>
                </div>
            </div>
        </div>`,
    `
        <div class="text-gray-soft flex-wrap flex-lg-nowrap row containe px-lg-5 mt-5">
            <div class="bg-white px-lg-4 py-5 m-2 col ">
                <div class="d-flex justify-content-center flex-wrap flex-column">
                    <span class="residencial-ico icon-cards"></span>
                    <h5 class="text-center py-4 servicios-tit">Residencial</h5>
                    <ul class="list-electricistas">
                        <li>Fixing re-volting work.</li>
                        <li>Don’t have volt electrics.</li>
                        <li>Don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                        <li>Fixing re-volting work</li>
                        <li>Don’t have volt electrics.</li>
                        <li>Don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                    </ul>
                    <span class="sol-ico-sm my-4"></span>
                </div>
            </div>
            <div class="bg-white px-4 py-5 m-2 col active-services">
                <div class="d-flex justify-content-center flex-wrap flex-column">
                    <span class="comercial-ico icon-cards"></span>
                    <h5 class="text-center py-4 servicios-tit">Comercial</h5>
                    <ul class="list-electricistas">
                        <li>Fixing re-volting work.</li>
                        <li>Don’t have volt electrics.</li>
                        <li>Don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                        <li>Fixing re-volting work</li>
                        <li>Don’t have volt electrics.</li>
                        <li>Don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                    </ul>
                    <span class="sol-ico-sm my-4"></span>
                </div>
            </div>
            <div class="bg-white px-4 py-5 m-2 col">
                <div class="d-flex justify-content-center flex-wrap flex-column">
                    <span class="industrial-ico icon-cards"></span>
                    <h5 class="text-center py-4 servicios-tit">Industrial</h5>
                    <ul class="list-electricistas">
                        <li>Fixing re-volting work.</li>
                        <li>Don’t have volt electrics.</li>
                        <li>Don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                        <li>Fixing re-volting work</li>
                        <li>Don’t have volt electrics.</li>
                        <li>Don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                    </ul>
                    <span class="sol-ico-sm my-4"></span>
                </div>
            </div>
        </div>
    `,
    `
        <div class="text-gray-soft flex-wrap flex-lg-nowrap row containe px-lg-5 mt-5">
            <div class="bg-white px-lg-4 py-5 m-2 col ">
                <div class="d-flex justify-content-center flex-wrap flex-column">
                    <span class="residencial-ico icon-cards"></span>
                    <h5 class="text-center py-4 servicios-tit">Residencial</h5>
                    <ul class="list-electricistas">
                        <li>Fixing re-volting work.</li>
                        <li>Don’t have volt electrics.</li>
                        <li>Don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                        <li>Fixing re-volting work</li>
                        <li>Don’t have volt electrics.</li>
                        <li>Don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                    </ul>
                    <span class="sol-ico-sm my-4"></span>
                </div>
            </div>
            <div class="bg-white px-4 py-5 m-2 col">
                <div class="d-flex justify-content-center flex-wrap flex-column">
                    <span class="comercial-ico icon-cards"></span>
                    <h5 class="text-center py-4 servicios-tit">Comercial</h5>
                    <ul class="list-electricistas">
                        <li>Fixing re-volting work.</li>
                        <li>Don’t have volt electrics.</li>
                        <li>Don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                        <li>Fixing re-volting work</li>
                        <li>Don’t have volt electrics.</li>
                        <li>Don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                    </ul>
                    <span class="sol-ico-sm my-4"></span>
                </div>
            </div>
            <div class="bg-white px-4 py-5 m-2 col">
                <div class="d-flex justify-content-center flex-wrap flex-column">
                    <span class="industrial-ico icon-cards"></span>
                    <h5 class="text-center py-4 servicios-tit">Industrial</h5>
                    <ul class="list-electricistas">
                        <li>Fixing re-volting work.</li>
                        <li>Don’t have volt electrics.</li>
                        <li>Don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                        <li>Fixing re-volting work</li>
                        <li>Don’t have volt electrics.</li>
                        <li>Don’t get fused give.</li>
                        <li>Don’t pull the call us.</li>
                    </ul>
                    <span class="sol-ico-sm my-4"></span>
                </div>
            </div>
        </div>
    `
];

/*
* caraga los eventos para la seccion de servicios
* @args ninguno
* */
function services_select(tarjetas_tipo) {
    var cards_serv = document.querySelectorAll(tarjetas_tipo)
    var cable_tipo = document.querySelector('.cables').children
    var contenedor = document.querySelector('.contenedor-servicios')
    cards_serv.forEach((i) => {
        i.addEventListener('click', (card) => {
            let actual_class = '';//clase actual del elemento al cual se hizo click
            let animacion_direc = '';
            let animacion_direc_opuesta = '';
            let center_card = document.querySelector('.center-card');

            document.querySelector('.active-card').classList.remove('active-card')
            i.classList.add('active-card')
            document.querySelector('.active-cable').classList.remove('active-cable')
            cable_tipo[i.dataset.card_no].classList.add('active-cable')
            //Agrega los servicios al dom
            contenedor.innerHTML = `<div class="contenedor-servicios-1">${services_collection[i.dataset.card_no]}</div>`

            i.classList.forEach((j) => {
                if (j == 'right-card' || j == 'left-card') {
                    actual_class = j
                    animacion_direc = j + '-anim';
                }
            });
            center_card.classList.add(actual_class)

            center_card.classList.remove('center-card', 'left-card-anim', 'right-card-anim')
            i.classList.add('center-card', animacion_direc)
            i.classList.remove(actual_class)
        })
    })
}

/*
* Carga la primera vista para los servicios
* @args ninguno
* */
function default_services() {
    var contenedor = document.querySelector('.contenedor-servicios');
    contenedor.innerHTML = `<div class="contenedor-servicios-1">${services_collection[1]}</div>`
}

var tipo = 'no-elim';

function porque_select() {
    var cards_serv = document.querySelectorAll('.porque-card')
    console.log(cards_serv)
    var i = 0;
    var f = 0
    var m = 0;


    cards_serv.forEach((card) => {
        let direccion = ''
        card.addEventListener('click', () => {
            // console.log(cards_serv)

            // console.log(card.classList)
            // console.log(card.classList.contains('left-card'))
            console.log(tipo + " este es el tipo")
            if (tipo == 'no-elim') {
                cards_serv.forEach((card__, index) => {
                    i = card__.classList.contains('left-card') ? index : i
                    m = card__.classList.contains('center-card') ? index : m
                    f = card__.classList.contains('right-card') ? index : f
                })
                direccion = (card.classList.contains('left-card')) ? 'left' : 'right'
                if (direccion == 'left') {
                    moverIzquierda(i, m, f, cards_serv);
                } else if (direccion == 'right') {
                    moverDerecha(i, m, f, cards_serv);
                }
            }

        })
    })
}


function moverIzquierda(i, m, f, cards_serv) {
    console.log('IZQ')
    let direcciones = ['left-anim-porque', 'right-anim-porque'];
    if (i == 0) {
        m = i;
        f = m + 1;
        i = cards_serv.length - 1;
        mostrar(i, m, f, cards_serv, direcciones)
    } else if (m == 0) {

        i--;
        f = m;
        m = cards_serv.length - 1;
        mostrar(i, m, f, cards_serv, direcciones)
    }
    else if (f == 0) {

        i--;
        m--;
        f = cards_serv.length - 1;
        mostrar(i, m, f, cards_serv, direcciones)
    } else {

        i--;
        m--;
        f--;
        mostrar(i, m, f, cards_serv, direcciones)
    }
}

function moverDerecha(i, m, f, cards_serv) {
    let direcciones = ['right-anim-porque', 'left-anim-porque']
    console.log('DERECHA')
    if (f == cards_serv.length - 1) {
        i = m;
        m = f;
        f = 0;
        mostrar(i, m, f, cards_serv, direcciones)
    } else if (m == cards_serv.length - 1) {

        i = m;
        m = f;
        f++;
        mostrar(i, m, f, cards_serv, direcciones)
    }
    else if (i == cards_serv.length - 1) {

        i = m;
        m = f;
        f++;
        mostrar(i, m, f, cards_serv, direcciones)
    } else {

        i++;
        m++;
        f++;
        mostrar(i, m, f, cards_serv, direcciones)
    }
}

function mostrar(i, m, f, cards_serv, direcciones) {

    console.log(i + 'inicio')
    console.log(m + 'medio')
    console.log(f + 'fin')
    cards_serv.forEach((card) => {
        // recorrer y quietar todos los mostrando

        card.classList.remove('right-card', 'center-card', 'left-card')
        card.classList.add('no-show')
        // Asignar la las clases en base a los numeros
    });
    cards_serv[i].classList.add('left-card')
    cards_serv[i].classList.remove('no-show', 'right-anim-porque', 'left-anim-porque', 'active-card-pq')

    cards_serv[m].classList.add('center-card', direcciones[0], 'active-card-pq')
    cards_serv[m].classList.remove('no-show')

    cards_serv[f].classList.add('right-card')
    cards_serv[f].classList.remove('no-show', 'right-anim-porque', 'left-anim-porque', 'active-card-pq')
}

function porque_select_normal() {
    var cards_serv = document.querySelectorAll('.porque-card')
    console.log(cards_serv)
    cards_serv.forEach((card) => {

        card.addEventListener('click', (card_item) => {

            cards_serv.forEach((card_i) => {
                card_i.classList.remove('active-card-pq')
            })
            card.classList.add('active-card-pq')
        })
    })
}


window.addEventListener('load', () => {
    menu_selec();
    services_select('.services-card');
    console.log(screen.width)
    if (screen.width < 600) {
        porque_select('no-elim')
    } else {
        porque_select_normal()
    }
    default_services();

})
window.onresize = function () {
    if (screen.width < 600) {
        tipo = 'no-elim'
        // porque_select()
    } else {
        tipo = 'elim'
        // porque_select()
        porque_select_normal()
    }
}



