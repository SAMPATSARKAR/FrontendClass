// let students={
//     "name":"Sampat",
//     marks:100,
//     printMarks:(marks)=>(
//         console.log("Marks obtained are:- ",marks)
        
//     )
// }
// students.printMarks(100);

// let employee={
//     caltax(){
//         console.log("tax rate is 10%")

//     }
    
// }
// let employee1={
//     salary:10000
// }

// let employee2={
//     salary:20000
// }

// let employee3={
//     salary:30000
    
// }


// employee1.__proto__=employee;
// employee2.__proto__=employee;
// employee3.__proto__=employee;

// employee.caltax();
// employee1.caltax();
// employee2.caltax();
// employee3.caltax();

// let user = {
//     login(){
//         console.log(this.name+" logged in");
//     }

// }

//create = new obj with user as a prototype
// let admin=Object.create(user);
// admin.name="sampat",
// admin.role="admin";
// admin.login();
// console.log(admin.role);

//constructor
// function person(name,occupation,yob){
//     this.name=name;
//     this.occupation=occupation;
//     this.yob=yob;
//     this.calculateage=function(){
//         let currentyear=new Date().getFullYear();
//         return (currentyear-this.yob);
//     }
// }
// let sam=new person("raj","student",2003);
// console.log(sam);
// console.log(sam.calculateage());

// person.prototype.calculateage=function(){
//     let currentyear = new Date().getFullYear();
//     return currentyear-this.yob;
// }
// person.prototype.city="london"
// let jack=new person("jack",2003,"engineer");
// console.log(jack.calculateage());
// //prototyping chaining

class car{

    start(){
        console.log("Start the car");
        
    }
    stop(){
        console.log("Stop the car");
        
    }
    carbrand(brand){
        this.brand=brand;
        
    }
    getter(){
        console.log(this.brand);
    }
}

let car1=new car();
car1.carbrand("lexus");
let car2 = new car();
car2.carbrand("maruti")
car1.getter();
car2.getter();