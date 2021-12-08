//Selectors
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0;

p1Button.addEventListener('click', () => {
    if (p1Score >= 5 || p2Score >= 5) {
        alert('click reset button');
        return;
    }

    p1Score++;
    if (p1Score >= 5) {
        p1Display.className = 'winner';
        p2Display.className = 'loser';
    }

    p1Display.innerHTML = p1Score;
})

p2Button.addEventListener('click', () => {
    if (p2Score >= 5 || p1Score >= 5) {
        alert('click reset button');
        return;
    }

    p2Score++;
    if (p2Score >= 5) {
        p2Display.className = 'winner';
        p1Display.className = 'loser';
    }

    p2Display.innerHTML = p2Score;
})

resetButton.addEventListener('click', () => {
    //Reset Scores
    p1Score = 0;
    p2Score = 0;
    //Reset Display
    p1Display.innerHTML = p1Score;
    p2Display.innerHTML = p2Score;
    //Reset classes
    p1Display.className = '';
    p2Display.className = '';
})