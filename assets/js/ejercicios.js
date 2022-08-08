// var a = "Hola";
// var b = "Mundo";
// a+b
// 'HolaMundo'

// console.log(`Hola ${b}`);
// console.log(`${a} ${b}`);


// //EJERCICIO 01//
nombre = prompt("¿Cuál es tu nombre?");
edad = prompt("¿Cuál es tu edad");
ub = prompt("¿De dónde eres?");
pasatiempo = prompt("¿Cuál es tu pasatiempo");

function idCard() {
  return `Hola, soy ${nombre}. Tengo ${edad} años de edad. Soy de ${ub} y mi pasatiempo es ${pasatiempo}`;
}

console.log(idCard());
alert(idCard())


//EJERCICIO 02
function calcularEdadMascota(edad) {
  edadPerro = edad * 7;
  return "La edad de mi perro es de " + edadPerro;
}

console.log(calcularEdadMascota(15));
alert(calcularEdadMascota(15))

prompt("Hola soy \n Maryana");