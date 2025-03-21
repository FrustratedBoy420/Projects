let sayian=["Goku","Vegeta","Broly"];
let god=["Berrus","King Kai","Shin","Whis"];
//concate
let characters=sayian.concat(god);//Push will not work to add another just after the another array
console.log(characters);


let character_1=[...sayian,...god]//another and more efficient way to add 

console.log(character_1);

let arr=[1,2,3,4,[5,6,[34,56,[1,2,3]]],23,[2,5]]

console.log(arr);

console.log(arr.flat(2));

//conversion string to array
let score10=1200;
let score12=1400;
let score13=1600;
console.log(Array.isArray("Mridul"));
console.log(Array.from({name:"Mridul"}));
console.log(Array.of("Mridul","shaktiman"));
console.log(Array.of(score10,score12,score13));




