function mostrar() {
    var contadorvehiculos = 0;
    var acumuladorprecio = 0;
    var color;
    var precio;
    var seguir;
    var contadorrojo = 0;
    var contadorrojomas5 = 0;
    var contadormenos5 = 0;
    var promedio;
    var preciocaro;
    var colorcaro;
    var flag = 0;

    do {
        //(ingreso de datos)
        color = prompt("Ingrese el color del vehiculo: ");
        while (!(color == "rojo" || color == "verde" || color == "amarillo")) {
            color = prompt("Dato invalido, Ingrese el color del vehiculo: ");
        }
        precio = parseInt(prompt("Ingrese el precio del vehiculo: "));
        while (precio < 0 || precio > 10000) {
            precio = parseInt(prompt("Dato invalido, Ingrese el precio del vehiculo: "));
        }
        //la cantidad de rojos
        if (color == 'rojo') {
            contadorrojo++;
        }
        //la cantidad de rojos con precio mayor a 5 lucas

        if (color == 'rojo' && precio > 5000) {
            contadorrojomas5++;
        }
        //cantidad de vehiculos con precio menor a 5 lucas
        if (precio < 5000) {
            contadormenos5++;
        }
        
        //el mas caro y su color
        
        if (flag == 0 || precio > preciocaro) {
            preciocaro = precio;
            colorcaro = color;
            flag = 1
        }
        
        contadorvehiculos++;
        acumuladorprecio = acumuladorprecio + precio;
        



        seguir = prompt("Desea continuar?")
    } while (seguir == 's');

    promedio = acumuladorprecio / contadorvehiculos;
    

    document.write("a) La cantidad de vehiculos color rojo es: " + contadorrojo + "</br>");
    document.write("b) La cantidad de rojos con precio mayor a 5000 es: " + contadorrojomas5 + "</br>");
    document.write("c) La cantidad de vehiculos copn precio menor a 5000 es: " + contadormenos5 + "</br>");
    document.write("d) El promedio del precio de todos los vehiculos ingresados es de: " + promedio + "</br>");
    document.write("e) El auto mas caro es de: $" + preciocaro + " y su color es: " + colorcaro);











}
