let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");
 

//generate computer choice
const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex]; 

}

const drawGame = () => {
    msg.innerText = "It was a draw! Play again!";
    msg.style.backgroundColor = "#2a4d69";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#7BC043";
    
    }else{
        compScore++;
        cScore.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice} :(`;
        msg.style.backgroundColor = "#ee4035";
    }
}


const playGame = (userChoice) => {
    const compChoice = gencompChoice();

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //either scissors or paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {

    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

