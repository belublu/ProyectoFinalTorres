/* Bienvenida */
function bienvenida (){
    alert ("Bienvenido! Comencemos con el registro para realizar tu compra")
}
bienvenida()


/* Ingreso de datos personales */
nombre = () => {
  let nombreUsuario = prompt ("Ingresa tu nombre y apellido")
  nombreUsuario = nombreUsuario.toLowerCase()
  console.log (nombreUsuario)
  while(nombreUsuario == " " || nombreUsuario == false){
      alert("Nombre y apellido ingresado incorrectamente. Intentalo nuevamente.")
      nombreUsuario = prompt ("Ingresa tu nombre y apellido")
      
  }
}
nombre()


edad = () =>{
  let edadUsuario = prompt ("Ingresa tu edad")
  console.log (edadUsuario)
  while (edadUsuario <= 18){
      alert ("No podes continuar con el registro ya que sos menor de edad")
      edadUsuario = prompt ("Ingrese su edad")
      console.log (edadUsuario)
  }
}
edad()


diaNacimiento = () => {
  let diaNacUsuario = parseInt(prompt("Ingresa tu día de nacimiento"))
console.log (diaNacUsuario)
while ((diaNacUsuario <= 0 || diaNacUsuario >= 32) || diaNacUsuario == false || diaNacUsuario == " " || isNaN(diaNacUsuario)){
    alert ("Día ingresado incorrectamente")
    diaNacUsuario = prompt ("Ingrese su día de nacimiento")
    console.log (diaNacUsuario)
}
}
diaNacimiento()

   
mesNacimiento = () =>{
  let mesNacUsuario
  let salir = true 
  do {
    mesNacUsuario = prompt ("Ingrese su mes de nacimiento").toLowerCase()
    switch(mesNacUsuario){
        case "enero":
            salir = false
            break

            case "febrero":
            salir = false
            break

            case "marzo":
            salir = false
            break

            case "abril":
            salir = false
            break

            case "mayo":
            salir = false
            break

            case "junio":
            salir = false
            break

            case "julio":
            salir = false
            break

            case "agosto":
            salir = false
            break

            case "septiembre":
            salir = false
            break

            case "octubre":
            salir = false
            break

            case "noviembre":
            salir = false
            break

            case "diciembre":
            salir = false
            break
    }
} while (salir)
console.log (mesNacUsuario)
}
mesNacimiento()

anioNacimiento = () =>{
  let anioNacUsuario = parseInt(prompt ("Ingresa tu año de nacimiento"))
console.log (anioNacUsuario)
while (anioNacUsuario > 2005 || anioNacUsuario == " " || isNaN(anioNacUsuario)){
    alert ("Año ingresado incorrectamente.")
    anioNacUsuario = prompt ("Ingresa tu año de nacimiento")
    console.log (anioNacUsuario)
}
}
anioNacimiento()



/* Carrito de compra */
let totalCarrito = 0

/* function agregarProducto(precio) {
  let cantidad = parseInt(prompt("Ingresa la cantidad que quieres agregar al carrito"));
  totalCarrito += cantidad * precio;
} */

let cantidad
function cantidadProducto(){
  cantidad = parseInt(prompt("Ingresa la cantidad que quieres agregar al carrito"))
}

function agregarCarrito(precio){
  totalCarrito += cantidad * precio;
}

const carrito = []
function productos() {
  let agregarOtro = true;
  while (agregarOtro) {
    let productosElegido = parseInt(prompt("Ingresa el número que corresponde al producto que queres agregar al carrito de compras.\n 1) Funko Pop! Iron Man $5545.23 \n 2) Funko Pop! Darth Vader $6581.56 \n 3) Juego Funko Verse Rick & Morty $14809.99 \n 4) Pin Spiderman $1209.99 \n 5) Vinyl Soda Superman $4964.64 \n 6) Mochila Avengers $25459.99"));

    switch (productosElegido) {
      case 1:
        carrito.push({
          valor: 5545.23,
          nombreProducto: "Funko Pop! Iron Man",
          categoria: "Pop",
          cantidad : cantidad
        })
        alert("Seleccionaste un Funko Pop! Iron Man y su valor es de $5545.23");
        cantidadProducto()
        agregarCarrito(5500.23)
        break;

      case 2:
        carrito.push({
          valor: 6581.56,
          nombreProducto: "Funko Pop! Darth Vader",
          categoria: "Pop",
          cantidad : cantidad
        })
        alert("Seleccionaste un Funko Pop! Darth Vader y su valor es de $6581.56");
        cantidadProducto()
        agregarCarrito(6581.56)
        break;

      case 3:
        carrito.push({
          valor: 14809.99,
          nombreProducto: "Juego Funko Verse Rick & Morty",
          categoria: "Juegos",
          cantidad : cantidad
        })
        alert("Seleccionaste un Juego Funko Verse Rick & Morty y su valor es de $14809.99");
        cantidadProducto()
        agregarCarrito(14809.99)
        break;

      case 4:
        carrito.push({
          valor: 1209.99,
          nombreProducto: "Pin Spiderman",
          categoria: "Accesorios",
          cantidad : cantidad
        })
        alert("Seleccionaste un Pin Spiderman y su valor es de $1209.99");
        cantidadProducto()
        agregarCarrito(1209.99)
        break;

      case 5:
        carrito.push({
          valor: 4964.64,
          nombreProducto: "Vinyl Soda Superman",
          categoria: "Vinyl",
          cantidad : cantidad
        })
        alert("Seleccionaste un Vinyl Soda Superman y su valor es de $4964.64");
        cantidadProducto()
        agregarCarrito(4964.64)
        break;

      case 6:
        carrito.push({
          valor: 25459.99,
          nombreProducto: "Mochila Avengers",
          categoria: "Indumentaria",
          cantidad : cantidad
        })
        alert("Seleccionaste una Mochila Avengers y su valor es de $25459.99");
        cantidadProducto()
        agregarCarrito(25459.99)
        break;

      default:
        alert("La opción ingresada no es correcta. Ingresa un número del 1 al 6.");
        break;
    }

    agregarOtro = confirm("¿Quieres agregar otro producto?");
  }
}
productos();

function mostrarCarrito() {
  console.log("Productos en el carrito:");
  carrito.forEach(producto => {
    console.log("- " + producto.nombreProducto + " (" + producto.categoria + "): $" + producto.valor + producto.cantidad);
  });
  console.log("Total del carrito: $" + totalCarrito);
  alert("Productos en el carrito:\n" + 
        carrito.map(producto => "- Nombre: " + producto.nombreProducto + " / Categoria: " + producto.categoria + " / Precio: $" + producto.valor + " / Cantidad: " + producto.cantidad).join("\n") +
        "\nTotal del carrito: $" + Math.floor(totalCarrito));
}
mostrarCarrito()


/* Envío */
let direccion
let codigoPostal
let valorEnvio = 0
function envio(){
    direccion = prompt("Ingresa la dirección de envío").toLowerCase()
    console.log (direccion)
    codigoPostal = parseInt(prompt("Ingresa sólo los números de tu código postal."))
    console.log (codigoPostal)
    if (codigoPostal <= 2000){
        valorEnvio = 1000
        console.log (valorEnvio)
        alert ("El valor del envío es de $1000")
    }else{
        valorEnvio = 1500
        console.log (valorEnvio)
        alert ("El valor del envío es de $1500")
    }
}
envio()


/* Venta */
let totalCompra = totalCarrito + valorEnvio
function venta(){
    alert ("El total de tu compra incluido el envío es de: $" + totalCompra)
}
venta()


/* Agradecimiento */
function agradecimiento(){
    alert(nombreUsuario + "¡Muchas gracias por tu compra! Que la disfrutes!")
}
agradecimiento()





/* const stock = [{
  id: 1,
  nombreProductoStock: "Funko Pop! Iron Man",
  categoriaProductoStock: "Pop",
  valorProductoStock: 5545.2
},
{
  id: 1,
  nombreProductoStock: "Funko Pop! Iron Man",
  categoriaProductoStock: "Pop",
  valorProductoStock: 5545.2
}
{
  id: 1,
  nombreProductoStock: "Funko Pop! Iron Man",
  categoriaProductoStock: "Pop",
  valorProductoStock: 5545.2
}
{
  id: 1,
  nombreProductoStock: "Funko Pop! Iron Man",
  categoriaProductoStock: "Pop",
  valorProductoStock: 5545.2
}
{
  id: 1,
  nombreProductoStock: "Funko Pop! Iron Man",
  categoriaProductoStock: "Pop",
  valorProductoStock: 5545.2
}
{
  id: 1,
  nombreProductoStock: "Funko Pop! Iron Man",
  categoriaProductoStock: "Pop",
  valorProductoStock: 5545.2
}
]
 */

