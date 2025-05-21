// 문제: 구구단 2단부터 9단까지 출력 (중첩 for문)
for (let i = 2; i <= 9; i++) {
    console.log(i + "단입니다.");
    for (let j = 1; j <= 9; j++) {
        let num = i * j;
        console.log(i + " * " + j + " = " + num + " ");
    }
    console.log();
}
