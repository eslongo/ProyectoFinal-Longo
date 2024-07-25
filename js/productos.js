// Definición de la clase Producto
class Producto {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }

    // Método para obtener la información del producto
    obtenerInfo() {
        return `${this.nombre} - $${this.precio}`;
    }

    // Método para crear un botón con la información del producto
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
function agregarProductosAlDOM() {
    const productos = [
        new Producto('iPhone 15 Pro', 1300, '/img/iphone.jpg'),
        new Producto('iPhone 14 Pro', 799, '/img/iphone 14pro.jpg'),
        new Producto('iPhone 13 Pro', 1200, '/img/iphone 13 pro.jpeg'),
        new Producto('iPad 11 Pro', 150, '/img/ipad11pro.jpg'),
        new Producto('Xiaomi Pad 6', 467, '/img/xiaomi pad 6 pro.jpeg'),
        new Producto('Samsung Galaxy TAB S6', 500, '/img/SAMSUNG GALAXY TAB S6.jpg'),
        new Producto('Samsung Galaxy S23', 500, '/img/samsung-galaxy-s23.jpg'),
        new Producto('Samsung Galaxy S22', 500, '/img/samsung-galaxy-s22.jpg'),
        new Producto('Samsung Galaxy S21', 500, '/img/SAMSUNG GALAXY S21.jpg'),
        new Producto('Xiaomi Redmi Note 14 Pro', 500, '/img/Xiaomi Redmi Note 14 Pro.jpg'),
        new Producto('Xiaomi Redmi Note 13', 500, '/img/XIAOMI REDMI NOTE 13.jpg'),
        new Producto('Xiaomi Redmi Note 12', 500, '/img/XIAOMI REDMI NOTE 12.jpg')
    ];

    const contenedor = document.querySelector('.row'); // Asumiendo que los productos se agregan aquí

    productos.forEach(({ nombre, precio, imagen }) => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = imagen;
        img.className = 'card-img-top';
        img.alt = nombre;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = nombre;

        const text = document.createElement('p');
        text.className = 'card-text';
        text.textContent = `Precio: $${precio}`;

        const boton = new Producto(nombre, precio, imagen).crearBotonAgregar();

        cardBody.appendChild(title);
        cardBody.appendChild(text);
        cardBody.appendChild(boton);

        card.appendChild(img);
        card.appendChild(cardBody);

        col.appendChild(card);

        contenedor.appendChild(col);
    });
}

document.addEventListener('DOMContentLoaded', agregarProductosAlDOM);

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
    const productoExistente = carrito.find(item => item.nombre === producto.nombre);

    productoExistente
        ? productoExistente.cantidad += 1
        : carrito.push({ ...producto, cantidad: 1 });

    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${producto.nombre} ha sido agregado al carrito`);
}

// Asignar el evento a los botones de "Agregar al carrito"
const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
botonesAgregarCarrito.forEach(boton => {
    boton.addEventListener('click', () => {
        const producto = JSON.parse(boton.getAttribute('data-producto'));
        agregarAlCarrito(producto);
    });
});
