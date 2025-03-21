let myarr = [1, 2, 3, 4, 5]
console.log(myarr);

console.log(myarr.length);

//conversion To String
let st=myarr.join();
console.log(st,typeof st);

//Push&Pop

myarr.push(6)

console.log(myarr);

myarr.push(7)

console.log(myarr);

myarr.pop(25)

console.log(myarr);

myarr.pop()

console.log(myarr);

//shift&Unshift

console.log("Shift&Unshift")

myarr.unshift(0)

console.log(myarr);

myarr.unshift(-1)

console.log(myarr);

myarr.shift()

console.log(myarr);

myarr.shift(2)

console.log(myarr);

// Slice & Splice

console.log("Slice & Splice");

let arr = myarr.slice(0, 4)

console.log(arr);

console.log(myarr);

let arr2 = myarr.splice(0, 4)

console.log(arr2);

console.log(myarr);

let arr3 = myarr.slice(0, 4)

console.log(arr3);
