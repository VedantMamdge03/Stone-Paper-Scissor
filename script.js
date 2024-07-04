let playerScore=0;
let botScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const playerScorePara=document.querySelector("#player-score");
const botScorePara=document.querySelector("#bot-score");

const genBotChoice=()=>{
    const options=["rock", "paper", "scissors"];
    const randi=Math.floor(Math.random()*3);
    return options[randi];
};

const drawGame=()=>{
    msg.innerHTML="Game was Draw. Play again.";
    msg.computedStyleMap.backgroundColor="black";
};

const showWinner = (playerWin, playerChoice, botChoice) => {
    if(playerWin) {
        playerScore++;
        playerScorePara.innerText = playerScore;
        msg.innerText = `You win! Your ${playerChoice} beats ${botChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        botScore++;
        botScorePara.innerText = botScore;
        msg.innerText = `You lost. ${botChoice} beats your ${playerChoice}`;
        msg.style.backgroundColor = "red";
    }
};
  
const playGame = (playerChoice) => {
    const botChoice = genBotChoice();
    if(playerChoice === botChoice) {
        drawGame();
    }
    else {
        let playerWin = true;
        if (playerChoice === "rock") {
            playerWin = botChoice === "paper" ? false : true;
        }
        else if(playerChoice === "paper") {
            playerWin = botChoice === "scissors" ? false : true;
        }
        else {
            playerWin = botChoice === "rock" ? false : true;
        }
        showWinner(playerWin, playerChoice, botChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const playerChoice=choice.getAttribute("id");
        playGame(playerChoice);
    });
});