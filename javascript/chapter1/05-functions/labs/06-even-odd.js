// 문제 : 짝수인지 홀수인지 여부를 판단하는 함수를 작성하세요.
// TODO: checkEvenOdd(num) → 짝수면 Even, 홀수면 Odd 반환

let num = prompt("숫자를 입력해주세요.");

let checkEvenOdd = function (num) {
    if (num % 2 == 0) {
        alert("Even");
    } else {
        alert("Odd");
    }
};

checkEvenOdd(num);
