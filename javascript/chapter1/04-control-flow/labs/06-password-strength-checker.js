/* 사용자가 입력한 비밀번호가 다음 조건을 만족하는지 확인하고 모든 조건 만족 시 "강한 비밀번호", 아니면 부족한 항목을 명시하세요.
조건:
- 길이 8자 이상
- 대문자 1개 이상
- 숫자 1개 이상
- 특수문자 1개 이상 (!@#$%^&*)
*/

let password = prompt("비밀번호를 입력해주세요.");

let tokens = password.split("");
let length = tokens.length;

let isValidLength = false;
let hasUpperCase = false;
let hasNumber = false;
let hasSpecial = false;

if (length >= 8) {
    isValidLength = true;
}

for (let token of tokens) {
    if (isUpperCase(token)) {
        hasUpperCase = true;
    }
    if (isDigit(token)) {
        hasNumber = true;
    }
    if (isSpecialChar(token)) {
        hasSpecial = true;
    }
}

if (isValidLength && hasUpperCase && hasNumber && hasSpecial) {
    alert("강한 비밀번호");
}
if (!isValidLength) {
    alert("비밀번호 길이는 8자 이상이어야 합니다.");
}
if (!hasUpperCase) {
    alert("대문자 1개 이상 포함해야 합니다.");
}
if (!hasNumber) {
    alert("숫자 1개 이상 포함해야 합니다.");
}
if (!hasSpecial) {
    alert("특수문자 1개 이상 포함해야 합니다.");
}

function isUpperCase(char) {
    return char === char.toUpperCase() && char !== char.toLowerCase();
}

function isDigit(char) {
    const code = char.charCodeAt(0);
    return code >= 48 && code <= 57; // '0' = 48, '9' = 57
}
function isSpecialChar(char) {
    return /[!@#$%^&*]/.test(char);
}
