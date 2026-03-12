// --- Core Game Logic ---

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }

  if (userChoice === "rock") {
    return computerChoice === "paper" ? "The computer won!" : "The user won!";
  }

  if (userChoice === "paper") {
    return computerChoice === "scissors" ? "The computer won!" : "The user won!";
  }

  if (userChoice === "scissors") {
    return computerChoice === "rock" ? "The computer won!" : "The user won!";
  }
};

// --- DOM Interaction ---

// 1. Select the HTML elements
const buttons = document.querySelectorAll('.choice-btn');
const userDisplay = document.getElementById('user-display');
const computerDisplay = document.getElementById('computer-display');
const winnerText = document.getElementById('winner-text');

// 2. The Play Game function
const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();

  // Update the screen text
  userDisplay.textContent = `User Choice: ${userChoice}`;
  computerDisplay.textContent = `Computer Choice: ${computerChoice}`;
  winnerText.textContent = determineWinner(userChoice, computerChoice);
};

// 3. Add click listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // We use the button's ID (rock, paper, or scissors) as the choice
    playGame(button.id);
  });
});
