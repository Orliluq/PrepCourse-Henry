var listaDeCompras = [];
listaDeCompras[3] = "Tomates";
listaDeCompras[1] = "Lechuga";

console.log(listaDeCompras.length);
// listaDeCompras[1];
// var elementoDelArray = listaDeCompras[1];
// console.log(elementoDelArray);

// Lista de compras
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

// Ver lista de compras
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

// Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);

// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);
// POP y SHIFT
colores.shift();
colores.pop();

console.log(colores);
// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);
// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);
// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);
// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);
// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )
// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);

// var palabra = "Henry";
// var palabraSeparada = palabra.split("");
// palabraSeparada.pop();
// palabraSeparada.push("y");
// console.log(palabraSeparada);
// var palabraArreglada = palabraSeparada.join("");
// console.log(palabraArreglada);

var numeros = [1, 2, 3, 4];
// numeros.forEach(num) => console.log(num);
numeros.forEach((num) => {
    if (num === 3) {
        console.log(num);
    }
});

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

function encontrarLetraP(string) {
    var letras = string.split("");

    for (let i = 0; i < letras.length; i++) {
        console.log("Si contiene a P");
    }
}

encontrarLetraP("JavaScript");
encontrarLetraP("Henry");


// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr);

var arr = [];
while (arr.length < 5) {
   arr.push('BOOM');
}
console.log(arr);

var arr = [];
var n = 1;

while(n < 3) {
    arr.push(Math.random());
}


