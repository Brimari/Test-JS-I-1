// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  const primero = array[0];
  return primero;
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
const ultimo = array[array.length-1];
return ultimo;
  
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  const largo = array.length;
  return largo;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray = [];
  for(var i = 0; i < array.length; i++) {
  nuevoArray[i] = array[i] + 1;
  }
  return nuevoArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  const prueba = array;
  prueba.push (elemento)
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  const prueba = array;
  prueba.unshift(elemento)
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  numeros.forEach(function(numero){
    suma += numero;
  });
  return suma;

}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sum = 0;
  var count = resultadosTest.length;
  for (i=0; i<count; i++) {
    sum += resultadosTest[i];
  }
  return sum/count;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max = 0,
  a = numeros.length,
  counter

for (counter=0; counter<a; counter++)
{
  if (numeros[counter] > max)
  {
      max = numeros[counter]
  }
}
return max
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  let contador = 0;
  for (let i = 0; i < arreglo.length ; i++) {
  if(arreglo[i] > 19){
  contador++
  }
  }
  return contador
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
switch (numeroDeDia) {
  case 1 : 
    return  "Es fin de semana";
    break;
  case 2 :
  case 3 : 
  case 4 : 
  case 5 : 
  case 6 : 
    return "Es dia Laboral";
    break;
  case 7 : 
    return  "Es fin de semana";
}
} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numero = n;
  if(numero.toString().startsWith("9")){
    return true;
  }else{
    return false;
  }
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var i =0 ; i < arreglo.length - 1; i++) {
    if(arreglo[i] !== arreglo[i+1]){
    return false
    }
    }
    return true
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];
  for(let i= 0; i<array.length; i++) {
  if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
  nuevoArray.push(array[i]);
  }
  }
  if(nuevoArray.length < 3) {
  return "No se encontraron los meses pedidos";
  }
  else {
  return nuevoArray;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  nuevoArray= []
  for (let i = 0; i < 200; i++) {
    if (array[i] > 100) 
    nuevoArray.push(array[i]);
}
return nuevoArray;
}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
