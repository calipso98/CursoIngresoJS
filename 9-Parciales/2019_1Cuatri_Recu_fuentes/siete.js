function mostrar() {
    var kilos;
    var sabor;
    var promedio;
    var promediocarne;
    var acumuladorkilos = 0;
    var liviano;
    var saborliviano;
    var contadorcarne = 0;
    var acumuladorcarneK = 0;
    var flag = 0;




    for (var i = 0; i < 10; i++) {
        kilos = parseInt(prompt("Ingrese la cantidad de kilos entre 0 y 500 kilos"))
        while (kilos < 0 || kilos > 500 || isNaN(kilos)) {
            kilos = parseInt(prompt("Dato invalido, Ingrese la cantidad de kilos entre 0 y 500 kilos"))

        }
        acumuladorkilos = acumuladorkilos + kilos;
        sabor = prompt("Ingrese de que sabor es la bolsa de alimentos, carne, vegetales o pollo");

        while (!(sabor == "carne" || sabor == "vegetales" || sabor == "pollo")) {
            sabor = prompt("Dato invalido, Ingrese de que sabor es la bolsa de alimentos, carne, vegetales o pollo");

        }
        //el mas liviano

        if (flag == 0 || kilos < liviano) {
            liviano = kilos;
            saborliviano = sabor;
            flag = 1;

        }
        //cantidad de sabor carne
        if (sabor == 'carne') {
            contadorcarne++;
            acumuladorcarneK = acumuladorcarneK + kilos;
        }
    }//cierra for
    promedio = acumuladorkilos / 10;
    promediocarne = acumuladorcarneK / contadorcarne;

    alert("el promedio de los kilos totales es: " + promedio);
    alert ("El mas liviano es: " + saborliviano + " con " + liviano + "Kg");
    alert ("la cantidad de sabor carne es: " + contadorcarne + " y su promedioo es " + promediocarne);


}
