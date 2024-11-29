// function Declaration
function myFun() 
{
    console.log('Muhammad Hussain');
}

// function Invocation
myFun();

// function parameter
function add(a, b) 
{
    console.log(a + b);
}

// function Arguments
add(20, 10);

// ======================
//     Example Task
// ======================

function greet(name) {
    console.log('Hello ' + name + ', welcome to Hussain Tech');
}
greet('Bilal');

// function Expression
let result = function add(a, b) {
    console.log(a + b);
}
result(15, 20);

// Anonymous Function
let answer = function () {
    console.log('Muhammad Hussain Ilyas');
}
answer();

// IIFE - Immediatly Invoked Function Expression
// Example - 01
(function() {
    console.log('Hello Everyone!!!');
})();
// Example - 02
(function(a, b) {
    console.log(a + b);
})(20, 50);