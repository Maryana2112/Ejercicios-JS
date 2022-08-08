alert("Arreglos y Bucles ");

//Arrays o arreglos

//Definición:
//Un arreglo o array es un conjunto de datos que se pueden almacenar en una sola variable

//Cuando tenemos una variable, la usamos para almacenar UN solo dato. En cmbio, en un arreglo, guardamos MUCHOS datos a manera de lista.

//Un array ya no es un tipo de dato primitivo, se considera un objeto porque es una estructura de datos.

let nombre = "Felipe"; //Aquí se almacena un solo dato

array = ["Maryana", "Aimee", "Berenice", "Daniel", "Kathia", "Lucy", "Marco"];

arrayDatosPrimitivo = ["Maryana", 23, true, null, undefined];

// Formas de crear un array

// Primera forma:
//Utilizando la palabra reservada "new Array"

//En esta primera forma nosotros creamos un array usando la palabra reservada new y el metodo Array para especificarle a nuestro navagador que queremos crear un array. Hasta este momento, este array esta vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar los datos).

var colores = new Array(3); //Esta forma nos permite crear un array con un numero de elementos especificado, pero aún no sabemos que datos va a guardar.

var colores = new Array("rojo", "verde", "azul"); //En este punto estamos creando el array y ya le asignamos los valores en las posiciones que queremos mostrar.

//Segunda forma

//La segunda forma se trata de crear el arreglo olo usando corchetes []. Esta forma es la más usada para crear arreglos en JS.

// listaDePerritos = ["Chihuahua", "Calupoh", "Mestizos", "Callejeros", "Pug"];
// console.log(listaDePerritos);

// listaDelSuper = ["Leche", "Papitas", "Jabón", "Nachos", "Huevos"];
// console.log(listaDelSuper);

// //ARREGLOS EN EQUIPO
// marcasDeGuitarras = ["Fender", "Gibson", "Epiphone", "Yamaha", "ESP", "Ibanez", "Gretsch", "Paul Reed Smith"];
// console.log(marcasDeGuitarras);

// marcasDeTelefonos = ["Samsung","Oppo","Motorola","Xiaomi","Iphone"];
// console.log(marcasDeTelefonos);

// listaDePeliculas = ["Whiplash", "Django", "Star Wars", "Toy Story", "Batman"];
// console.log(listaDePeliculas);

// mangas = ["the boxer","one punch man","super campeones","hajime no hippo"];
// console.log(mangas);

// ListaDeAnimes = ["Dragon Ball Z", "One Piece", "Digimon", "Naruto Shippuden", "Pokémon"];
// console.log(ListaDeAnimes);

// var cancionesKanye = ["Bound 2", "Fade", "Last Call", "Wolves", "Saint Pablo", "New Slaves", "I AM A God"];
// console.log(cancionesKanye);

// var top5PeliculasAnime = ["me quiero comer tu pancreas","your name","La tumba de las luciernagas","El castillo vagabundo","El viaje de chihiro"];
// console.log(top5PeliculasAnime);

// -- Acceder a elementos de un array

// Antes de querer mostrar los elementos de un arreglo, hay que definir algunas cosas:

// -Posición de los elementos, donde empezamos a enumerar desde el 0 y estas posiciones se llaman indices

/* Posición de los elementos de la lisya del super: 
    0: "Leche"
    1: "Papitas"
    2: "Jabón"
    3: "Nachos"
    4: "Huevos"

Número de elementos NO ES LO MISMO que su posición */

marcasDeGuitarras = [
  "Fender",
  "Gibson",
  "Epiphone",
  "Yamaha",
  "ESP",
  "Ibanez",
  "Gretsch",
  "Paul Reed Smith",
];
console.log(marcasDeGuitarras);

console.log("El producto en la posición 1 es: " + marcasDeGuitarras[1]);

console.log("El producto en la posición 3 es: " + marcasDeGuitarras[3]);

console.log("El producto en la posición 5 es: " + marcasDeGuitarras[5]);

//Encontramos que al tratar de seleccionar un elemento de nuestro array que no existe, aparecerá el mensaje undefined. Esto es porque la gran ventaja que tiene los arreglos en JS es que podemos crecer su tamaño cuano nosotros queramos. Para esto, el arreglo se prepara por si en algún momento recibe más información.
/* 
    Array Asociativo 

Son arreglos en donde cada elementos estan asosciado no solo con su indice si no que tambien esta asignado a un identificador 

*/

//Ejemplo de una Ecommerce

let propiedadesDeMiComputadora = {
  marca: "Asus", //la marca es mi identificador, y "Asus" es mi valor
  modelo: "GL552JX",
  procesador: "Intel Core i7",
  ram: "16 GB",
  almacenamiento: "1 TB",
  precio: "15000",
};

console.log(propiedadesDeMiComputadora);
console.log(
  "La RAM de mi computadora es de: ",
  propiedadesDeMiComputadora["ram"]
);
console.log(
  "La marca de la computadora que elegiste: ",
  propiedadesDeMiComputadora["marca"],
  "y su precio es de: ",
  propiedadesDeMiComputadora["precio"]
);

//Ejemplo de una Red Social
let publicacionRedSocial = {
  nombre: "Felipe",
  usuario: "@felipecontenis",
  fecha: "Agosto",
  likes: "5000",
  descripcion: "Esta es una bonita foto de lasagna",
  ubicacion: "Estado de Mexico",
};

console.log(
  "Estas son las publicaciones de Agosto: ",
  publicacionRedSocial["fecha"]
);

/*
Metodos de los arrays 

En los arreglos, tenemos ciertos metodos o instrucciones que nos van a permitir manipular los elemenos de este arreglo. Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos.

Podemos dividir estos metodos en 3: 

    - Metodos transformadores
    - Metodos accesores
    - Metodos repetitivos (spoiler)

La sintaxis basica del metodo es .nombreMetodo(valorAModificar);
*/

console.log("////////////////////////");

var arrayDeEjemplo = [
  "Manzanas",
  "Peras",
  "Mangos",
  "Mandarinas",
  "Uvas",
  "Sandía",
  "Fresas",
];

console.log("Este es nuestro arreglo Original de 7 elementos", arrayDeEjemplo);

//Metodos transformadores

//push(): Agrega un elemento al final del arreglo
arrayDeEjemplo.push("Pitaya");
console.log(
  "Agregamos la Pitaya a nuestro arreglo de ejemplo: ",
  arrayDeEjemplo
);

//pop(): Eliminar el último elemento del arreglo
arrayDeEjemplo.pop();
console.log("Eliminamos el último elemento del arreglo ", arrayDeEjemplo);

//inshift(): Agregae uno o más elementos al principio del arreglo
arrayDeEjemplo.unshift("Bananas", "Tunas", "Aguacate", "Lichi");
console.log("Agregamos 4 elementos al principio del arreglo ", arrayDeEjemplo);

//shift(): Eliminar el primer elementoo y devolver ese valor eliminado
arrayDeEjemplo.shift();
console.log("Eliminamos el primer elemento del arreglo", arrayDeEjemplo);

//sort(): Ordenar los elementos del arreglo y devuelve el arreglo ya ordenado de forma ascendente
arrayDeEjemplo.sort();
console.log("Este es mi arreglo de ejemplo ordenado", arrayDeEjemplo);

//reverse(): Invierte el orden de los elementos del arreglo y devuelve el arreglo invertido
arrayDeEjemplo.reverse();
console.log("Este es nuestro arreglo invertido", arrayDeEjemplo);

//slice(): Extraemos una seccion del arreglo o cadena, y devuelve una cadena nueva, copiando el arreglo (no se modifica nada, sino que creamos una copia)
var saludo1 = "Hola, estoy aprendiendo arreglos en Generation";
var saludo2 = saludo1.slice(3, 7);
console.log("Imprimimos la rebanada del arreglo original", saludo2);

var saludo3 = saludo1.slice(9);
console.log("Imprimimos la rebanada del arreglo original", saludo3);

var saludo4 = saludo1.slice(-9, -5);
console.log("Imprimimos la rebanada del arreglo original", saludo4);

/* splice(): Modificar el arreglo en 3 formas distintas

-Eliminar elementos del arreglo
-Agregar elementos nuevos al arreglo
-Reemplazar elementos que ya existen en el arreglo

Sintaxis básica: 

splice(indice, cantidad de elementos a eliminar, nuevo elemental, nuevoelemento2, etc)

    -Indice de inicio: La posición desde donde comenzamos a eliminar elementos(primer numero dentro del paréntesis)
    -Cantidad de elementos a eliminar: número de elementos a borrar (segundo número del paréntesis)
    -Elemento a agregar: Los nuevos elementos que se agregan al arreglo (tercer elemento del parentesis)

*/

let mesesDelAño = ["Enero", "Febrero", "Agosto", "Diciembre"];

console.log("Este e nuestro arreglo de los meses del año: ", mesesDelAño);

//Eliminar y agregar datos usando splice

let mesesBorrados = mesesDelAño.splice(2, 2, "Abril", "Mayo");
console.log("Este es el nuevo arreglo con los meses borrados: ", mesesDelAño);

//Agregar elementos sin borrar nada arreglo
let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

diasSemana.splice(2, 0, "Sábado", "Domingo");

console.log("Los nuevos días de la semana son: ", diasSemana);

//Metodos Accesores

var ensalada = [
  "jitomate ",
  "zanahoria ",
  "lechuga ",
  "chicharos ",
  "cebolla ",
];

//length(): Nos permite saber el npumero de elementos o longitud del arreglo

console.log("Tenemos estos elementos en el arreglo ensalada", ensalada.length);

//join(): Nos permite unir los elementos del arreglo con una cadena de texto
console.log("Esta es una feliensalda: ", ensalada.join("feli"));

//concat(): Nos permite unir dos o mas arrays en uno solo. Devuelce un nuevo arreglo con los elementos de los otros arreglos

let dulces = [
  "Galletas",
  "Cheetos",
  "Glorias",
  "Gansitos",
  "Picafresas",
  "Galletas",
  "Tamborines",
  "Galletas",
];

let mezcla = ensalada.concat(dulces);
console.log("Esta es mi mezcla: ", mezcla);

//indexOf: Nos permite saber la posicion de un elemento dentro del arreglo

console.log(
  "La posicion de los Chetoos de mi arreglo dulces: ",
  dulces.indexOf("Cheetos")
);

//lastindexOf(): Nos permite saber la última posición de un elemento determinado dentro del arreglo

console.log(
  "La última posición de las galletas es: ",
  dulces.lastIndexOf("Galletas")
);

//toString
//valueOf: valor de
console.log(dulces.valueOf());
//includes

//toString(): Nos permite convertir el array en una cadena de texto
console.log(mezcla.toString());

//valueOf():Nos permite devolver el valor de nuestro arreglo
console.log(mezcla.valueOf());

//includes(): Nos permite saber si un elemento existe o no dentro de un arreglo
console.log(
  "Asi podremos saber si un elemento esta dentro del arreglo",
  mezcla.includes("gansitos")
); //true
console.log(
  "Asi podremos saber si un elemento esta dentro del arreglo",
  mezcla.includes("cacahuates")
); //false

// Métodos repetidores de los arreglos:

//Filter(): Recorre el array y devuelve uno con los elmentos que cumplan condiciones (Es como un bucle).

//Filtraremos los datos del arreglo 
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Numeros del 1 al 10", numeros); 

//Filtramos los datos del arreglo
var numeros1al5 = numeros.filter(numeros => numeros <5);
console.log("Estos son los números que cumplen la condicion al ser menores que 5", numeros1al5); 

var numeros6al9 = numeros.filter (numeros => numeros>=6 && numeros<10);
console.log("Estos son los números que cumplen la condicion al ser mayores que 5", numeros6al9);

//map(): Recorrer el arreglo, modificar las elementos presentes en el y retornar esos valores modificados en uno nuevo con la misma longitud que el arreglo original

var arregloBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var tabla2 = arregloBase.map( arregloBase => arregloBase *2);
console.log("Esta es la tabla del 2", tabla2);

//Esta es una tabla que toma una variable global (funciona, pero no es lo que debemos hacer);
var tabla3 = arregloBase.map(numeros => numeros *3);
console.log("Esta es la tabla del 3", tabla3);

//Ejemplo para remover el primer numero impar de un arreglo

let listaNumeros = [3, 6, 8, 10, 12,];
let impar = 3;

listaNumeros.forEach(function(numero){ //por cada elemento del arreglo, ejecuta la funcion
    if (numero === impar){
        listaNumeros.shift();
    }
});

console.log("Estos son los elementos del array que no son impares", listaNumeros);

/*

forEach(): Este metodo nos permite llamar a una funcion "callback" especifica una vez por cada elemento sobre el que se itrea del array. Al igual que otros iteradores como map o el filter, este metodo recibe algunos parametros:

    - Elemento actual: elemento del arreglo que se va a evaluar o sobre el que se hace la iteracion
    - Indice: La posicion que tiene el elemento dentro del arreglo
    - El arreglo objetivo: el arreglo por el cual se esta haciendo esta iteracion.

ESTE METODO NO CAMBIA EL ARREGLO ORIGINAL, DEVUELVE UNO NUEVO CON LOS ELEMENTOS MODIFICADOS

////////////////// BUCLES O LOOPS ///////////////////
// Un poco distintos a los ciclos
//Utilizados para realizar tareas repetitivas, esto con condicionales

//Los bucles se siguen ejecutando hasta que sea false

En JS, los bucles o loops son utilizados para realizar tareas repetitivas con base en una condicion. Las condiciones normalmente devuelven un true o false al ser evaluadas, ademas de que el bucle continuara ejecutandose hasta que la condicion devuelva un false 

    Normalmente tenemos 3 ciclos: 
        -while (mientras)
        -Do while (hacer mientras)
        -For(para)

    Tenemos otrs sentencias más específicas: 
        -for in: sirve para recorrer un arreglo y por cada uno de los elementos de este arreglo obtenemos su POSICIÓN

        -for of: sirve para recorrer un arreglo y por cada uno de los elementos de este arreglo, obtenemos su VALOR 

        ***Con estos recoremos las posiciones y los valores


        */

/*

Sentencia WHILE (mientras)

Esta sentencia nos va a permitr recorrer un bloque de codigo SIEMPRE que se cumpla una condicion especifica, donde el resultado debe ser true

la estructura de WHILE es:

palabraReservada while (condicion que tiene que ser true) {
    //codigo a ejecutar
}


*/

// Programa que no debes usar ESTE PROGRAMA NO DETIENE EL CICLO... EXPLOTA LA COMPU
/*
let numeroParaSumar = 0;
while(numeroParaSumar <10){
    console.log("Elnúmero es menor a 10")
}
*/ 

//Contador sencillo 

let valorInicial = 0;           //Declaramos un valor incial en 0
while (valorInicial <5){        //mientras el valor inicial sea <5
    valorInicial ++;            //Ejecutamos este bloque de código (1 en 1)
    console.log(valorInicial);  //Imprimimos los resultados
}

//La sentencia while se ejecuta mientras se sigan obteniendo resultados positivos (true), y hasta que el resultado sea falso, se para. 

//Practica grupal: Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los números impares desde 1 hasta ese número

let numInicial = 1;
let valorLim = prompt("Hola, por favor ingresa un número entero positivo que sea el límite");

while(numInicial <= valorLim) {     //Mientras el npumero inicial sea menor que el límite, ejecutamos lo de abajo
    if (numInicial %2 !=0){         //Si al dividir el número inicial entre 2, el residuo es diferente de 0 (es impar)...
        console.log("Num Impar", numInicial); //Imprimimos el valor de la variable
    }

    numInicial++;    //Incrementamos de una en uno nuestra variable inicial
}
/////prueba de escritorio

/*Do while (hacer mientras o hacer hasta)

El bucle do while nos sirve para ejecutar una sentencia especififcada hasta que la condicion de aprobacion se evalua como falsa. La condicion se evalua despues de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecuta al menos una vez.

En pocas palabras, con el while preguntamos una vez, evaluamos la condicion y ejecutamos la instruccion. Con el do while, ejecutamos la instruccion al menos una vez, y luego preguntamos la condicion.

Estrutura básica de un do while

palabraReservada do {
    código a ejecutar
}
while(concición);

*/

//Ejemplo 1

let numerito = 0; // Declaramos la variable en 0 
do{ //Esto se hara...
    console.log("El número es: "+numerito);
    numerito++;
}

while (numerito <=10); //...hasta que el número sea menos o igual a 10

////---WHILE VS do WHILE ---////

console.log("While");
let numWhile = 0;       //Iniciamos en 0
while (numWhile <5){    //mientras variables sea menos a 5
    numWhile ++;        //la incrementa en 1 
    console.log(numWhile);  //la imprimo
}

console.log("do While");
let numDoWhile=0;    //iniciamos en 0
do{     //hacemos esto...
    console.log(numDoWhile);    //imprimir
    numDoWhile ++;              //aumentar en 1 
}
while (numDoWhile<5);   //...mientras número sea menor a 5


/*Sentencia FOR (para)
 
Este ciclo sirve para iterar sobre una sección de una variable. Es diferente al while por que le podemos pasar una lista de valores y ejecutar una vez por cada uno de ellos. Para esto tenemos tres elementos: 

1. El valor inicial de la variable que vamos a iterar (i=0)
2. La condición que tienes que cumplirse para que el bucle se siga ejecutando (i <5)
3. La operación que se realiza una vez que termina el bucle (i++)

Estructura básica del for:

for (valor inicial, condición, operación){

}

*/

//Ejemplo: 

console.log("FOR");
for (let i=0; i<10; i++) {
    console.log(i);
}

//let i=0 es mi valor inicial
// i<10 establece la condición para que el bucle se siga ejecutando
// i++ incrementa el valor en 1;

let animalitosDelBosque=["ardillas", "conejos", "venados", "osos", "mariposas"];

//in: posiciones EN el arreglo
for (posiciones in animalitosDelBosque){
    console.log(posiciones)
}

//of: valores DEL arreglo
for (valores of animalitosDelBosque){
    console.log(valores)
}

