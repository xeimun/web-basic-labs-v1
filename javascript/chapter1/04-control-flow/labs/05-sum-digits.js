// TODO: prompt로 입력받은 숫자의 각 자릿수 합을 구하도록 while 루프를 사용하여 작성하세요.
let num = prompt("숫자를 입력해주세요"); // 문자열로 반환
// num = Number(num);
let sum = 0;

while (num > 0) {
    sum += num % 10; // 산술 연산 (%, /)이 들어가면 자바스크립트가 자동으로 형변환해서 문자열 → 숫자로 바꿔준다.
    num = Math.floor(num / 10);
}

alert("입력받은 숫자의 각 자릿수 합은 " + sum + "입니다.");
