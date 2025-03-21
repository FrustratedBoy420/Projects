let score = new Number(52.34734)
console.log(score);

//Conversion To String

console.log(score.toString().length);

//Fixed

console.log(score.toFixed(2));

//Precision

console.log(score.toPrecision(3));

//Max & Min

console.table([Math.min(4, 6, 6, 77, 87, 8), Math.max(2432324, 32, 435, 2, 345, 1)]);

//Round OFF
console.log(Math.round(score));
console.log(Math.ceil(score));
console.log(Math.floor(score));

//absolute:negative to positive
console.log(Math.abs(-34));

/*Random No. Important*/

console.log(Math.random())

console.log(Math.floor((Math.random()*10)+1));

//Range Defining
let min=10
let max=20

console.log(Math.floor((Math.random()*(max-min+1))+min));
