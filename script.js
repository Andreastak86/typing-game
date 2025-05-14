const words = [
    "javascript",
    "fontenehuset",
    "entrepreneur",
    "coffee",
    "gaming",
    "fun",
    "accommodation",
    "typing",
    "retro",
    "coding",
    "challenge",
    "rhythm",
    "hierarchy",
    "keyboard",
    "surveillance",
];
let currentWord = "";
let score = 0;

const wordDisplay = document.getElementById("word-display");
const wordInput = document.getElementById("word-input");
const resultDisplay = document.getElementById("result");

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function setNewWord() {
    currentWord = getRandomWord();
    wordDisplay.textContent = currentWord;
    wordInput.value = "";
}

wordInput.addEventListener("input", () => {
    if (wordInput.value.trim() === currentWord) {
        score++;
        resultDisplay.textContent = `Poeng: ${score}`;
        setNewWord();
    }
});

setNewWord();

document.getElementById("resetBtn").addEventListener("click", () => {
    score = 0;
    resultDisplay.textContent = `Poeng: ${score}`;
    setNewWord();
    wordInput.focus();
});
