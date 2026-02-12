// const display=(sum)=>{
//     console.log(`sum is ${sum}`);
    
// }
// const add1=(a,b,result)=>{
//     result(a+b);
// }
// add1(2,3,display);

// even
const even=(a,result)=>{

    for(let i=0;i<a;i++){
        if(i%2===0){
            result(i);
        }
    }
}
const display=(a)=>{
    console.log(`even no is ${a}`);
    
}
even(10,display);