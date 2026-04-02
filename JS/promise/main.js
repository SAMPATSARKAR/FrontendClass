//.then-resolve
//.catch-reject
//.finally-fullfilled
// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         // resolve("Success");
//         reject("Failure");
//     })
// }
// let p1 = getPromise();
// p1.then((res)=>{
//     console.log("fullfilled promise",res);
//     return;
    
// })
// .catch((rej)=>{
//     console.log("rejected",rej);
//     return;
    
// })
const getData=(dataid)=>{
    
    return new Promise((res,rej)=>{
            setTimeout(()=>{
            if(dataid === 3){
                rej("Error occured");
            }
            else{
                res();
            }})
        },2000)
};
// getData(1)
// .then(
//     ()=>{
//         return getData(2);
//     }
// ).then(()=>{
//     return getData(3)
//     .catch(
//         (err)=>(
//             console.log(err)
//         ))
// })
// .catch((err)=>{
//     console.log("Error",err);
    
// })
const fetchData = async ()=>{
    try{
        await getData(1).catch((err)=>(console.log(err)));
        await getData(2).catch((err)=>(console.log(err)));
        await getData(3).catch((err)=>(console.log(err)));
    }
    catch(err){
        console.log("Error",err);
    }
}
// fetchData();

// In a weather forecasting app, demonstrate async exe using setTimeout(),Promise and async/await to simulate fetching weather data,
// processing the data, and displying the weather report



const weatherData = ()=>{
    return new Promise((res,resj)=>{
        setTimeout(()=>{
            const data = {
                city: "New York",
                temperature: 25,
                condition: "sunny"
            }
            res(data);
        },2000)
    })
}
const processWeatherData = (data)=>{        
    return new Promise((res,resj)=>{
        setTimeout(()=>{
            const processedData = {
                city: data.city,
                temperature: `${data.temperature}°C`,
                condition: data.condition.toUpperCase()
            };
            res(processedData);
        },1000)
    })
}
const displayWeatherReport = (data)=>{
    console.log(`Weather Report for ${data.city}:`);
    console.log(`Temperature: ${data.temperature}`);
    console.log(`Condition: ${data.condition}`);
}
const getWeatherReport = async ()=>{
    try{
        const data = await weatherData();
        const processedData = await processWeatherData(data);
        displayWeatherReport(processedData);
    }
    catch(err){
        console.log("Error fetching weather data",err);
    }
}
// getWeatherReport(); 




// in a ride booking application(like cab service), demonstrate async execution
// using setTimeout(), Promise, and async/await to simulate booking a ride, processing the booking, 
// and confirming the ride details.

const bookRide = (pickup, drop) =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            const rideDetails = {
                pickup: pickup,
                drop: drop,
                driver: "John Doe",
                car: "Toyota Camry"
            }
            res(rideDetails);
        },2000)
    })
}
const processBooking = (details)=>{
    return new Promise((res, rej)=>{            
        setTimeout(()=>{    
            const processedDetails = {
                pickup: details.pickup,
                drop: details.drop,
                driver: details.driver,
                car: details.car,
                status: "Confirmed"
            }
            res(processedDetails);
        },1000)
    })
}
const confirmRide = (details)=>{
    console.log(`Ride Details:`);
    console.log(`Pickup Location: ${details.pickup}`);
    console.log(`Drop Location: ${details.drop}`);
    console.log(`Driver: ${details.driver}`);
    console.log(`Car: ${details.car}`);
    console.log(`Status: ${details.status}`);
}
const bookAndConfirmRide = async (pickup, drop)=>{
    try{
        const rideDetails = await bookRide(pickup, drop);
        const processedDetails = await processBooking(rideDetails);
        confirmRide(processedDetails);
    }
    catch(err){
        console.log("Error booking ride", err);
    }
}
bookAndConfirmRide("123 Main St", "456 Elm St");