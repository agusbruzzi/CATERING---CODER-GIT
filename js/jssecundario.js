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