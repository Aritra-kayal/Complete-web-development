// print a line in JS
console.log("Hello World");
console.log("This is Aritra Kayal");
console.log("I love Apna College");
// --variable--

// we have to use a keyword before the variable name like var , let , const
// var : variable can be re-declared & updated. A global scope variable.
// let : variable cannot be re-declared but can be updated. A block scope variable.
// const : variable cannot be re-declared or updated. A block scope variable.
// 1) currently var is not the good option so let and const are good for JS becuse there are some problems that's why
//  we are not using var for our codding
// 2) var is oldest option
// 3) we used var before 2015
// 4) in 2015 we got ES6 stands for ECMAScript 6 that's mean we got some new rules in our JavaScript and here we found let and const concept
// 5) if we use var in that case we are consuming more memory space that's why we have to use let and const(constant)
// 6) we use const for constant variable like pi
// 7) you have to give a value for const(constant) variable otherwise,it is considered wrong
// 8) if we use let but if we don't give a value so in that case the out put should be undefined
price = 120;
console.log(price);
let fullName = "Aritar Kayal";
console.log(fullName);
var price = 130.5;
var price = 130;
console.log(price);
{
  let price = 150;
  console.log(price);
}
{
  let price = 160;
  price = 165;
  console.log(price);
}
var price = 170;
var price = 180;
{
  const price = 190;
  console.log(price);
}
let fullNameMy = "aritra";
fullNameMy = "yudi";
console.log(fullNameMy);
const Console = 24;
console.log(Console);
let New = 24;
console.log(New);
x = null;
console.log(x);
// sum of two numbers , the values are not given by the user
{
  let a = 10;
  let b = 20;
  let c = a + b;
  console.log(c);
}
let y = undefined;
console.log(y);
let z = null;
console.log(z);
let apple = 1;
let Apple = 2;
console.log(apple);
console.log(Apple);
// variable name are case sensitive; "a" & "A" is different.
// only letters,digits,underscore(_) and $ is allowed.(not even space)
// only a letter underscore(_) or $ should be 1st cheracter.
// reserved word cannot be variable names.

// fullName --> camel case (we have to use this type of name system for variable name)
// fullname (we don't use)
// full_name --> snake case
// full-name --> kabab case
// FullName --> pascal case
let a;
console.log(a);
const b = 10;
console.log(b);
