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

//Ejemplo de jS asíncrono 
console.log("Inicio de asincrono");
function dos(){
    setTimeout(function(){
        console.log("Dos");
    },2000)
}
function uno(){
    setTimeout(function(){
        console.log("Uno")
    },0);
    dos();
    console.log("Tres");
}
uno();
console.log("Fin de Asincrono");

/*
Ejemplos de tareas asincronas

- Fetch a una URL para obtener un archivo JSON
- Tareas programadas con setTimeout
- Spotify, al momento de reproducir un .mp3



Mecanismos asincronos en JAVASCRIPT

Para controlar la asincronia en JS, podemos usar alguno de estos mecanismos:

    - Callbacks
    - Promises
    - Async/Await


Promesas (promises)

Como su nombre lo indica, es algo que de principio no sabemos si se cumplira, por que pueden pasar muchas cosas. La gran ventaja de usar promesas, es poder usar una sola funcion que haga todo el trabajo, que el codigo sea mas estilizado y poder manejar de mejor forma los dos escenarios posibles: si la promesa se cumple, o no.

Una promesa es el resultado de la operacion asincrona, este resultado es en forma de objeto el cual puede estar disponible AHORA o en el FUTURO. Aunque esta operacion puede finalizar exitosamente o fallar, la promesa nos permite saber cuando una operacion finaliza, independientemente del resultado.

Las promesas tienen 3 estados posibles:
    - Pending: Estado inicial, cuando se crea la promesa. 
    - Fullfilled: Cuando la operacion asincrona se completa con exito (resolve)
    - Rejected: Cuando la operacion asincrona falla (reject)

    Ejemplo archivos de Felipe

        - Pending: Cuando Felipe promete enviar los archivos (o cuando nos deja en visto)
        - Fullfilled: Cuando Felipe los envia
        - Rejected: Cuando no los envia o cuando avisa que no los puede enviar.

    Ejemplo de los archivos de Felipe
        - then (funcion archivosEnviados)
        - catch (funcion felipeNoCumple)
        - finally (funcion promesaTerminada)

Nuestras promesas tienen algunos métodos:
    -then(function resolve): Ejecuta la función resolve cuando la promesa se cumple. 
    -catch(function reject): Ejecuta la función reject cuando la promesa no se cumple.

    -then(function resolve, function reject): Ejecutar las dos funciones resolve y reject
    -finally(funtion end): Ejecutar la funcion enda si se cumple o no la promesa
*/

//ejemplo de promesa para sabler el nombre
let nombre = "Maryana";

const prom = new Promise((resolve, reject) =>{
    if(nombre !== "Maryana") reject("¡¡ERROR!! Te equivocaste amigue, tienes que ser Maryana");
    resolve(nombre);
}
);
console.log(prom);

//Promesa de AMOR donde nos dejan en visto un ratito y luego nos aceptan la invitación

var promAmor = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Si quiero salir contigo, te amo");
    },5000);
});

promAmor.then(function(valor){
    console.log(valor);
});
console.log(promAmor);

//Ejemplo de promesa para ir por unas tortas
let decision = "No";

const promTor = new Promise((resolve, reject)=>{
    if(decision !=="Si") reject("No no me gustas, no quiero ir contigo por tortas");
    resolve(decision);
})
console.log(promTor);

/* Fetch API

Es el nombre de una nueva API (nativa) para JS con la cual podemos realizar peticions HTTP asincronas utilizando promesas, y de forma que el codigo sea un poco mas sencillo y legible. La forma de utilizar una peticion fetch es sencilla, solo debemos llamar a fetch y pasarle por parametro una URL de la peticion a realizar

const solicitud = fetch('la url que vamos a consultar')
Guardo en una constante llamada solicitud, la consulta que hago a una pagina externa

*/

fetch ('https://pokeapi.co/api/v2/pokemon/ditto') //realizamos la petición de la API Pokemon. 
    .then(datos =>{ //cuando te conectes al servidor, ejecutamos la siguiente función
        return datos.json(); //traeme todos los pokemon, y como se que los traes en texto, yo los convierto a formato JSON
    })

    .then(info => { //Cuando la promesa se resuelve, entonces ejecutamos esta función. Usamos el método then para obtener la respuesta de la promesa y guardarla en una variable llamada info. Gracias a esta variable, puedo almacenar la info de mi pokemon y sacar de ahí los datos que necesite
        console.log("El nombre de nuestro Pokemon es: ",
        info.name, " y su número es: ", info.id);
    });

    /*

    Cuando hablamos de las API fetch, también debemos de hablar de los endpoints, que son las direcciones de las peticiones que se realiza.

    por ejemplo, en la URL https://pokeapi.co/api/v2/pokemon/ditto, nosotros conectamos a la pokeapi, buscamos dentro de la categoría pokemon, y traemos la información de Ditto. En este caso, ditto es nuestro end point.

    */

    function fetchPokemon(id){ //creamos una funcion que recibe un parametro llamado id
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`) 
            //la peticion de la URL, donde usamos el parametro id para la información del pokemon
        .then(respuesta=>respuesta.json(1)) // almacenamos la respuesta en un formato .json
        .then(dato=>console.log(dato)) //
    }
    fetchPokemon(1);

