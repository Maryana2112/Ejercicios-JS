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

Métodos 

*/

// let prrf = "Soy Maryana y...";
// let prrf2 = document.getElementById("parrafo");

const cambioDeParrafo = document.getElementById("parrafo2");
innerHTML = "Quiero chilaquiles verdes";
