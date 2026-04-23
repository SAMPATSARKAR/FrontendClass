let msg = "Hello world";
console.log(msg);
//'ts' treats file as module,not as script
//primitive
let Username = "john";
console.log(Username);
let marks = 50;
console.log(marks);
let ispass = true;
console.log(ispass);
let num2 = 123456789n;
console.log(num2);
let value = 10;
value = "hello";
value = 12345678901234567890;
console.log(value);
let persona = "jack";
if (typeof persona === "string") {
    console.log(true);
    console.log(persona.toUpperCase());
}
else {
    console.log(false);
}
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        console.log("Running ....");
    }
}
// throwError("hello");
// infiniteLoop();
function add(a, b) {
    return a + b;
}
console.log(add(3, 2));
let score = [1, 2, 3, 4, 5];
score.forEach((x) => {
    console.log(x);
});
let student = {
    name: "sam",
    marks: 70,
    ispass: true,
    branch: "chemical"
};
student.marks = 100;
console.log(student.marks);
//type inference
let age = 10;
let mixed = [10, "hello", true];
console.log(age);
console.log(mixed);
function sub(a, b) {
    return a - b;
}
console.log(sub(10, 2));
//tuples
let person = ["john", 25];
console.log(person);
let person1 = ["sampat", 22];
let [Username1, age1] = person1;
console.log(Username1);
export {};
