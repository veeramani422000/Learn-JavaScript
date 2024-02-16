/* 
    1.What happens when you run JavaScript code?(What is Call Stack)
        (i) To keep the track of all the contexts, including global and functional, the JavaScript engine uses a call stack.  
        (ii) It uses the LIFO principle (Last-In-First-Out).
        (iii) Call stack maintains order of execution of execution contexts.
*/

var n = 4;

function square(n) {
    var ans = n * n;
    return ans;
}

var square4 = square(4);
console.log(square4);
var square2 = square(2);
console.log(square2);
