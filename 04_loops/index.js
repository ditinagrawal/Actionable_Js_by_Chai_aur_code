// Activity - 1

for (let i = 1; i < 11; i++) {
    console.log(i);
}

for (let i = 1; i < 11; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}

// Activity - 2

let num = 1;
let sum = 0;
while (num != 11) {
    sum += num;
    num++;
}
console.log(sum);

let number = 10;
while (number != 0) {
    console.log(number);
    number--;
}

// Activity - 3

let a = 1;
do {
    console.log(a);
    a++;
} while (a != 6);

let f = 5;
let fac = 1;
do {
    fac *= f;
    f--;
} while (f != 0);

console.log(fac);

// Activity - 4

let pattern = "";

for (let n = 1; n <= 5; n++) {
    for (let num = 1; num <= n; num++) {
        pattern += "* ";
    }
    pattern += "\n";
}
console.log(pattern);

// Activity - 5

for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 7) break;
    console.log(i);
}
