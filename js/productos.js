document.addEventListener('DOMContentLoaded', function() {
    const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');

    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', function() {
            const producto = JSON.parse(this.getAttribute('data-producto'));

            // Obtener el carrito actual del localStorage o inicializar uno nuevo
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            // Agregar el producto al carrito
            carrito.push(producto);

            // Guardar el carrito actualizado en localStorage
            localStorage.setItem('carrito', JSON.stringify(carrito));

            // Confirmar al usuario
            alert('Producto agregado al carrito');
        });
    });
});
