document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript existente
  
    // Crear un botón para ir al inicio de la página
    let scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.className = "scrollToTop";
    scrollToTopBtn.innerHTML = "&#8593;";
    scrollToTopBtn.onclick = function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    // Agregar el botón al documento
    document.body.appendChild(scrollToTopBtn);
  });
// ####### Boton hacia arriba #######