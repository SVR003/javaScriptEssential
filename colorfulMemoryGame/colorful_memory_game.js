const startBtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElmt = document.getElementById('score');
const timerElmt = document.getElementById('timer');


const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

function generateCards() {
    for(const color of cards){
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}