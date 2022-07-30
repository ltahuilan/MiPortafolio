//Variables
const menu = document.querySelector('.menu__nav');
const nav = document.querySelector('.container__nav');
const icono = document.querySelector('.fas');

//variables para animarScroll()
const scrollPro = document.querySelectorAll('.scroll-pro');
const scrollTec = document.querySelectorAll('.scroll-tec');
const proyectos = document.querySelector('#proyectos');
const tecnologias = document.querySelector('#tecnologias');

//eventListeners
document.addEventListener('DOMContentLoaded', function () {
    menuMobil ();
    menuEstatico ();
    scrollNav ();    
    darkMode();
});

document.addEventListener('scroll', animarScroll);

window.addEventListener('resize', () => {
    //Remover clases si el tamaño de pantalla es >= 768 px
    if (window.innerWidth >= 768) {
        menu.classList.remove('menu__nav--active');
        icono.classList.remove('fa-times');
        nav.classList.remove('sin-bx-shw');
        nav.classList.remove('active');
    }
});


function menuMobil () {
    icono.addEventListener('click', () =>  {
        menu.classList.toggle('menu__nav--active');
        icono.classList.toggle('fa-times');
        nav.classList.toggle('sin-bx-shw');
        nav.classList.toggle('active');
    })
}


function menuEstatico () {
    //Registrar el intersection oberver
    const observer = new IntersectionObserver( function (entries) {
        
        // console.log(entries[0]);
        entries.forEach(entrie => {

            if (entrie.isIntersecting) {
                nav.classList.remove('container__nav--fijo');
            }else {
                nav.classList.add('container__nav--fijo');
            }
        })
    })

     //elemento a observar
     const banner = document.querySelector('.banner__main');
     observer.observe(banner);
};

//Funcion que agrega efecto al navegar hacia una sección
function scrollNav () {
    const links = document.querySelectorAll('#menu a');
    
    links.forEach(function (link) {
         
        link.addEventListener('click', function (event) {

            event.preventDefault();
            const seccion = document.querySelector(event.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function darkMode () {
    botonDarkMode = document.querySelector('.dark-mode');
    botonDarkMode.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode-active');  
    });
}


//agregar una animación al dar scroll
function animarScroll() {

    //IntersectionObserver
    const observer = new IntersectionObserver( elementos => {
        elementos.forEach( elemento => {
            scrollPro.forEach( card => {
                if(elemento.isIntersecting) {
                    card.classList.add('visible', 'animacion');
                }else {
                    card.classList.remove('visible', 'animacion');
                }
            });
        })
    })

    //elemento a observar
    observer.observe(proyectos);
}
