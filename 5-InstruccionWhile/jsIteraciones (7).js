function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var numero;

	do {

		numero = parseInt(prompt("ingrese un numero"));
		acumulador = acumulador + numero;
		contador++;
		seguir = prompt("quiere seguir ingresando numeros?");


	} while (seguir == "s");
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN