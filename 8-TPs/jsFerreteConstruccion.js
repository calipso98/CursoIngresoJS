/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    // Declaro e inicializo las variables
    var largoT = parseInt(document.getElementById("Largo").value);
    var anchoT = parseInt(document.getElementById("Ancho").value);
    var perimetro;
    var totalalambre;

    perimetro = (largoT + anchoT)*2;
    totalalambre = perimetro * 3;

    //Valido
    if(isNaN(totalalambre)){
        
        alert("No se puede realizar la cuenta, ingrese solo numeros");
    
    }else{

        alert("la cantidad de alambre para el terreno es " + totalalambre + " mts.");
    
    }

}
function Circulo () 
{
    //Declaro y valido 
    var radioT = parseInt(document.getElementById("Radio").value);
    var toalambre;
    var perimetroT;

    //Realizo la cuenta
    perimetroT = 2 * 3.14 * radioT;

    toalambre = perimetroT * 3;

     //Valido e informo si es o si no es posible la cuenta
     if(isNaN(toalambre)){
        
        alert("No se puede realizar la cuenta, ingrese solo numeros");
    
    }else{

        alert("la cantidad de alambre para el terreno es " + toalambre + " mts.");
    
    }
}
function Materiales () 
{
    // Declaro e inicializo las variables
    var largoT = parseInt(document.getElementById("Largo").value);
    var anchoT = parseInt(document.getElementById("Ancho").value);
    var perimetro;
    var cantcal;
    var cantcemento;

    perimetro = (largoT + anchoT)*2;
    cantcal = perimetro * 3;
    cantcemento = perimetro * 2;

    //Valido
    if(isNaN(cantcal) && isNan(cantcemento)){
        
        alert("No se puede realizar la cuenta, ingrese solo numeros");
    
    }else{

        alert("La cantidad de cal es " + cantcal + " y la cantidad de cemento es " + cantcemento  + " para " + perimetro + " metros cuadrados");
    
    }

	
}