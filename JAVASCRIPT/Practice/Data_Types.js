let score = 33
let scorevalue = 100.3
console.table([typeof score, typeof scorevalue]);
const bignum = 2432534345346366654654n
console.log(typeof bignum);
//symbols
let sym = Symbol(1234)
let sym1 = Symbol(1234)
console.log(sym===sym1);


// Non-Primitive Data-Types or Reference

// 1.Array 2.Object 3.Function

//Array

const arr = ["Mridul", "Ayushmaan", "Akash", "Aakarsh"]

console.log(arr);

// Object

let myobj = {
    name: "Mridul",
    age: 19,
}

console.log(myobj);

//function

const fact = function () {
    console.log("Hello world!");
}

console.log();
//Null
let no = null
//Undefined
let ud = undefined

console.log(no);


// TYPE of 

console.table([typeof arr, typeof myobj, typeof fact, typeof ud, typeof no])



