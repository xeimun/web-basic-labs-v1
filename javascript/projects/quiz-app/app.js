const viewStart = document.querySelector("#view-start");
const viewQuiz = document.querySelector("#view-quiz");
const viewResult = document.querySelector("#view-result");
const quizCnt = document.querySelector("#select-count");

const progress = document.querySelector("#progress");
const quizBox = document.querySelector("#quiz-box");

const startBtn = document.querySelector("#start-btn");

const submitBtn = document.querySelector("#submit-btn");

let currentQuizCnt = 1;
let answerCnt = 0;
let quizSet; // 전체 퀴즈 문제
let quizObj; // 현재 퀴즈 문제
let quized = []; // 푼 문제들
let answers = []; // 정답은 true, 오답은 false (quized 배열과 순서 대응)

// 1. 문제 페이지 로딩
startBtn.addEventListener("click", async () => {
    viewStart.style.display = "none";
    viewQuiz.style.display = "";

    await getQuizSet();
    getRandomQuiz();
    createQuizeBox();
    activateButton();
});

async function getQuizSet() {
    try {
        const response = await fetch("./data/questions.json");
        quizSet = await response.json();
    } catch (err) {
        console.log("에러 발생: ", err);
    }
}

function getRandomQuiz() {
    const randomIndex = Math.floor(Math.random() * quizSet.length);
    quizObj = quizSet.splice(randomIndex, 1)[0];
    quized.push(quizObj);
}

async function createQuizeBox() {
    progress.textContent = `${currentQuizCnt}/${quizCnt.value}`;
    quizBox.innerHTML = `<div>${quizObj.question}</div>
    <div id="radioBtn">
    <div><label><input type="radio" name="answer" value="0">${quizObj.choices[0]}</label></div>
    <div><label><input type="radio" name="answer" value="1">${quizObj.choices[1]}</label></div>
    <div><label><input type="radio" name="answer" value="2">${quizObj.choices[2]}</label></div>
    <div><label><input type="radio" name="answer" value="3">${quizObj.choices[3]}</label></div>
    </div>`;
}

function activateButton() {
    const radioBtn = document.querySelector("#radioBtn");
    radioBtn.addEventListener("click", () => {
        submitBtn.disabled = false;
    });
}

// 2. 문제 풀이
submitBtn.addEventListener("click", () => {
    console.log("현재 문제 번호: " + currentQuizCnt);
    console.log("전체 문제 수: " + quizCnt.value);

    currentQuizCnt++;
    const selected = document.querySelector('input[name="answer"]:checked');
    if (quizObj.answer == selected.value) {
        answers.push(true);
    } else {
        answers.push(false);
    }

    if (currentQuizCnt > quizCnt.value) {
        viewQuiz.style.display = "none";
        viewResult.style.display = "";
        console.log(answers);
    }

    nextQuiz();
});

function nextQuiz() {
    getRandomQuiz();
    createQuizeBox();
}

// 3. 결과 페이지 로딩
