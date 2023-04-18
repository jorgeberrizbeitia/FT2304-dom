console.log("probando");

console.log(document);

// como nosotros buscamos en el DOM elementos especificos

// .querySelector() => busca la referencia de UN SOLO elemento del DOM para poder modificarlo.

let h1DOM = document.querySelector("h1");
console.log(h1DOM);

// .innerText => el texto que hay entre la etiqueta que abre y cierra de un elemento de DOM

console.log(h1DOM.innerText);
// h1DOM.innerText = "Modificando con JS"

// eventualmente estas modificaciones no serán apenas la pagina cargue

// estas modificaciones vendran de dos tipos

// 1. por efectos automaticos que tienen un tiempo especifico:

setTimeout(() => {
  h1DOM.innerText = "Modificando luego 2 segundos";
}, 2000);

let h2DOM = document.querySelector("h2");

setInterval(() => {
  h2DOM.innerText++;
}, 1000);

// 2. por medio de Evento que realiza el usuario:

let buttonDOM = document.querySelector("button");

buttonDOM.addEventListener("click", () => {
  // que va a ocurrir cuando el usuario haga click sobre el boton
  console.log("clickando");
  h1DOM.innerText = "has clickado el boton";
  h2DOM.innerText = 0; // reinicio el timer
});

// selectores de querySelector

let titleDOM = document.querySelector("#title"); // misma notacion que css
console.log(titleDOM);
titleDOM.innerText = "patata";

let paragDOM = document.querySelector(".some-text");
paragDOM.innerText = "cambiando a patata";

// querySelectorAll => busca multiples referencia de VARIOS elemento del DOM para poder modificarlos.

let allParagDOM = document.querySelectorAll(".some-text");
console.log(allParagDOM);

// querySelector crea una lista de nodos (NodeList)
// un tipo de data que parece un array, se comporta casi como un array, pero no es un array.

allParagDOM[1].innerText = "modificando con querySelectorAll";

// NodeList tambien nos permite bucles for, for of, y el metodo forEach

allParagDOM.forEach((eachNodeDOM) => {
  console.log(eachNodeDOM);
  eachNodeDOM.innerText = "modificando con forEach";
});

// busquedas anidadas

// podemos usar querySelector para hacer busquedas en una ZONA especifica del DOM.

let allCardsDOM = document.querySelectorAll(".card");

allCardsDOM.forEach((eachCardDOM) => {
  console.log(eachCardDOM);

  // let parafInsideCardDOM = document.querySelector("p")
  let parafInsideCardDOM = eachCardDOM.querySelector("p");
  parafInsideCardDOM.innerText = "Cambios";
});

console.log(document.getElementById("title"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByTagName("h1"));

// Otras modificaciones que podemos hacer sobre los elementos de DOM

// modificar el ID

// modificar la clase

let finalThoughtDOM = document.querySelector("#final-thoughts");

console.log(finalThoughtDOM.id);


setTimeout(() => {
  finalThoughtDOM.id = "new-id";
  // los elementos de DOM/HTML solo deberian tener un id
}, 3000)

console.log(finalThoughtDOM.className)

// finalThoughtDOM.className = "new-class";
// esto no será lo correcto, reemplazamos todas las clases.
// los elementos de DOM/HTML podrian tener multiples clases.

// tenemos formas de agregar, remover y verificar las clases del elemento
// classList

finalThoughtDOM.classList.add("new-class") // añadir clase
finalThoughtDOM.classList.remove("best-practice") // remueve clase

console.log( finalThoughtDOM.classList.contains("after-footer") )
// devuelve un booleano, si la clase está incluida o no

// Investigar classList.toggle()

setTimeout(() => {
  finalThoughtDOM.classList.add("bold")
}, 3000)


//* Crear y eliminar elementos de DOM

let emptyContainerDOM = document.querySelector("#empty-container")
console.log(emptyContainerDOM)

// *crear un elemento
let newElementDOM = document.createElement("h4") 
// crea una referencia de un elemento de DOM

newElementDOM.innerText = "Primer elemento creado desde JS"

console.log(newElementDOM)
//* Añadir un elemento a la visualización
emptyContainerDOM.append(newElementDOM)

let newElementDOM2 = document.createElement("h4") 
newElementDOM2.innerText = "Segundo elemento creado desde JS"

emptyContainerDOM.append(newElementDOM2)


//* remover => .remove()
setTimeout(() => {
  newElementDOM.remove() // quitarlo de la visualización
  // document.body.remove()
}, 3000)

setTimeout(() => {
  newElementDOM2.remove()
  emptyContainerDOM.append(newElementDOM)
  emptyContainerDOM.append(newElementDOM2)
}, 6000)



// innerText vs innerHTML
let footerDOM = document.querySelector("#footer")

console.log(footerDOM)
console.log(footerDOM.innerText)
// innerText es SOLO el contendio texto (string) dentro de las etiquetas que abren y cierran

console.log(footerDOM.innerHTML)
// innerHTML es una version stringificada de la estructura que exista dentro de las etiquetas que abren y cierran
let newStr = "patata"
footerDOM.innerHTML = `<h1 id="last-title"> <span> ${newStr} </span> </h1>`

console.log(footerDOM.innerHTML)


