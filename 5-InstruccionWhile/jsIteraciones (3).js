function mostrar()
{

var clave = prompt("ingrese el número clave.");
//me fijo si el dato que se ingresa es invalido
while (clave != "utn750"){
    alert("la clave es incorrecta");
    //si es invalido entonces pido que la ponga de vuelta
    clave = prompt("ayuda: La clave es utn750");
}
//si es correcta estonces le digo que fue correcta
alert ("clave correcta")
}//FIN DE LA FUNCIÓN
