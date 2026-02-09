// comments elements 1. single-line comments 2. multiline comments

// 1. this is a single-line comment

/* 2. this is a 
multiline comment */

//Operators

// Arithmetic Operators: +, -, *, /, %, ++, --

let a = 10;
let b = 20;
console.log("A+B:", a + b);
console.log("A-B:", a - b);
console.log("A*B: ", a * b);
console.log("A/B:", a / b);
console.log("A%B:", a % b);

//Unary Operators: ++, --
console.log("Increment A:", ++a);  //++a means first increment then use // a++ means first use then increment
console.log("Decrement B:", --b); //--b means first decrement then use // b-- means first use then decrement

//Assignment Opertors (=.+=,-=,*=,%=,**=)

let x = 10;
let y = 5;
y += 4;
x -= 2;
y *= 4;
console.log(y);
console.log(x);

//comparision Operators (equal to ==, not equal to !=, equal to & type of data also checks ===, not equal to & type!==) >,>=,<,<=

let num1 = 40;
let num2 = 30;

console.log("40==30", num1 == num2);
console.log("40 >30", num1 > num2);
console.log("40!=30", num1 != num2);

let x2 = 10;
let x1 = "10";
console.log("x1===x2", x1 === x2) //here === checks for also a data type in this case string and number compares so its return false. its not possible in == case

//Logical operator (logical AND &&, Logical OR ||, logical NOT !)  multipal expression evaluation give TRUE or FALSE value

//logical AND
let a1 = 10;
let a2 = 5;
let cond1 = a1 > a2;
let cond2 = a1 === 10;

console.log("cond1 && cond2", cond1 && cond2); // in this both condition is true its return true if in case one condition become false its return false

//logical OR 

console.log("cond1 || cond2 =", a1 < a2 || a1 === 10); // in this operator if one condition true  and another one is false it returns true, and also both condition it also return true 

//logical NOT 
//its need only 1 condition, if the condition is false it will return as true, if the condition is true it return false.

console.log("!(a1 <a2) =", !(a1<a2));

//Conditional statements (1.if statement), (2.if-else statement)

/*let age = 20;

if (age>18) {
    console.log("can vote");
} */

let mode ="light";
let color;

if(mode === "dark"){
    color = "black";
}

if(mode === "light"){
    color = "white";
}

console.log(color);


// if-else statement

let light ="dark-light";
// let light
if (light ==="dark-light"){
    light ="black";
} else{
    light ="white";
}
console.log(light);

let age =20;
if(age>=18){
    console.log("They can vote");
}
else{
    console.log("They cannot vote");
}

//even odd num finding
let num =10;

if (num%2==0){
    console.log(num, "is even");

} else{
    console.log(num, "is odd");
}
