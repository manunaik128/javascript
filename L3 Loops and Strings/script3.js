//Loops in js 
//loops are used to execute a piece of code again and again

//1. For Loop  2.While Loop 3.Do while loop
for(let i=1;i<=4;i++){
    console.log("i=",i);
}

//calculating sum of 1 to 5
let sum =0;
for(let i=1; i<=5;i++){
    sum = sum+i;
}
console.log("sum=",sum);
console.log("loop has ended");

//Infinite loop = A loop that never ends 

//2.While loop
let i=1;
while(i<=10){
    console.log("i=",i)
    i++;
}

//3.Do while loop 
let count=1;
do{
    console.log("count=",count);
    count++;
} while(count<=10);

// 4.for-of Loop =helps to add loops on array and string. 
// for-in Loop= Use for objects.

let str ="ManuNaik";
let size=0;
for(let val of str){
    console.log("val=",val);
    size++;
}
console.log("String size",size);

// for-in Loop
let student={
    name: "Manu Naik",
    age:20,
    cgpa:8.5,
    isPass:true,
};
for(let key in student){
    console.log("key=",key,"value=",student[key]);
}

//Practice qst
//creating even number using loops
for(let num=0;num<=100;num++){
    if(num%2===0){
        console.log("num is=",num)
    }
}

//Practice qst 2

let gameNum =30;

let userNum=prompt("Guess the game Number");
console.log(userNum);

while(userNum != gameNum){
    userNum=prompt("You entered wrong number,Guess again!!");
}
console.log("You entered the right number");