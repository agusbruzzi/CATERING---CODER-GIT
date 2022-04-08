var contador = ((c) => () => ++c)(0);

var contador2 = ((c) => () => ++c)(0);

var contador3 = ((c) => () => ++c)(0);


var sumar1 = function() {
   document.getElementById("mostrador1").innerHTML = contador();
}

var sumar2 = function() {
    document.getElementById("mostrador2").innerHTML = contador2();
 }
 
var sumar3 = function() {
    document.getElementById("mostrador3").innerHTML = contador3();
 }

function agregar (precio){
    var numero = document.getElementById("mostrador1").textContent;
    var cantidad = parseInt(numero);
    var preciototal = preciototal + (cantidad * precio);
    document.getElementById("totalcarrito").innerHTML = preciototal;
}

function borrar (){
    document.getElementById("mostrador1").innerHTML = 0;
    document.getElementById("mostrador2").innerHTML = 0;
    document.getElementById("mostrador3").innerHTML = 0;
    document.getElementById("totalcarrito").innerHTML = 0;
    contador = 0;
    contador2 = 0;
    contador3 = 0;

}