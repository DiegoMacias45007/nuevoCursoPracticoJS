// query selector funciona para todas las etiquetas del HTML que hayas planteado, como si fuera css y se tienen que especificar con string

const h1 = document.querySelector("h1");

const parrafito = document.querySelector(".parrafito");

const pid = document.querySelector("#pid");

const input = document.querySelector('input');

// puedes conseguir las etiquetas de HTML por medio de getElementByClassName, getElementByID


// Con get atribute nos ayuda a leer los atributos de un elemento, y con set atribute podemos cambiar el atributo y su valor

console.log(h1.getAttribute("class"));

h1.setAttribute('class', 'rojo');

// Existe un atributo que funciona para trabajar con solo las clases: ClassList

h1.classList.add('verde'); // Agrega una clase sin eliminar la que tenia anteriormente

h1.classList.remove('verde'); // Elimina la clase que escribas

// h1.classList.toggle() Permite activar y desactivar clases

// h1.classList.contains('verde') Te suelta un boolean de si contiene la clase indicada

// Con .value podemos cambiar el valor del elemento, y asi cualquier atributo de la etiqueta: .placeholder

input.value = 456;

// document.createElement nos ayuda a crear el elemento HTML que nosotros queramos

console.log(document.createElement('span'));

const img = document.createElement('img');

img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');

console.log(img);

pid.append(img); // Agrega un elemento a la etiqueta seleccionada, no lo borra, al igual que appendChild
