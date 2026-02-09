// //post and pre increment
// let count = 5;
// console.log("Post increment",count++); //5
// console.log("Current count",count); //6
// console.log("Pre increment",++count); //7
// console.log("Current count",count); //7 

// //asignment operator    
// let a1 = 10;
// a1 += 5; // a1 = a1 + 5
// console.log("a1 after +=5",a1); //15
// a1 -= 3; // a1 = a1 - 3
// console.log("a1 after -=3",a1); //12
// a1 *= 2; // a1 = a1 * 2
// console.log("a1 after *=2",a1); //24
// a1 /= 4; // a1 = a1 / 4
// console.log("a1 after /=4",a1); //6 

// //comparison operator
// let num1 = 10;
// let num2 = 20;
// console.log("num1 > num2",num1 > num2); // false
// console.log("num1 < num2",num1 < num2); // true
// console.log("num1 >= num2",num1 >= num2); // false
// console.log("num1 <= num2",num1 <= num2); // true

// //equality operator
// let a = 10;
// let b ='10';
// console.log("a=b",a==b);//loose equality
// console.log("a===b",a===b);//strict equality
// let x = 5;
// let y = '5';
// console.log("x==y",x==y); // true
// console.log("x===y",x===y); // false
// //logical oper

// let m = 10;
// let n=5;
// console.log("m>n && m==10",m>n && m==10);
// console.log("m>n || m==5",m>n || m==5);
// console.log("!(m>n)",!(m>n));   
// console.log("!(m<n)",!(m<n));

// //ternary operator
// let num=5;
// let result = (num%2==0)?"Even":"Odd";
// console.log(result);
// //typeof operator
// let str = "Hello";
// let num3 = 10;
// console.log("Type of str",typeof str); // string
// console.log("Type of num3",typeof num3); // number
// //instanceof operator
// class Person{}
// let p1 = new Person();
// console.log("p1 instanceof Person",p1 instanceof Person); // true
// console.log("p1 instanceof Object",p1 instanceof Object); // true   
// //delete operator
// let obj = {name:"John",age:30};
// console.log("Before delete",obj); // {name: "John", age: 30}
// delete obj.age;
// console.log("After delete",obj); // {name: "John"}
// //conditional operator
// let age = 18;
// let canVote = (age >= 18) ? "Yes" : "No";
// console.log("Can vote?",canVote); // Yes
// //consitional operator with if else

// let age2 = prompt("Enter your age:");
// // age2 = Number(age2); // Convert string input to number
// let canVote2;
// if(age2 >= 18){
//     canVote2 = "Yes";
// }else{
//     canVote2 = "No";
// }
// if(age2%2==0){
//     console.log("Your age is even");
// }else{
//     console.log("Your age is odd");
// }
// console.log("Can vote?",canVote2); 

// let marks = prompt("Enter your marks:");    
// marks = Number(marks);
// let grade;
// if(marks >= 90){
//     grade = "A";
// }else if(marks >= 80){
//     grade = "B";
// }else if(marks >= 70){
//     grade = "C";
// }else if(marks >= 60){
//     grade = "D";
// }else{
//     grade = "F";
// }
// console.log("Your grade is",grade);
// //for loop
// for(let i=1;i<=5;i++){
//     console.log("Iteration",i);
// }
// //while loop
// let j = 1;
// while(j<=5){
//     console.log("While iteration",j);
//     j++;
// }
// //do while loop
// let k = 1;
// do{
//     console.log("Do while iteration",k);
//     k++;
// }while(k<=5);   
// //for in loop
// let person = {name:"Alice",age:30,city:"New York"};
// for(let key in person){
//     console.log(key,":",person[key]);
// }
// // //for of loop
// let arr = [10,20,30,40,50];
// for(let value of arr){
//     console.log("Value:",value);
// }

//multipication table of any number
// let x=prompt("Enter a number");
// x=Number(x);
// for(let n=1;n<=10;n++){
//     console.log(x,"*",n,"=",x*n);
    
// }

//switch case
// let fruit = "apple";
// switch(fruit){
//     case "apple":
//         console.log("Apple is red");
//         break;
//     case "banana":
//         console.log("Banana is yellow");
//         break;
//     case "grape":
//         console.log("Grape is purple");
//         break;
//     default:
//         console.log("Unknown fruit");
// }       

// for(let i=0;i<=20;i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i);
    
// }

let str1="welcome to javascript";
str1 = "welcome to javascript class";
str1 = "welcome to javascript";
let fullname = "John Doe";
let output = console.log(`my name is ${fullname}`);

// console.log(str1.length);

//string Methods
let str2 = "Hello World";
console.log("Uppercase:",str2.toUpperCase());
console.log("Lowercase:",str2.toLowerCase());
console.log("Index of 'o':",str2.indexOf('o'));
console.log("Last index of 'o':",str2.lastIndexOf('o'));
console.log("Substring (0,5):",str2.substring(0,5));
console.log("Slice (0,5):",str2.slice(0,5));
console.log("Slice (3) till last:",str2.slice(3));
console.log("Replace 'World' with 'JavaScript':",str2.replace('World','JavaScript'));
console.log("Includes 'o':",str2.includes('o'));
console.log("Includes 'Hello':",str2.includes('Hello'));
console.log("Starts with 'Hello':",str2.startsWith('Hello'));
console.log("Ends with 'World':",str2.endsWith('World'));
console.log("Split by space:",str2.split(' '));
console.log("Trimmed string:",str2.trim());
str5=str1+str2;
console.log("Concatenated string:",str5);
let grass = "cowcow";
console.log(grass.replaceAll("c","h"));

//charAt()
let animal = "lion is king of jungle";
console.log(animal.charAt(1));
