document.addEventListener("DOMContentLoaded", function() {
    // Función para ocultar o mostrar el contenido
    function toggleContent(event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        const contenidoId = event.target.id.replace('enlace', 'contenidos');
        const contenido = document.getElementById(contenidoId);
        
        if (contenido.style.display === "none") {
            contenido.style.display = "block";
            event.target.textContent = "Ocultar contenidos"; // Cambia el texto del enlace
        } else {
            contenido.style.display = "none";
            event.target.textContent = "Mostrar contenidos"; // Cambia el texto del enlace
        }
    }

    // Asocia la función a los enlaces
    const enlaces = document.querySelectorAll('a[id^="enlace_"]');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', toggleContent);
    });
});
