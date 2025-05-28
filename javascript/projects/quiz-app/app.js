const viewStart = document.querySelector("#view-start");
const viewQuiz = document.querySelector("#view-quiz");
const viewResult = document.querySelector("#view-result");
const quizCnt = document.querySelector("#select-count"); // 선택한 퀴즈 개수

const progress = document.querySelector("#progress");
const quizBox = document.querySelector("#quiz-box");
const score = document.querySelector("#score");

const startBtn = document.querySelector("#start-btn");

const submitBtn = document.querySelector("#submit-btn");

let currentQuizCnt = 1;
let quizSet; // 전체 퀴즈 문제
let quizObj; // 현재 퀴즈 문제
let quized = []; // 푼 문제들
let selectedAnswer = [];
let OX = [];

// 1. 문제 페이지 로딩
startBtn.addEventListener("click", async () => {
    viewStart.style.display = "none";
    viewQuiz.style.display = "";

    await getQuizSet();
    getRandomQuiz();
    createQuizBox();
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

async function createQuizBox() {
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
    currentQuizCnt++;
    const selected = document.querySelector('input[name="answer"]:checked');
    selectedAnswer.push(selected.value)

    if (currentQuizCnt > quizCnt.value) {
        viewQuiz.style.display = "none";
        viewResult.style.display = "";

        const passCnt = getPassCnt();
        createScoreMessage(passCnt);
        for (let i = 0; i < quized.length; i++) {
            createReview(i);
        }  

        return; // 다음 문제 안 가도록 종료
    }

    nextQuiz();
});

function nextQuiz() {
    getRandomQuiz();
    createQuizBox();
}

// 3. 결과 페이지 로딩

function getPassCnt(){
    let passCnt = 0;

    for(let i = 0; i< quized.length; i++){
        if(quized[i].answer == selectedAnswer[i]){
            passCnt++;
            OX.push("O");
        } else{
            OX.push("X");
        }
    }

    return passCnt;
}

function createScoreMessage(passCnt){
    score.innerHTML = `<div>총 ${quizCnt.value}문제 중 ${passCnt}개 정답!</div>`;
}

function createReview(i){
    score.innerHTML += `<div class="review">
    <div><span>Q${i}.</span> <span>${OX[i]}</span></div>
    <div>${quized[i].question}</div>
    <div>내 선택 ${Number(selectedAnswer[i]) + 1}번: ${quized[i].choices[selectedAnswer[i]]}</div>
    <div>정답 ${Number(quized[i].answer) + 1}번: ${quized[i].choices[quized[i].answer]}</div>
    </div>`;
}
