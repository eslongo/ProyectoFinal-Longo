// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedorCarrito = document.querySelector('#carrito-container');
    const totalElement = document.querySelector('#total');

    contenedorCarrito.innerHTML = ''; // Limpiar el contenedor

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = `
            <div class="alert alert-info text-center">
                <h3>¡No tienes productos en el carrito!</h3>
                <p>Conoce nuestros productos y agrega algunos a tu carrito.</p>
                <a href="./productos.html" class="btn btn-primary">Ver Productos</a>
            </div>
        `;
        totalElement.textContent = '0';
    } else {
        carrito.forEach(producto => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.precio * producto.cantidad}</td>
                <td>
                    <button class="btn btn-success btn-sm aumentar-producto" data-nombre="${producto.nombre}">+</button>
                    <button class="btn btn-warning btn-sm disminuir-producto" data-nombre="${producto.nombre}">-</button>
                    <button class="btn btn-danger btn-sm eliminar-producto" data-nombre="${producto.nombre}">Eliminar</button>
                </td>
            `;
            contenedorCarrito.appendChild(fila);
        });

        // Actualizar el total
        const total = carrito.reduce((acumulado, producto) => acumulado + (producto.precio * producto.cantidad), 0);
        totalElement.textContent = total;

        // Añadir event listeners a los botones de eliminar, aumentar y disminuir
        document.querySelectorAll('.eliminar-producto').forEach(boton => {
            boton.addEventListener('click', eliminarProducto);
        });

        document.querySelectorAll('.aumentar-producto').forEach(boton => {
            boton.addEventListener('click', aumentarCantidad);
        });

        document.querySelectorAll('.disminuir-producto').forEach(boton => {
            boton.addEventListener('click', disminuirCantidad);
        });
    }
}

// Función para eliminar un producto del carrito
function eliminarProducto(event) {
    const nombreProducto = event.target.getAttribute('data-nombre');
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito = carrito.filter(producto => producto.nombre !== nombreProducto);

    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Función para aumentar la cantidad de un producto en el carrito
function aumentarCantidad(event) {
    const nombreProducto = event.target.getAttribute('data-nombre');
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito = carrito.map(producto => {
        if (producto.nombre === nombreProducto) {
            producto.cantidad += 1;
        }
        return producto;
    });

    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Función para disminuir la cantidad de un producto en el carrito
function disminuirCantidad(event) {
    const nombreProducto = event.target.getAttribute('data-nombre');
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito = carrito.map(producto => {
        if (producto.nombre === nombreProducto && producto.cantidad > 1) {
            producto.cantidad -= 1;
        }
        return producto;
    });

    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Ejecutar la función para mostrar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', mostrarCarrito);
