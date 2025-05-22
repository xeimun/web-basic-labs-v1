/* 주민번호에서 생년월일만 추출하세요 */
function extractBirthday(id) {
    return id.substring(0, 6);
}
console.log(extractBirthday("970101-1234567")); // "970101"
