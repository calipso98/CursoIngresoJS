function mostrar() {
    //b) la marca del producto mas pesado cuya temperatura sea mayor a 0
    var marca;
    var peso;
    var temperatura;
    var seguir;
    var temperaturaspares = 0;
    var marcapesada;
    var congelados = 0;
    var producto = 0;
    var promedio;
    var acumuladordepesos = 0;
    var pesomax;
    var pesomin;
    var flag = 0;



    do {

        //pido datos y valido
        marca = prompt("Ingrese la marca del producto: ");
        peso = parseInt(prompt("Ingrese el peso que debe ser entre 1 y 100: "));

        while (peso < 1 || peso > 100 || isNaN(peso)) {

            peso = parseInt(prompt("Dato invalido, Ingrese el peso que debe ser entre 1 y 100: "));
        }

        temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento entre -30 y 30 grados: "));


        while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
            temperatura = parseInt(prompt("Dato invalido, Ingrese la temperatura de almacenamiento entre -30 y 30 grados: "));

        }


        //temperaturas pares

        if (temperatura % 2 == 0) {
            temperaturaspares++;
        }
        // cantidad de productos que se convervan a menos de 0 grados

        if (temperatura < 0){
            congelados++;
        }
        //marca del producto mas pesado
        if ((flag == 0 || peso > pesomax) && temperatura > 0) {
            pesomax = peso;
            marcapesada = marca;

            flag = 1;
        }

        //peso maximo y peso minimo

        if ( producto == 0 || peso > pesomax){
            pesomax = peso;

        }
        if (producto == 0 || peso < pesomin){
            pesomin = peso;
        
        }



        acumuladordepesos = acumuladordepesos + peso;
        producto++;

        
        
        
        
        
        seguir = prompt("Desea continuar?");
        
    }while (seguir == 's');
    
    promedio = acumuladordepesos / producto; 
    

    document.write("a) La cantidad de temperaturas pares es de; " + temperaturaspares + "</br>");
    document.write("b) La marca del producto mas pesado no congelado es: " + marcapesada + "</br>");
    document.write("c) La cantidad de productos que se conservan a temperaturas menores a 0 grados son: " + congelados + "</br>");
    document.write("d) El promedio del peso de todos los productos ingresados es: " + promedio + "</br>");
    document.write("f) El peso maximo es de: " + pesomax + "</br>");
    document.write("f) El peso minimo es de: " + pesomin);
    

}
