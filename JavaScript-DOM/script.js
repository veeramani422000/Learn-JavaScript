//? 1.Object - javascript King

// ? Dom - Document Object Model

console.log(document);

console.log(document.head);

console.log(document.body);

//* Script Tag in end of body Advantages:

// 1. We can access the whole document.
// 2. Speed up the Performance..

//* Dom Advantages:

// Dom work for Dynamic access
// CRUD work

// 1. Create(Post)
// 2. Read(get)
// 3. Update(Update/Patch)
// 4. Delete(Delete)

// 1.Elements
// 2.Attributes..
// 3.Styles
// 4.Events..

//TODO: 1. Elements

let userInput = "Task 1";

let newElements = document.createElement("div");
// console.log(newElements);

newElements.innerText = userInput;

//TODO: 2.Attributes

newElements.setAttribute("class", "task");

//TODO: 3.Styles

newElements.style.backgroundColor = "lightBlue";

console.log(newElements.style.backgroundColor);

newElements.style.color = "blue";
if (newElements.style.color === "blue") {
  newElements.style.color = "red";
}

newElements.style.fontSize = "20px";
newElements.style.margin = "5px";
newElements.style.textAlign = "center";

let container = document.getElementById("taskcontainer");

container.append(newElements);

// document.body.append(newElements);

const input = document.getElementById("inputBox");
console.log(input);

// console.log(input.getAttribute('type'));
// console.log(input.setAttribute("type", "date"));

//Window... -> Current Tab

console.log("hell i am Dom");

console.log(window);

// window.alert('This is Alert Message')

//  TODO: 4. Events

// ! Keyboard Events
// 1.keydown
// 2.keyup
// 3.keypress

function keyDown(event) {
  //   console.log(event);
  console.log("KeyBoard Event Running");
}

//! Keyboard Test Events

const inputText = document.getElementById("inputText");

function addTask() {
  const userInput = inputText.value;
  console.log(userInput);
}

inputText.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) addTask();
});

// ! Mouse Events

// 1.Mouse Move
// 2.Mouse Click(R & L)
// 3.Mouse Double Click
// 3.Mouse Over
// 4.Mouse Leave
// 5.Mouse Wheel

function eventFunction(event) {
  //   console.log(event);
  console.log("Mouse Event Running");
}

// ! Global Events
// 1. Scroll
// 2. Resize -> Window

window.addEventListener(
  "resize",
  (event) => console.log("Window Resize")
  //   console.log(event.target.outerWidth)
);

// ? Inline eventHandlers
//* Advantage
// 1. Easy Handling
// 2. Slightly Fast

//* DisAdvantage..
// 1.Unmanagebale
// 2.Scope

// ? Object Model
//* Advantage
// 1.managebale
// 2.Scope
// 3.Object

//* DisAdvantage..
//1. can't run the two handlers

// ! Build-in Methods
//* Advantage
//1. Can be able to run more than one Handlers..
//2. Build in Method
//* DisAdvantage..
//1. Not Support For Old Browsers.. IE 8 or Earlier

function buttonClick() {
  console.log("Button Clicking");
}

function newFunction() {
  console.log("New Function Btn Clicking");
}

const addButton = document.getElementById("addBtn");

// ! Object Model
// addButton.onclick = buttonClick; // ! Alert Reference..
// addButton.onclick = newFunction;

// ! Build-in Method
addButton.addEventListener("click", buttonClick);
addButton.addEventListener("click", newFunction);

//  function add(firstNum,secondNum){ //? Ex: event Arguments
//     console.log(firstNum+secondNum);
// }
// add(10,5)

// let fruits = "Apple"; // ? Ex: object model disadvantange
// fruits = "New APpple";
// console.log(fruits);
