/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido por parámetro.
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido por parámetro.
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido por parámetro.
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // El arreglo recibido por parámetro contiene números.
  // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:
  var nuevoNum = array.map((num) => num + 1);
  return nuevoNum;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  var palabrasConcatenadas = palabras.join(" ");
  return palabrasConcatenadas;
}

function arrayContiene(array, elemento) {
  // Verifica si el elemento existe dentro del arreglo recibido.
  // Retornar true si está, o false si no está.
  // Tu código:
  var contieneElemento = array.includes(elemento);
  return contieneElemento;
}

function agregarNumeros(arrayOfNums) {
  // [2, 6, 8, 4, 9]
  // El parámetro "arrayOfNums" debe ser un arreglo de números.
  // Suma todos los elementos y retorna el resultado.
  // Tu código:
  var resultadoSuma = 0;

  for (let i = 0; i < arrayOfNums.length; i++) {
    resultadoSuma = resultadoSuma + arrayOfNums[i];
  }
  return resultadoSuma;
}

function promedioResultadosTest(resultadosTest) {
  // El parámetro "resultadosTest" es un arreglo de números.
  // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
  // Tu código:
  var promedioNotas = 0;

  for (let i = 0; i < resultadosTest.length; i++) {
    promedioNotas = promedioNotas + resultadosTest[i];
  }
  return promedioNotas / resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
  // [3, 5, 7, 9, 4]
  // El parámetro "arrayOfNums" es un arreglo de números.
  // Retornar el número más grande.
  // Tu código:
  var numMasGrande = 0;

  for (let i = 0; i < arrayOfNums.length; i++) {
    //         3        >       0
    if (arrayOfNums[i] > numMasGrande) {
      //                        3
      numMasGrande = arrayOfNums[i];
    }
  }
  return numMasGrande;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length === 0) {
    return 0;
  } else if (arguments.length === 1) {
    return arguments[0];
  }
  var producto = 1;
  for (let i = 0; i < arguments.length; i++) {
    producto = arguments[i] * producto;
  }
  return producto;
}

function cuentoElementos(array) {
  // [25, 14, 7, 45]
  // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyos valores sean mayores que 18.
  // Tu código:
  var contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 18) {
      contador++;
    }
  }
  return contador;
}

function diaDeLaSemana(numeroDeDia) {
  // [1, 2, 3, 4, 5, 6, 7]
  // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
  // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
  // Tu código:
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else {
    return "Es dia laboral";
  }
}

//---------------------96
function empiezaConNueve(num) {
  // Esta función recibe por parámetro un número.
  // Debe retornar true si el entero inicia con 9 y false en otro caso.
  // Tu código:
  //---------------  96 --> "96"
  var numToString = num.toString();

  // tomar el 1er caracter "9" y devolver su valor ASCII --> 57
  var valorASCII = numToString.charCodeAt(0);

  return valorASCII === 57;
}

function todosIguales(array) {
  // [5, 5, 5, 5]
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario retornar false.
  // Tu código:
  var comparador = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] !== comparador) {
      return false;
    }
  }

  return true;
}

function mesesDelAño(array) {
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var eneMarNov = [];

  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === "Enero" ||
      array[i] === "Marzo" ||
      array[i] === "Noviembre"
    ) {
      if (!eneMarNov.includes(array[i])) {
        eneMarNov.push(array[i]);
      }
    }
  }

  if (eneMarNov.length < 3) {
    return "No se encontraron los meses pedidos";
  }

  return eneMarNov;
}

function tablaDelSeis() {
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu código:
  var escalaDelSeis = [];

  for (let i = 0; i <= 10; i++) {
    escalaDelSeis.push(i * 6);
  }
  return escalaDelSeis;
}

function mayorACien(array) {
  // [70, 101, 100, 150]
  // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  // Tu código:
  var mayoresACien = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      mayoresACien.push(array[i]);
    }
  }

  return mayoresACien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // [PISTA]: utiliza el statement 'break'.
  // Tu código:
  var escala = [];

  for (let i = 1; i <= 10; i++) {
    var suma = num + i * 2;
    if (suma === i) {
      break;
    }
    escala.push(suma);
  }
  if (escala.length < 10) {
    return "Se interrumpió la ejecución";
  }

  return escala;
}

function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continua con la siguiente iteración.
  // [PISTA]: utiliza el statement 'continue'.
  // Tu código:
  var escala = [];

  for (let i = 1; i <= 10; i++) {
    var suma = num + i * 2;
    if (i === 5) {
      continue;
    }
    if (i > 5) {
      escala.push(suma - 2);
    } else {
      escala.push(suma);
    }
  }

  return escala;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
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
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  tablaDelSeis,
  mayorACien,
  breakStatement,
  continueStatement,
};
