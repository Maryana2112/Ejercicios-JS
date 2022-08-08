// 1.   Utilizar keyword function
// 2.   Nombrar nuestra función
// 3.   Utilizar () y abrir y cerrar la función {}

function myFunction(){
    // Aquí va el cuerpo de la fuunción
    // Por optimización y mejores prácticas, simplificamos las funciones lo más que se pueda (no pasarnos de 100 lineas)
    console.log("Hola Maryana, cómo estas?");
}
// myFunction();

function myName () {
    let name = "Maryanita";
    console.log(name);
}
// myName();

function scopeFunction() {
    let local = "Esto se enceuntra dentro de la función";
    console.log(local);
}

// scopeFunction();
// console.log(local); // la variable "local" no está definida debido a que esta dentro del scope (la función scopeFunction)

// var nombre = "Maryana Ximena"; //Esto es una variable global porque se puede acceder a ella directamente desde el archivo 

function globalScope() {
    console.log(nombre);
}

// globalScope();

//Scope de variables
//LET
//Scope global, local
//Hoisting: La variable no existe para nuestro interprete de JS 
// console.log(a);
// let a = "Hoisting let";


//VAR
//Scope global, local
//Hoisting: No se puede utilizar o invocar antes de declararla
// console.log(x);
// var x = "hola";

// CONST
//Scope global, local
//Hoisting: No se puede utilizar, no exisste para nuestro interprete de JS. 
// console.log(c);
// const c = "Hoisting const";



///INPUT
const avatar ="Kyoshi";

function fiuFiu(x) { // Lo que está dentro del paréntesis es un parámetro, en otras palabras, un Input. Se hace referencia al parámetro de una variable x. Los parametros pueden ser variables o aleatorios.
    console.log(x);
}

// Parámetro declarado en variable
// fiuFiu(avatar);


//Función con más de un parámetro
function dosParam(x, y) {
    console.log(x);
    console.log(y);
}

// o, en vez de poner dos console, se puede redactar así: console.log(x+y);

// Invocación con dos parametros aletorios (alateorios porque no los tengo declarados en ninguna variable)
// dosParam ("Aang", "Korra");

function tresParam(x,y,z) {
    console.log(x+y+z);
}

// tresParam("One ", "Roku ", "Asami ");



///OUTPUT

function out() {
    let x= "hola";
    return x;
}

//Podemos recibir el dato de forma directa o también podemos guardar el output en una variable y la podemos utilizar despúes 
// console.log(out());

const receive = out();

// console.log(receive);

function areaRec(b, a) {
    var resultado = b * a;
    return resultado;
}

console.log (areaRec(6, 3));

function areaTriangulo(b, a) {
    var resultado = b * a / 2;
    return resultado;
}

console.log( areaTriangulo(8, 4));

const Conejo = {
    "nombre":"Griselo",
    "edad":27,
    "color":"Gris",
    "peso":500
}

const myFunc = () => ();
