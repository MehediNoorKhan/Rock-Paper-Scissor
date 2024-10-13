let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector(".reset");


const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    // console.log(`Game has been drawn`);
    msg.innerText = "Game has been drawn";
    msg.style.backgroundColor = "Black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = `${userScore}`;
        msg.innerText = `You have won the game, ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }
    else {
        compScore++;
        compScorePara.innerText = `${compScore}`;
        msg.innerText = `Computer has won the game, ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
};

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = `${userScore}`;
    compScorePara.innerText = `${compScore}`;
    msg.innerText = `Game has been reset`;
    msg.style.backgroundColor = "Black";
};

const playGame = (userChoice) => {
    // console.log(`user choice is ${userChoice}`);
    const compChoice = getCompChoice();
    // console.log(`computer choice is ${compChoice}`);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice == "rock") {
            userWin = compChoice === "paper" ? false : true;
        }

        else if (userChoice == "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);

    }


};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}
);

resetBtn.addEventListener("click", resetGame);