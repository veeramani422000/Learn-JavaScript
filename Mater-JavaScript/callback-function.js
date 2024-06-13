// What is a Callback Function in JavaScript

setTimeout(function() {
    console.log("Timer");
}, 5000);

function a(b) {
    console.log("A is called");
    b();
}

a(function b() {
    console.log("B is called");
});


// JavaScript is a synchronous and single-threaded language
// Blocking the main thread
// Power of Callbacks?
// Deep about Event listeners
// Closures Demo with Event Listeners
// Scope Demo with Event listeners
// Garbage Collection & removeEventListeners

function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("Button Clicked", count++);
    });
}

attachEventListeners();
