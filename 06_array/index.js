// Activity - 1

const numArr = [1, 2, 3, 4, 5];
console.log(numArr);

console.log(numArr[0]);
console.log(numArr[4]);

// Activity - 2
numArr.push(6);
console.log(numArr);
numArr.pop();
console.log(numArr);
numArr.shift();
console.log(numArr);
numArr.unshift(1);
console.log(numArr);

// Activity - 3

numArr.map((num) => console.log(num));
numArr.filter((num) => (num % 2 === 0 ? console.log(num) : null));
numArr.reduce((acc, num) => {
    console.log(acc + num);
    return acc + num;
});

// Activity - 4

for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
}

numArr.forEach((e) => {
    console.log(e);
});

// Activity - 5

const twoDArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(twoDArr);
console.log(twoDArr[1][1]);
