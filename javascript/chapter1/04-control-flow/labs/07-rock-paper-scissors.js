/* 
사용자와 컴퓨터가 가위바위보 게임을 합니다.
사용자는 "가위", "바위", "보" 중 하나를 입력하고, 컴퓨터는 무작위로 선택합니다.
3판 2선승제로 승부를 결정하세요.

-- 출력 예시 -- 

[1라운드]
당신의 선택: 가위
컴퓨터의 선택: 보
당신이 이겼습니다! (1승 0패)

[2라운드]
당신의 선택: 보
컴퓨터의 선택: 바위
당신이 이겼습니다! (2승 0패)

게임 종료: 당신의 승리입니다!

Math.random() - 난수 생성 함수
*/

let isGameRunning = true;
let round = 1;
let computerWins = 0;
let playerWins = 0;

while (isGameRunning) {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt(
        `[${round}라운드] <가위>, <바위>, <보> 중 하나를 입력해주세요.`
    );

    const resultMessage = determineWinner(playerChoice, computerChoice);

    alert(
        `[${round}라운드]
당신의 선택: ${playerChoice}
컴퓨터의 선택: ${computerChoice}
${resultMessage} (${playerWins}승 ${computerWins}패)`
    );

    if (playerWins == 2) {
        alert("🎉 게임 종료: 당신의 승리입니다!");
        isGameRunning = false;
    } else if (computerWins == 2) {
        alert("😢 게임 종료: 컴퓨터의 승리입니다!");
        isGameRunning = false;
    }

    round++;
}

function getComputerChoice() {
    let random = Math.random();

    if (random < 0.33) {
        return "가위";
    }

    if (random < 0.66) {
        return "바위";
    }

    return "보";
}

function determineWinner(player, computer) {
    if (player == computer) {
        return "비겼습니다.";
    }

    const isPlayerWin =
        (player == "가위" && computer == "보") ||
        (player == "바위" && computer == "가위") ||
        (player == "보" && computer == "바위");

    if (isPlayerWin) {
        playerWins++;
        return "당신이 이겼습니다!";
    } else {
        computerWins++;
        return "당신이 졌습니다.";
    }
}
