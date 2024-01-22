// getName(); // Hello JavaScript
// console.log(x); // This line output is undefined
// console.log(getName); // function itself

var x = 4; // Remove This variable name show output is x is not defined.

// Arrow Function :
// var getName = () => {
//     console.log("Hello JavaScript"); // getName is not a function(It is a another Variable name)  
// } 

function getName() {
    console.log("Hello JavaScript");
}

getName(); // Hello JavaScript
console.log(x); // 4
console.log(getName); // function itself