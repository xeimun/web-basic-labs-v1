/*
학생 점수를 A, B, C, F 등급으로 변환하여 출력하세요.
힌트: map 사용, 조건문 포함
*/

const scores = [92, 77, 45, 88, 64];

// TODO: map을 사용해 점수를 등급으로 변환하세요.
// 90 이상: A, 80 이상: B, 70 이상: C, 60 이상: D, 나머지: F
const grades = scores.map((n) => {
    if (n >= 90) return "A";
    if (n >= 80) return "B";
    if (n >= 70) return "C";
    if (n >= 60) return "D";
    return "F";
});

console.log(scores);
console.log(grades);
