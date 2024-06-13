 /* 1. Js Short Program is "No Code"
 2. Global Execution Context is Created for Empty File
 3. js engine still do it working(Create Global Execution Context)
 4. Go to Console Type Window (What is window? window is create by global object) - Big Object inside lot of functions and Methods This functions and method create by js engine into Global space
 5. Js Engine Also Create "this" keyword (In the Global level "this" point to window object) */

var a = 4; // this is global space

function b() {  // this function is global space
    var c = 5;  // inside this variable not global space
}

console.log(window.a); // 4
console.log(a); // 4
// console.log(c); //  ReferenceError c is not defined
console.log(this.a); // 4

//this = reference to the object where THIS is used
//           (the object depends on the immediate context)
//           person.name = this.name

// const person1 = {
//     name: "Veeramani",
//     favFood: 'chicken65',
//     sayHello: () => {console.log(`Hi! I am ${this.name}`)},
//     eat: () => {console.log(`${this.name} is eating ${this.favFood}`)},
// }
// person1.eat();