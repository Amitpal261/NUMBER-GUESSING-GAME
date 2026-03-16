let grid = document.querySelector(".number-grid");
let message = document.querySelector(".message");
let scoreEl = document.querySelector("#score");
let restartBtn = document.querySelector(".restart");

let score = 5;
let target = Math.floor(Math.random() * 30) + 1;
console.log(target);

grid.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;
    let userNumber = Number(e.target.value);
   if (userNumber === target) {
        message.innerText = "🎉 Correct! You Win!";
        message.style.color = "green";
        grid.style.pointerEvents = "none";
    }
    else {
        score--;
        if (score <= 0) {
           message.innerText = "💀 Game Over! Number was " + target;
            grid.style.pointerEvents = "none";
        }
        else if (userNumber < target) {
            message.innerText = "⬆️ Too Low!";
        }
        else {

            message.innerText = "⬇️ Too High!";
        }

        scoreEl.innerText = score;

    }

});

restartBtn.addEventListener("click", () => {

    score = 5;
    target = Math.floor(Math.random() * 30) + 1;
    console.log(target);
   
    scoreEl.innerText = score;
    message.innerText = "Guess the number between 1 - 30";
    message.style.color = "black";

    grid.style.pointerEvents = "auto";

});