//add eventListner
// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     console.log('Clicked');
// });
// let x = document.querySelector(".paragraph");
// x.addEventListener("mouseover", () => {
//     x.style.backgroundColor = "yellow";
// });
// x.addEventListener("mouseout", () => {
//     x.style.backgroundColor = "white";
// });
let y = document.querySelector("#btn");
y.addEventListener("click",() => {
    if(document.body.style.backgroundColor === "black"){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

    }else{
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
});
let z = document.querySelector("#password");
let message = document.querySelector(".paragraph");
z.addEventListener('focus',()=>{
    z.style.border = '5px solid green'
    message.style.display= "block";
})
z.addEventListener('blur',()=>{
    z.style.border = '5px solid red'
    message.style.display="none"
})


// let button1 = document.querySelector("#btn1");
// button1.addEventListener("click", (event) => {
//     console.log('Button 1 Clicked');
//     console.log(event.target);
//     console.log(event.type);
    
    
// });

// button1.addEventListener("mouseover", func = () => {
//     console.log('Mouseover on Button 1');

// });

// button1.addEventListener("mouseout", func1 = () => {
//     console.log('Mouseout from Button 1');
// });

// button1.addEventListener("dblclick", () => {
//     console.log('Button 1 Double Clicked');
// });
// button1.removeEventListener("mouseover", func);
// button1.removeEventListener("mouseout", func1);