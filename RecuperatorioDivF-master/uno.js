/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let sexo;
	let edad;
	let temperatura;
	let promedio;
	let acumuladorEdad = 0;
	let contadorMujer = 0;
	let contadorHombre = 0;
	let temperaturaMaxima = 0;
	let nombreMujerConMasTemperatura = "";
	let flagMujer = 0;

	for( let i=0; i < 5; i++) {

		nombre= prompt("Ingrese nombre: ");
		while(!isNaN(nombre)) {
			nombre= prompt("Nombre invalido. Ingrese nombre: ");
		}

		temperatura = parseFloat(prompt("Ingrese temperatura: "));
		while(temperatura <= 0 || isNaN(temperatura)) {
			temperatura = parseFloat(prompt("Temperatura invalida. Ingrese temperatura"));
		}

		sexo = prompt("Ingrese sexo (f-m): ");
		while(sexo != 'f' && sexo != 'm') {
			sexo = prompt("Sexo invalido. Ingrese sexo (f-m): ");
		}
		
		edad = parseInt(prompt("ingrese su edad"));
		while(edad < 0 || isNaN(edad)) {
			edad = parseInt(prompt("Edad invalida, ingrese su edad"));
		}
		
		if ( sexo == 'm') {
			contadorHombre++;
		}
		else {
			
			contadorMujer++;
			flagMujer = 1;
			if(temperatura > temperaturaMaxima){
				temperaturaMaxima = temperatura;
				nombreMujerConMasTemperatura = nombre;
			}

		}
		
		acumuladorEdad += edad;

	}
	
	promedio = acumuladorEdad / 5

	console.log("a) Cantidad de mujeres: " + contadorMujer + ". Cantidad de hombres: " + contadorHombre);
	console.log("b) La edad promedio en total:" + promedio);
	if(flagMujer == 0){
		console.log("c) No se ingresaron 'mujeres' ");
	}
	else{
		console.log("c) El nombre de la mujer con mas temperatura: " + nombreMujerConMasTemperatura);
	}




















}
