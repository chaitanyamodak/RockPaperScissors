let userScore=0;
let compScore=0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="blue";
};


const showWinnner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log(`You win! Your ${userChoice} beats ${compChoice}.`);
        msg.innerText=`You win! ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log(`You lost. ${compChoice} beats your ${userChoice}.`);
        msg.innerText=`You lost. ${compChoice} beats your choice ${userChoice}.`;
        msg.style.backgroundColor="red";
    }
};


const playGame = (userChoice) => {
    console.log("User choice = ",userChoice);
    //generate  computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice = ",compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true; 
        }
        else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinnner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});