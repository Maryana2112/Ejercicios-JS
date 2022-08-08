// const dinero = false;
// const hambre = true;

// // alert(dinero == hambre);    //false
// // alert(dinero || hambre);    //true

// //AND: Todas las condiciones deben ser true para obtener un resultado positivo
// //true && true => true
// //true && false => false
// //false && false => false

// //OR: Solo una condición debe ser true
// //true || true = true
// //true || false = true
// //false|| false = false

// //NOT: Es la negación de la condición
// // tru => salse false =>true


// // COMPARACIÓN
// let hora1 = 8;

// if (hora1 == 8) {
// 	alert("Buen dia");
// }

// // NOT
// let hora2 = 3;

// if (hora2 != 8) {
// 	alert("Buen dia");
// }

// //IF, ELSE 
// var hungry = false;

// if (hungry == true){
//     alert("Tengo mal del porky")
// } else {
//     alert("Two mimir");

// }

// //menos o igual
// var hour = 18;
// if (hungry <= 18){
//     alert("Good day")
// } else {
//     alert("tardes, ya");

// }

// //mayor o igual
// var hour = 17;
// if (hungry >= 18){
//     alert("Crear cuenta")
// } else {
//     alert("bye bye");

// }

// //combinación
// var tiempo = 5;
// if (tiempo <= 7 && tiempo > 0){
//     alert("Buenas madrugadas");
// } else {
//     alert("Que tenga un buend día");
// }

// var hora = 12;

// if (hora > 0) {

// 	if (hora <= 7) {
//     	alert("Buenas madrugadas");
//     } else {
//     	alert("Que tenga un buen dia");
//     }
    
// } else {

// 	alert("Su hora no existe");
    
// }

// // IF tras IF 
// var money = prompt("¿Cuál es tu presupuesto?");

// if(money <=10) {
//         alert("Concha de vainilla y 4 picafresas");
// }   else if (money <=50) {
//         alert("Tacos al vaporwave y una agua de horchata");
// }   else if (money <=129) {
//         alert("Piza de liru sisa con piña combo fiesta");
// }   else if (money <= 500) {
//     alert("Bonels + aros de cebolla + papas gajo + tarro");
// }   else {
//         alert("Compra tres casas, renta dos y vive en una");
// }


// EJERCICIO 01 Número par e impar
var num = prompt("Digite un número");
if(num % 2 == 0) {
    alert ("El número Sí es par");
}   else {
        alert("El número NO es par");
}


//EJERCICIO 02 Edad
var age = prompt("Año de nacimiento");
let act = 2022;

if (act - age >= 18) {
    alert ("Bienvenido");
} else {
    alert ("Bye bye");
}


