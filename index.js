const header = document.querySelector('header');
const main = document.querySelector('main');
let lastScrollY = window.scrollY;
let ticking = false;

function onScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 60) {
        // Si se desplaza hacia abajo y está a más de 60px de la parte superior, oculta el encabezado
        header.classList.add('hide');
    } else if (currentScrollY < lastScrollY) {
        // Si se desplaza hacia arriba, muestra el encabezado
        header.classList.remove('hide');
        header.classList.add('fixed');
    }

    if (currentScrollY === 0) {
        header.classList.remove('fixed');
    }

    lastScrollY = currentScrollY;
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
    }
});
