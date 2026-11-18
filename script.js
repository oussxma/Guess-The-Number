let guess = Math.floor(Math.random() * 100) + 1;
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const guessOut = document.getElementById("guess-out");
const result = document.getElementById("attemptsCounter");
const resetWins = document.getElementById("resetWins");

let index = localStorage.getItem("counter") || 0;

result.textContent = index === 1 ? `${index} Win` : `${index} Wins`;

submit.addEventListener("click", function () {
  let inputValue = Number(input.value.trim());

  if (
    input.value.trim() === "" ||
    !Number.isInteger(inputValue) ||
    inputValue < 1 ||
    inputValue > 100
  ) {
    guessOut.textContent = "Enter a valid number between 1 and 100";
    return;
  }

  if (inputValue < guess) {
    guessOut.textContent = "The number is larger";
  } else if (inputValue > guess) {
    guessOut.textContent = "The number is smaller";
  } else if (inputValue === guess) {
    guessOut.textContent = "The number is correct";
    result.textContent = ++index === 1 ? `${index} Win` : `${index} Wins`;
    guess = Math.floor(Math.random() * 100) + 1;
    input.value = "";
  } else {
    guessOut.textContent = "Enter a Number";
  }

  localStorage.setItem("counter", index);
});

resetWins.addEventListener("click", function () {
  index = 0;
  result.textContent = "0 Wins";
  localStorage.removeItem("counter");
});
