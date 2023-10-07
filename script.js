function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    const playerChoiceElement = document.getElementById("player-choice");
    const computerChoiceElement = document.getElementById("computer-choice");
    const resultElement = document.getElementById("result");
  
    playerChoiceElement.textContent = "Your choice: " + userChoice;
    computerChoiceElement.textContent = "Computer choice: " + computerChoice;
  
    if (userChoice === computerChoice) {
      resultElement.textContent = "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      resultElement.textContent = "You win!";
    } else {
      resultElement.textContent = "You lose!";
    }
  }
  
  // Add event listeners to buttons
  document.getElementById("rock").addEventListener("click", function () {
    playGame("rock");
  });
  
  document.getElementById("paper").addEventListener("click", function () {
    playGame("paper");
  });
  
  document.getElementById("scissors").addEventListener("click", function () {
    playGame("scissors");
  });
  