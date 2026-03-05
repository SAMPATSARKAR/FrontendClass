let accordion = document.querySelector("#accordian");
let button = document.querySelector(".button");
let cnt = 4;

// Add new section
button.addEventListener("click", function () {
    let newSection = document.createElement("div");

    newSection.innerHTML = `
        <h3>Section ${cnt}</h3>
        <div class="content" style="display:none;">
            <h1>content of section ${cnt}</h1>
        </div>
    `;

    accordion.appendChild(newSection);
    cnt++;
});


// Event Delegation
accordion.addEventListener("click", function (event) {

    if (event.target.tagName === "H3") {

        let content = event.target.nextElementSibling;

        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }

    }

});