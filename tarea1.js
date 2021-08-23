function suma(x, y) {
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
    var suma;
    suma = x + y;
    console.log('Mi resultado de la suma es:', suma);
  }

  suma(1,2);

  function resta (x, y) {
      // "x" e "y" son números
      // Resta "x" de "y" y devuelve el valor
      // Tu código:
      var resta;
      resta = x - y;
      console.log('Mi resultado de la resta es:', resta);
  }
  
  resta(4,3);

  function multiplicacion(x, y) {
    // "x" e "y" son números
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    var resultado;
    resultado = x * y;
    console.log('Mi resultado de la multiplicacion es:', resultado);
  }

  multiplicacion(4,2);

function divide(x, y) {
  // "x" e "y" son números
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var division;
  division = x / y;
  console.log('Mi resultado de la division es:', division);
}

divide(9,2);

function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    var restoDeDivision;
    restoDeDivision = x % y;
    console.log('Mi resultado del resto de la division es:', restoDeDivision);
  }
  obtenerResto(9,2);

  function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // Tu código:
    var elevadoAlCuadrado;
    elevadoAlCuadrado = num ** 2;
    console.log('Mi resultado  del numero elevado al cuadrado es:', elevadoAlCuadrado);
  }
  elevarAlCuadrado(8);

  function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
    var resultado;
    if (x === y) {
        resultado = true;
        console.log('La expresion es:', resultado)
    }
    else {
        resultado = false;
        console.log('La expresion:', resultado)
    }
  }
  
  sonIguales(5,4)

  function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    var longitud;
    if (str1.length === str2.length) {
        longitud = true;
        console.log('Los strings tienen la misma longitud:', longitud);
    }
    else {
        longitud = false;
        console.log('Los strings tienen la misma longitud:', longitud);
    }
  }

  tienenMismaLongitud('constanza','luduena');

  function menosQueNoveta(num) {
    // Devuelve "true" si el argumento de la función es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    var menor;
    if (num < 90) {
        menor = true;
        console.log('El numero es menor que 90:', menor);
    }
    else {
        menor = false;
        console.log('El numero es menor que 90:', menor);
    }
  }
  menosQueNoveta(90.5)

  function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    var mayor;
    if (num > 50) {
        mayor = true;
        console.log('El numero es mayor que 50:', mayor);
    }
    else {
        mayor = false;
        console.log('El numero es mayor que 50:', mayor);
    }
  }

  mayorQueCincuenta(52)

  function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    var par;
    if (num % 2 === 0) {
        par = true;
        console.log('El numero es par:', par);
    }
    else {
        par = false;
        console.log('El numero es par:', par);
    }
  }
  esPar(14269)

  function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    var impar;
    if (num % 2 !== 0) {
        impar = true;
        console.log('El numero es impar:', impar);
    }
    else {
        impar = false;
        console.log('El numero es impar:', impar);
    }
  }
  esImpar(289)

  function comparacion() {
    //Asigna valores para val1 y val2 de modo que ingrese a la instrucción if:
    const val1='HolaMundo'!=='AdiosMundo' //true
    const val2=3>2 //true

    if (val1 && val2) {
      console.log("Entramos en la declaración if");
    }
  }

  comparacion()

  function flujoCondicional() {
    const valor1='Hola'!=='Chau' //asingar como valor el resultado de una operacion de comparacion
    const valor2=10
  
    //establecer los valores de valor1 y valor 2 para obtener los siguientes resultados:
    //'segundo if'
    //'primer if', y 'else final'
    //'primer if', y 'else if'
    //'else final'
    if (valor1) {
      console.log("primer if");
    }
    if (valor2 && !valor1) {
      console.log("segundo if");
    } else if (valor2 <= 12) {
      console.log("entrada al else if");
    } else {
      console.log("else final");
    }
  }

  flujoCondicional()
  
  /* 
    Crear un objeto sobre una temática a elección que contenga :
    - Un dato tipo string
    - Un dato tipo number
    - Un dato tipo boolean
    - Una función
*/
const casa= {
    puertas:4,
    ventanas:8,
    propietario:'Constanza',
    amueblada: true,
    alarma:function encendido(){
        console.log('Alarma encendida!')
    }
}
console.log(casa)
console.log(casa.alarma())

/* 
    Crear un array sobre un temática a elección que contenga:
    - Un dato tipo string
    - Un dato tipo number
    - Un dato tipo boolean
    - Un array con al menos 3 valores
​
    Una vez creado remover del ultimo indice (el cual es un array) el primer y ultimo valor y agregarle el string "Primero" al comienzo, 
    y el string "Ultimo" al final. Utilizar los métodos vistos en clase.
*/

const miUnicoArreglo = ['Constanza', 28, true, ['Cecilia', 'Mariano', 'Andres']]

miUnicoArreglo[3].pop();
miUnicoArreglo[3].push('Ultimo');
miUnicoArreglo[3].shift();
miUnicoArreglo[3].unshift('Primero');

console.log(miUnicoArreglo[3]);
