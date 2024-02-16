//! JAVASCRIPT
/*Javascript is dynamic programming language that's used for web development,in web application,for game development,and lots more.
    It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.
    Javascript is a cross-platform,object-oriented scripting language used to make webpages interactive.
    Javascript is case-sensitive.Javascript uses the unicode character set.
    In javascript,instructions are called statements and are separated by semicolons(;).
    It is considered best practice to always write a semicolon after a statement,it reduces the chances of bugs getting into the code.*/

// !COMMENTS
// A one-line comment
/*This is a longer,
 *multi-line comment
 */

// ! JAVASCRIPT FUNDAMENTALS

/*
                                                1.Variables
                                                2.constants
                                                3.Data types
                                                4.Objects
                                                5.Arrays
                                                6.Function
                                                7.Operators
                                                8.Conditional statements
                                                9.Loops
                                                10.Switch case*/

// ! JAVASCRIPT DATA TYPES

/*              // !Primitive Data Type
                        1.String - "AnyText"
                        2.Number/Integer - 123.45
                        3.Boolean - True or False
                        4.Undefined - Undefined
                        5.Null - Null
                        6.Symbol - Symbol('something')
                        7.Object - {key:'value'}

               // ! Non-primitive Data Type OR (Reference Type)

                          1.Object - {key:'value'}
                          2.Array - [1,"Text",False]
                          3.Function - function name() {}
                        */

//                                  ! DATA TYPE :
//           !  PRIMITIVE TYPE(Primitive data types can store only a single value) :

//*STRING :
let nam = "veeramni";
console.log("String Type :" + typeof nam);

//*NUMER
let n = 22; // without decimal
let n1 = 22.8; //  with decimals
console.log("number Type :" + typeof n);
console.log("decimal Type :" + typeof n1);

//*BOOLEAN :
let bool = true;
console.log("boolean Type :" + typeof bool);

//*NULL(a non-existent or a invalid value) :
let phon = null;
console.log("null Type :" + typeof null);

//*UNDEFINDED(When a variable is declared but not assigned) :
let un;
console.log("undefinded Type :" + typeof un);

//*SYMBOL ES6( It is a new data type introduced in the ES6 version of javascript. It is used to store an anonymous and unique value) :
const s1 = Symbol(); //hggfiufdvsdf
console.log(s1);
const s2 = Symbol(); //cehvewfuivdctwyedh
console.log(s2);
console.log(s1 == s2);

// !Non-primitive types(To store multiple and complex values, non-primitive data types are used.)

//* OBJECT(Used to store collection of data) :
let ob = {
  name: "siva",
  id: 001,
  dpmt: "react",
};
console.log("object Type :" + typeof ob);

let arr = ["html", "css", "javascript"];
console.log("array Type :" + typeof arr);

let d = new Date();
console.log(d);
console.log("Date Type :" + typeof d);

/*//!  DECLARATIONS

                            var   - Declares a variable,optionally initializing it to a value.
                            let   - Declares a block-scoped,local variable,optionally initializing it to a value.
                            const - declares a block-scoped,read-only named constant. */

//!Scope

//var is function scoped(If created within a function)
//or global scoped (if created outside a function)
//let and const are block scoped

if (true) {
  var scope = "wlcome to Javascript"; //global-Scope
  console.log(scope);
}
console.log(scope);

if (true) {
  let blockscope = "wlcome to React"; //block-Scope
  console.log(blockscope);
}
//console.log(blockscope);
if (true) {
  //block-Scope
  const bscope = "wlcome to Web-developer";
  console.log(bscope);
}
//console.log(bscope);

function myFun() {
  //Function-Scope
  var myName = "surya";
  console.log(myName);
}
myFun();
//console.log(myName);

//!Redeclaration
//var can be reduclaration
var fullname = "veeramani";
var fullname = {};
console.log(fullname); //object{}

// let and const can not be declared
let age2 = 22;
// let age2 = 23;           //uncaught SyntaxError

const person3 = {};
//const person3 = name : "selva",   //uncaught SyntaxError

//!Reassignment

// var and let can be reassigned
let age3 = 22;
age3 = 23;
console.log(age3); //25

// let - variable change
let human = "veeramani";
human = "karma";
let msg = "hello i am " + human + " i learn JAVASCRIPT ";
//alert(msg);
console.log(msg);

var fullName = "veera mani";
fullname = "selva ganesh";
console.log(fullname); //selva ganesh

//const can't never be changed:
const person4 = {};
//person4 = []        //uncaught TypeError

//but we can update object properties
person4.name = "vijay kumar";
person4.name = "gopal";
person4.age = 25;
console.log(person4); //object {name:'vijay kumar'}

//!object
let bio = {
  name: "veeramani M",
  age: 22,
  dpmt: "Web developer",
};
console.log(bio);

//!arrays
let favcolors = ["red", "green", "black"];
favcolors[4] = "yellow"; //add element
console.log(favcolors);
console.log(favcolors[2]);
console.log(favcolors.length);

//!function
function greetuser(firstName, lastNmae) {
  //set of statements
  //let name = "veeramani";
  let msg = "hello i am " + firstName + "" + lastNmae + " i learn js ";
  console.log(msg);
}
greetuser("veera", "mani");
greetuser("vijay", "kumar");

function add(num1, num2) {
  console.log(num1 * num2);
}
add(2, 3);
add(3, 5);

//! Alert Prompt & confirm

//TODO Alert - its show a message and waits for the user to press "ok".
//alert("hello javascript");

//TODO Prompt - Its shows a modal window with a test message, an input field for the  visitor,and the buttons ok/cancel.
// let age4 = prompt("How old are you?",40);
// alert(`You are ${age4} Years Old!`);

//TODO confirm - Confirm show a model window with a Question and buttons:Ok / cancel.
//The result is true if ok is pressed and false otherwise.
// let isBoss = confirm("Are you the BOSS?");
// alert("isBoss");

//! OPERATORS
/*In javascript,an operator is a special symbol used to perform operations on operands(values ans variables). 2 + 3; //5
             + is an operator that performs addition,and 2 and 3 are openads.
                        //! JAVASCRIPT OPERATOR TYPES
                            1.Arithmetic Operators
                            2.Assignment Operators
                            3.Comparison Operators
                            4.Logical Operators
                            5.Ternary Operators
                            6.Bitwise Operators
                            7.Operator precedence
             */

/*//! 1.Arithmetic Operators:
    //TODO   It is used to perform standard arithmetic operators and returns a single numerical value.
                               + - Addition
                               - - Substaction
                               * - Multiplication
                               / - Divison
                               % - Remainder
                               ** - Exponentiation
                               -- - Decrement
                               ++ - Increment*/

let x1 = 5;
let y1 = 3;
console.log(x1 + y1);
console.log(x1 - y1);
console.log(x1 * y1);
console.log(x1 / y1);
console.log(x1 % y1);
console.log(x1 ** y1);
//increment
console.log(++x1);
console.log(x1);
//decrement
console.log(--x1);
console.log(x1);

/*//! 2.Assignment Operators
 //TODO  It is used to assign the value on its right to the operand on its left.
        var x = 10; It assgins the value of 10 to x.
                    Operator                   Example                    Same As
                       =                         x=y                        x=y
                       +=                        x+=y                       x=x+y
                       -=                        x-=y                       x=x-y
                       *=                        x*=y                       x=x*y
                       /=                        x/=y                       x=x/y
                       %=                        x%=y                       x=x%y
                       <<=                       x<<=y                      x=x<<y
                       >>=                       x>>=y                      x=x>>y
                       >>>=                      x>>>=y                     x=x>>>y
                       &=                        x&=y                       x=x&y
                       ^=                        x^=y                       x=x^y
                       |=                        x|=y                       x=x|y
                       **=                       x**=y                      x=x**y           */

let z1 = 7;
//z+=3
//z-=3
//z*=3
//z%=3
z1 /= 3;
//z**=3
console.log(z1);

/*//! 3.Comparison Operators
       It is used to compares its operands and returns True or False based on the comparison. */

/*//! Relational Operators
    >  -  Greater Than
    <  -  Less Than
    >= -  Greater Than or Equal to
    <= -  Less Than or Equal to */

let p1 = 4;
let q = 7;
//r=p1<q
let r = p1 > q; //4>7
//r=p1<=q //4<=7
//r=p1>=q
console.log(r);

/*//! Equality Operators

Strict Equality - "===" is used to compare values and types

    === - Strick Equal
    !== - Strick Not Equal */

console.log(8 === 8); // num|num - True
console.log("mani" !== 3); // string|num - True
console.log(1 !== 1); //  num|num - false

/* Lose Equality - "==" is used to compare values

    == - Equal
    != - Not Equal */

console.log(9 == 9); //    num|num - True
console.log("1" == 1); //  srting|number - True
console.log(true == "1"); //  boolean|srting - True
console.log(false != 0); //   boolean|num - false

//!String Comparison

console.log("manimaran" < "manikandan"); //Dictionary Type m<k

//!Comparison Of Different Type

console.log("1" < 3); //js is very smart in between string is number.( 1<3 )
console.log(true == 1); //1 is True This Binary Operator
console.log(false == 0); //0 is False This Binary Operator

/*//! Ternary Operator ?

    This is a great code saver when you want to write an if...else statement in just one line
    Syntax : condition ? ture : false; */

let age1 = 12;
let type = age1 > 18 ? "adult" : "child";
console.log(type);

/*//! Logical Operators

    Logical operators are typically used with Boolean(logical) values;
When they are,they return a boolean value.
                &&  -  Logical AND
                ||  -  Logical OR
                !   -  Logical NOT */

//AND && - Both sides must be true,for the entire thing to be true.

console.log(false && true);
let highincome = true;
let cibilscore = true;
let eligibleperson = highincome && cibilscore;
console.log(eligibleperson);
//document.write(eligibleperson);

//OR || - If one side is true,the entire thing is true.

console.log(true || false);
let humamAge = 35;
if (humamAge < 6 || humamAge >= 65) {
  // 76>=65
  console.log("you get in for free!");
} else {
  console.log("That will be Rs.100 please");
}

//NOt ! - Expression returns true if expressin is false.(opposite)

console.log(!false);
console.log(!3 <= 4);

/*//! NON BOOLEAN VALUES
                                                        FALSY VALUES
                                   The following values evaluate to false(Falsy values):
                                                       false
                                                       undefind
                                                       null
                                                       0
                                                       NaN -> not a number
                                                       The empty string("") */

console.log(false || 3);
console.log(false || "2");

/*//! TRUTY VALUE
            The other values-including all objects-evaluate to true when passed to a conditional statement.*/

//short circuiting
console.log(true || false || true);
console.log(true && false && true);

var a = 3 + 4 * 5;
console.log(a);

/*//! CONDITIONAL STATEMENTS IN JS

            A conditional statement is a set of commands that executes if a specified condition is true.
            Javascript supports two conditional statements :
                                1.if...else
                                2.switch  */
/*//! 1.IF...ELSE STATEMENT
     The if statement is executed if a logical condition is true.
     The optional else clause is executed if the condition is false.
     Syntax : if (condition){
         statement_1;
     }else{
         statement_2;
     }
     The condition can be any expression that evaluates to true or false.
     If the condition evaluates to true,statement_1 is executed.otherwise,statement_2 is executed.
     statement_1 and statement_2 can be any statement,including further nested if statements. */

// if hour is between 12AM to 12PM -> GOOD MORNING
// else if hour is betwwen 12PM to 6PM -> GOOD AFTERNOON
// else hour is between 6PM to 12AM -> GOOD NIGHT

let hour = new Date().getHours();
if (hour >= 0 && hour <= 12) {
  console.log("good morning");
} else if (hour >= 13 && hour <= 18) {
  console.log("good afternoon");
} else {
  console.log("good night");
}
//! 2.SWITCH STATEMENT
// A switch  statement allows a program to evaluate an expression and attempt to match the expression's value to a case label.
// If a match is found,the program executes the associated statement.
// syntax : switch(expression){
//     case label_1;
//     statements_1;
//     [break;]
//     case label_2;
//     statements_2;
//     [break;]
//     ...
//     default:
//         statements_def
//         [break;]
// }

// ! BREAK STATEMENT
// The optional break statement ensures that the program breaks out of switch once the matched statement is executed.
// Then continues execution at  the statement following switch.

// ! CONTINUES
// If break is omitted, the program continues execution inside the switch statement(and will  evaluate the next case,and so on.)

let grade = "A";
switch (grade) {
  case "A":
    console.log("very good grade");
    break;
  case "B":
    console.log("good grade");
    break;
  case "O":
    console.log("super grade");
    break;
  case "E":
    console.log("just pass");
    break;
  case "J":
    console.log("failed!");
    break;
  default:
    console.log("unknown grade");
}

//! order method number impartent

let savingAmount = 15000;
switch (true) {
  case savingAmount > 60000:
    console.log("iphone mobile");
    break;
  case savingAmount > 10000:
    console.log("android mobile");
    break;
  case savingAmount >= 5000 && savingAmount <= 10000:
    console.log("basic mobile");
    break;
  default:
    console.log("you can't afford mobile phone now!");
}

/*  //! LOOPS IN JAVASCRIPT

       Loops are used to perform repeated tasks based on a condition.
       Condition typically return true or false when checked.
       A loop will continue running until the defined condition returns false.
       Example : Suppose you want to print something 100 times.here you will use loop.
                                  1.FOR LOOP
                                  2.WHILE LOOP
                                  3.DO WHILE LOOP
                                  4.FOR-IN LOOP
                                  5.FOR-OF LOOP  */

/* //!  1.FOR LOOP
                         Syntax : for (statement 1; statement 2; statement 3){
                             ...// code block to be executed
                         }
                         Statement 1 : At the place of statement 1 we initialize a variable.e.g. let i = 0;
                         Statement 2 : At the place of statement 2 we put a specific condition.e.g. i <= 20;
                         Statement 3 : At the place of statement 3 we increment the variable.e.g. let i++;   */

for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    //even and odd number code
    console.log("Number#", i);
  }
}

/* //!  2.WHILE LOOP
        In the while loop there is only one parameter which is condition.
        The loop runs and executes the code as long as the specified condition is true.
        Syntax : while (condition){
            ...//code block to be executed
        }
        Example : The code in the loop will run,over and over again,as long as a variable (i) is  less than equal 7.
        In a while loop  if we have to increment something we do it at the end after writing statements.  */

let i = 1;
while (i <= 7) {
  console.log("Number#", i);
  i++;
}

/* //!  3.DO-WHILE LOOP
                 The do while loop is a variant of the  while loop.
                 This loop will execute the code block once,before checking if the condition is true,
                 then it will repeat the loop as long as the condition is true.
                 Syntax : do {
                    ..//code block to be execute
                 } <= The loop will always be executed at least once,even if the condition is false,
                      because the code blockis executed before the condition is tested
                 while(condition);   */

let j = 1;
do {
  if (j % 2 !== 0) {
    console.log("odd Number#", j);
  }
  j++;
} while (j <= 10);

//! FOR-IN (index model)
const person2 = { name: "mani", age: 22, sex: "male" }; //object
for (let key in person2) {
  console.log(key);
  //console.log(key + ":", person2[key]);
}
//array
let colors = ["red", "blue", "green"];
for (let index in colors) {
  console.log(index);
  //console.log(colors[index]);
}

//! FOR-OF
let course = ["html", "css", "javascript"];
for (let value of course) {
  console.log(value);
  //console.log(`course : ${value}`);
}

//!OOP-OBJECT ORINENTED PROGRAMMING(object literal)

//  Javascript object is a non-primitive type which is used to store mulitiple collections of data.
// Object declaration- Each member of an object is a key:value pair separated by commas and enclosed in curly braces{}.
// Object properties - Key:value are called object properties.
//Accessing Object properties - By using key you can access the value of a property.
// 1.Using DOT notation - Acccess the value by using dot notation.
// 2. Usinng BRACKET notation - By using bracket notation yo can acccess the value.

//! literals

let student = {};
student.name = "harish";
student.id = 21;
student.dpmt = "IT";
student.year = "1st year";
//add
student.year = "2nd year";
student.grade = "A";

console.log(student);
//delete
delete student.grade;

console.log(student);

let student1 = {
  "first name": "malar",
  id: 46,
  dpmt: "maths",
  year: "1st year",
};

console.log(student1["first name"]);

//! instance of an  object

let lecturer = new Object();
lecturer.name = "raveen";
lecturer.dpmt = "EEE";
lecturer.id = 07;
lecturer.salary = 40000;

console.log(lecturer.dpmt);
console.log(lecturer.hasOwnProperty("age"));
console.log(lecturer.hasOwnProperty("id"));
console.log(lecturer.hasOwnProperty("salary"));

Object.defineProperty(lecturer, "salary", {
  configurable: true,
  writable: false, //not change
  enumerable: false, //for-in loop la view pannum pothu not view
  value: 40000,
});

for (let key in lecturer) {
  console.log(lecturer[key]);
}

console.log(`lecture_name : ${lecturer.name}, department : ${lecturer.dpmt}`);

//! constructor
function Lect(name, age, dpmt) {
  //pascal->MyFirstName
  this.name = name;
  this.age = age;
  this.dpmt = dpmt;
}
let l1 = new Lect("yuvan", 23, "MCA");
let l2 = new Lect("sankar", 25, "MBA");

Lect.prototype.rate = "good";
Lect.prototype.section = "A";
Lect.prototype.display = function () {
  return this.name + " " + this.dpmt;
};
console.log(l1.rate);
console.log(l1.section);

l1.display();

console.log(l1);
console.log(l2);

let person1 = {
  name: "selvaganesh",
  age: 13,
  gender: "male",
  address: "5/128 post office st,thalavapuram.",
  sibiling: {
    youngerBrother: "gopal",
    elderBrother: "veeramani",
  },
};
console.log(person1.sibiling.elderBrother);
person1.age = 14; //overright
console.log(person1);
// dot notation
console.log(person1.name);
console.log(person1.age); //overright
//bracket notation
console.log(person1["addre   ss"]);

//array is a similar type of data
let courses = ["html", "css", "javascript"];

//! OBJECT - set of named values --- key:value pair
let studentObject = {
  studentName: "vijay",
  rollNo: 21,
  age: 22,
};

console.log(courses);
console.log(studentObject);

//get
console.log(courses[2]); //index
console.log(studentObject["rollNo"]); //key -> bracket notation ---> dynamic
console.log(studentObject.studentName); //key ---> dot notation --->static

//set
courses[3] = "React.js";
studentObject.age = 23;
studentObject["group"] = "BBA";

console.log(courses);
console.log(studentObject);

//length
courses[length]; //4
let keys = Object.keys(studentObject);
console.log(keys); //4

console.log(console); // reserved name..

//bracket notation
let babyName = { boy: "mani", girl: "priya" };

let baby = "boy";
console.log(babyName[baby]);

//dot notation
console.log(babyName.baby);

//Defining Object
let he = {
  name: "ravi",
  age: 22,
  //array
  interest: ["creating,teaching new things."],
  //boolean
  alive: true,
  //Nested Objects - Create an object inside another object is called nested object.
  address: {
    city: "virudhunagar",
    state: "tamilnadu",
  },
  //Object methods - An onbject can also contain a function in javascript.
  greeting: function () {
    let msg = `my name is ${this.name},i love ${this.interest}`; //this Refer to Current object
    console.log(msg);
  },
};
he.greeting();

let person5 = {
  name: "Mani",
  age: 22,
  interest: ["python", "Django"],
  alive: true,
  address: {
    city: "Rajapalayam",
    state: "Tamilnadu",
  },
  greeting: function () {
    let msg = `my name is ${this.name},i love ${this.interest}`;
    console.log(msg);
  },
};
person5.greeting();

//! factory functions
function createPerson(name, age) {
  //camelcase =>myFirstName
  return {
    name,
    age,
    greeting() {
      let msg = `my name is ${this.name},i am ${this.age} years old`;
      console.log(msg);
    },
  };
}
let ganesh = createPerson("ganesh", 22);
ganesh.greeting();
let gopal = createPerson("gopal", 25);
gopal.greeting();

// ! constructor function
function She(name, age) {
  //pascal->MyFirstName
  this.name = name;
  this.age = age;
  this.greeting = function () {
    console.log(`my name is ${this.name},i am ${this.age} years old`);
  };
}
let she = new She("abi", 20);
she.greeting();

//! dynamic object

const we = {
  name: "venkat",
};
we.age = 24;
we.alive = true; //edit
we.greeting = function () {};
delete we.age; //delete
console.log(we);

//! constructor property
//let name="mani";->new srting()
//let age=22;-> new number() numberliterals
// let isAlive=true;-> new boolean()  booleanliterals
//console.log(name,age,isAlive);
let name = new String("mani");
let age = new Number(22);
let isAlive = new Boolean(true);
console.log(name, age, isAlive);

//primitive vs refernces
let cart = {
  value: 5,
};
function updatecard(card) {
  //local scope
  cart.value++;
}
updatecard(cart);
console.log("carts available:", cart);
//refernces type
let z = { value: 5 };
let w = z;
z.value = 45;
console.log(z, w);
//primitive type
let x = 16;
let y = x;
x = 6;
console.log(x, y); //doesn't care variable

// ! Enumerating properties of an object
const user = {
  name: "mani",
  getFullName() {
    console.log(`My name is ${this.name}`);
  },
};
for (let key in user) {
  console.log(key + ":", user[key]); //for in loop
}

for (let key of Object.keys(user)) console.log(key); //key

for (let entries of Object.entries(user)) console.log(entries); //key and values

//! yes or no in this object
if ("name" in user) {
  console.log("yes!");
}
if ("age" in user) {
  console.log("yes!"); //empty element not view
}
const user2 = {
  name: "mani",
  getFullName() {
    console.log(`My name is ${this.name}`);
  },
};

//!cloning an js object

//using the spread operator:

let another = { ...user2 };
console.log(another);

//using the `Object.assign()` function

another = Object.assign({ age: 22 }, user2);
console.log(another);

//! Spread Operator   => ES6 update type
//Object
let studentsName = {
  firstName: "Mani",
  lastName: "M",
};
let studentsDetails = {
  address: "chennai",
  mailId: "mani@gmail.com",
  phoneNumber: 9876543210,
  studentAge: "23",
};
schoolStudent = { ...studentsName, ...studentsDetails, country: "India" };
console.log(schoolStudent);

// Array
const shopping_cart2 = ["mango", "apple", "pinapple"];
const more_cart2 = ["orange", "grapes"];
let add2 = [...shopping_cart2, ...more_cart2, 22, { nmae: "veeramani" }, true];
console.log(add2);

//! math bulid- in object

console.log(Math.E);
console.log(Math.PI);

//methods

console.log(Math.abs(-7));
console.log(Math.round(2.4));
console.log(Math.random(3));
let marks = [34, 67, 95, 86];
let result = Math.max(...marks); //spred operators
console.log("maximum marks: " + result);

//! srting objects

let firstName = "veera";
let middleName = "mani";
let lastName = `m`;
const p =
  " The quick brown fox jumps over the lazy dog,If the dog reacted, was it really lazy ?  ";
console.log(firstName.length);
console.log(firstName.charAt(4));
console.log(firstName.concat("", middleName));
console.log(p.replace("dog", "monkey"));
console.log(firstName.slice(2));
console.log(p.trim());

//! Template literals

const name1 = "vijay";
const message = "thankyou for watching " + name1 + " \nbluemoon channel";
console.log(message);

//! back-tick

const message2 = `thankyou for watching ${name1}
bluemoon channel
love you`;
console.log(message2);

//! Date objects

const date = Date();
console.log(date);
const anotherDate = new Date("feb 2000");
console.log(anotherDate.getFullYear());
const now = new Date();
console.log(now.getDay());
let [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
console.log(month, date, year);

//! ARRAY METHODS IM JAVASCRIPT

//! Adding element to an js array

let color = ["red", "blue", "green"];
color[3] = "black";
console.log(color);
console.table(color);

//! constructor Array :
let ca = new Array("c", "c++", "java", "Python", ".net");
console.table(ca);

//! 17.JS Array .push()
//method add element to end
//This method adds one or more elements to the end of array and returns the new length of the array.

let color1 = ["red", "blue", "green"];
color1.push("white", "orange");
console.log(color1);

//! 20.JS Array .unshift()
//method add element to start
//This method adds one  or more elements to the beginning of an array and returns the new length of the array.

let color2 = ["red", "blue", "green"];
color2.unshift("white", "orange");
console.log(color2);

//! 21.JS Array .splice()
//It can be used to delete existing elements,insert new elements,and replace elements in an array.
//This function remove 'count' number of elements from startIndex, and insert the provided elements in that place.
//color3.splice(2-startIndex,0-count,'white','orange','pink'-element to insert)

let color3 = ["red", "blue", "green"];
color3.splice(0, 2, "white", "orange", "pink");
console.log(color3);

//! Removing Element to an js array

//Emptying an JS Array
let number = [1, 2, 3, 4];
//method 1
number = []; //method one is easy way
//method 2
number.length = 0;
//methos 3
//number.splice(0,number.length);
//method 4
//while(number.length) number.pop();
console.log(number);

//! 18.pop()
//method remove element to end
//This method removes the last element from the end of array and returns that element.

let color6 = ["red", "blue", "green", "pink", "black"];
color6.pop();
console.log(color6);

//! 19.shift()
//method remove element to start
//This method removes the first element from an array and return that element.

let color7 = ["red", "blue", "green", "pink", "black"];
color7.shift();
console.log(color7);

//! 21.splice()
//This function remove 'count' number of elements from startIndex, and insert the provided elements in that place.
//It can be used to delete existing elements,insert new elements,and replace elements in an array.

let color8 = ["red", "blue", "green", "pink", "black"];
color8.splice(1, 2);
console.log(color8);

//! Finding element in an JS arrays primitive

//! 13.JS Array .indexOf()
//not the value (-1) ans //! lastOfIndex()
//This method returns the index of the first occurence of the specified element in the array, or -1 if it is not found.

let color4 = ["red", "blue", "green", "green"];
// console.log(color4.lastIndexOf(3));
console.log(color4.indexOf("blue"));
console.log(color4.indexOf("pink") !== -1);

//! 8.includes()
//This method checks if an array includes the element that passes the condition,returning true or false as appropriate.

let color5 = ["red", "blue", "green"];
console.log(color5.includes("blue"));

//! 11.find()
//.find()- This method returns the value of the first element in an array that pass the test in a tesing function.

//! 12.findIndex()
// .findIndex() - This method returns the index of the first element in an array that pass the test in a tesing function.

//reference-object

const vegetables = [
  { no: 1, item: "potato", price: 35 },
  { no: 2, item: "tomato", price: 20 },
  { no: 3, item: "onion", price: 70 },
  { no: 4, item: "carrot", price: 25 },
  { no: 5, item: "carrot", price: 35 },
];
let search = vegetables.find((vegetable) => {
  //callback function
  return vegetable.item === "carrot";
});
console.log(search);

/* //! ARROW FUNCTION => ES6
             1. Arrow functinon allow us to write shorter function syntax.
             2.Arrow function make your code more readable and structured.
             3.Introduced in the ES6 version of javascript. They provide us with a new and shorter syntax for declaring functions.
             4.Arrow functions can only be used as a function expression. */
let expression = function (a, b) {
  //anonomyous Function
  return a * b;
};
console.log(expression(2, 5));

let arrowFun = (a, b) => a * b; //Arrow Function
console.log(arrowFun(5, 6));

const vegetables1 = [
  { no: 1, item: "potato", price: 35 },
  { no: 2, item: "tomato", price: 20 },
  { no: 3, item: "onion", price: 70 },
  { no: 4, item: "carrot", price: 25 },
];
let search1 = vegetables1.find((vegetable1) => vegetable1.item === "onion");
console.log(search1);

//! 5.concat()
//This method is used to merge two or more arrays and returns a new array,without changing the existing arrays.

//combining arrays
//primitive type
const shopping_cart = ["mango", "apple", "pinapple"];
const more_cart = ["orange", "grapes"];
let add9 = shopping_cart.concat(more_cart);
console.log(add9);

//! 15.slice()
//This method return a new array with specified start to end elements.

//extract => select ahh slice(start,end)
let extract_cart = add9.slice(1, 3);
console.log(extract_cart);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
console.log("slice : " + numbers.slice());
console.log("slice(2) : " + numbers.slice(2));
console.log("slice(4,7) : " + numbers.slice(4, 7));
console.log("slice(7,4) : " + numbers.slice(7, 4)); //invalid length
console.log("slice(-5) : " + numbers.slice(-5)); //negative

//References Type
const shopping_cart1 = [{ item: "mango" }, { item: "stabery" }];
const more_cart1 = ["orange", "grapes", "apple", "pinapple"];
shopping_cart1[0].item = "banana";
let add1 = shopping_cart1.concat(more_cart1);
console.log(add1);

//! iterating elements

const dailyRoutine = ["wakeup", "Eat", "Sleep"];
//FOR-OF
for (let routine of dailyRoutine) console.log(routine);
//FOR-in
for (let routine in dailyRoutine) console.log(routine, dailyRoutine[routine]);

//! 4.forEach()
//This method helps to loop over array by executing a provided callback function for each element in an array.

dailyRoutine.forEach((routine, index) => {
  console.log(index, routine);
});
//arrow method
dailyRoutine.forEach((routine) => console.log(routine));

let nob = [
  { name: "mani", age: 22, dpmt: "web dev", salary: 25000 },
  { name: "mani", age: 22, dpmt: "python dev", salary: 27000 },
  { name: "siva", age: 20, dpmt: "sql dev", salary: 26500 },
  { name: "ajay", age: 24, dpmt: "stack dev", salary: 28000 },
];
nob.forEach((value) => {
  console.log(value.salary);
});

//! 9.join()
//This method returns a new string by concatenating all of the array's elements separated by the specified separator.

const dailyRoutine1 = ["wakeup", "Eat", "Sleep"];
let jArr = dailyRoutine1.join(" and ");
console.log(jArr);

//! spilt()

let postTitle = "This is my post".toUpperCase();
let postSlug = postTitle.split(" ");
let finalSlug = postSlug.join("_");
console.log("split : " + postSlug);
console.table(postSlug);
console.log(finalSlug);

//! 3.sort()
//This method is used to arrange/sort array's elements either in ascending or descending order.

const studentName = [
  { id: 1, name: "Senthil" },
  { id: 5, name: "Muthu" },
  { id: 7, name: "venkat" },
];
studentName.sort((a, b) => {
  //ASCII - American Stansard Codefor Information Interchange TABLE
  //a<b = -1;                      // 1st periorty symbol 2nd numbers 3rd operator symbol
  if (a.name < b.name) return -1; // 4th uppercase 5th lowercase
  //a>b = 1;
  if (a.name > b.name) return 1; // refer id a.id and b.id
  //a===b = 0;
  return 0;
});
console.log(studentName);

const characters = [
  { id: 1, name: "Senthil", height: 155, weight: 70 },
  { id: 5, name: "Muthu", height: 145, weight: 87 },
  { id: 7, name: "venkat", height: 130, weight: 69 },
];

let byHeight = characters.sort((a, b) => a.height - b.height);
console.log(byHeight);

//Interview Qn highest Number

let numArr = [44, 67, 23, 98, 123, 345, 234];

let heightVal = numArr.sort((a, b) => b - a)[1];
console.log(heightVal);

// Primitive Testing a JS Array [ every() and some()]
// Allow Only Adults Above 18

//! 6.every()
//This method checks every element in the array that passes the condition,returning true or false as appropriate.

const queueByAge = [16, 32, 27];
let isAllowed = queueByAge.every((value, index, array) => {
  return value >= 18;
});
console.log("isAllowed:", isAllowed);

//! 7.some()
//This method checks if at least one element in the array that passes the condition,returning true or false as appropriate.

const queueByAge1 = [16, 32, 27];
let isAllowed1 = queueByAge1.some((value, index, array) => {
  return value >= 18;
});
console.log("isAllowed:", isAllowed1);

//Testing is it odd or even
const numberline = [35, 45, 73, 22];
let oddNum = numberline.some(function (value) {
  return value % 2 === 1;
});
console.log("oddnumber is :", oddNum);
const numberline1 = [2, 4, 66];
let evenNum = numberline1.every(function (value) {
  return value % 2 === 0;
});
console.log("evennumber is :", evenNum);

//References Testing in a JS Array

const item = [
  { id: 1, name: "mobile", isdeliveravable: true },
  { id: 2, name: "headset", isdeliveravable: true },
  { id: 3, name: "powerbank", isdeliveravbale: false },
];
let allDeliverable = item.every(function (value) {
  return value.isdeliveravable == true;
});
console.log("allDelivarable:", allDeliverable);

let notDeliverable = item.some(function (value) {
  return value.isdeliveravable == true;
});
console.log("allDelivarable:", notDeliverable);

//! 2.filter()
//This method create a new array with only element that passes the condition inside the provided function.

const cart_item = [
  { id: 1, items: "asus", cost: 7500 },
  { id: 2, items: "iphone", cost: 35000 },
  { id: 3, items: "mi", cost: 8999 },
  { id: 4, items: "vivo", cost: 13500 },
];
let affordableFilter = cart_item.filter((value) => {
  return value.cost > 10000;
});
console.log("affordabaleFilter phone:", affordableFilter);

//! .find()
const cart_item1 = [
  { id: 1, items: "asus", cost: 7500 },
  { id: 2, items: "iphone", cost: 35000 },
  { id: 3, items: "mi", cost: 8999 },
  { id: 4, items: "vivo", cost: 13500 },
];
let affordableFind = cart_item.find((value) => {
  return value.cost > 10000;
});
console.log("affordabaleFind phone:", affordableFind);

//! .findIndex()

const cart_item2 = [
  { id: 1, items: "asus", cost: 7500 },
  { id: 2, items: "iphone", cost: 35000 },
  { id: 3, items: "mi", cost: 8999 },
  { id: 4, items: "vivo", cost: 13500 },
];
let affordableFindIndex = cart_item.findIndex((value) => {
  return value.cost > 10000;
});
console.log("affordabaleFindIndex phone:", affordableFindIndex);

//! 1.map()
//This method create a new array with the results of calling a provided function on every element in this array .

const people = [
  { id: 1, first_name: "veera", last_name: "mani" },
  { id: 2, first_name: "gopal", last_name: "krishnan" },
  { id: 3, first_name: "selva", last_name: "ganesh" },
];
let final = people.map((val) => {
  // return val.first_name + val.last_name;
  let fullName = [val.first_name, val.last_name].join(" ");
  let object = { id: val.id, fullName };
  return object;
});
console.log(final);

//! JS chaining Method

let product = [
  { id: 1, items: "Asus", cost: 7500 },
  { id: 2, items: "Iphone", cost: 35000 },
  { id: 3, items: "Mi", cost: 8999 },
];
let final1 = product
  .sort((a, b) => {
    return a.cost - b.cost; //ascending
    // return b.cost - a.cost // descenting
  })
  .sort((a, b) => {
    if (a.items < b.items) return -1;
    if (a.items > b.items) return 1;
    return 1;
  })
  .filter((val) => {
    return val.cost >= 9000;
  })
  .map((val) => {
    return val.items + " $" + val.cost;
  });
console.log(final1);

//! 10.reduce()
//This method applies funnction against an accumulator and each element in the array to reduce it to a single value.

const vegeTable = [
  { no: 1, item: "potato", price: 35 },
  { no: 2, item: "tomato", price: 20 },
  { no: 3, item: "onion", price: 70 },
];
let totalPrice = vegeTable.reduce(
  (previousval, currentval) => previousval + currentval.price,
  20
);
console.log("totalprice:", totalPrice);

//! JACASCRIPT:Difference between

const numBer = [34, 45, 4, 93, 23];
//sort()
let total = numBer.sort(); //ASCII - RULES
console.log(total);
//find()
let total1 = numBer.find((val) => val > 30); //Single(only one) Object value o/p
console.log(total1);
//filter()
let total2 = numBer.filter((val) => val > 30); //all Objects value o/p
console.log(total2);
//map()
let total3 = numBer.map((val) => val > 30); //same place yes or no (boolean)
console.log(total3);
let total6 = numBer.map((val) => "#" + val); //join the value
console.log(total6);
let total4 = numBer.map((pre, val) => pre + val); //same place (add-index)
console.log(total4);
//reduce()
let total5 = numBer.reduce((pre, cur) => pre + cur); //add value one by one
console.log(total5);

//! JavaScript String Method

//! Concatenation:
let first_N = "Veera";
let last_N = "Mani";
let full_N = first_N + " " + last_N;
console.log("concatenation : " + full_N);

//! concat :
full_N = first_N.concat(" ", last_N);
console.log("concat : " + full_N);

//! Append :
full_N = "veera";
full_N += "mani";
console.log("append : " + full_N);

//! Escaping
e = "He can't run ";
e = " He can't run ";

console.log("Escaping : " + full_N);
console.log("Escaping : " + full_N);

//! length
l = first_N.length;
console.log("length : " + l);

//! UpperCase :
u = first_N.toUpperCase();
console.log("UpperCasse : " + u);

//! LowerCase :
l = first_N.toLowerCase();
console.log("LowerCasse : " + l);

//! indexOf :
i = first_N.indexOf("r");
console.log("indexOf r : " + i);

//! lastIndexOf :
l = first_N.lastIndexOf("e");
console.log("indexOf e : " + l);

//! charAt :
c = first_N.charAt("4");
console.log("charAt 4 : " + c);

//! charCodeAt :
c = first_N.charCodeAt("4");
console.log("charCodeAt 4 : " + c); //ASCII VALUE

//! string.fromCharCode :
console.log("fromCharCode :" + String.fromCharCode(65, 66, 67, 97, 98, 122));

//! substring :
const sub = "123456789";
console.log("subsrting : " + sub.substring());
console.log("substring(2) : " + sub.substring(2));
console.log("substring(4,7) : " + sub.substring(4, 7));
console.log("subsrting(7,4) : " + sub.substring(7, 4));
console.log("substring(-5) : " + sub.substring(-5));
console.log("substring(25,34) : " + sub.substring(25, 34)); //invalid legnth

//! Replace in javascript :
let rp = "i am from rajapalayam";
console.log("Before Replace :" + rp);
c = rp.replace("rajapalayam", "Chennai");
console.log("After Replace :" + c);

//! Trim in Javascript :
let tr = " kavin ";
console.log("before Trim :" + tr.length);
console.log("After Trim :" + tr.trim().length);

//! padStart - padEnd :
let ps = "5";
console.log("padStart :" + ps.padStart(4, 0));

let pe = "5";
console.log("padStart :" + pe.padEnd(4, "$"));

/* //! JAVASCRIPT FUNCTION

                 A Javascript function is a block of code designed to perform a particular task.
                 A Javascript function is executed when "something" invokes it(calls it).

                 Syntax : function addTwo(parameter){  // function - function key | addTwo - function name | (parameter) - parameter(s)
                     return parameter + 2;  // function body between curly braces
                 }
                 addTwo(4); //addTwo - function invocation | 4 - arguments
                 (A javascript function is defined with the function keyword,followed by a name,followed and parentheses().
                 Function names can contain letters,digits,underscores,and dollar signs(same rules as variables).
                 The parentheses may include parameter names separated by commas:(parameter1,parameter2,..)
                 The code to be executed, by the function,is placed inside curly brackets:{})
*/

//! Function Declaration VS Function Expression

//add two no
/*   //!     FUNCTION DECLARATION

         Also called as function definition or function statement.
         PRIMITIVE - parameters are passed to function by value.If the function changes the value of the parameter,
         this change is not reflected globally or in the calling function.
         NON-PRIMITIVE - parameter are passed by reference.when the function changes its properties,
         that change is visible outside the function.
 */

let no1 = 67;
let no2 = 56;
function addNo() {
  let result = no1 + no2;
  console.log(result);
}
addNo();
/*  //!   FUNCTION EXPRESSION

         Function can also be created by a function expression
         Such a function can be ANONYMOUS or it can have a NAME.
         Function expression are canvenient when passing a function as an argument to another function. */

//(Named Function Expression)
const addNo1 = function addNo1() {
  let result = no1 + no2;
  console.log(result);
}; // ; this simple is important
addNo1();

//! Function Expression(Anonymous Function Expression)
const addNo2 = function () {
  let result = no1 + no2;
  console.log(result);
};
addNo2();

/*   //!    FUNCTION HOISTING

        Variables in javascript are,in a sense,"hoisted"(or"lifted")to the TOP of the function or statement.
        However,variables that are hoisted return a value of undefined.
        because of hoistin,all var statement in a function should be placed as near to the top of the function as possible.
        In the case of funnction,only fuunction DECLARATIONS are hoisted-but not the function EXPRESSIONS. */

//Function Declaration
addnoDeclaration();

function addnoDeclaration() {
  console.log("Adding no from func.Declaration");
}
//addnoDeclaration();

let ber = 1;
console.log(ber);

//Function Expression(Named Function Expression)

let addnoExpression = function addnoExpression() {
  console.log("Adding no from func.Expression");
};
addnoExpression();

/* //!  IMMEDIATELY INVOKED FUNCTION EXPRESSON (IIFE)

       An IIFE is a javascript function that RUNS AS SOON AS it is defined.
       It's a design pattern known as SELF EXECUTING ANONYMOUS FUNCTION.
       The first is the anonymous function with lexical scope enclosed within the grouping operator ().
       The  second part creates the immediately invoked function expression () through which the javascript
       engine will directly interpret the  function.
       It is called an (IIFE) because the function is created as an expression and is executed immediately.
       Syntax : (function(){
                   ..//statements
               })();  */

//Adding Two Numbers

let digits1 = 45678;
let digits2 = 87654;
(function sumNumbers() {
  let result = digits1 + digits2;
  console.log("Result", result);
})();

//! FUNCTION ARGUMENTS

//ONE AND TWO VALUES

function sumExpresssion(tiffen, lunch, petrol) {
  let result = tiffen + lunch + petrol;
  console.log(`Your Total Expense is: ${result}`);
  return result;
}
sumExpresssion(45, 120, 113);

//More Values

function sumExpresssion1() {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}
let result1 = sumExpresssion1(45, 120, 113, 65, 73, 86);

console.log(`Your Total Expense is: ${result1}`);

/*  //! REST OPERATOR => ES6

         Reason : To manage or handle the function with multiple arguments.
        The Rest operator allows a function to  accept an indefinite(not certain in amount)number of arguments.
        (Rest parameter syntax allows representing an infinite number of arguments as an array.)
        Syntax : function sum(...theArgs){
            ..//your code
        }
        (...) is a rest operator
        Now,This function will take all the arguments and store them by making an array with the name "theArgs" or
        wharever name you will give.  */

function anyName(userName, ...restvalues) {
  console.log(userName);
  console.log(restvalues);
}
anyName("karma", 20, 21, 22);

//! THIS KEYWORD

// method => obj - In an object method,this refers to the "owner" of the method.
//                 this refer to the channel object.automatically by javascript itself.
// function => In a function,this refers to the global object. (window,golbal)
//              Which  is window in the browser or global in node.

const channel = {
  //this = channel
  title: "food vlog",
  video_title: "briyani recipe",
  Languages: ["tamil", "english", "malayalam"],
  subcribe() {
    console.log(this);
  },
  showVideos() {
    this.Languages.forEach((Lang) => {
      console.log(this.video_title + " - " + Lang.toUpperCase());
    }, this);
  },
};

// channel.share = function () {
//     console.log(this);
// }

channel.showVideos();

//! DIFFEREND METHOD - Using bind,call,or apply will override the value inside a function,and you can hardcode its value for this.

function playvideo(params) {
  console.log(this);
}
//! Call - Call invokes the function and allows you to pass in arguments one by one.

playvideo.call({ videotitle: "javascriptCall" });

//! Apply - Apply invokes the function and allows you to pass in arguments as an array.

playvideo.apply({ videotitle: "JavascriptApply" });

//! Bind - Bind returns a new function, allowing you to pass in a this array and any number of arguments.

let newL = playvideo.bind({ title: "JavascriptBind" });

newL();

// USE BIND METHOD

const channel1 = {
  //this = channel
  title: "food vlog",
  video_title: "briyani recipe",
  Languages: ["tamil", "english", "malayalam"],
  subcribe() {
    console.log(this);
  },
  showVideos() {
    this.Languages.forEach(
      function (Lang) {
        console.log(this.video_title + " - " + Lang.toUpperCase());
      }.bind(this)
    );
  },
};

channel1.showVideos();

//ARROW FUNCTION - Arrow functions ignore all the above rules,and the value of this is determined by the scope enclosed by the arrow function.

const channel2 = {
  //this = channel
  title: "food vlog",
  video_title: "briyani recipe",
  Languages: ["tamil", "english", "malayalam"],
  subcribe() {
    console.log(this);
  },
  showVideos() {
    this.Languages.forEach((Lang) => {
      console.log(this.video_title + " - " + Lang.toUpperCase());
    });
  },
};

channel2.showVideos();

//! CLOSURE

// Closure means that an inner function always has access to the variable of its outer function,even after the outer function has returnd.

function outerfunction() {
  // variable definded outside the inner function
  let name6 = "Mani";
  function innerfunction() {
    // accessing outerfunction name variable
    return "hi" + " " + name6;
  }
  return innerfunction;
}
var innerfunction = outerfunction(); //closures

console.log(innerfunction); // return the function definition

console.log(innerfunction()); // return the value

// ! Callback Function

//TODO: Function Passed as Argument.

function newgreet(name) {
  console.log("hello", name);
}

function greet(callback) {
  // console.log(callback); // return the function definition
  callback("veera");
}

// newgreet("veera");
greet(newgreet);

// ! PROMISES

//TODO:  The Promise object represents the eventual completion(or Failure) of an asynchronous operation

function bookingTicket() {
  return new Promise((resolve, reject) => {
    let bookingSuccess = true;
    if (bookingSuccess) resolve(850);
    else reject();
  });
}

bookingTicket() //then(success).catch(failure);
  .then((val) =>
    console.log(
      `Thankyou Buddy!... I have transferred Rs.${val} Ruppes(Promise)`
    )
  )
  .catch(() => console.log("Thanks for trying..i will booking the Bus Ticket"));

// function success() {
//   console.log("Thankyou Buddy!... I will Transfer The Amount");
// }
// function failure() {
//   console.log("Thankyou Buddy!...  will booking the Bus Ticket");
// }

//! Async And Await
//* Async - Always Returns a Promise

async function fn() {
  return "Hello Async";
}
console.log(fn());

let reach = new Promise((resolve, reject) => {
  const reached = false;
  if (reached) setTimeout(resolve, 1000, "Mani Reached");
  else reject("Mani Not Reached");
});

async function aysncStatus() {
  try {
    console.log("Hello Async And Await");
    res = await reach;
    console.log(res);
    console.log("Bye Async And Await");
  } catch (error) {
    console.log(error);
  }
}

aysncStatus();

//! synchronous - Sync is Blocking
//* JavaScript Defalut Behavior of Synchoronous
//* 1st run the all global variables.

console.log("Welcome Sync"); //F1
function Middle() {
  console.log("Step1"); //F3
  console.log("Step2"); //F4
  console.log("Step3"); //F5
}
Middle(); //F2
//! Asynchoronous - Async is non-Blocking
setTimeout(() => console.log("Step1 setTimeout"), 4000); //F9
setTimeout(() => console.log("Step2 setTimeout"), 3000); //F8
setTimeout(() => console.log("Step3 setTimeout"), 2000); //F7
console.log("Bye...! Sync"); //F6

setInterval(() => console.log("Hello SetInterval"), 4000); //*Every Second Running

//! Error Handling (or) Exception Handling

// try {
//   promptNum = prompt("Enter the Number");
//   if (promptNum === "") throw "Cannot be Empty";
//   if (isNaN(promptNum)) throw "Enter a Valid Number";
//   console.log(`Error Handling : ${promptNum ** 2}`);
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("Error Handling");
// }

/* //! The HTML DOM (Document Object Model)

  With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

  When a web page is loaded, the browser creates a Document Object Model of the page.

  The HTML DOM model is constructed as a tree of Objects.

  The HTML elements as objects
  The properties of all HTML elements
  The methods to access all HTML elements
  The events for all HTML elements

  In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements. */

let messAge = document.getElementById("message");
messAge.innerHTML = "Welcome to Hello Users";

//! Cm to Inch's Calculate
function btn() {
  const inch = Number(document.getElementById("val").value);
  console.log(inch);
  debugger;
  const inchVal = inch / 2.54;
  const output = document.getElementById("output");
  output.innerHTML = inchVal.toFixed(3) + " " + "inch's";
}

//! celsius to fahrenheit Calulate
function clickme() {
  const cel = Number(document.getElementById("input").value);
  const fahVal = (cel * 9) / 5 + 32;
  const output1 = document.getElementById("output1");
  output1.innerHTML = fahVal.toFixed(3) + " " + "° F";
}

//! selector - getelementbyid -the uniqc value
function calc() {
  let digit = document.getElementById("num").value;
  // console.log(digit.value);
  document.write(digit * digit);
}

//! INTERVIEW QUESTION

let x3 = {},
  y2 = { name: "Ronny" },
  z2 = { name: "John" };
y2 = { name: "mani" };
x3[y2] = { name: "Vivek" };
x3[z2] = { name: "Akki" };
console.log(x3[z2]);

//! setTimeout

// function func1() {
//   setTimeout(
//     (x, y) => {
//       console.log(x);
//       console.log(y);
//     },
//     3000,
//     "hello",
//     5
//   );

//   // var x = 2;
//   // let y = 12;
// }
// func1();

// function func2() {
//   for (var i = 0; i < 4; i++) {
//     setTimeout(() => console.log(i), 2000);
//   }
// }
// func2();

// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

//! In JavaScript, how do you turn an Object into an Array []?

let obj = { id: 01, name: "Santhosh", age: 22, work: "progarammer" };

//Method 1: Convert the keys to Array using - Object.keys()
console.log(Object.keys(obj));

// Method 2 Converts the Values to Array using - Object.values()
console.log(Object.values(obj));

// Method 3 Converts both keys and values using - Object.entries()
console.log(Object.entries(obj));

// function checkPalindrome(str) {
//     for (let i = 0 ; i <= str.length; i++);
// }
// console.log('palidrome :'+checkPalindrome('abc'));

//! PALINDROME :

let str = "racecar";
let strreverse = str.split("").reverse().join("");

if (str === strreverse) {
  console.log("The String is palindrome");
} else {
  console.log("The String not is palindrome");
}

//! PRIME NUMBER :

function prime(n) {
  if (n < 2) {
    return `${n} is not a prime`;
  }
  for (i = 2; i < n; i++)
    if (n % i === 0) {
      return `${n}is not a prime number`;
    }
  return `${n} is a prime number`;
}
console.log(prime(2));

//! PRIME NUMBER BETWEEN 1 TO 100
let count = 0;
let pn1, pn2;
for (pn2 = 2; pn2 <= 100; pn2++) {
  for (pn1 = 1; pn1 <= pn2; pn1++) {
    if (pn2 % pn1 == 0) count++;
  }
  if (count == 2) console.log(pn2);
  count = 0;
}

//! FIBONACCI :

function fibonacci(n) {
  const fib = [0, 1];
  for (i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]; //X=X(n-1)+X(n-2)
  }
  return `${fib} is FIBONACCI`;
}
console.log(fibonacci(5));

//! FACTORIAL

function fact(input) {
  if (input <= 0) return null;
  if (input === 1) return input;
  return input * fact(input - 1);
}
//120
//  5*(fact 4);
//  5*4* (fact 3);
//  5*4*3*(fact2);
//  5*4*3*2*(fact1);
//  5*4*3*2*1
console.log("FACTORIAL :" + fact(5)); //5 4 3 2 1

//! SWAP two number

let swapOne = 2;
let swapTwo = 3;
let temp;
temp = swapOne;
swapOne = swapTwo;
swapTwo = temp;

console.log(`The value of swapOne : ${swapOne}`);
console.log(`The value of swapTwo : ${swapTwo}`);

//! ARMSTRONG ;

// let armNumber = prompt("Enter Your ARMSTRONG NUMBER");
// let temp1 = armNumber;
// let noOfDigit = armNumber.toString().length;
// let sum = 0;
// while (temp1 > 0) {
//   let digit = temp1 % 10;
//   sum += digit ** noOfDigit;
//   temp1 = parseInt(temp1 / 10);
// }
// if (sum == armNumber) {
//   console.log(`${armNumber} is an Armstrong`);
// } else {
//   console.log(`${armNumber} is not Armstrong`);
// }

//! Factorial

//method - 1 :
function factorial(input) {
  if (input <= 0) {
    // 5 lessthan equal to 0
    return null;
  } else {
    ans = 1;
    for (let i = 1; i <= input; i++) {
      ans = ans * i;
    }
    return ans;
  }
}
console.log(factorial(5)); //1 2 3 4 5

//method - 2 :
//  function fact(input) {
//     if(input <=0) return null;
//     if(input ===1) return input;
//     return input*fact(input-1);
//  }
//120
//  5*(fact 4);
//  5*4* (fact 3);
//  5*4*3*(fact2);
//  5*4*3*2*(fact1);
//  5*4*3*2*1
//  console.log(fact(5)); //5 4 3 2 1

//! give 55 output = 10
let num_55 = 55;
let sNum = num_55.toString().split("");
let op = parseInt(sNum[0]) + parseInt(sNum[1]);
console.log(op);

// console.log(2 + "2" - 1);

//! SET
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.

// Remove Duplicate Values From Array

let numVal = [
  1,
  2,
  3,
  3,
  4,
  2,
  5,
  5,
  1,
  "js",
  "css",
  "html",
  "css",
  "html",
  "js",
];
let duplicates = [...new Set(numVal)];
console.log(duplicates);
