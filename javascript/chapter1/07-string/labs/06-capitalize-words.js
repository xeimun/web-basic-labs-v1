/* 모든 단어의 첫 글자를 대문자로 바꾸기 */
function capitalizeWords(sentence) {
    // TODO: split → map → join
    let arr = sentence.split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }

    return arr.join(" ");
}

console.log(capitalizeWords("hello javascript world")); // "Hello Javascript World"
