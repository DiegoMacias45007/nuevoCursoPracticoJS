// Un poco de información de las propiedades generales de un array

let num = [1, 2, 3];

num.push (4) // [1, 2, 3, 4] Agrega un valor al final del array
console.log(num)

num.pop() // [1, 2, 3] Elimina el ultimo valor del array
console.log(num)

num.shift() // Elimina el primer valor del array
console.log(num)

num.unshift(1) // Agrega el valor que especifiques como argumento al inicio del array
console.log(num)

let string = ['a', 'b'];
console.log(string);

string.indexOf('b'); // Presenta la posicion en el array del valor presentado en el argumento

string.includes('c'); // Verifica si existe en el array el argumento especificado y arroja el boolean necesario
