let div1 = document.querySelector(".card");
let button1 = document.querySelector("#btn");
div1.addEventListener("click", () => {
    console.log('Card Clicked');
},false);
button1.addEventListener("click", (event) => {
    console.log('Button Clicked');
    console.log(event.target);
    console.log(event.type);
    // event.stopPropagation();
},true);
//event Delegation- instead of adding event listener to each child element we can add event listener to parent element and then check the target element in the event object.