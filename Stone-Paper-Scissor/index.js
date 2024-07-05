let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgBox = document.querySelector(".msg-box");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}
const drawGame = () => {
    console.log("Game is Draw");
    msg.innerText = "Game was Draw.";
    msgBox.style.backgroundColor  = "pink";
}
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won! ${userChoice} beats ${compChoice}`;
        msgBox.style.backgroundColor  = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${userChoice} beats ${compChoice}`;
        msgBox.style.backgroundColor  = "red";
    }
}
const playGame = (userChoice) =>{
    console.log("User Choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice = ",compChoice);
    if(userChoice === compChoice)
        drawGame();
    else{
        let userWin = true;
        if(userChoice === "rock")
            userWin = compChoice === "paper" ? false : true;
        else if(userChoice === "paper")
            userWin = compChoice === "scissor" ? false : true;
        else
            userWin = compChoice === "rock" ? false : true;
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});