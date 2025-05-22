// 문제 : 숫자 n을 입력받아 1부터 n까지의 합을 반환하는 함수를 작성하세요.
let n = prompt("자연수를 입력해주세요.");

let calculate = (n) => {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    alert(sum);
};

calculate(n);
