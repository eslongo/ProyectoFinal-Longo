document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("userForm");
    const mostrarProductosBtn = document.getElementById("mostrarProductos");
    const mostrarCarritoBtn = document.getElementById("mostrarCarrito");
    let carrito = [];

    // Evento al enviar el formulario de usuario en index.html
    userForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir el envío automático del formulario

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const edad = document.getElementById("edad").value;

        // Validar los datos ingresados por el usuario
        if (!nombre || nombre.length < 2 || !isNaN(nombre) || 
            !apellido || apellido.length < 2 || !isNaN(apellido) || 
            isNaN(edad) || edad === "" || parseInt(edad) < 13 || parseInt(edad) > 120) {
            alert("Por favor, ingrese datos válidos.");
            return;
        }

        // Redirigir a la página del catálogo
        window.location.href = "../pages/catalogo.html";
    });

    // Evento al hacer clic en Mostrar Productos en catalogo.html
    if (mostrarProductosBtn) {
        mostrarProductosBtn.addEventListener("click", () => {
            // Redirigir a la página de productos
            window.location.href = "../pages/productos.html";
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        const mostrarCarritoBtn = document.getElementById("mostrarCarrito");
    
        if (mostrarCarritoBtn) {
            mostrarCarritoBtn.addEventListener("click", () => {
                // Redirigir a la página del carrito
                window.location.href = "../pages/carrito.html";
            });
        }
    });
    // Funciones adicionales para el manejo del carrito en carrito.html
    document.addEventListener("DOMContentLoaded", () => {
        const carritoContainer = document.getElementById("carrito");
        const totalContainer = document.getElementById("total");
        // Obtener los productos del localStorage al cargar la página
        carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        // Mostrar los productos del carrito en carrito.html
        mostrarCarrito(carrito);
        calcularTotal(carrito);
        function mostrarCarrito(carrito) {
            carritoContainer.innerHTML = "";
            carrito.forEach(producto => {
                const productoHTML = `
                    <div class="producto">
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                        <div class="info">
                            <h3>${producto.nombre}</h3>
                            <p class="precio">Precio: US$ ${producto.precio}</p>
                            <p>Cantidad: ${producto.cantidad}</p>
                            <button onclick="eliminarProducto('${producto.id}')">Eliminar</button>
                        </div>
                    </div>
                `;
                carritoContainer.innerHTML += productoHTML;
            });
        }

        function calcularTotal(carrito) {
            let total = 0;
            carrito.forEach(producto => {
                total += producto.precio * producto.cantidad;
            });
            totalContainer.textContent = `Total: US$ ${total.toFixed(2)}`;
        }

        function eliminarProducto(id) {
            carrito = carrito.filter(producto => producto.id !== id);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            mostrarCarrito(carrito);
            calcularTotal(carrito);
        }
    });
});
