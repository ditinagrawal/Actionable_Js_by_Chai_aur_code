// Activity - 1

const heading = document.querySelector("#heading");
heading.innerHTML = "Hello, World!";

const box = document.querySelector(".box");
box.style.backgroundColor = "red";

// Activity - 2
const newDiv = document.createElement("div");
newDiv.innerHTML = "I am a new div";
document.body.appendChild(newDiv);

const ul = document.querySelector("ul");
const li = document.createElement("li");
li.innerHTML = "I am a new li";
ul.appendChild(li);

// Activity - 3
ul.removeChild(ul.children[1]);

// Activity - 4
const img = document.querySelector("img");
img.src =
    "https://plus.unsplash.com/premium_photo-1719606207442-f9658ee04f1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8";

img.className = "new-img";
img.className = "";

// Activity - 5

const p = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    p.innerText = "I am a new paragraph";
});

img.addEventListener("mouseover", () => {
    img.style.border = "15px solid green";
});
