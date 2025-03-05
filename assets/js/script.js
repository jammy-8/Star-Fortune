const compChoice = document.getElementById('computer-choice')
const yourChoice = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const playButton = document.getElementById('manifest')
const possibleChoices = ['fire', 'water', 'air', 'earth']

// Function to generate a random choice for the computer //
const choices = document.getElementsByName('choice')
choices.forEach((c) => {
    c.addEventListener('click', () => {
        playButton.disabled = false
    })
})

playButton.addEventListener('click', (e) => {
    const buttonsArray = Array.from(choices)
    const selected = buttonsArray.filter((b) => b.checked)
    addTextToSpan(yourChoice, selected[0].id)
    const randChoice = generateComputerChoice()
})

function addTextToSpan(spanControl, text) {
    spanControl.textContent = text
}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    const computerChoice = possibleChoices[randomNumber]
    addTextToSpan(compChoice, possibleChoices[randomNumber])
    return computerChoice
}