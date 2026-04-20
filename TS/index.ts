let msg: string = "Hello world";
console.log(msg);
//'ts' treats file as module,not as script
//primitive
let Username:string="john";
console.log(Username);
let marks:Number=50
console.log(marks);
let ispass:boolean=true;
console.log(ispass);
let num2:bigint=123456789n;
console.log(num2);
let value:any=10;
value="hello";
value=12345678901234567890
console.log(value);

let persona: unknown="jack";
if(typeof persona==="string"){
    console.log(true);
    console.log(persona.toUpperCase());
    
}else{
    console.log(false);
    
}
function throwError(message: string): never{
    throw new Error(message);
}
function infiniteLoop():never{
    while(true){
        console.log("Running ....");
        
    }
}
// throwError("hello");
// infiniteLoop();

function add(a:number,b:number):number{
    return a + b ;
}
console.log(add(3,2));



let score:number[]=[1,2,3,4,5];
score.forEach((x)=>{
    console.log(x);
});

let student:{name:string,marks:number,ispass:boolean,branch:string}={
    name:"sam",
    marks:70,
    ispass:true,
    branch:"chemical"
};
student.marks=100;
console.log(student.marks);
//type inference
let age=10;
let mixed=[10,"hello",true];
console.log(age);
console.log(mixed);

function sub(a:number,b:number){
    return a-b;
}
console.log(sub(10,2));
//tuples
let person:[string,number]=["john",25];
console.log(person);
let person1:[string,number]=["sampat",22];
let [Username1,age1]=person1;
console.log(Username1);
