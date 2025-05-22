// 문제 : 세 개의 숫자를 입력받아 평균을 반환하는 함수를 작성하세요.
let first = Number(prompt("첫 번째 숫자를 입력하세요."));
let second = Number(prompt("두 번째 숫자를 입력하세요."));
let third = Number(prompt("세 번째 숫자를 입력하세요."));

let avg = function (first, second, third) {
    alert((first + second + third) / 3);
};

avg(first, second, third);
