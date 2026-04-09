let globalVar="I'm global";
function outer(){
    let outervar = "I'm outer";
    function inner(){
        let innervar = "I'm inner";
        console.log(innervar);
        console.log(outervar);
        console.log(globalVar);
    }
    inner();
}
outer();