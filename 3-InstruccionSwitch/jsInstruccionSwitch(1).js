function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch (mes){
    
    case "Enero":
    alert("Que comiences bien el año");
    break;

    case "Marzo":
    alert ("A clases!!!");
    break;

    case "Julio" :
    alert ("Se vino el frio");
    break;

    case "Diciembre" :
    alert ("Felices Fiestas!!")
    break;

    /* default: 
        alert("a ese mes no lo tuve en cuenta"); */
    // Si no entra en ninguno de los case entra en default
}


}//FIN DE LA FUNCIÓN