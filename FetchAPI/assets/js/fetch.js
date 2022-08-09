/*

Dentro de los navegadores tenemos 2 tipos de APIs:

- APIs nativas: Como el DOM que es el API que nos permite acceder al codigo HTML de nuestros documentos a traves de JavaScript.

- APIs externas: Como las APIs de Twitter que nos permite obtener los ultimos tweets del usuario, o la de GitHub que nos permite obtener la informacion de los repositorios de una cuenta.


Ejemplos de APIs WEB

    - DOM
    - XMLHttpRequest: Peticiones al servidor
    - fetch: API nos permite hacer peticiones al servidor
    - sessionStorage
    - localStorage


FETCH API

Asincronimo (Cuando le pido una torta al señor de las tortas con anticipación)

JavaScript usa un modelo asincrono y no bloqueaste, con un loop de eventos implementado en un solo hilo.
    -Single Thread
    -Operaciones de entrada y salida
    -Bloqueo
    -No bloqueo

    Ejemplo de aeropuerto   

        -Pista de aterrizaje = hilo o thread
        -Input = cuando un avion va aterrizar
        -Output = cuando el avion tiene que despegar
        -Manejador de eventos = la torre de control

Gracias al asincronismo, vamos a tener una pista de aterrizaje liberada, porque no vamos a poder aterrizar dos aviones al mismo tiempo, con lo que mantenemos un flujo constante de trabajo.

Sincronimo(Cuando le pido una torta al seño de las tortas al momento y con urgencia).

*/

//Ejemplo de JavaScript Sincrono
console.log("Inicio Sincrono");     //1
function dosSincrono(){
    console.log("Dos");
}

function unoSincrono(){
    console.log("Uno");             //2
    dosSincrono();                  //3
    console.log("Tres");            //4
}
unoSincrono();
console.log("Fin de Sincrono");     //5

//Cual será la salida de este código?


