// ADMINISTRACIÓN DE PRODUCTOS - ABM PRODUCTOS
// Cargo productos genéricos
function Producto (id, nombre, precio, estado) {
    this.idproducto = id;
    this.nomproducto = nombre;
    this.precio = precio;
    this.publicado = estado;
}
const productos = [
    {idproducto: 1, nomproducto: "Producto 1", precio: 1230, publicado: true },
    {idproducto: 2, nomproducto: "Producto 2", precio: 780, publicado: true },
    {idproducto: 3, nomproducto: "Producto 3", precio: 940, publicado: false },
    {idproducto: 4, nomproducto: "Producto 4", precio: 365, publicado: true },
    {idproducto: 5, nomproducto: "Producto 5", precio: 1870, publicado: true },
    {idproducto: 6, nomproducto: "Producto 6", precio: 2345, publicado: true },
]
const elementopadre = document.getElementById("listadoproductos");
for (const producto of productos) {
        let contenedor = document.createElement('div');
        contenedor.innerHTML =  `<img src="../assets/img/servicios-organizacion-integral-1.jpg" class="fototienda" >
                                 <h4> ${producto.nomproducto} </h4>
                                 <p>descripcion del productodescripcion del productodescripcion del producto</p>
                                 <p class="precio"> PRECIO: ${producto.precio}</p>
                                 <div class="row">
                                    <div class="col"><button class="botoncarrito" onclick="botonRestarUno()">-</button></div>
                                    <div class="col"><p class="mostradorcantidad" id="mostradorCantidad"> 0 </p></div>
                                    <div class="col"><button type="button" class="botoncarrito" onclick="botonSumarUno()">+</button></div>
                                 </div>
                                 <button class="botonsumarcarrito" onclick="agregarAlCarrito">AGREGAR AL CARRITO</button>`;
        elementopadre.appendChild(contenedor);
    }
// MODIFICAMOS ELEMENTOS HTML DE LA PÁGINA TIENDA
//Aumentamos "+1" cada vez que se presiona el botón "+"
function sumarUno(cantidadActual) {
    var numCantidad = parseInt(cantidadActual);
    var proxCantidad= numCantidad + 1;
    return proxCantidad;
}
function botonSumarUno(ordenElemento) {
    let cantidades = document.getElementsByClassName("mostradorCantidad");
    let cantidadActual = parseInt(cantidades[ordenElemento].innerHTML);
    proximaCantidad = sumarUno(cantidadActual);
    document.getElementsByClassName("mostradorCantidad")[ordenElemento].innerHTML = proximaCantidad;
}
//Disminuimos "-1" cada vez que se presiona el botón "-"
function restarUno(cantidadActual) {
    var numCantidad = parseInt(cantidadActual);
    if (numCantidad != 0) {
        var proxCantidad= numCantidad - 1;
        return proxCantidad;
    }
    else { var proxCantidad = 0 ; return proxCantidad}
}
function botonRestarUno(ordenElemento) {
    let cantidades = document.getElementsByClassName("mostradorCantidad");
    let cantidadActual = parseInt(cantidades[ordenElemento].innerHTML);
    proximaCantidad = restarUno(cantidadActual);
    document.getElementsByClassName("mostradorCantidad")[ordenElemento].innerHTML = proximaCantidad;
}
// Ahora gestionamos el carrito
/*Creo el objeto carrito
function ProductoCarrito (idproducto, cantidad, precio) {
    this.idproducto = idproducto;
    this.cantidad = cantidad;
    this.precio = precio;
}
// Funcion para listar los objetos del carrito
function crearListaCarrito(lista, id, nombre, cantidad, precio){
    lista = lista + "ID: "+id + " - ";
    lista = lista + "NOMBRE: "+nombre + " - ";
    lista = lista + "CANTIDAD: "+cantidad + " - ";
    lista = lista + "PRECIO : "+precio + " - ";
    lista = lista + "\n";
    return lista;
}*/
// Boton Agregar al Carrito
function agregarAlCarrito(precio, ordenElemento) {
    let cantidades = document.getElementsByClassName("mostradorCantidad");
    let cantidadActual = parseInt(cantidades[ordenElemento].innerHTML);
    let preSubTotal = cantidadActual * precio;
    let anteriorSubtotal = parseInt(document.getElementById("totalcarrito").innerHTML);
    let nuevoSubtotal = preSubTotal + anteriorSubtotal;
    document.getElementById("totalcarrito").innerHTML = nuevoSubtotal;
    document.getElementsByClassName("mostradorCantidad")[ordenElemento].innerHTML = 0;
}
//Boton Borrar Carrito
function borrarCarrito(){
    document.getElementById("totalcarrito").innerHTML = 0;
}













//FUNCIONES AUN NO APLICADAS
/*


// Añadir nuevos productos
function crearNuevoProducto (){
    var nombreNuevoProducto = prompt("Ingrese nombre del nuevo producto: ");
    var precioNuevoProducto = prompt("Ingrese precio del nuevo producto: ");
    Para calcular el ID del nuevo producto, siendo que la idea es que sean consecutivos,
    se me ocurrio en primera instancia crear un nuevo array pero que solo contengan los id 
    const idproductosExistentes = productos.map ((pr) => pr.idproducto);
    /* una vez que ya tengo ese array, lo ordeno de mayor a menor, teniendo en la posición 0
    al id más grande
    idproductosExistentes.sort((a, b) => b - a);
    var idNuevoProducto = idproductosExistentes[0] + 1;
    var estadoNuevoProducto = true;
    var productoNuevo = new Producto (idNuevoProducto, nombreNuevoProducto, precioNuevoProducto, estadoNuevoProducto);
    productos.push(productoNuevo);
}
/* Ahora voy hacer unas funciones que muestren las listas de los productos
si cumplen ciertos requisitos, por eso cree la funcion crearlista() para 
no repetir código
function crearLista(lista, id, nombre, precio){
    lista = lista + "ID: "+id + " - ";
    lista = lista + "NOMBRE: "+nombre + " - ";
    lista = lista + "PRECIO : "+precio + " - ";
    lista = lista + "\n";
    return lista;
}
// Mostrar todos los productos
function mostrarProductos(){
    var listaCompleta = "PRODUCTOS: "+"\n";
    for (const producto of productos) {
        var listaCompleta = crearLista (listaCompleta, producto.idproducto, producto.nomproducto, producto.precio);
    }
    alert(listaCompleta);
}
// Mostrar Productos Actualmente en Venta
function mostrarProductosEnVenta(){
    var listaCompleta = "PRODUCTOS EN VENTA: "+"\n";
    for (const producto of productos) {
        if (producto.publicado == true){
            var listaCompleta = crearLista (listaCompleta, producto.idproducto, producto.nomproducto, producto.precio);
        }
    }
    alert(listaCompleta);
}
// Mostrar Productos Actualmente NO en Venta
function mostrarProductosNoEnVenta(){
    var listaCompleta = "PRODUCTOS NO EN VENTA: "+"\n";
    for (const producto of productos) {
        if (producto.publicado == false){
            var listaCompleta = crearLista (listaCompleta, producto.idproducto, producto.nomproducto, producto.precio);
        }
    }
    alert(listaCompleta);
}
// Editar productos
function editarProductos(){
    var valorID = prompt("A continuación está por editar productos."+"\n"+
                        "Ingrese el ID del producto que desea modificar: ");
    var productoElegido = productos.find ((prod) => prod.idproducto == valorID);
    var lista = "";
    var confirmacion = prompt("¿El articulo que quiere editar es el siguiente?" + "\n" + crearLista(lista,productoElegido.idproducto,productoElegido.nomproducto,productoElegido.precio)+ "Ingrese S: Sí // N: No");
    if (confirmacion === "S" || confirmacion === "s") {
        var valorModif = prompt ("A continuación Ingrese el Valor que desea modificar :" + "\n"+
                             "N: Nombre del producto"+"\n" +
                             "P: Precio del procucto" + "\n" +
                             "E: Estado del Producto" + "\n" +
                             "Pulse cualquier otra tecla para cancelar.");
        if (valorModif === "N" || valorModif === "n"){
            var nuevoNombre = prompt("Ingrese nuevo nombre: ");
            productoElegido.nomproducto = nuevoNombre;
            alert("Se modificaron los datos correctamente.")
        }
        else if (valorModif === "P" || valorModif === "P"){
            var nuevoPrecio = prompt("Ingrese nuevo precio: ");
            productoElegido.precio = nuevoPrecio;
            alert("Se modificaron los datos correctamente.")
        }
        else if (valorModif === "E" || valorModif === "e"){
            var estadoProd = productoElegido.publicado;
            if (estadoProd == true) {
                var conf = prompt ("Actualmente su producto se encuentra a la venta. ¿Desea quitarlo?"+"\n"+"Ingrese S para continuar o cualquier otra tecla para cancelar la operación.");
                if (conf === "S" || conf === "s"){
                    productoElegido.publicado = false;
                    alert("Se modificaron los datos correctamente.")
                }
                else {
                    alert("Operación Cancelada");
                }
            }
            else {
                var conf = prompt ("Actualmente su producto se encuentra fuera de venta. ¿Desea volver a ponerlo en venta?"+"\n"+"Ingrese S para continuar o cualquier otra tecla para cancelar la operación.");
                if (conf === "S" || conf === "s"){
                    productoElegido.publicado = true;
                    alert("Se modificaron los datos correctamente.")
                }
                else {
                    alert("Operación Cancelada");
                }
            }
        }
        else {
            alert("Operación Cancelada");
        }
    }
    else {
        alert("Operación Cancelada");
    }
}
//ADMINISTRACIÓN DE VENTAS
/* Con esta función hago la compra, faltan muchas verificaciones con lo que ingresa el cliente 
pero, como la idea es que se haga a futuro con el front que ya diseñe, hice las necesarias
no más. 
function generarCarrito(){
    var alerta = true;
    var carrito = [];
    while (alerta == true){
        idSeleccionado = prompt ("Los articulos actualmente disponibles son: "+ mostrarProductosEnVenta()+ "Seleccione ID del producto que desea comprar. Si desea cancelar toda la operación ingrese 'S'. ");
        if (idSeleccionado == "S" || idSeleccionado == "s"){
            alert("Operación Cancelada");
            alerta = false;
        }
        else{
            var productoElegido = productos.find ((prod) => prod.idproducto == idSeleccionado);
            var lista = "";
            var cant = parseInt(prompt("Articulo Seleccionado: " + "\n" + crearLista(lista,productoElegido.idproducto,productoElegido.nomproducto,productoElegido.precio)+ "Ingrese la cantidad que desea comprar: "));
            precioparcial = cant * productoElegido.precio;
            var productoAgregado = new ProductoCarrito (productoElegido.idproducto, cant, precioparcial);
            carrito.push(productoAgregado);
            cons =  prompt("¿Desea agregar más productos a su carrito?" + "\n" + "Ingrese 'S' si desea agregar más productos o 'N' si desea continuar con el pago.");
            if (cons == "N" || cons =="n"){
                var listaCompleta = "DETALLE DE SU CARRITO: "+"\n";
                for (const producto of carrito) {
                    var productoBD = productos.find ((prod) => prod.idproducto == producto.idproducto);
                    var nompr = productoBD.nomproducto;
                    var listaCompleta = crearListaCarrito (listaCompleta, producto.idproducto, nompr, producto.cantidad, producto.precio);
                }
                    const subtotales = carrito.map ((pr) => pr.precio);
                    var totalApagar = 0;
                    for (const subtotal of subtotales) {
                        totalApagar = totalApagar + subtotal;
                    }
                    listaCompleta = listaCompleta + "\n" + "TOTAL A PAGAR: " + totalApagar;
                    alert(listaCompleta);
                    alerta = false;
            }
        }

        

    }
}*/









