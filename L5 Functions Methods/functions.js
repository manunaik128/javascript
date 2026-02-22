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

/*function abc(){
    console.log("hello")
}
function myfunc(abc){
    return abc;
}*/

let arr =[1,2,3,4,5];

arr.forEach(function printVal(val){ //value at each index
console.log(val );
})