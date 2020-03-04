function mostrar() {
    var nota;
    var sexo;
    var notaMenor;
    var sexoMenor;
    var contadorVaronesMas6 = 0;
    var acumuladorNotas = 0;
    var promedio;
    var flag = 0;

    for (var i = 0; i < 5; i++) {

        nota = parseInt(prompt("Ingrese nota (0-10): "));
        while (nota < 0 || nota > 10 || isNaN(nota)) {
            nota = parseInt(prompt("Nota invalida. Ingrese nota (0-10): "));
        }
        // acá valido la nota

        sexo = prompt("Ingrese sexo (f-m): ");
        while (sexo != 'f' && sexo != 'm') {
            sexo = prompt("Sexo invalido. Ingrese sexo (f-m): ");
        }
        // acá valido el sexo

        acumuladorNotas = acumuladorNotas + nota;

        if (nota < notaMenor || flag == 0) {
            notaMenor = nota;
            sexoMenor = sexo;
            flag = 1;
        }

        if (sexo == 'm' && nota >= 6) {
            contadorVaronesMas6++;
        }

    }

    promedio = acumuladorNotas / 5;

    alert("Promedio Notas: " + promedio + "\nNota Baja: " + notaMenor + "\nSexo nota baja: " + sexoMenor + "\nContador Varones nota >6: " + contadorVaronesMas6);



}
