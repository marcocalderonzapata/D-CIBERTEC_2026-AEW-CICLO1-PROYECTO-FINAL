// 1. Array con las rutas de tus imágenes
const imagenesBanner = [
    "url('imagenes/banner1.jpeg')",
    "url('imagenes/banner2.jpeg')",
    "url('imagenes/banner3.jpeg')"
];

let indiceActual = 0;

// 2. Seleccionamos los elementos del HTML
const banner = document.getElementById('miBanner');
const btnIzq = document.getElementById('btnIzq');
const btnDer = document.getElementById('btnDer');
const puntos = document.querySelectorAll('.punto');

// 3. Función principal que cambia la imagen
function cambiarFondo(nuevoIndice) {
    if (nuevoIndice < 0) {
        indiceActual = imagenesBanner.length - 1;
    } else if (nuevoIndice >= imagenesBanner.length) {
        indiceActual = 0;
    } else {
        indiceActual = nuevoIndice;
    }

    banner.style.backgroundImage = imagenesBanner[indiceActual];

    puntos.forEach((punto, index) => {
        if (index === indiceActual) {
            punto.classList.add('activo');
        } else {
            punto.classList.remove('activo');
        }
    });
}

// 4. Le decimos a los botones que "escuchen" los clics
btnIzq.addEventListener('click', () => cambiarFondo(indiceActual - 1));
btnDer.addEventListener('click', () => cambiarFondo(indiceActual + 1));

/* =========================================
       LÓGICA DEL CARRUSEL DE TESTIMONIOS
   ========================================= */

// 1. Nuestra "Base de datos" de testimonios (Un Array de Objetos)
const testimonios = [
    {
        imagen: "/imagenes/opinion.png", 
        titulo: '"¡Me encantó la calidad!"',
        texto: "Compré un par de blusas y la tela es súper suave, no se deforma para nada después de las lavadas. Tenía un poco de duda con la talla, pero me guie de su tabla y me quedaron perfectas. ¡Definitivamente voy a volver a pedir!",
        autor: "— Valentina R."
    },
    {
        imagen: "/imagenes/opinion2.png",
        titulo: '"El envío fue rapidísimo"',
        texto: "Hice mi pedido el martes en la noche y para el jueves ya lo tenía en mis manos. La ropa venía empacada súper bonito. Excelente servicio, muy recomendados.",
        autor: "— Camila V."
    },
    {
        imagen: "/imagenes/opinion3.png",
        titulo: '"Diseños muy originales"',
        texto: "Buscaba accesorios diferentes y aquí encontré justo lo que quería para complementar mis outfits. Se nota que cuidan mucho los detalles de cada pieza.",
        autor: "— Sofía T."
    }
];

let indiceTest = 0; // Empezamos en el testimonio 0

// 2. Seleccionamos los elementos del HTML
const imgTestimonio = document.getElementById('imgTestimonio');
const tituloTestimonio = document.getElementById('tituloTestimonio');
const textoTestimonio = document.getElementById('textoTestimonio');
const autorTestimonio = document.getElementById('autorTestimonio');

const btnIzqTest = document.getElementById('btnIzqTest');
const btnDerTest = document.getElementById('btnDerTest');
// Solo seleccionamos los puntos que están dentro de los testimonios
const puntosTest = document.querySelectorAll('.texto-testimonio .punto');

// 3. Función para cambiar toda la información
function cambiarTestimonio(nuevoIndice) {
    // Lógica para que sea un ciclo infinito
    if (nuevoIndice < 0) {
        indiceTest = testimonios.length - 1;
    } else if (nuevoIndice >= testimonios.length) {
        indiceTest = 0;
    } else {
        indiceTest = nuevoIndice;
    }

    // Inyectamos los nuevos textos e imagen en el HTML
    imgTestimonio.src = testimonios[indiceTest].imagen;
    tituloTestimonio.textContent = testimonios[indiceTest].titulo;
    textoTestimonio.textContent = testimonios[indiceTest].texto;
    autorTestimonio.textContent = testimonios[indiceTest].autor;

    // Actualizamos el color de los puntos
    puntosTest.forEach((punto, index) => {
        if (index === indiceTest) {
            punto.classList.add('activo');
        } else {
            punto.classList.remove('activo');
        }
    });
}

// 4. Activamos los botones
btnIzqTest.addEventListener('click', () => cambiarTestimonio(indiceTest - 1));
btnDerTest.addEventListener('click', () => cambiarTestimonio(indiceTest + 1));