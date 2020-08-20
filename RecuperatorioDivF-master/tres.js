/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let titular = "";
	let lugar;
	let temporada;
	let cantidad;
	let contadorBariloche = 0;
	let contadorCataratas = 0;
	let contadorSalta = 0;
	let lugarPreferido;
	let mayorCantidad = 0;
	let contadorInvierno = 0;
	let acumCantInvierno = 0;
	let seguir;
	let nombreTitular = "";
	
	do {
		titular = prompt("ingrese titular");
		while(titular == '') {
			titular = prompt("Titular invalido, ingrese titular");
		}

		lugar = prompt("Ingrese lugar (bariloche/cataratas/salta): ");
		while(lugar != 'bariloche' && lugar != 'cataratas' && lugar != 'salta') {
			sexo = prompt("Lugar invalido. Ingrese lugar (bariloche/cataratas/salta): ");
		}
		
		temporada = prompt("Ingrese temporada (verano/otño/invirno/primavera): ");
		while(temporada != 'verano' && temporada != 'otoño' && temporada != 'invierno' && temporada != 'primavera') {
			sexo = prompt("temporada invalido. Ingrese temporada (verano/otoño/invirno/primavera): ");
		}

		cantidad = parseInt(prompt("ingrese cantidad"));
		while(cantidad < 0 || isNaN(cantidad)) {
			
			cantidad = parseInt(prompt("cantidad invalida, ingrese cantidad"));
		}

		switch(lugar){
			case "bariloche":
				contadorBariloche++;
				break;
			case "cataratas":
				contadorCataratas++;
				break;
			case "salta":
				contadorSalta++;
				break;		
		}
		
		if(cantidad > mayorCantidad){
			mayorCantidad = cantidad;
			nombreTitular = titular;
		}
		
		if(temporada == "invierno") {
			acumCantInvierno = acumCantInvierno + cantidad;
			contadorInvierno++;

		}

		Seguir = prompt("Quiere ingresar otro viaje: ");
	}while(seguir == 's');

	if(contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta) {
		lugarPreferido = "bariloche";
	}
	else if(contadorCataratas > contadorBariloche && contadorCataratas > contadorSalta){
		lugarPreferido = "cataratas";
	}
	else {
		lugarPreferido = "salta";
	}

	if(contadorInvierno != 0){
	promedio = acumCantInvierno / contadorInvierno;
	}


console.log("a)El lugar más elegido" + lugarPreferido);
console.log("b)El nombre del titular con mas pasajero: " + mayorCantidad);
console.log("el promedio de personas por viaje, que viajan en invierno: " + promedio);

}
