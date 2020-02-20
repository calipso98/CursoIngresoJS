function mostrar()
{	
	var flag = 1;
	var Max;
	var Min;
	var numero;
	var seguir = 's';

	do {
		numero = parseInt(prompt("Ingrese un numero: "));
		
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero Ingrese un numero: "));
			
		}
		if (flag == 1){
			Max = numero;
			Min = numero;
			flag = 2;
		}
		
		if (numero > Max ) {
			Max = numero;
		}	
		else if (numero < Min) {
		Min = numero;
		
		}

		seguir = prompt("quiere seguir continuando?")

	} while (seguir == 's');

	document.getElementById('maximo').value = Max;
	document.getElementById('minimo').value = Min;



}//FIN DE LA FUNCIÓN