/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;

	nombre = prompt ("Ingrese su nombre");

	/*origen*/document.getElementById("elNombre").value =/* destino */ nombre; //se le asigno lo que esta en la variable nombre a la caja de texto en el html
	

}

