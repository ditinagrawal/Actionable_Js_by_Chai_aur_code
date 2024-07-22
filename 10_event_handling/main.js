// Activity - 1

const p = document.querySelector("p");
p.addEventListener("click", () => {
    p.innerText = "I was clicked!";
});

const img = document.querySelector("img");
img.addEventListener("dblclick", () => {
    if (img.style.display == "none") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
});

// Activity - 2
const box = document.querySelector(".box");
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "blue";
});
box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "black";
});

// Activity - 3
const input = document.querySelector("input");
input.addEventListener("keydown", () => {
    console.log(input.value);
});
