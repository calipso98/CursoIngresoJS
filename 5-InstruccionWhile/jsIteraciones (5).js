function mostrar() {

    var sexo = prompt("ingrese f ó m .");//.toLowerCase vuelve minuscula lo que ingreses

    while (sexo != "f" && sexo != "m") {


        alert("letra incorrecta");
        sexo = prompt("ingrese nuevamente f o m");

    }

    document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN



