export{}
// let person3:[string,number,boolean]=["jack",25,true];
// console.log(person3[0]);
// console.log(person3[1]);
// console.log(person3[2]);
// //destructuring the tuple
// let [name,age,isactive]=person3;
// console.log(name);
// console.log(age);
// console.log(isactive);

//enum
enum direction{
    up,
    down,
    left,
    right
};

let move: direction=direction.up;
console.log(move);

//union
let grade:number | string;
grade=10;
grade="A+";
console.log(grade);

// write a function checkStatus that returns either a no or a bool. the function should return 1 if a rand value is greater than 0.05, otherwise return false.Also store the result in a var and print it to console.

function checkStatus(): number | boolean {
    const rand = Math.random();
    if (rand > 0.05) {
        return 1;
    } else {
        return false;
    }
}

const result = checkStatus();
// console.log(result);
// console.log("a"+2);

//interface
interface user{
    name:string,
    age:number,

}
let u1:user={
    name:"sam",
    age:22,
};
console.log(u1);
console.log(u1.name);

interface student{
    name:string,
    grade:number
};
function greetstudent(s1:student):void{
    console.log("welcome"+s1.name +" your grade is "+s1.grade);
}
const newStudent:student={
    name:"jhon",
    grade:9
}

greetstudent(newStudent);