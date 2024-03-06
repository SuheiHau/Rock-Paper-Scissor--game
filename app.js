let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const userScorePara=document.querySelector("#user-score")
const compScorePar=document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"]; // Changed variable name from "option" to "options"
    const randInx = Math.floor(Math.random() * 3);
    return options[randInx]; // Changed variable name from "option" to "options"
};

const draw = () => {
   // console.log("game was draw"); // Changed "draw()" to "console.log()"
    msg.innerText="Game was draw. Play again!!";
    msg.style.backgroundColor="#081b31"
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore ++
        userScorePara.innerText=userScore
        msg.innerText=`You Win  Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
    } else {
        compScore ++ // Fixed variable name from "userScore" to "compScore"
        compScorePar.innerText=compScore // Fixed variable name from "userScore" to "compScore"
        msg.innerText=`You Loose ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor="red"
    }
};


const playGame = (userChoice) => {
    console.log("user choice=", userChoice);
    // geneerate comp choice
    const compChoice = genCompChoice();
    console.log("computer choice=", compChoice);

    if (userChoice === compChoice) {
        // draw()
        draw(); 
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // papar or scissor
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice == "paper") {
            // scissor or stone
            userWin = compChoice === "scissor" ? false : true;
        } else {
            // rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was click", userChoice);
        playGame(userChoice);
    });
});
