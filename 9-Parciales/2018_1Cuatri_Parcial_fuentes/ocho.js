function mostrar() {

    var letra;
    var numero;
    var seguir;
    var contadorpares = 0;
    var contadorimpares = 0;
    var contadorceros = 0;
    var contadorpositivos = 0;
    var acumuladorpositivos = 0;
    var promediopositivos;
    var acumuladornegativos = 0;
    var numeromaximo;
    var numerominimo;
    var letramaximo;
    var letraminimo;
    var flag = 0;
    var flagpositivo = 0;


    do {

        //pedir letra
        letra = prompt("Ingrese una letra minuscula");
        //validar letra
        while (!(letra >= 'a' && letra <= 'z')) {

            letra = prompt("Dato invalido. Ingrese una letra minuscula");
        }
        //pedir numero
        numero = parseInt(prompt("Ingrese un mumero entre -100 y 100."));
        //valirdar numero
        while (numero < -100 || numero > 100) {

            numero = parseInt(prompt("Numero incorrecto, Ingrese un mumero entre -100 y 100."));
        }

        //numeros pares contar

        if (numero % 2 == 0) {
            contadorpares++;

        }
        //numeros impares contar

        if (numero % 2 != 0) {
            contadorimpares++;
        }
        //contar ceros
        if (numero == 0) {
        
            contadorceros++;

        }
        //signo del numero

        else if (numero >= 0) {
            contadorpositivos++;
            acumuladorpositivos = acumuladorpositivos + numero;
            flagpositivo = 1;
        }
        else {
            acumuladornegativos = acumuladornegativos + numero;

        }

        // numero max y letra max

        if (flag == 0 || numero > numeromaximo ) {
            numeromaximo  = numero;
            letramaximo = letra;

        }

        if (flag == 0 || numero < numerominimo ) {
            numerominimo = numero;
            letraminimo = letra;
            flag = 1;
        }

        seguir = prompt("Quiere continuar?: ");
    } while (seguir == "s");



    if (flagpositivo == 0 ) {
        contadorpositivos = 1;
    }
    promediopositivos= acumuladorpositivos / contadorpositivos;





    
    document.write("a) La cantidad de numeros pares es: " + contadorpares + "</br>");
    document.write("b) La cantidad de numeros impares es: " + contadorimpares + "</br>");
    document.write("c) La cantidad de ceros es: " + contadorceros + "</br>");
    document.write("d) El promedio de los positivos ingresados es de: " + promediopositivos + "</br>");
    document.write("e) La suma de todos los numeros negativos es de: " + acumuladornegativos + "</br>");
    document.write("f) El numero maximo es: " + numeromaximo + " Y su respectiva letra es: " + letramaximo + "</br>" + "El numero minimo es: " + numerominimo + " Con su respectiva letra que es: " + letraminimo + "</br>");
    
}