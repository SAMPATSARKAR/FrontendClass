



let user = {
    name:"John Doe"
};

document.getElementById("username").innerText = user.name;




let jobList = [
"Frontend Developer",
"Backend Developer",
"Python Developer",
"Full Stack Developer"
];

let jobContainer = document.getElementById("jobs");

jobList.forEach(job=>{
    
    let div = document.createElement("div");
    div.className="job";
    div.innerText = job;
    
    jobContainer.appendChild(div);

});




function toggleSidebar(){

    let sidebar = document.querySelector(".sidebar");

    if(sidebar.style.display === "none"){
        sidebar.style.display="block";
    }else{
        sidebar.style.display="none";
    }

}

