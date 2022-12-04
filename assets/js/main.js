let menuHamburguer = document.querySelector('.container__menuHamburguer');
let triangulo = document.querySelector('.triangulo');
let naveg = document.querySelector('.cabecalho__nav');

menuHamburguer.addEventListener('click', function () {
     if(naveg.classList.contains('none') && triangulo.classList.contains('none')) {
        triangulo.classList.remove('none')
        triangulo.classList.add('block')
        naveg.classList.remove('none')
        naveg.classList.add('block')
     } else {
        triangulo.classList.remove('block')
        triangulo.classList.add('none')
        naveg.classList.remove('block')
        naveg.classList.add('none')
    }
})