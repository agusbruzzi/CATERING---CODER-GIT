// Cargo productos genéricos y muestro los mismos en el html
function Producto (id, nombre, precio, foto, estado) {
    this.idproducto = id;
    this.nomproducto = nombre;
    this.precio = precio;
    this.foto = foto;
    this.publicado = estado;
}
const productos = [
    {idproducto: 1, nomproducto: "LASAGNA BOLOGNESA CONGELADA", precio: 920, foto: "../assets/img/lasagna.jpg" ,publicado: true },
    {idproducto: 2, nomproducto: "ÑOQUIS CASEROS CONGELADOS", precio: 820, foto: "../assets/img/ñoquis.jpg" , publicado: true },
    {idproducto: 3, nomproducto: "PICADA GRANDE - 6 PICAN Ó 4 CENAN", precio: 3600, foto: "../assets/img/picada.jpg" , publicado: true },
    {idproducto: 4, nomproducto: "SEMANA LABORAL - 5 COMIDAS", precio: 4850, foto: "../assets/img/combo5.jpg" , publicado: true },
    {idproducto: 5, nomproducto: "SEMANA LIGHT - CUIDATE SIN ESFUERZO!!", precio: 4800, foto: "../assets/img/combolight.jpg" , publicado: true },
    {idproducto: 6, nomproducto: "BIFES A LA CRIOLLA - PARA DOS PERSONAS", precio: 1200, foto: "../assets/img/bifes.jpg" , publicado: true },
    
]
const elementopadre = document.getElementById("listadoproductos");
function renderizarArray(array){
    array.forEach((producto) => {
        const {idproducto, nomproducto, precio, foto} = producto;
        let contenedor = document.createElement('div');
        contenedor.innerHTML =  `
                                <img src="${foto}" class="fototienda" >
                                 <h4> ${nomproducto} </h4>
                                 <p class="precio"> PRECIO: ${precio}</p>
                                 <div class="row">
                                    <div class="col"><button class="botoncarrito" id="botonRestarUno${idproducto}">-</button></div>
                                    <div class="col"><p class="mostradorCantidad" id="mostradorCantidad"> 0 </p></div>
                                    <div class="col"><button type="button" class="botoncarrito" id="botonSumarUno${idproducto}">+</button></div>
                                 </div>
                                 <button class="botonsumarcarrito" id="agregarAlCarrito${idproducto}">AGREGAR AL CARRITO</button>`;
        contenedor.setAttribute('class',"col-md-3 productosmenu");
        elementopadre.appendChild(contenedor);

        const botonSumar = document.getElementById(`botonSumarUno${idproducto}`);
        const botonRestar = document.getElementById(`botonRestarUno${idproducto}`);
        const botonAgregar = document.getElementById(`agregarAlCarrito${idproducto}`);

        botonSumar.addEventListener('click', () => {
            botonSumarUno(idproducto)
        })

        botonRestar.addEventListener('click', () =>{
            botonRestarUno(idproducto)
        })

        botonAgregar.addEventListener('click', ()=>{
            agregarAlCarrito(idproducto)
        })
    })
}
//Solamente muestro los productos que posean el atributo publicado igual a true
 const productosPublicados = productos.filter((el) => el.publicado == true);
 renderizarArray(productosPublicados);

//Realizo lo mismo pero para los productos que se agregan al carrito y deben mostrarse a la izquierda en el html
const elementopadreCarrito = document.getElementById("listadocarrito");
function renderizarCarrito(producto){
        const {idproducto, cantidad, precio} = producto;
        var nombreprod = productosPublicados[(producto.idproducto)-1].nomproducto; 
        let contenedor = document.createElement('div');
        contenedor.innerHTML =  `
                                 <h5 class="nomcarrito"> ${nombreprod} </h5>
                                 <p class="infocarrito preciocarrito" id="precio${idproducto}"> PRECIO: ${precio}</p>
                                 <button class="botoncarritodetalle" id="restarUnoCarrito${idproducto}">-</button></div>
                                 <p class="mostradorCantidaddetalle" id="cantidad${idproducto}"> ${cantidad} </p></div>
                                 <button type="button" class="botoncarritodetalle" id="sumarUnoCarrito${idproducto}">+</button></div>
                                 <button class="botonborrardelcarrito" id="borrarDelCarrito${idproducto}">BORRAR DEL CARRITO</button>`;
                                 
        contenedor.setAttribute('class',"productoListado");
        contenedor.setAttribute('id',"productoListado"+idproducto);
        elementopadreCarrito.appendChild(contenedor);

        const botonSumaCarrito = document.getElementById(`sumarUnoCarrito${idproducto}`);
        const botonRestarCarrito = document.getElementById(`restarUnoCarrito${idproducto}`);
        const botonBorrardelCarrito = document.getElementById(`borrarDelCarrito${idproducto}`);

        botonSumaCarrito.addEventListener('click', () => {
            sumarUnoCarrito(idproducto)
        })

        botonRestarCarrito.addEventListener('click', () =>{
            restarUnoCarrito(idproducto)
        })

        botonBorrardelCarrito.addEventListener('click', ()=>{
            borrarDelCarrito(idproducto)
        })
}
//Declaro los eventos de los botones restantes
const botonBorrar = document.getElementById("borrarCarrito");
botonBorrar.addEventListener("click",()=>{
    borrarCarrito()
})

// MODIFICAMOS ELEMENTOS HTML DE LA PÁGINA TIENDA
//Aumentamos "+1" cada vez que se presiona el botón "+"
function sumarUno(cantidadActual) {
    var numCantidad = parseInt(cantidadActual);
    numCantidad++;
    var proxCantidad= numCantidad;
    return proxCantidad;
}
function botonSumarUno(ordenElemento) {
    let cantidades = document.getElementsByClassName("mostradorCantidad");
    let cantidadActual = parseInt(cantidades[ordenElemento-1].innerHTML);
    proximaCantidad = sumarUno(cantidadActual);
    document.getElementsByClassName("mostradorCantidad")[ordenElemento-1].innerHTML = proximaCantidad;
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
    let cantidadActual = parseInt(cantidades[ordenElemento-1].innerHTML);
    proximaCantidad = restarUno(cantidadActual);
    document.getElementsByClassName("mostradorCantidad")[ordenElemento-1].innerHTML = proximaCantidad;
}
// Ahora gestionamos el carrito
//Creo el objeto carrito
function ProductoCarrito (idproducto, cantidad, precio) {
    this.idproducto = idproducto;
    this.cantidad = cantidad;
    this.precio = precio;
}
//Para almacenar los productos agregados al carrito usaremos la siguiente funcion
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//Vamos a recuperar del Storage el carrito
let carrito = [];
let carritoEnLS = JSON.parse(localStorage.getItem("listaCarrito"));
//Verificamos si existe algun carrito en el local storage
if (carritoEnLS) {
    //En este caso si habría, por lo que modifico el DOM y cargo en pantalla el carrito almacenado
    carrito = carritoEnLS;
    let nuevoSubTotal = localStorage.getItem("totalcarrito");
    document.getElementById("totalcarrito").innerHTML = nuevoSubTotal;
    for (producto of carrito) {
        renderizarCarrito(producto);
    }
} else {
    //En este caso no habrìa nngùn carrito almacenado asì que procedo a cargar en el 
    //storage el carrito y el total del carrito con valores predeterminados
    guardarLocal("listaCarrito", JSON.stringify(carrito));
    guardarLocal("totalcarrito",0);
}

// Boton Agregar al Carrito
function agregarAlCarrito(ordenElemento) {
    let cantidades = document.getElementsByClassName("mostradorCantidad");
    let cantidadActual = parseInt(cantidades[ordenElemento-1].innerHTML);
    //Verificamos que el cliente efectivamente haya seleccionado el producto, para evitar tener en el carrito productos con cantidad 0
    if (cantidadActual !=0) {
        //Aca verificamos si es un producto nuevo que agrega al carrito o ya lo agregó antes, para no tener en el carrito varias veces el 
        //mismo producto.
        if (carrito.some((el) => el.idproducto == ordenElemento) == false ) {
            //En este caso es un producto nuevo asi que creamos el objeto y lo pusheamos al array carrito
            let precio = productosPublicados[ordenElemento-1].precio;
            let preSubTotal = cantidadActual * precio;
            let anteriorSubtotal = parseInt(document.getElementById("totalcarrito").innerHTML);
            let nuevoSubtotal = preSubTotal + anteriorSubtotal;
            document.getElementById("totalcarrito").innerHTML = nuevoSubtotal;
            document.getElementsByClassName("mostradorCantidad")[ordenElemento-1].innerHTML = 0;

            var productoAgregado = new ProductoCarrito (ordenElemento, cantidadActual,preSubTotal);
            carrito.push(productoAgregado);
            renderizarCarrito(productoAgregado);

            //Almacenamos en el storage
            //Recuperamos el carrito
            let almacenadoEnCarrito = JSON.parse(localStorage.getItem("listaCarrito"));
            //Le agregamos el nuevo producto
            almacenadoEnCarrito.push(productoAgregado);
            //Borramos lo almacenado para guardar nuevamente el array pero actualizado
            localStorage.removeItem("listaCarrito");
            guardarLocal("listaCarrito",JSON.stringify(almacenadoEnCarrito));
            //Guardamos el valor del total del carrito
            guardarLocal("totalcarrito",nuevoSubtotal);
        }
        else {
            //En este caso el cliente solo estaría modificando la cantidad que quiere de cierto producto
            let existente = carrito.find((el) => el.idproducto == ordenElemento);
            let nuevaCantidad = cantidadActual + existente.cantidad;
            let precio = productosPublicados[ordenElemento-1].precio;
            let preSubTotal = cantidadActual * precio;
            let nuevoPrecio = existente.precio + preSubTotal;

            let anteriorSubtotal = parseInt(document.getElementById("totalcarrito").innerHTML);
            let nuevoSubtotal = preSubTotal + anteriorSubtotal;
            document.getElementById("totalcarrito").innerHTML = nuevoSubtotal;
            document.getElementsByClassName("mostradorCantidad")[ordenElemento-1].innerHTML = 0;

            existente.cantidad = nuevaCantidad;
            existente.precio = nuevoPrecio;
            document.getElementById("cantidad"+existente.idproducto).innerHTML= nuevaCantidad;
            document.getElementById("precio"+existente.idproducto).innerHTML= "PRECIO: "+nuevoPrecio;

            //Almacenamos en el storage
            //Recuperamos el carrito
            let almacenadoEnCarrito = JSON.parse(localStorage.getItem("listaCarrito"));
            //Buscamos el producto que se modificó y realizamos los cambios
            let almacenado = almacenadoEnCarrito.find((el)=>el.idproducto == ordenElemento);
            almacenado.cantidad = nuevaCantidad;
            almacenado.precio = nuevoPrecio;
            //Borramos lo almacenado para guardar nuevamente el array pero actualizado
            localStorage.removeItem("listaCarrito");
            guardarLocal("listaCarrito",JSON.stringify(almacenadoEnCarrito));
            //Guardamos el valor del total del carrito
            localStorage.removeItem("totalcarrito");
            guardarLocal("totalcarrito",nuevoSubtotal);
            }     
    } 
    else {
        document.getElementById("totalcarrito").innerHTML = 0;
        guardarLocal("totalcarrito",0);
    }
}
function modificarCarrito(nuevaCantidad,id,operacion){
    let existente = carrito.find((el) => el.idproducto == id)
    existente.cantidad = nuevaCantidad;
    document.getElementById("cantidad"+existente.idproducto).innerHTML= nuevaCantidad;

    let precio = productosPublicados[id-1].precio;
    let nuevoSubtotalProducto = nuevaCantidad * precio;
    existente.precio = nuevoSubtotalProducto;
    document.getElementById("precio"+existente.idproducto).innerHTML= "PRECIO: "+nuevoSubtotalProducto;

    //Almacenamos en el storage
    //Recuperamos el carrito
    let almacenadoEnCarrito = JSON.parse(localStorage.getItem("listaCarrito"));
    //Buscamos el producto que se modificó y realizamos los cambios
    let almacenado = almacenadoEnCarrito.find((el)=>el.idproducto == id);
    almacenado.cantidad = nuevaCantidad;
    almacenado.precio = nuevoSubtotalProducto;
    //Borramos lo almacenado para guardar nuevamente el array pero actualizado
    localStorage.removeItem("listaCarrito");
    guardarLocal("listaCarrito",JSON.stringify(almacenadoEnCarrito));

    if (operacion == "suma"){
        let actualSubTotal = parseInt(document.getElementById("totalcarrito").innerHTML);
        let nuevoSubTotal = actualSubTotal + precio;
        document.getElementById("totalcarrito").innerHTML = nuevoSubTotal;
        //Almaceno en Storage
        localStorage.removeItem("totalcarrito");
        guardarLocal("totalcarrito",nuevoSubTotal);
    }
    else {
        let actualSubTotal = parseInt(document.getElementById("totalcarrito").innerHTML);
        let nuevoSubTotal = actualSubTotal - precio;
        document.getElementById("totalcarrito").innerHTML = nuevoSubTotal;
        //Almaceno en Storage
        localStorage.removeItem("totalcarrito");
        guardarLocal("totalcarrito",nuevoSubTotal);
    }
}
function sumarUnoCarrito(id){
    let cantidadActual = parseInt(document.getElementById("cantidad"+id).innerHTML);
    cantidadActual++;
    let nuevaCantidad = cantidadActual;
    modificarCarrito(nuevaCantidad,id,"suma");
}
function restarUnoCarrito(id){
    let cantidadActual = parseInt(document.getElementById("cantidad"+id).innerHTML);
    let nuevaCantidad = cantidadActual - 1;
    nuevaCantidad != 0 ? modificarCarrito(nuevaCantidad,id,"resta") : borrarDelCarrito(id);
    
}
//Boton Borrar Carrito
function borrarCarrito(){
    document.getElementById("totalcarrito").innerHTML = 0;
    //Borramos todos los elementos que pertenecen al array carrito
    var cantidadCarrito = carrito.length;
    carrito.splice(0,cantidadCarrito);
    //Borramos el listado mostrado en html
    let productosListados = document.getElementsByClassName("productoListado");
    var cantidadAborrar = productosListados.length;
    for  (let i = 0; i<cantidadAborrar; i++){
        productosListados[0].remove();
    }
    //Borramos todo lo almacenado en storage
    localStorage.clear();
}
//Boton Borrar Producto del Carrito
function borrarDelCarrito(idprod) {
    let existente = carrito.find((el) => el.idproducto == idprod)
    let precioAdescontar = existente.precio;
    let anteriorSubtotal = parseInt(document.getElementById("totalcarrito").innerHTML);
    let nuevoSubTotal = anteriorSubtotal - precioAdescontar;
    document.getElementById("totalcarrito").innerHTML = nuevoSubTotal;

    let indice = carrito.indexOf(existente);
    carrito.splice(indice,1);
    let divEliminar = document.getElementById("productoListado"+existente.idproducto);
    divEliminar.remove();

    //Almacenamos en Storage
    localStorage.removeItem("totalcarrito");
    guardarLocal("totalcarrito",nuevoSubTotal);
    //Recuperamos el carrito
    let almacenadoEnCarrito = JSON.parse(localStorage.getItem("listaCarrito"));
    //Buscamos el producto que se modificó y realizamos los cambios
    let almacenado = almacenadoEnCarrito.find((el)=>el.idproducto == idprod);
    //Acá vuelvo a buscar el indice porque creo que no se almacenan en orden en el que ingresan los productos,
    //así que el indice podría ser distinto que el que usamos arriba
    let indiceST = almacenadoEnCarrito.indexOf(almacenado);
    //Borramos el producto del carrito almacenado
    almacenadoEnCarrito.splice(indiceST,1);
    //Borramos lo almacenado para guardar nuevamente el array pero actualizado
    localStorage.removeItem("listaCarrito");
    guardarLocal("listaCarrito",JSON.stringify(almacenadoEnCarrito));
}

//Agregamos librerias
//Elegí la siguiente librería ya que generamos funcionalidad al botón "comprar"
function finalizarCarrito(){
    swal("¿DESEA FINALIZAR LA COMPRA?","","info", {
        buttons: {
        cancel: "ELEGIR MÁS PRODUCTOS", 
        catch: {
            text: "FINALIZAR COMPRA",
            value: "catch",
            },
        },
    })
    .then((value) => {
        switch (value) {
            case "catch":
            swal("¡GRACIAS!", "TU COMPRA HA SIDO REALIZADA CON ÉXITO", "success", {
                buttons: false,
              });
            borrarCarrito();
            break; }});
        }
function carritoVacioaviso(){
    swal("Debe agregar productos a su carrito para continuar.","","warning", {
        dangerMode: true,
    });
}
const botonComprar = document.getElementById("comprar");
botonComprar.addEventListener('click', () => {
    carrito.length === 0 ? carritoVacioaviso() : finalizarCarrito() ;
})

            







