function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var numero;
	var seguir = 's';
	var acumulador = 0;

	do {
		numero = parseInt(prompt("Ingrese un numero: "));

		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero Ingrese un numero: "));
		}
		if (numero >= 0) {
			positivo = positivo + numero;
		}
		else {
			negativo = negativo * numero;
			contador = 2
		}

		seguir = prompt("quiere seguir continuando?")


	} while (seguir == 's');

	if (contador == 0) {
		negativo = 0;
	}
	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;









}