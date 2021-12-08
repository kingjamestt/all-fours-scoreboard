//Selectors
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const maxScoreInput = document.querySelector('#maxScoreInput');
const setMaxForm = document.querySelector('#setMaxForm');
const setScoreButton = document.querySelector('#setScoreButton');

//init scores
let p1Score = 0;
let p2Score = 0;
let maxScore = 14;

//reset logic
const reset = () => {
    //Reset Scores
    p1Score = 0;
    p2Score = 0;
    //Reset Display
    p1Display.innerHTML = p1Score;
    p2Display.innerHTML = p2Score;
    //Reset classes
    p1Display.className = '';
    p2Display.className = '';
}

resetButton.addEventListener('click', reset);

//set maxScore
setMaxForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //set to 14 if input empty or 0
    maxScore = maxScoreInput.value != 0 ? parseInt(maxScoreInput.value) : 14;
    alert('Score set!');
    reset();
})

//P1 button logic
p1Button.addEventListener('click', () => {
    if (p1Score >= maxScore || p2Score >= maxScore) {
        alert('click reset button');
        return;
    }

    p1Score++;
    if (p1Score >= maxScore) {
        p1Display.className = 'winner';
        p2Display.className = 'loser';
    }

    p1Display.innerHTML = p1Score;
})

//p2 button logic
p2Button.addEventListener('click', () => {
    if (p2Score >= maxScore || p1Score >= maxScore) {
        alert('click reset button');
        return;
    }

    p2Score++;
    if (p2Score >= maxScore) {
        p2Display.className = 'winner';
        p1Display.className = 'loser';
    }

    p2Display.innerHTML = p2Score;
})