let userchoice = window.prompt("rock, paper or scissors? Use small letters only please.")

function getcomputerchoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices [Math.floor(Math.random() * choices.length)]
}

let computerchoice = getcomputerchoice();

function playRound(userchoice, computerchoice) {
    if ((userchoice == "rock" && computerchoice =="scissors") || 
    (userchoice == "paper" && computerchoice =="rock") ||
     (userchoice == "scissors" && computerchoice =="paper")) {
        console.log("You win")
    }
    else if (userchoice == computerchoice) {
        console.log("It's a tie")
    }
    else {
        console.log ("You lose")
    }
}



console.log(playRound(userchoice, computerchoice));

