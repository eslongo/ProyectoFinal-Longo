document.addEventListener('DOMContentLoaded', function() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoContainer = document.getElementById('carrito');
    const totalElement = document.getElementById('total').querySelector('h3');

    let total = 0;

    carrito.forEach(producto => {
        // Crear elementos para cada producto
        const productoDiv = document.createElement('div');
        productoDiv.className = 'col-md-4 mb-4';
        productoDiv.innerHTML = `
            <div class="card">
                <img src="/img/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <p class="card-text">Cantidad: 1</p>
                </div>
            </div>
        `;

        carritoContainer.appendChild(productoDiv);
        total += producto.precio;
    });

    totalElement.textContent = `Total: $${total}`;
});

