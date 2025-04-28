// SCOPE

// Block scope - variables declared inside a pair of curly braces cannot be accessed from outside the block

// Function scope - variables declared inside a function cannot not be accessed from outside the function

// Global scope - globally scoped variables can be accessed inside a block or function

// Gonna learn about a nested function's scope

// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner();
// }
// outer();

// Closure

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
const fn = outer();
fn();
fn();

// Closure: In JavaScript, when we return a function from another function, we are effectively returning a combination of the function definition along with the function's scope. This would let the function definition have an associated persistent memory which could hold on to live data between executions. That combination of the function and its scope chain is what is called a closure in JavaScript.

// A Closure is created a function is returned from another function. So the function returns the inner function and it's scope
