// What is an Anonymous Function? That of a function without a name Anonymous Function

// Function Statement also known as Function Declaration
function x() {
    console.log('x Called');
}
x();

// Function Expression - function act like a value - not hoisting (We Can Assign a Function to it)
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
    console.log(abc);   // ** Function ItSelf and this local variable

}
z();
// ! abc(); -- ReferenceError: abc is not defined, not global variable

// Difference between Parameters(identifier or lebel) - local variable in side itself function & Arguments - passing the value ?

// First Class Function(Assigning Functions to Variables ----- Functions can be passed as arguments to other functions ----- can be returned out of another functions(Returning Functions from Functions)) - The Ability to use function as value is known as first class function --- First Class Citizen

// ! Assign Function to a Variable

const hello = function () {
    console.log("hello!");
}

hello();  // ** ----- Reference to function saved as a variable can be invoked

// ! Pass Function as Argument
function sayHi() {
    return "Hi !";
}

function greetPerson(greeting, name) {
    console.log(greeting() + name);
}

greetPerson(sayHi, 'John');  // ** ------ Pass Function as Argument $ invoked inside function it is being called from

// !Return A Function
function sayGoodMorning() {
    return function () {
        console.log('Good Morning');
    }
}

const greet = sayGoodMorning();
greet();

sayGoodMorning()();