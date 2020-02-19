/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantLamp;
    var marca;
    var desclamp;
    var descuento;
    var preciofinal;
    var preciototal;
    var ingresosBB;
    var precio = 35;
    var flag = 0;

    cantLamp = parseInt(document.getElementById("Cantidad").value)
    marca = document.getElementById("Marca").value;

    
    switch(cantLamp){

        case 1:
        case 2:
            
            desclamp = 0;
            
            break;
        
        case 3:
            
            if(marca == "ArgentinaLuz"){
                
                desclamp = 15;
            
            }else if( marca == "FelipeLamparas"){
                
                desclamp = 10;
            
            }else{
                desclamp = 5;
            }
            break;

        case 4:

            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                desclamp = 25;
            }else{
                desclamp = 20;
            }
            break;
        case 5:
            if(marca == "ArgentinaLuz"){
                desclamp = 40;
            }else{              
                desclamp = 30;

            }
            break;
            default:
                desclamp = 50;

    }

    descuento = precio * desclamp / 100;
    preciofinal = precio - descuento;
     
    document.getElementById("precioDescuento").value = preciofinal;

    preciototal = preciofinal * cantLamp;

    if(preciototal > 120){

        ingresosBB = preciototal * 10 /100;
        preciototal = preciototal + ingresosBB;
        flag = 1;
    }

    alert("El precio a Pagar es $ " + preciototal);

    if ( flag == 1){
    alert("Usted pago " + ingresosBB + " de Ingresos Brutos.");
    }
}
