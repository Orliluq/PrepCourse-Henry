//AND
function mayorYMenorYPar(num) {
	if( num > 5 && num < 10  && num  % 2 === 0 ) console.log(true);
	else console.log(false);
};
mayorYMenorYPar(7);
mayorYMenorYPar(8); 

// OR
function operadorOr(str) {
    if (str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false);
 }
 operadorOr('Henry');
 operadorOr('Javascript');
 operadorOr('H');

 // NOT
function negacion(permiso) {
    if (permiso) console.log('Tiene permiso');
 }
 negacion(true);
 negacion(false);

 funcion condicionCompleja(num){
    if(num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
 }

 condicionCompleja(10);
 condicionCompleja(6);
 condicionCompleja(3);
 condicionCompleja(5);
 
 funcion Boolean()

 1           // true
0           // false
-1          // true
true        // true
false       // false
'string'    // true
null        // false
undefined   // false
[]          // true
