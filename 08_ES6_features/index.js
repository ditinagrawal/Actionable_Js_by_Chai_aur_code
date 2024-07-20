// Activity - 1
const name = "Ditin Agrawal";
const age = 19;

console.log(`My name is ${name} and i'm ${age} years old`);
console.log(
    `My name is ${name} and i'm ${age} years old\nage * 2 = ${age * 2}`
);

// Activity - 2
const arr = [1, 2, 3, 4, 5, 6];
const book = {
    title: "My Book",
    author: "Me",
    publishedYear: 2024,
};

const { 0: first, 1: second } = arr;
const { title, author } = book;

console.log(first, second);
console.log(title, author);

// Activity - 3

const new_arr = [...arr, 7, 8, 9, 10];
console.log(new_arr);

function sum(...nums) {
    return nums.reduce((sum, current) => sum + current, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// Activity - 4
function product(num1, num2 = 1) {
    return num1 * num2;
}
console.log(product(5, 3));
console.log(product(5));

// Activity - 5
const x = 10;
const y = 20;

const coords = { x, y };
console.log(coords);

coords.say = function (x, y) {
    console.log(`x: ${x} , y: ${y}`);
};

coords.say(100, 400);
