// TODO: student 객체를 생성하고 name, age, major 속성을 포함하세요.
// 그 후 각 속성을 출력해보세요.

const student = {
    // 여기에 name, age, major 추가
    name: "민주",
    age: 28,
    major: "Phisical Training",
};

// 예시 출력:
// 이름: 윤학생
// 나이: 21
// 전공: 컴퓨터공학
console.log("이름: " + student.name);
console.log("나이: " + student.age);
console.log("전공: " + student.major);
console.log("name" in student);
console.log(student.hasOwnProperty("age"));

student.grade = "A+";
delete student.age;

console.log("이름: " + student.name);
console.log("나이: " + student.age);
console.log("전공: " + student.major);
console.log("성적: " + student.grade);
