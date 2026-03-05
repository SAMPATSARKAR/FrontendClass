let x = document.querySelector(".timeoutPara");
x.addEventListener('mouseover',()=>{
    setTimeout(()=>{
        x.textContent="This mess app after 3 sec";
        x.style.backgroundColor="green"

    },3000)
})
let x2 = document.getElementById(".intervalPara");
x2.addEventListener('mouseover',()=>{
    setInterval(()=>{
        x2.textContent="Sampat";
        x2.style.backgroundColor="pink"
    },2000)
})