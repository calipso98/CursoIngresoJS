function mostrar()
{
		var numero;
		var	seguir;
		var neg;
		var pos;
		var cont_neg = 1;
		var cont_pos = 1;
		var cont_0 = 0;
		var flag = 1;

	do {
		numero = parseInt(prompt("Ingrese un numero: "));

		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero Ingrese un numero: "));
		}

		if (flag == 1){
			neg = numero;
			pos = numero;
			flag = 2;
		}
		if (numero < 0 ) {
			neg = neg + numero;
			cont_neg ++
		}
		else if (numero > 0 ) {
			pos = numero;
			cont_pos ++;
			
			
			}	
	/*	para el punto 5
			else 
			cont_0 ++;
*/
		seguir = prompt("quiere seguir continuando?")

	} while (seguir == 's');

alert (pos);
alert (neg);
// para el punto 5        alert (cont_0);


}//FIN DE LA FUNCIÓN