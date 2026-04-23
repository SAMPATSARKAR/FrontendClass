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
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
;
let move = direction.up;
console.log(move);
//union
let grade;
grade = 10;
grade = "A+";
console.log(grade);
// write a function checkStatus that returns either a no or a bool. the function should return 1 if a rand value is greater than 0.05, otherwise return false.Also store the result in a var and print it to console.
function checkStatus() {
    const rand = Math.random();
    if (rand > 0.05) {
        return 1;
    }
    else {
        return false;
    }
}
const result = checkStatus();
let u1 = {
    name: "sam",
    age: 22,
};
console.log(u1);
console.log(u1.name);
;
function greetstudent(s1) {
    console.log("welcome" + s1.name + " your grade is " + s1.grade);
}
const newStudent = {
    name: "jhon",
    grade: 9
};
greetstudent(newStudent);
export {};
