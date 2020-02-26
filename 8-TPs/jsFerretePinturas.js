/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //Declaro e inicializo las variables
    var tempFa = parseFloat(document.getElementById("Temperatura").value);
    var convertidor;

    //Convierto de Fahrenhei a Centigrados

    convertidor = (tempFa - 32) * 5/9;

    //Valido si es posible la cuenta e informo el resultado;
    if(isNaN(convertidor)){
        alert("No es posible la conversion, ingrese numeros validos")
    }else{
        alert(tempFa + " grados Fahrenheit son " + convertidor + " grados Centigrados.")
    }
	
}

function CentigradosFahrenheit () 
{
     //Declaro e inicializo las variables
     var tempCe = parseFloat(document.getElementById("Temperatura").value);
     var convertidorCe;
 
     //Convierto de Fahrenhei a Centigrados
 
     convertidorCe = (tempCe * 9/5) + 32;
 
     //Valido si es posible la cuenta e informo el resultado;
     if(isNaN(convertidorCe)){
         alert("No es posible la conversion, ingrese numeros validos")
     }else{
         alert(tempCe + " grados Centigrados son " + convertidorCe + " grados Fahrenheit.")
     }
	
}
