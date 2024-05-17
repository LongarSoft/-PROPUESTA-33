<<<<<<< HEAD
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
=======
const header = document.querySelector('header');
const main = document.querySelector('main');

// Agrega un evento de desplazamiento a la ventana
window.addEventListener('scroll', function() {
    // Verifica si el desplazamiento vertical es mayor a 50px desde la parte superior
    if (window.scrollY > 60) {
        // Si es así, agrega la clase 'scrolled' al encabezado
        header.classList.add('scrolled');
    } else {
        // Si no, elimina la clase 'scrolled'
        header.classList.remove('scrolled');
    }
});

// Agrega un evento de desplazamiento a la ventana
window.addEventListener('scroll', function() {
    // Verifica si el desplazamiento vertical es mayor a 50px desde la parte superior
    if (window.scrollY > 60) {
        // Si es así, agrega la clase 'scrolled' a main
        main.classList.add('scrolled-padding');
    } else {
        // Si no, elimina la clase 'scrolled-padding'
        main.classList.remove('scrolled-padding');
    }
});
>>>>>>> ef4521ba240401a43d816f16f23105539b84427d
