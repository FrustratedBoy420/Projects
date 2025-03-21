let mysym = Symbol[233]
let obj1 = {
    name: "Mridul",
    Age: 20,
    isloggedIn: false,
    Course: "B.tech",
    [mysym]: "1234"
}
let obj2 = {
    name: "Mrl",
    Age: 20,
    isloggedIn: false,
    Course: "B.tech",
    [mysym]: "1224"
}
console.log(obj1.Age);
console.log(obj1.name);
console.log(obj1["Course"]);

//FUUNCTION

obj1.greeting = function () {
    console.log("hello guys Chai Pee lo");
}
console.log(obj1);
obj1.greeting();
console.log(obj1);

//Concate

let a = { "ds": "a", "def": "b" };
let b = { "ds": "a", "def": "b" };
let c = { "ds": "a", "def": "b" };

let merger = Object.assign({}, a, b, c)
let merer_2 = { ...a, ...b, ...c }
console.log(merger);

//Accessing

console.log((Object.keys(merger)));
console.log((Object.values(merger)));
console.log((Object.entries(merger)));
console.log((merger.hasOwnProperty(1)));


//Destructure

let { def:mj} = merer_2;
console.log(mj);
