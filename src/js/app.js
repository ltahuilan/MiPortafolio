
document.addEventListener('DOMContentLoaded', function () {

    menuMobil ();
    menuEstatico ();
    scrollNav ();
    
});


function menuMobil () {
    const menu = document.querySelector('.menu__nav');
    const icono = document.querySelector('.fas');
    icono.addEventListener('click', function () {
        menu.classList.toggle('menu__nav--active');
        icono.classList.toggle('fa-times');
    })
}

function menuEstatico () {

   const nav = document.querySelector('.container__nav');

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
