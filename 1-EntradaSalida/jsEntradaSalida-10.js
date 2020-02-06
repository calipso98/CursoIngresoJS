/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var sueldo;
    var descuento;
    var sueldoFinal;
    sueldo = parseInt(document.getElementById("importe").value);



    descuento = 25 / 100 * sueldo;
    sueldoFinal = sueldo - descuento;



    document.getElementById("resultado").value = sueldoFinal;
}
