function mostrar()

/*Realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos,
 informar por alert:
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
{

var nota;
var sexo;
var prom;
var acumuladornotas = 0;
var notamenor = 0;
var flag = 0;
var sexomenor;
var contvaronesmas6;

for (var i = 0 ; i < 5 ; i++){

    nota = parseInt(prompt("Ingrese su nota del 0 al 10"));
    
    while (isNaN(nota) || nota <=10 || nota >=0 ) {
        
        nota = parseInt(prompt("no es un numero, ingrese su nota numerica"));
        
    }
    sexo = prompt("ingrese f ó m .");
    
while (sexo != "f" && sexo != "m") {


    alert("letra incorrecta");
    sexo = prompt("ingrese nuevamente f o m");
}

acumuladornotas = acumuladornotas + nota

if (nota < notamenor || flag == 0){

    notamenor = nota;
    sexomenor = sexo;
    flag = 1;
}
if (sexo == "m" && nota >=6){
    contvaronesmas6++;
}
}

prom = acumuladornotas / 5;
alert ("El promedio de los 5 alumnos es: " + prom + "\nLa nota mas baja es: " + notamenor + " y el sexo de quien obtuvo esa nota es" + sexomenor+ "\nlos que obtuvieron una nota mayor o igual a 6" + contvaronesmas6 );


}
