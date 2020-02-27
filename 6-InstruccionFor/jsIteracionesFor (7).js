function mostrar()
{

    var numero = parseInt(prompt("ingrese un número"));;
    var contdivisores = 0;
    while (isNaN(numero)) {

        numero = parseInt(prompt("no es un numero, ingrese un numero"));
    }
        for (var i = 1; i <= numero; i++) {
            
        
            if (numero  % i == 0 ){

                contdivisores++;
                document.write("divisores"+ i + "</br>");
                
            }        
            }
            document.write("cantidad de divisores " + contdivisores + "</br>")


}//FIN DE LA FUNCIÓN