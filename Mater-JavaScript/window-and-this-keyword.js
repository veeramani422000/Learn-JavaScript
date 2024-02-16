 /* 1. Js Short Program is "No Code"
 2. Global Execution Context is Created for Empty File
 3. js engine still do it working(Create Global Execution Context)
 4. Go to Console Type Window (What is window? window is create by global object) - Big Object inside lot of functions and Methods This functions and method create by js engine into Globle space
 5. Js Engine Also Create "this" keyword (In the Global level "this" point to window object) */

var a = 4; // this is global space

function b() {  // this function is global space
    var c = 5;  // inside this variable not global space
}

console.log(window.a); // 4
console.log(a); // 4
// console.log(c); //  ReferenceError c is not defined
console.log(this.a); // 4