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