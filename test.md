## Variables

Declarar una variables es crear una variable con cierto nombre.

Inicializar una variable es asignarle un valor a dicha variable.

### Diferencia entre concatenar y sumar

Concatenar un string es convertir dos strings en uno solo (los une).
Mientras que sumar dos números, adiciona los valores para crear uno nuevo.
Ambos utilizan +

- Nombre: 'string'
- Apellido: 'string'
- Nombre de usuario: 'string'
- Edad: number
- Correo electronico: 'string'
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### Eso en Java Script

```
let nombre = 'Diego';
let apellido = 'Macias';
let username = 'diego';
let edad = 20;
let mail = 'djoromac@hotmail.com'
let isMayorDeEdad = true;
let savedMoney = 1000;
let debt = 1000;
```

### Calcular e imprimir las variables a partir de lo anterior:

```
let fullName = nombre + ' ' + apellido;
let realMoney = savedMoney - debt;
```

## Funciones

- ¿Qué es una función?

Es un bloque de código encapsulado en una única variable que puede ser llamada cuando sea necesario.

- ¿Cuándo son necesarias utilizarlas?

Cuando tenemos un bloque de código que tenemos que reutilizar múlitples veces.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

```
const myFunction = (a,b) => a + b; Parametro

myFunction(2, 4); Argumento

```

## Condicionales

- ¿Qué condicionales hay y cuáles son sus diferencias?
  IF (else, else if), Switch
  If nos permite hacer validaciones completamente distintas (Si así lo deseamos), en cada validación, o condicional. Por el contrario, en cambio, con switch, validas cada caso diferente con la misma variable o condición que definimos en el switch.

- ¿Se pueden combinar condicionales y funciones?
  Claro que por supuesto que sí. Se fomenta raza.

- Trabajar condicionales con un array y un solo condicional.

```
let suscriptionTypes = ['Free', 'Basic', 'Expert', 'ExpertDuo'];

let message = ['Solo puedes tomar los cursos gratuitos', 'Puedes tomar la mayoría de los cursos por un mes', 'Puedes tomar todos los cursos por un año', 'Tú y otra persona pueden tomar todos los cursos por un año'];

let suscription = 'ExpertDuo';

let position = sucriptionTypes.indexOf(suscription);

if (position != -1){
    console.log(message[position]);
}

```

- Trabajar condicionales con un object y un solo condicional.

```
let sucriptionTypes = {
    free: 'Solo puedes tomar los cursos gratuitos',
    basic: 'Puedes tomar la mayoría de los cursos por un mes',
    expert: 'Puedes tomar todos los cursos por un año',
    expertDuo: 'Tú y otra persona pueden tomar todos los cursos por un año',
}

let suscription = 'basic';

if (suscriptionTypes[suscription]){
    console.log(suscriptionTypes[suscription]);
}

```

## Ciclos

- ¿Qué es un ciclo?
  Es un bloque de código que se ejecutará una y otra vez hasta que se cumpla una cierta condición.

- ¿Qué tipos de ciclos existen?

While, do while, for.
For automáticamente nos obliga que pasa al inicio y al final del ciclo. (crear variable, validación, qué pasa al terminar el ciclo)

- ¿Qué es un ciclo infintio y por qué es un problema?

Cuando la validación de nuestros condicionales nunca se cumple y termina dañando la aplicación.

- ¿Puedo mezclar ciclos y condicionales?

Claro que sí, aunque los ciclos son una especie de condicionales, de igual manera se puede.

```
for (let i = 0; i > 5; i++){
    console.log(`El valor de i es: ${i};
}
while (i < 5){
    console.log(`El valor de i es: ${i}`);
    i++;
}
```

## Arrays

- ¿Qué es un array?
  Una lista de elementos.

```
const array = [ 1, 'amo a Kate', true, false];
```

- ¿Qué es un objeto?

Es una lista de elementos, pero cada elemento tiene un nombre clave.

```
const obj = {
    nombre: 'Yeyi',
    edad: 20,
    amorDeSuVida: 'Katein',
}

```

- ¿Cuándo es mejor usar objetos o arrays?

Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demas. Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
  Por supuesto que sí.

- Crea una función que pueda recibir cualquier array como parámetro y que suelte el primer elemento del array.

```
function arrayFinder = (arr) =>{
    consle.log(arr[0]);
}
```

- Crea una funcion que tome un arrray como parametro e imprima cada elemento

```
for (const element of arr){
    console.log(element);
}
```

#### IMPORTANTE

También se puede acceder a las propiedades de un objeto por medio de corchetes SIEMPRE Y CUANDOS SE PLANTEE EN UN STRING
:

```
let obj = {
    a: 1,
    b: 2,
    c: 3,
}

console.log(obj['a']);
```

- Convirtiendo un objeto en un array.

Para hacerlo, tienes que utilizar la propiedad Object.values(objeto)
