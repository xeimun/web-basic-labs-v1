// 문제: 배열 내 최소값, 최대값을 찾아보세요.

const numbers = [15, 3, 20, 8, 42];

let max = -Infinity;
let min = Infinity;
for (let number of numbers) {
    if (number > max) {
        max = number;
    }
    if (number < min) {
        min = number;
    }
}
console.log(numbers);
console.log("최대값: " + max);
console.log("최소값: " + min);
