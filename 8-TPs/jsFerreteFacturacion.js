/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var suma;
    var numerouno = parseInt(document.getElementById("PrecioUno").value);
    var numerodos = parseInt(document.getElementById("PrecioDos").value);
    var numerotres = parseInt(document.getElementById("PrecioTres").value);
      
    suma = numerouno + numerodos + numerotres ;

    if(isNaN(suma)){
        alert("No se puede realizar la suma, ingrese solo numeros");
    }else{
        alert("la suma es "+ suma);
    }
    

	
}
function Promedio () 
{
    var promedio;
    var suma;
    var numerouno = parseInt(document.getElementById("PrecioUno").value);
    var numerodos = parseInt(document.getElementById("PrecioDos").value);
    var numerotres = parseInt(document.getElementById("PrecioTres").value);
      
    suma = numerouno + numerodos + numerotres ;
    promedio = suma / 3;

    if(isNaN(promedio)){
        alert("No se puede realizar el promedio, ingrese solo numeros");
    }else{
        alert("El promedio es "+ promedio);
    }
	
}
function PrecioFinal () 
{
    var suma;
    var iva;
    var numerouno = parseInt(document.getElementById("PrecioUno").value);
    var numerodos = parseInt(document.getElementById("PrecioDos").value);
    var numerotres = parseInt(document.getElementById("PrecioTres").value);
      
    suma = numerouno + numerodos + numerotres ;
    iva = suma + (suma*0.21);

    if(isNaN(iva)){
        alert("No se puede realizar el precio final, ingrese solo numeros");
    }else{
        alert("El precio final con IVA es "+ iva);
    }
	
}