//when js runs before the html is fully loaded,it may not find element. To solve this we use DOMContentLoaded event.

document.addEventListener("DOMContentLoaded",()=>{
    for(let i=1;i<=4;i++){
        const divs = document.createElement("div");
        divs.className="box";
        divs.textContent = `Box${i}`;
        document.body.appendChild(divs);
    }
})
// capturing phase- when event is triggered it first goes to the root element and then goes down to the target element.
// target phase- when event reaches the target element.
// bubbling phase- when event is triggered it first goes to the target element and then goes up to the root element.
