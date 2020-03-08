function mostrar() {
    var sexo;
    var notatotal;
    var notamenor;
    var sexomenor;
    var contvaronesmasde6 = 0;
    var nota;
    var promedio;
    var acumuladordenotas = 0;
    var flag = 0;

    for (var i = 0; i < 5; i++) {

        //valido nota

        nota = parseInt(prompt("Ingrese nota del 1 al 10"));

        while (nota < 0 || nota > 10 || isNaN(nota))

            nota = parseInt(prompt("nota invalida, Ingrese nota del 1 al 10"));

        //valido el sexo

        sexo = prompt("ingrese su sexo con 'f' o 'm' ")
        while (sexo != 'm' && sexo != 'f')
            sexo = prompt("dato invalido, ingrese su sexo con 'f' o 'm' ")
        //acumulo las notas 
        acumuladordenotas = acumuladordenotas + nota;

        //nota mas baja
        if (nota < notamenor || flag == 0) {
            notamenor = nota;
            sexomenor = sexo;
            flag = 1;


        }

        if (nota >= 6 && sexo == 'm')
            contvaronesmasde6++;



    }
        promedio = acumuladordenotas / 5;

        alert ("El promedio de las notas totales es: " + promedio);
        alert ("La nota mas baja es: " + notamenor + " el sexo de esa persona es " + sexomenor);
        alert ("la cantidad de varones cuya nota a sido mayor o igual a 6 es: " + contvaronesmasde6);



}
