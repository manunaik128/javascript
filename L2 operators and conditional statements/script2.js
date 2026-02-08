// comments elements 1. single-line comments 2. multiline comments

 // 1. this is a single-line comment

/* 2. this is a 
multiline comment */  

//Operators

// Arithmetic Operators: +, -, *, /, %, ++, --

let a =10;
let b =20;
console.log("A+B:",a+b);
console.log("A-B:",a-b);
console.log("A*B: ",a*b);
console.log("A/B:",a/b);
console.log("A%B:",a%b);

//Unary Operators: ++, --
console.log("Increment A:",++a);  //++a means first increment then use // a++ means first use then increment
console.log("Decrement B:",--b); //--b means first decrement then use // b-- means first use then decrement

//Assignment Opertors (=.+=,-=,*=,%=,**=)

let x=10;
let y=5;
y += 4;
x -= 2;
y *= 4;
console.log(y);
console.log(x);

//comparision Operators (equal to ==, not equal to !=, equal to & type of data also checks ===, not equal to & type!==) >,>=,<,<=

let num1 =40;
let num2 =30;

console.log("40==30",num1==num2);
console.log("40 >30",num1>num2);
console.log("40!=30",num1 != num2);

let x2 =10;
let x1 ="10";
console.log("x1===x2",x1===x2) //here === checks for also a data type in this case string and number compares so its return false. its not possible in == case


