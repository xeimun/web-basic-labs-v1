// [문제] Promise객체를 이용해 ms초 후에 문자열 msg를 출력하는 비동기 함수를 작성해보세요.
function delay(ms, msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(msg);
            resolve("성공");
        }, ms);
    });
}

delay(1000, "비동기");
console.log("...");
