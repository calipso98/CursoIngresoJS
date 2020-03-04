function mostrar()
{
//b) la marca del producto mas pesado cuya temperatura sea mayor a 0
    var Marca;
    var Peso;
    var Temperatura;
    var seguir;
    var contadorPares;
    var temperaturamaxdelpesado;
    var flag = 0;
    var Maximopeso;
    var Marcapesada;
    var Maximopesonocongelado;

    do {
        // pido los datos
        Marca = prompt("Ingrese la marca ");

        Peso = parseInt(prompt("Ingrese el Peso (1 y 100): "));
        while (Peso < 1 || Peso > 100 || isNaN(Peso)) {
            Peso = parseInt(prompt("Dato invalido. Ingrese un Peso (-100 y 100): "));
        }

        Temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento (-30 - 30) "));
        while (Temperatura < -30 || Temperatura > 30 || isNaN(Temperatura)) {

        }
        // ------------- paridad ---------------

        if (Temperatura % 2 == 0) {
            // pares
            contadorPares++;
        }
        //maximo peso
        if (Flag == 0 || Peso > Maximopeso) {
            Maximopeso = Peso;
            Marcapesada = Marca;
        }
        if (temperatura > 0 && Peso > Maximopeso)

        if (  temperatura > 0 && Peso == Maximopesonocongelado ){
            Marcapesada = Marca;
            temperaturamaxdelpesado = temperatura;
        }


} while (seguir == 's');
}