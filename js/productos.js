// Definición de la clase Producto
class Producto {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }

    obtenerInfo() {
        return `${this.nombre} - $${this.precio}`;
    }

    crearBotonAgregar() {
        const boton = document.createElement('button');
        boton.className = 'btn btn-primary agregar-carrito';
        boton.textContent = 'Agregar al carrito';
        boton.dataset.producto = JSON.stringify({
            nombre: this.nombre,
            precio: this.precio
        });
        return boton;
    }
}

// Función para agregar productos al DOM
function agregarProductosAlDOM(productos) {
    const contenedor = document.querySelector('.row');

    productos.forEach(producto => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = producto.imagen;
        img.className = 'card-img-top';
        img.alt = producto.nombre;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = producto.nombre;

        const text = document.createElement('p');
        text.className = 'card-text';
        text.textContent = `Precio: $${producto.precio}`;

        const boton = producto.crearBotonAgregar();

        cardBody.append(title, text, boton);
        card.append(img, cardBody);
        col.appendChild(card);
        contenedor.appendChild(col);
    });
}

// Cargar productos desde el archivo JSON
function cargarProductos() {
    fetch('data/productos.json')
        .then(response => response.json())
        .then(data => {
            const productos = data.map(item => new Producto(item.nombre, item.precio, item.imagen));
            agregarProductosAlDOM(productos);
        })
        .catch(error => console.error('Error al cargar los productos:', error));
}

document.addEventListener('DOMContentLoaded', cargarProductos);

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoExistente = carrito.find(item => item.nombre === producto.nombre);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${producto.nombre} ha sido agregado al carrito`);
}

// Añadir evento a los botones de 'Agregar al carrito'
document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', () => {
            const producto = JSON.parse(boton.dataset.producto);
            agregarAlCarrito(producto);
        });
    });
});
