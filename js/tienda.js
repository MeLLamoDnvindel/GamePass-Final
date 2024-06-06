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

document.addEventListener("DOMContentLoaded", function() {
    function calc_precio() {
        // Obtener los valores seleccionados en los elementos select
        let cantidad = +document.querySelector(".cant-row-form").value;
        let precio = +document.querySelector(".precio-row-form").value;
        // Verificar que los valores se hayan obtenido correctamente
        if (isNaN(cantidad) || isNaN(precio)) {
            alert("Los valores no son números");
            return;
        }
        // El calculo
        let total = cantidad * precio
        // Anuncio o alerta
        if (total === 0) {
            alert("No se ha comprado nada");
        } else {
            let nickname = document.querySelector(".nickname").value;
            alert("¡Plan comprado! Total: " + total + "€. ¡Disfruta de tu suscripción, " + nickname + "!");
        }
    }
    // Poner el evento que inicie con el boton de dice "Pagar"
    let calc_btn = document.querySelector(".btn-pagar p"); // Para que sea solo con texto
    calc_btn.addEventListener("click", calc_precio);
});
// ####### calculo de la compra #######


