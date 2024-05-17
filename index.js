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