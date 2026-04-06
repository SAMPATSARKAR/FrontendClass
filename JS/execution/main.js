//phasees of exe
// 1.creation phase-memory is allo,fxn stored,var are ini as undef
// 2.exe phase-code runs line by linefxn exe,var are assigned

//microtask vs macrotask
//promise ,asyn-await are microtask-they finish first-(highpriority)
//setTimeout,setInterval,DOM events are macrotask-they finish after micro

setTimeout(()=>{//macro
    console.log("Timeout");
    
},0);
Promise.resolve().then(()=>{//micro
    console.log("promise");
    
})
console.log("End");
