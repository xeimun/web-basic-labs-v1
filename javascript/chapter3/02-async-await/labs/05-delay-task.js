/*
[문제] async/await를 활용해
- 1초 대기(지연) 후 "대기 완료"를 출력하는 코드를 작성하세요.

[힌트]
- delay(ms) 함수는 Promise로 만들어도 됨
- await delay(1000) 후 console.log()
*/

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("대기 완료");
        }, ms);
    });
}

async function operate() {
    const complete = await delay(1000);
    console.log(complete);
}

operate();
