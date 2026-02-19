//Arrays = its a collection of items array is mutable
let marks =[95,50,86,94,75];
console.log(marks);
console.log(marks.length);
//Array indices= arr[0],arr[1]
marks[0]=85;
console.log(marks);

let heros=["spiderman","superman","hulk","ironman","antman","captain"]; //printing all elements by using loops

for(let i=0;i<heros.length;i++){
    console.log(heros[i]);
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

