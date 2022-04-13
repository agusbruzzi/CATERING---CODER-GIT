
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
}*/