// Mejores prácticas 

//camelCase:    Es utilizar mayúsculas en la mitad de nuestras variables, por ejemplo, variableTriángulo, miNombre, miEdad, miDirección 

// Palabras reservadas:     No usar palabras reservadas para declarar una variable. Algunas de ellas son: if, return, true, false, for, while, let, var, etc...

/*
var while;
var null ;
var if;
var true;
var false;
var var;
var const;
var let;
*/


// Seguir standard personal

//Pueden contener números, letras, guion bajo, simbolo de dolar. 

var a; 
var a21;
var a_Maryana
var a$Maryana

// Las variables anteriores también son una ejemplificación de variables undefined

//Declaración de variables
//Número
var edad=   23;
var altura= 172;
var pie=    27; 
var peso=   120; 

//Type boolean;
var sadness=        true;
var hambre=         false;
var ceguera=        false;
var ganasDeLlorar=  true;

//Type String;
var name=   "Maryana";
var dir=    'Guadalajara';
var nac=    `Mexicana`

//Type null
var ganasDeVivir=   null;
var nineros=        null;
var briAmonestaciones=  null;

//Variables declaradas con un mismo valor
var x, y, z=    21;
// Variables undefined
var xx, yy, zz;

//Variables declaradas con un mismo valor siguiendo orden de derecha a izquierda
var uno=    dos=    tres=   21;

// Defined:     El amor que le damos a nuestro crush
// Undefined:   El amor que nos tiene nuestro crush
//Null:         El amor que nos decía tener nuestro ex 

//Variables undefined
var queso,  cereal, carnes, jamón,  panIntegral,    frutasYVerduras,    leche; 

//typeOf(): Nos indica qué tipo de dato es nuestra variable 

var a = 2; 
var b = "2";
var c = true;
var d = null;

typeof(a);
// 'number'

typeof(b);
// 'string'

typeof(c);
// 'boolean'

typeof(d);
// 'object' <Porque es un objeto de JavaScript>

//isNaN() es una función que nos permite verificar si un dato es o no es un número

//Nan es tal cual un tipo de dato en JavaScript
isNaN(NaN);
//true

var e = NaN;
//true
typeof(e);
//number

//tenemos la primer forma en la que se escribian las variables en javascript:
var a = 1;

//luego tenermos una nueva forma de declararlas, con otras dos palabras clave: 
let a = 1;
const a = 1;  // La variable const es constante. Es una variable con un dato que no va a cambiar. Estas variables no se pueden modificar hasta que se reincia el programa. Solo se utiliza cuando se sabe que este valor ya no va a cambiar. 

//Arrays
const carros = ["BMW", "Volvo", "Mercedes", "Ford"];

const carritoCompras = ["Leche", "Tortillas", "Mango", "Maruchan", "Aguacate", "Sandia", "Queso", "Sabritas", "Oreo", "Piña", "Chachitos", "Pollo", "Jamon", "Harina", "Mantequilla", "Chocolate", "Wafflera Plaza Sesamo", "Nutella", "Fresas", "Servilletas", "Xbox Series X"];

// dentro de arrays se puede poner todo tipo de datos 

const combinación = [1, "Hola", null, "5"];

// Para llamar elementos dentro del array, tenemos que tener en cuenta que la sintaxis inicia en el index cero...

carros[0];




