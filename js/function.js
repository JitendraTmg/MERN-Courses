// Functions in JavaScript are reusable blocks of code that perform a specific task. They can be defined using the `function` keyword, followed by the function name and parentheses. The code to be executed is enclosed within curly braces `{}`.

// function call and deceleration
function functionName() {
    console.log("This is a function.");
}

// function call
functionName(); // Output: This is a function.

// types of function
// 1.name function
// 2.anonymous function
// 3.arrow function
// 4.function with parameters

// name function
function greet() {
    console.log("Hello, World!");
}
greet(); // Output: Hello, World!




// arrow function
var add = (a, b) => {
    return a + b;
};
console.log(add(5, 3)); // Output: 8

// function with parameters
function welcome(name) {
    //name is parameter

    console.log("hi",name,);
}
welcome("Jin"); // Output: hi Jin
welcome("Rin"); // Output: hi Rin

// function with return value
function sum(x, y) {
    return x + y;
}
var result = sum(4, 5);
console.log(result); // Output: 9

function displayList(){
    var Fruits = ["Apple", "Banana", "Cherry"];
    var Movies = ["Jhole",true];
    // var data = [Fruits, Movies];
    return [Fruits, Movies];
}

var result = displayList();
var Fruits = result[0];
console.log(Fruits[1]); // Output: Banana
// console.log(result[0][0]);


// anonymous function
var result = function() {
    console.log("unnamed function!");
};
result(); // Output: unnamed function!

// hoisting in JavaScript is a behavior in which variable and function declarations are moved to the top before the execution of the code.


// Immeditaly Invoked funtion expression (IIFE)

//(function)()

(function() {
    console.log("This is an IIFE!");
    console.log("Alert this is an IIFE!");
})();


scope in JavaScript refers to the accessibility of variables and functions in different parts of the code. There are three types of scope: global scope, function scope, and block scope.

// global scope
var globalVar = "I am a global variable";

function globalScopeExample() {
    console.log(globalVar); // Output: I am a global variable
}
globalScopeExample();

// function scope
function functionScopeExample() {
    var functionVar = "I am a function variable";
    console.log(functionVar); // Output: I am a function variable
}
functionScopeExample();
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

// block scope
if (true) {
    let blockVar = "I am a block variable";
    console.log(blockVar); // Output: I am a block variable
}
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined   
