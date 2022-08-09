/*
Cuando hablamos del DOM, estamos habalndo de dos representaciones de nuestra página: una de ellas en la representación del código fuente (la estructura de HTML) y la otra es la representación visual (la estructura del DOM)

---NODOS---
Es la unidad más básica que puede ser modificada, que puede ser una etiqueta o un nodo de texto, ejmp:
    
    Document: El nodo raís a partir del cual se derivan los demas nodos. Este objeto es el que nos permite acceder a todos los elementos del DOM. Todos los nodos derivan del document. 

    Element: Son los nodos definidos por la etiqueta html. Por ejemplo, una etiqueta <div></div>, <h1></h1>, etc. 

        <h1> // Padre
            HOLA GENERATION //hijito o no de texto
        </h1>

    Text: El texto que estamos dentro de un element o etiqueta. 

    Atributos: los atribujos de las etiquetas definen nodos. (en JS no los vemos tal cual como nodos, si no como información asociada al nodo del tipo element.)

    Comentarios y otros elementos: los comentarios y otros elementos (como las declaraciones doctype) en la cabecera de los documentos HTML, también son nodos. 

Con JavaScript podemos cambiar: 
    -Todos los elementos HTML de una página
    -Todos los atributos de la página WEB
    -Todos los etilos CSS de la página web
    -Eliminar elementos y atributos
    -Reaccionar a todos los eventos HTML que existan en lapágina
    -Crear nuevos eventos HTML en la página

SELECCIONAR ELEMENTOS
Sirven para realizar busquedas de elementos dentro del documento:
    - getElementByID("IDElemento"): Buscar elementos por el ID
    - getElementByClassName("nombreClase"): Busca elementos por el nombre de la clase
    - getElementByTagName("porEtiqueta"): Buscar un elemento por su etiqueta
    - getElementsByName(): Busca un elemento por su nombre *Ya casi no es usado

Métodos modernos:
    - querySelector(): Buscar el PRIMER elemento que coincida con el selector
    - querySlectorAll(): Busca TODOS los elementos que coincidan con el selector
*/

// let prrf = "Soy Maryana y...";
// let prrf2 = document.getElementById("parrafo");

// *****const cambioDeParrafo = document.getElementById("parrafo2");
// innerHTML = "Quiero chilaquiles verdes";

//getElementByID()
const elementID = document.getElementById('prrf4');

//getElementByClassName()
const elementClass = document.getElementsByClassName("parrafitos");

//getElementByTagName y ByName
const elementTag = document.getElementsByTagName("p");
const elementName = document.getElementsByName("no. 1");

//querySelector
const querySelector = document.querySelector('#prrf3')
const querySelector2 = document.querySelector('.parrafitos');

//querySelectorAll()
const querySelectorAll = document.querySelector("parrafitos");

/*
CREAR ELEMENTOS
    - createElement(): Crea un elemento EN MEMORIA del tipo elemnt(<div></div>)
    - createComment(): Crea un nodo del tipo comentario
    - createTetNode(): Crea un nodo del tipo texto

    - cloneNode(): Clonar un elemento
    -Investigar los métodos para añadir, modificar y eliminar atributos
*/

//createElement()
const cDiv = document.createElement("div");
const cImg = document.createElement("img");

//createTextNode
const cTextNode = document.createTextNode("Hola a todes, me gustan las tortas ahogadas");

//cloneNode()
const prrfOri = document.createElement("p");
prrfOri.textContent = "Soy el parrafo original, cloname";   //textContent: llena la variable con texto, especificando la etiqueta en la creación del elemento

const prrfClone = prrfOri.cloneNode(true);  //Sin la palabra reservada true, únicamente se va a aclonar la etiqueta p, sin sus nodos contenidos. Con true, clona toda la estructura. 

const encabOri = document.getElementById("encab");

const encabClone1 = encabOri.cloneNode();
const encabClone2 = encab.cloneNode(true);

//Metodos para añadir, modificar y eliminar atributos

/*


*/

//textContent
encab.textContent;
prrf1.textContent;
prrf3.textContent;

//innerHTML
prrf1.innerHTML = ("Lo siento, ahora yo soy el texto del parrago 1")

//Ejemplo del PlayStation
//nombreProducto.innerHTML = ("PlayStation 5");
//precioProducto.innerHTML = ("15000");
//imagenProducto.innerHTML = ("imagen.jpg")

//outerHTML
encab.outerHTML;
prrf1.outerHTML;

/*
INSERTAR ELEMENTOS
Son métodos que nos permiten poner la información que estaba en una memoria virtual de forma visual en nuestro documento

    - .appendChild()
    - .remove()
    - .removeChild(investigar)
    - .replaceChild(investigar)
*/

//appendChild()
const appendImg = document.createElement("img");
appendImg.src= "https://cdns-images.dzcdn.net/images/artist/098ea0886f463cf48b75d2af855ad3b9/500x500.jpg"
;
appendImg.alt="Imagen Sorpresa";

document.body.appendChild(appendImg);

const appenParrafo = document.createElement("p");
appenParrafo.innerHTML = ("Hola soy parrafo hijo");

document.body.appendChild(appenParrafo);

//Explicación: Primero creamos un elemento (etiqueta) Llamada img (existe de forma virtual), le agregamos atributos como src y alt, y por ultimo conectamos al DOM usando el apprendChild sobre nuestro document.body

//Investigar remover child, replacer child y otras formas de agregarlos (antes, adyacente, a un lado, etc.).

//.remove
const borrar = document.querySelector("#prrf4"); 
borrar.remove();

const borrarRefactorizado = document.querySelector("#prrf2").remove();

// MODIFICACIÓN DE ESTILOS (EN LINEA)

document.getElementById("temerarios").style.color = "#FF0000";
document.getElementById("temerarios").style.fontSize = "50px";
document.getElementById("temerarios").style.fontFamily = "Arial";
document.getElementById("temerarios").style.fontWeight = "bold";
document.getElementById("temerarios").style.fontStyle= "italic";
document.getElementById("temerarios").style.textDecoration = "underline";
document.getElementById("temerarios").style.textAlign = "center";
document.getElementById("temerarios").style.textTransform = "uppercase";
document.getElementById("temerarios").style.letterSpacing = "2px";
document.getElementById("temerarios").style.wordSpacing = "2px";

/*

EVENTOS

Una forma mucho mas facil de modificar el contenido de un elemento es usando eventos. Los eventos son acciones que se puedne realizar en un elemento, para modificar los valores de los atributos, estilos, etc.

Algunos de los eventos mas comunes son:

- Cuando un usuario hace clic con el raton
- Cuando se ha cargado una pagina web
- Cuando se ha cargado una imagen
- Cuando el raton se mueve sobre un elemento
- Cuando se cambia un campo de entrada
- Cuando se envia un formualrio HTML
- Cuando un usuario pulsa una tecla


- Evento mediante HTMl (mala practica)
    Es la forma más sencilla pero menos recomnedable, porque se ejecutan desde el HTML y no queremos mezclar JS con HTML.

        <button onclick="alert('Hola, gracias por saludar')"">SALUDAR </button>

- Eventos mediante el DOM (HTML + JS) (mas o menos una mala practica)
     Es una forma alternativa de gestionar eventos, creando HTML desde la API DOM (Pero es una trampa porque seguimos usando HTML para el uso del boton)

    En lugar de agregar el atributo onclick al boton, lo localizamos mediante un querySelector. Luego le asignamos una funcion con el codigo deseado, en este caso, una alerta.

        const button = document.querySelector(".botonSaludo");
        button.onclick =
        function(){
            alert("Hola desde el JS")
        }

- EventListener (buena practica)
    Permite agregar una escucha del evento indicado (primer parametro), y en elcaso de que ocurra, se ejecuta la funcion asociada indicada (segundo parametro)

*/

// Esto todavía es considerado una mala práctica debido a que seguimos utilizando HTML. Es como un hibrído entre HTML y JS :( 

const buttonEL = document.querySelector(".botonSaludo");
buttonEL.addEventListener("click", function(){
    alert("Hola, saludos con un Event listener");
});

