let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".ch");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomindx = Math.floor(Math.random() * 3);
    return options[randomindx];
}
const playGame = (userChoice) => {
    console.log(`User Choice = ${userChoice}`);
    const compChoice = genCompChoice();
    console.log(`Computer Choice = ${compChoice}`);

    if (userChoice === compChoice) {
        return msg.innerText = "TIE";
    }
    if (compChoice === "rock") {
        if (userChoice == "scissors") {
            compScore++;
            comp.innerText = compScore;
            return msg.innerText = "Computer Score";
        }
        else {
            userScore++;
            user.innerText = userScore;
            return msg.innerText = "User Score";
        }
    }
    if (compChoice === "paper") {
        if (userChoice == "rock") {
            compScore++;
            comp.innerText = compScore;
            return msg.innerText = "Computer Score";
        }
        else {
            userScore++;
            user.innerText = userScore;
            return msg.innerText = "User Score";
        }
    }
    if (compChoice === "scissors") {
        if (userChoice == "paper") {
            compScore++;
            comp.innerText = compScore;
            return msg.innerText = "Computer Score";
        }
        else {
            userScore++;
            user.innerText = userScore;
            return msg.innerText = "User Score";
        }
    }
}

choice.forEach((ch) => {
    ch.addEventListener("click", () => {
        const userChoice = ch.getAttribute("id")
        playGame(userChoice);
    })
})