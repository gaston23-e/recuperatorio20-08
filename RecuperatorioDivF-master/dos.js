/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let marcaLiquidoCaro;
  let precioLiquidoCaro;
  let acumuladorPeso = 0;
  let flagLiquido = 0;
  let marcaSolidoLiviano;
  let precioSolidoLiviano;
  let flagSolido = 0;
  let seguir;


  do{

    marca = prompt("Ingrese marca: ");
		while(!isNaN(marca)) {
			marca = prompt("Marca invalida. Ingrese marca: ");

    }

    precio = parseFloat(prompt("Ingrese precio: "));
		while(precio <= 0 || isNaN(precio)) {
			precio = parseFloat(prompt("Precio invalido. Ingrese precio"));
    }
    
    peso = parseFloat(prompt("Ingrese peso: "));
		while(peso <= 0 || isNaN(peso)) {
			peso = parseFloat(prompt("Peso invalido. Ingrese peso"));
    }
    
    tipo = prompt("Ingrese tipo (solido/liquido): ");
		while(tipo != 'solido' && tipo != 'liquido') {
			tipo = prompt("Tipo invalido. Ingrese tipo (solido/liquido): ");
    }
    
    acumuladorPeso = acumuladorPeso + peso;

    if(tipo == 'solido' ) {

      if( flagSolido == 0 || precio < precioSolidoLiviano) {
        precioSolidoLiviano = precio;
        marcaSolidoLiviano = marca;
        flagSolido = 1;
      }  

    }
    else{
      if( flagLiquido == 0 || precio > precioLiquidoCaro){
        precioLiequidoCaro = precio;
        marcaLiquidoCaro = marca;
        flagLiquido = 1;
      }
      
    }

   seguir = prompt("Quiere ingresar otro producto?: ");
  }while(seguir == 's');
 
  console.log("a) peso total  compra: " + acumuladorPeso + "Kg");
  if( flagLiquido == 0){
    console.log("No se registro ningun liquido");
  }
  else{
    console.log("b) Marca liquido caro es: " + marcaLiquidoCaro);
  }
  if( flagSolido == 0){
    console.log("No se registraro ningun solido");
  }
  else{
    console.log("b) Marca solido liviano es: " + marcaSolidoLiviano);
  }
 

}
