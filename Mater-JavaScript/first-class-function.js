// What is an Anonymous Function? That of a function without a name Anonymous Function

// Function Statement also known as Function Declaration
function x() {
    console.log('x Called');
}
x();

// Function Expression - function act like a value - not hoisting
var y = function (param1, param2) {
    console.log('y called');
}
y(1,3);

//Anonymous Function
// function () {

// }

// Named Function Expression
var z = function abc() {
    console.log('z called');
    console.log(abc);

}
z();
// abc();

// Difference between Parameters - local variable in side itself function & Arguments - passing the value ?