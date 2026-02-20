//Arrays = its a collection of items array is mutable
let marks =[95,50,86,94,75];
console.log(marks);
console.log(marks.length);
//Array indices= arr[0],arr[1]
marks[0]=85;
console.log(marks);

let sheros=["spiderman","superman","hulk","ironman","antman","captain"]; //printing all elements by using loops

for(let i=0;i<sheros.length;i++){
    console.log(sheros[i]);
}

//by using for of  loop to print array elements
let cities=["uk","banglore","manglore","udupi","manglore"];
for( city of cities){
    console.log(city.toUpperCase()); //converting name to uppercase letter
}

//practice qst 1

let s_marks=[85,97,44,37,76,60];

let sum =0;
for(let val of s_marks){
    sum +=val;
}
let avg =sum / s_marks.length;
console.log(`avg marks of the class =${avg}`);


// practice qst2
// adding discount on items 10% and printing final price //using for loop
let items =[250,645,300,900,50];
// let i=0;
// for(let val of items){
//     let offer = val /10; 
//     items[i]=items[i]-offer;
//     console.log(`value after offer =${items[i]}`)
//     i++;
// }

for(let i=0;i<items.length;i++){ //using for loops
let offer =items[i]/10;
items[i]-=offer;
}
console.log(items);

//Array methods
//push():add to end
//pop():delete from end & return
//toString():converts array to string


// push
let foodItems=["apple","banana","orange","tomato"];
foodItems.push("mango","onion","chilly");
console.log(foodItems);

//pop
let deletedItem=foodItems.pop();
console.log("deleted",deletedItem);

//toString
console.log(foodItems);
console.log(foodItems.toString()); //changes array items into string

//concat():joins multiple array & returns result
//unshift():add to start
//shift():delete from start & return

//concat 
let marvelHeros=["thor","captain","spidy",];
let dcHeros=["superman","batman"];
// let=indianHeros=["krish","shaktiman"];
// let heros=marvelHeros.concat(dcHeros,indianHeros);  //also we can combine 3 arrays
let heros=marvelHeros.concat(dcHeros);
console.log(heros);

//unshift()
let indHeros=["salman","yash","sudeep"];
indHeros.unshift("darshan"); //it adds element to first index
console.log(indHeros);

let val =indHeros.shift();
console.log("deleted",val); //it will delete and print the first value
// console.log(indHeros);

//slice(): return a piece of the array = slice(startIdx,endIdx)
//splice(): change original array(add,remove,replace)=  splice(startIdx,delCount,newEl1)

//slice
