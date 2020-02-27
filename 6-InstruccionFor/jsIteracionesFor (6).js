function mostrar() {
    var numero = parseInt(prompt("ingrese un número"));;
    var contpares = 0;
    while (isNaN(numero)) {

        numero = parseInt(prompt("no es un numero, ingrese un numero"));
    }
        for (var i = 1; i <= numero; i++) {
            
        
            if (i % 2 == 0){

                contpares++;
                document.write("pares"+i + "</br>");
                
            }        
            }
            document.write("cantidad de pares " + contpares + "</br>")
    

    }//FIN DE LA FUNCIÓN