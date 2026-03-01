// functions is a block of code that performs a specific task,can be invoked(call) whenever needed

function myFunction(){
    console.log("welcome back home");
    console.log("learning js ");
}
myFunction(); //when code function is created we has to call the function to print

function myFunction2(hello){ // hello in the bracekt is called "parameter"
console.log(hello);
}

myFunction2("my Name is manu"); //argument inside the function call

//creating a function -> 2number,sum
function sum(x,y){
    //local variable -> scope 
s=x+y;
// console.log("before return"); //it will prints
return s;
// console.log("after return"); //it does take valyes after retun function it does not print
} //function parametrs like local variable of fuction ->blockscope {<-start  }<-end 
let value=sum(3,5);
console.log(value);

//Arrow functions =>
//sum function
function sum(a,b){
    return a+b;
}
//Modern js 
let arrowSum=(a,b)=>{
    return a+b;
}; //by printing this it will show what written in this

//multiplication function
function mul(a,b){
    return a*b;
}

let arrowMul=(a,b)=>{
    return a*b;
};


const printHello =()=>{
    console.log("hello"); //without argument and parameter runnung arrow function
};

//practice qst1
//finding vowels in a sentence
function countVowels(str){
    let count = 0;
    for(const char of str){
       if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
        count++;
       }
    }
return count;
}


//using arrow function 
const countVow=(str)=>{
       let count = 0;
    for(const char of str){
       if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
        count++;
       }
    }
return count;
}


//for each loop in arrays works with array
//arr.forEach(callBackFunction)
//callbackFunction:Here,it is a function to execute for each element in the array
//defination="A callback is a function passed as an argument to another function"

function abc(){
    console.log("hello")
}
function myfunc(abc){
    return abc;
}

let arr =["karnataka","delhi","goa"]; //for each is used only for array not for strings

arr.forEach((val,idx,arr) =>{ //value at each index
    console.log(val.toUpperCase(),idx,arr); //higher order function / method= they can return another function a the output 
});


//Practice qst 
//for given array of number,print the square of each value using forEach loop

let nums =[2,3,4,5,6];

let calcSquare =(num) =>{
    console.log(num *num ); //num **2
};

nums.forEach(calcSquare);


//Map = creates a new array with the result of some operation.The value its callback returns are used to form new array

let numbers =[2,3,4,5,6];

let newArr = numbers.map((val)=>{  //use to print number 
    return val * val; //here it will print square of the numbers
    console.log(val);
});
console.log(newArr);

let numSquare =(num) =>{
    console.log(numbers *numbers ); //num **2
};



//Filter method = creates a new array of elements thet give true for  condition/filter.
let arr1 = [1,2,3,4,5,6,7];

let evenArr=arr1.filter((val)=>{
    return val % 2 ===0;
});

console.log(evenArr);


//Reduce method = performs some operations and reduce the array to single value.It returns that single value
//sum calculate
let arr2 = [5,6,5,1,3];

const output=arr2.reduce((prev,curr)=>{   //prev=previous element  curr=current
   return prev > curr ? prev :curr //getting larger element from the array
}); 

console.log(output); 


// practice qst2
/* take input from user.crate an array of numbers from 1 to n.
use the reduce method to calculate sum of all numbers in the array.
use the reduce method to calculate product of all numbers in the array.*/

let marks =[97,64,99,95,65,82];

let toppers=marks.filter((val) =>{
    return val >90;
});

console.log(toppers);


/* take input from user.crate an array of numbers from 1 to n.
use the reduce method to calculate sum of all numbers in the array.
use the reduce method to calculate product of all numbers in the array.*/

let n=prompt("Enter a number");

let array =[];

for(let i=1; i<=n; i++){
    array[i-1]=i; //storing i value in n array
}
console.log(array);

let total= array.reduce((res,curr)=>{
    return res +curr;
});

console.log("total=",total);

let factorial= array.reduce((res,curr)=>{
    return res * curr;
});

console.log("factorial=",factorial);
