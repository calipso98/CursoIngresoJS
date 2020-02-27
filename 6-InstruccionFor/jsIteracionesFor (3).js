function mostrar()
{

var repetir = parseInt(prompt("ingrese el número de repeticiones"));
    while (isNaN(repetir)){
    repetir = parseInt(prompt("no es un numero, ingrese el número de repeticiones"));    
        


        
    }
    for (var i=0; i < repetir ; i++){
        document.write("Hola utn-fra </br>")
    }

}//FIN DE LA FUNCIÓN