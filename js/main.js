let mensajeBienvenida = alert("¡Hola! Bienvenido a nuestra tienda de Tecnología!");
let nombre;
do {
    nombre = prompt("Ingrese su nombre");
} while (!nombre || nombre.length < 2 || !isNaN(nombre));

let apellido;
do {
    apellido = prompt("Ingrese su apellido");
} while (!apellido || apellido.length < 2 || !isNaN(apellido));

let edad;
do {
    edad = prompt("Ingrese su edad");

    if (isNaN(edad)) {
        alert("Por favor, ingrese un valor numérico.");
    }

    if (edad === "") {
        alert("Por favor, ingrese su edad.");
    }
    if (parseInt(edad) < 13) {
        alert("Debes tener al menos 13 años para continuar.");
    }
    if (parseInt(edad) > 120) {
        alert("Por favor, ingrese una edad real...");
        continue;
    }
} while (isNaN(edad) || edad === "" || parseInt(edad) < 13 || parseInt(edad) > 120);

alert("¡Que alegría que estés aquí! Por favor, conoce nuestros productos :D!");

let carrito = [];

do {
    let productoSeleccionado;
    do {
        productoSeleccionado = prompt("Por favor, elija un producto para conocer más información acerca de él o ver el carrito: \n1. Iphone 13                        Precio: US$1.004 \n2. Ipad Pro 11                      Precio: US$ 2.117,00 \n3. MacBook Pro 15              Precio: US$ 2.897,00 \n4. Comprar \n5. Carrito \n6. Calculadora \n7 Salir del menú");

        switch (productoSeleccionado) {
            case "1":
                alert("Información del Iphone 13: El iPhone 13, lanzado en septiembre de 2021, presenta un diseño similar al iPhone 12, con opciones de tamaño estándar y mini. Equipado con el potente chip A15 Bionic, ofrece un rendimiento rápido y eficiente. Mejoras en la cámara, pantalla OLED Super Retina XDR y conectividad 5G lo convierten en una opción atractiva para quienes buscan un smartphone de alta calidad.");
                break;
            case "2":
                alert("Información del iPad Pro 11: El iPad Pro de 11 pulgadas es una poderosa tableta fabricada por Apple. Presenta una pantalla Liquid Retina de borde a borde con tecnología ProMotion, que ofrece una experiencia visual impresionante con una frecuencia de actualización de hasta 120 Hz. Equipado con el chip A12Z Bionic de Apple, el iPad Pro 11 ofrece un rendimiento excepcional para tareas intensivas como la edición de video y juegos avanzados.");
                break;
            case "3":
                alert("Información del MacBook Pro 15: Equipado con procesadores Intel Core i7 o i9 de última generación, y en versiones más recientes con el chip M1 de Apple, el MacBook Pro 15 ofrece un rendimiento excepcional para tareas intensivas. Además, cuenta con una potente tarjeta gráfica Radeon Pro o la integrada en los modelos con chip M1, lo que lo hace ideal para edición de video, modelado 3D y juegos avanzados.");
                break;
            case "4":
                let productoComprar;
                do {
                    productoComprar = prompt("Seleccione el producto que desea comprar: \n1. Iphone 13                        Precio: US$1.004 \n2. Ipad Pro 11                      Precio: US$ 2.117,00 \n3. MacBook Pro 15              Precio: US$ 2.897,00");
                    switch (productoComprar) {
                        case "1":
                            confirmarCompra("iPhone 13", 1004);
                            break;
                        case "2":
                            confirmarCompra("iPad Pro 11", 2117);
                            break;
                        case "3":
                            confirmarCompra("MacBook Pro 15", 2897);
                            break;
                        default:
                            alert("Por favor, seleccione una opción válida para comprar.");
                    }
                } while (productoComprar !== "1" && productoComprar !== "2" && productoComprar !== "3");
                break;
            case "5":
                mostrarCarrito();
                break;
            case "6":
                calculadoraBasica();
                break;
                case "7":
                    alert("Saliendo del menú.");
                    productoSeleccionado = null;
                    break;
                default:
                    alert("Por favor, seleccione una opción válida.");
            }
        } while (productoSeleccionado && (productoSeleccionado !== "1" && productoSeleccionado !== "2" && productoSeleccionado !== "3" && productoSeleccionado !== "4" && productoSeleccionado !== "5" && productoSeleccionado !== "6" && productoSeleccionado !== "7"));

        if (productoSeleccionado === null) {
            break;
        }

} while (confirm("¿Desea volver a la lista de productos?"));

function confirmarCompra(producto, precio) {
    let confirmar = confirm(`El ${producto} cuesta US$${precio}. ¿Desea agregarlo al carrito y proceder al pago?`);
    if (confirmar) {
        carrito.push({ producto, precio });
        alert(`El ${producto} ha sido agregado al carrito. Nos pondremos en contacto contigo para finalizar el proceso de compra.`);
    } else {
        alert(`Has cancelado la compra del ${producto}.`);
    }
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let mensajeCarrito = "Productos en tu carrito:\n";
        let total = 0;
        carrito.forEach((item, index) => {
            mensajeCarrito += `${index + 1}. ${item.producto} - US$${item.precio}\n`;
            total += item.precio;
        });
        mensajeCarrito += `\nTotal: US$${total.toFixed(2)}`;

        let pagar = confirm(`${mensajeCarrito}\n\n¿Desea proceder al pago?`);
        if (pagar) {
            alert(`Pago realizado con éxito. El total de US$${total.toFixed(2)} ha sido procesado.`);
            carrito = []; // Vaciar el carrito después del pago
        } else {
            alert("Has cancelado el proceso de pago.");
        }
    }
}

function calculadoraBasica() {
    let salirCalculadora = false;
    while (!salirCalculadora) {
        let operacion = prompt("Seleccione la operación que desea realizar: \n1. Suma \n2. Resta \n3. Multiplicación \n4. División \n5. Volver al menú principal");
        if (operacion === "5") {
            salirCalculadora = true;
            break;
        }

        let numero1 = parseFloat(prompt("Ingrese el primer número:"));
        let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
        let resultado;

        switch (operacion) {
            case "1":
                resultado = numero1 + numero2;
                alert(`El resultado de la suma es: ${resultado}`);
                break;
            case "2":
                resultado = numero1 - numero2;
                alert(`El resultado de la resta es: ${resultado}`);
                break;
            case "3":
                resultado = numero1 * numero2;
                alert(`El resultado de la multiplicación es: ${resultado}`);
                break;
            case "4":
                if (numero2 !== 0) {
                    resultado = numero1 / numero2;
                    alert(`El resultado de la división es: ${resultado}`);
                } else {
                    alert("No se puede dividir por cero.");
                }
                break;
            default:
                alert("Operación no válida.");
        }
    }
}





