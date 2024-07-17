// Activity - 1

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

function returnSquare(num) {
    return num * num;
}

// Activity - 2

function maxOfTwo(num1, num2) {
    num1 > num2 ? console.log(num1) : console.log(num2);
}

const res = function concatTwoStrings(str1, str2) {
    return str1 + str2;
};

// Activity - 3

const sum = (num1, num2) => num1 + num2;

const isCharPresent = (str, char) => {
    return str.includes(char);
};

// Activity - 4

const product = (num1, num2 = 5) => num1 * num2;

const greet = (name, age = 19) =>
    console.log(`Hello ${name}, you are ${age} years old`);

// Activity - 5

function counter() {
    let count = 1;
    return function () {
        return count++;
    };
}

const count = counter();

console.log(count());
console.log(count());
console.log(count());
