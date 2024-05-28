let mensajeBienvenida = prompt("¡Hola! Bienvenido a nuestra tienda de Tecnología, ¿deseas continuar?");
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

do {
    let productoSeleccionado;
    do {
        productoSeleccionado = prompt("Por favor, elija un producto para conocer más información acerca de él: \n1. Iphone 13                        Precio: US$1.004 \n2. Ipad Pro 11                      Precio: US$ 2.117,00 \n3. MacBook Pro 15              Precio: US$ 2.897,00");

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
                case "comprar":
                alert("¡Gracias por tu compra! Nos pondremos en contacto contigo para finalizar el proceso de compra.");
                break;
            default:
                alert("Por favor, seleccione una opción válida.");
        }
    } while (!productoSeleccionado);

} while (confirm("¿Desea volver a la lista de productos?"));
