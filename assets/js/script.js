const compChoice = document.getElementById('computer-choice');
const yourChoice = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const playButton = document.getElementById('manifest');
const possibleChoices = ['fire', 'water', 'air', 'earth'];

// Function to generate a random choice for the computer //
const choices = document.getElementsByName('choice');
choices.forEach((c) => {
    c.addEventListener('click', () => {
        playButton.disabled = false;
    });
});

playButton.addEventListener('click', (e) => {
    const buttonsArray = Array.from(choices);
    const selected = buttonsArray.filter((b) => b.checked);
    addTextToSpan(yourChoice, selected[0].id);
    const randChoice = generateComputerChoice();
    showResult(selected[0].id, randChoice);
    e.target.disabled = true;
    choices.forEach((b) => {
        b.checked = false;
    });
});

function addTextToSpan(spanControl, text) {
    spanControl.textContent = text;
}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    const computerChoice = possibleChoices[randomNumber];
    addTextToSpan(compChoice, possibleChoices[randomNumber]);
    return computerChoice;
}

function showResult(userChoice, computerChoice) {   
    let result;
    if (userChoice === computerChoice) {
        result = 'The Stars shines bright for you!';
    } else if ((userChoice === 'fire' && computerChoice === 'water') ||
        (userChoice === 'water' && computerChoice === 'air') ||
        (userChoice === 'air' && computerChoice === 'earth') ||
        (userChoice === 'earth' && computerChoice === 'fire')) {
        result = 'Universe Conspired!';
    } else {
        result = 'Incompatible!';
    }
    addTextToSpan(resultDisplay, result);
}



