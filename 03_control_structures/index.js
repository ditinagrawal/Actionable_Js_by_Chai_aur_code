// Activity - 1

const num = 10;
if (num == 0) {
    console.log("Zero");
} else if (num > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}

const age = 13;
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// Activity - 2
const num1 = 10;
const num2 = 20;
const num3 = 30;

if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2);
} else {
    console.log(num3);
}

// Activity - 3
const key = 2;

switch (key) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid key");
        break;
}

const score = 70;

switch (true) {
    case score > 90:
        console.log("A");
        break;
    case score > 80 && score <= 90:
        console.log("B");
        break;
    case score > 70 && score <= 80:
        console.log("C");
        break;
    case score > 60 && score <= 70:
        console.log("D");
        break;
    case score <= 60:
        console.log("F");
        break;
    default:
        break;
}

// Activity - 4

const evenOrOddNum = 90;

evenOrOddNum % 2 === 0 ? console.log("Even") : console.log("Odd");

// Activity - 5
const year = 2020;

if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}
