window.onscroll = function() {
    var header = document.getElementById("header");
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};

document.getElementById("menu-toggle").addEventListener("click", function() {
    var nav = document.getElementById("nav");
    if (nav.classList.contains("active")) {
        nav.classList.remove("active"); // Cierra el menú
    } else {
        nav.classList.add("active"); // Abre el menú
    }
});

document.getElementById("close-menu").addEventListener("click", function() {
    document.getElementById("nav").classList.remove("active"); // Cierra el menú
});

let slideIndex = 0;
let slides = document.querySelectorAll(".slide");

function updateSlides() {
    // Desplaza todas las diapositivas a la izquierda
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(${-100 * slideIndex}%)`;
    }

    // Si estamos en la última diapositiva, vuelve a la primera
    slideIndex = (slideIndex + 1) % slides.length;
}

// Actualiza las diapositivas cada 4 segundos (ajusta esto según tus necesidades)
setInterval(updateSlides, 4000);






