// 문제 : 재귀 함수로 1부터 n까지의 합을 구하세요
// 예: sumTo(5) → 15
let n = Number(prompt("자연수를 입력해주세요."));

let sumTo = function (n) {
    if (n == 1) {
        return 1;
    }

    return n + sumTo(n - 1);
};

alert(sumTo(n));
