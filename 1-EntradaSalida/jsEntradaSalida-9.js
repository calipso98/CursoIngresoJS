/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
    var num1;
    var aumento;
    var sueldo_incremento;
    num1 = parseInt(document.getElementById("sueldo").value);



    aumento = num1 * 10 / 100;
    sueldo_incremento = num1 + aumento;



    document.getElementById("resultado").value = sueldo_incremento;

}
