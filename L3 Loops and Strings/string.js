// Strings in Js
// it is asequence of charecters used to represent text

let str = "manu";
let str1 = 'manu Naik';
console.log(str1.length); //checking length of a string
console.log(str[0], str[3]) //acesssing indivisual charecter of string 

//template Literals
let spcialString = `this is a template literals`;
console.log(spcialString);

// diffrence between template Literals and normal ""string
let obj = {
    item: "pen",
    price: 10,
};

console.log("the cost of", obj.item, "is", obj.price, "rupees"); //string form

let output = `the cost of ${obj.item} is ${obj.price} rupees` //using template literals
console.log(output); 
// it is called as string interpolation :
// to create string by doing substitution of placeholders `string text ${expression} string text`

//Escape charecters \n 
console.log("Manu Naik \n Nagavalli") // \n used to write in next line
console.log("Manu Naik \t Nagavalli") // \t used to add tab space to string \and t are calculated as a single charecter

let str3="Manu\tnaik";
console.log(str3,str3.length);

/*String Methods
These are built-in function to manuplate a string
1.str.toUpperCase() to convert uppercase
2.str.toLowerCase() to convert lower case
3.str.trim() =use to remove white space */

let str4 = "manunaik";
let newstr=str4.toUpperCase(); //it does not chnage original string it stores new string 
str4=str4.toUpperCase();
console.log(str4); //original string
// console.log(newstr);   //uppercase string

let str5 ="LENOVO"; // converting uppercase text to lowercase
str5=str5.toLowerCase();
console.log(str5);

//str.trim method removes starting and ending spaces
let str6 ="             Manu   Naik JS         ";
console.log(str6); //prints with apaces
console.log(str6.trim()); //prints by removing starting and ending spaces...it doesnot remove middle spaces

//slice method
//accessing the piece of string

let str7="0123456789";
console.log(str7.slice(2,7)) //accessing by indexes

//Concatiantion 
// joining 2 strings
let str_a="Manu Naik,"; //string 1
let str_b="Iam from Nagavalli"; //string 2

// let res=str_a.concat(str_b); //combining a and b string
let res="My name is " + str_a + str_b; // also we can use by + symbol 
console.log(res);

//replace method = searching a value and adding new value

let str_rep="hello";
console.log(str_rep.replace("h","y")); //it remove h from hello and adds y from the place of h.in it it chsnges only 1st matches
console.log(str_rep.replaceAll("l","p")); //By using replaceAll method can replace all matches 


//charAt method = to know the charecter by accessing index value

let str0 ="IloveJS";
// str0=str0.replace("I","S"); //original string is immutable
console.log(str0);
console.log(str0.charAt(5)); //prints 5th index value 


//string practice qst
//creating a user name=
let fullName=prompt("Enter your Full name without spaces");
let userName="@" + fullName + fullName.length;
console.log(userName);

