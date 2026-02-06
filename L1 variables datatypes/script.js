fullName ="Manu naik";
fullname ="Manu M naik";
Y=null;
y=undefined;
radius=11.5;
isAdmin=true;
isFollow=true;
console.log(isFollow)

console.log(fullname);
console.log(fullName);

// key words
// var: variable can be used re-declared & updated.A global scope variable. (older not uses)
// let: variable can be updated but cannot be re-declared. A block scope variable.
// const: variable cannot be updated or re-declared. A block scope variable. (once assigned value cannot be changed)
//const obj: we can change/update object key in the object

let name = "manu";
let price = 200;
let age=20;
console.log(name);
console.log(price);
console.log(age);

const name1="naik";
console.log(name1);

let a;
console.log(a);

//blocks using flower braces {}
{
    let a=5;
    console.log(a);
}

{
    let a=10;
    console.log(a);
}

//Data types in javascript Number,String,Boolean,Undefined,Null,Bigint,Symbol(premetive datatypes)
// Non premetive data types=(objects)

let age1=30;
console.log(typeof age1);

let myName ="naik Mn";
console.log(typeof myName);
let x;
console.log(typeof x);

let x1=null;
console.log(x1);
console.log(typeof x1);

let x2=BigInt("123");
console.log(x2);
console.log(typeof x2);

// object= collection of diffrent variable.

const student = {
    fullName: "manu naik",
    age:21,
    cgpa:8.2,
    isPass:true,
}
console

//updating value in object
 student["age"] = student["age"]+1;
student["name"] = "Naik";

console.log(student["name"]);

//2 ways to print object
console.log(student["age"]);
console.log(student.isPass);


//practice set 

const product ={
    item:"Parker jotter ball pen",
    rating:4,
    offer:5,
    price:270,

};

console.log(product);

//practice set 2

const profile ={
    name:"@shraddhakhapra",
    followers:569,
    isFollow:true,
    following:580,
};
console.log(profile);
console.log(typeof profile);
console.log(typeof isFollow);