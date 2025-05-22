// 문제: 사용자가 정답 숫자를 맞힐 때까지 계속 입력받는 게임을 만들어보세요. (while 사용)
// Math.random()으로 1~10 중 하나를 고르고 맞힐 때까지 반복
// prompt()

const answer = Math.floor(Math.random() * 10) + 1;
let flag = true;

while (flag) {
    let num = prompt("숫자를 입력해주세요.");
    if (num == answer) {
        alert("정답!");
        flag = false;
    } else {
        alert("오답!");
    }
}

// readline 사용
/*
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const answerNum = Math.floor(Math.random() * 10) + 1;
console.log("답: " + answerNum);

function ask() {
    rl.question("숫자를 입력하세요 (1~10): ", (num) => {
        const guess = Number(num);
        if (guess === answerNum) {
            console.log("정답입니다!");
            rl.close();
        } else {
            console.log("틀렸습니다. 다시 시도하세요.");
            ask(); // 재귀 호출
        }
    });
}

ask();
*/
