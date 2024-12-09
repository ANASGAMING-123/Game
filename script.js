let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const body = document.querySelector("body")
const userScorePara = document.querySelector("#userScore")
const compScorePara = document.querySelector("#compScore")

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx]
}

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText = "Draw!"
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin) =>{
    if(userWin){
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = "You Win!"
        msg.style.backgroundColor = "green"
    } else {
        compScore++
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose!"
        msg.style.backgroundColor = "red"
    }
};

const playGame = (userChoice) => {
    console.log("user choice =",userChoice)
    //Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice)


    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice = "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});