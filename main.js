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

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;
// }
// const fn = outer();
// fn();
// fn();

// Closure: In JavaScript, when we return a function from another function, we are effectively returning a combination of the function definition along with the function's scope. This would let the function definition have an associated persistent memory which could hold on to live data between executions. That combination of the function and its scope chain is what is called a closure in JavaScript.

// A Closure is created a function is returned from another function. So the function returns the inner function and it's scope

// Function Currying

// Currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.

// function f(a, b, c) is transformed to f(a)(b)(c)

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(2, 3, 5));

// sum(2, 3, 5) sum(2)(3)(5)

// function curry(fn) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c);
//       };
//     };
//   };
// }

// const curriedSum = curry(sum);
// console.log(curriedSum(2)(3)(5));

// const add2 = curriedSum(2);
// const add3 = add2(3);
// const add5 = add3(5);
// console.log(add5);

// this keyword

// The JavaScript this keyword which is used in a function, refers to the object it belongs to
// It makes functions reusable by letting you decide the object value
// this value is determined entirely by how a function is called

// function sayMyName(name) {
//   console.log(`My name is ${name}`);
// }

// sayMyName('Walter White');
// sayMyName('Heisenberg');

// How to determine `this`? 4 ways
// Implicit binding
// Explicit binding
// New binding
// Default binding

// Implicit binding

// const person = {
//   name: 'Vishwas',
//   sayMyName: function () {
//     console.log(`My name is ${this.name}`);
//   },
// };

// person.sayMyName();
// The implicit binding states that when a function is invoked with the dot notation, the object to the left of the dot is what this keyword is referencing.

// So JavaScript will treat this.name as person.name which is equal to the stirng Vishwas and the output would be `My name is Vishwas`

// const name = 'Superman';
// globalThis.name = 'Superman';
// function sayMyName() {
//   console.log(`My name is ${this.name}`);
// }

// sayMyName.call(person); // with explicit binding, you use call and the first arugment passed to call is what this keyword inside sayMyName is referencing

// function Person(name) {
//   this = {}
//   this.name = name;
// }

// const p1 = new Person('Vishwas');
// const p2 = new Person('Batman');

// console.log(p1.name, p2.name);

// can invoke function with new keyword. When we do this, the this keyword references an empty object

// When a function is invoked with the this keyword, within the function, this keyword will always reference a new empty object.

// sayMyName();
// default binding is the default binding that happens is none of the other rules are matched

// order of precedence: New binding, Explicit binding, Implicit binding, Default binding

// PROTOTYPE

// function Person(fName, lName) {
//   this.firstName = fName;
//   this.lastName = lName;
// }

// Person.prototype.getFullName = function () {
//   return this.firstName + ' ' + this.lastName;
// };

// function SuperHero(fName, lName) {
//   // this = {}
//   Person.call(this, fName, lName);
//   this.isSuperhero = true;
// }
// SuperHero.prototype.fightCrime = function () {
//   console.log('Fighting crime');
// };
// SuperHero.prototype = Object.create(Person.prototype);

// const batman = new SuperHero('Bruce', 'Wayne');
// SuperHero.prototype.constructor = SuperHero;
// console.log(batman.getFullName());

// const person1 = new Person('Bruce', 'Wayne');
// const person2 = new Person('Clark', 'Kent');

// console.log(person1.getFullName());
// console.log(person2.getFullName());

// CLASS

// class Person {
//   constructor(fName, lName) {
//     this.firstName = fName;
//     this.lastName = lName;
//   }

//   sayMyName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }
// const classP1 = new Person('Bruce', 'Wayne');
// console.log(classP1.sayMyName());

// class SuperHero extends Person {
//   constructor(fName, lName) {
//     super(fName, lName);
//     this.isSuperHero = true;
//   }

//   fightCrime() {
//     console.log('Fighting crime');
//   }
// }

// const batman = new SuperHero('Bruce', 'Wayne');
// console.log(batman.sayMyName());
