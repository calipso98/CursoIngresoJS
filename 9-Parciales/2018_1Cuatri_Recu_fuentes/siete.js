function mostrar()
{
    var nota;
    var sexo;
    var promedio;
    var notabaja;
    var sexobajo;
    var contadorvarones = 0;
    var varonescon6 = 0;
    var acumuladornotas = 0;
    var flag = 0;


    //pido datos

    for (var i = 0; i < 5; i++) {

        nota = parseInt(prompt("Ingrese su nota del 0 al 10"));
        while (nota > 10 || nota < 0 || isNaN(nota)) {
            nota = prompt("Dato invalido, Ingrese su nota del 0 al 10");
        }
        sexo =prompt("Ingrese su sexo f o m");
        while (sexo != "f" && sexo != "m") {
            sexo = parseInt(prompt("Dato invalido, Ingrese su sexo 'f' o 'm'"));
        }

        acumuladornotas = acumuladornotas + nota;

        //nota mas baja y sexo

        if (flag == 0 ||nota < notabaja) {
            notabaja = nota;
            sexobajo = sexo;
            flag = 1;

        }
        //cantidad de varones que su nota haya sido mayor o igual a 6

        if (sexo == 'm' && nota >= 6) {
            varonescon6++;


        }
    }

    promedio = acumuladornotas / 5;
    alert("El promedio de las notas totales es: " + promedio);
    alert("La nota mas baja es: " + notabaja + " y su sexo es: " + sexobajo);
    alert("la cantidad de varones que su nota fue mayor o igual a 6 es: " + varonescon6);

}
