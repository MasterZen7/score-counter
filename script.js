const player1 = {
    score : 0,
    display : document.querySelector('#score1'),
    button : document.querySelector('#player1')
}

const player2 = {
    score : 0,
    display : document.querySelector('#score2'),
    button : document.querySelector('#player2')
}

const reset = document.querySelector('#reset');
const scoreSelect = document.querySelector('#playto');
let winningScore = 1;
let gameOver = false;

const updateScore = (player, opponent) => {
    if (!gameOver) {
        player.score += 1
        if(player.score === winningScore) {
            gameOver = true;
            player1.display.style.color = 'blue'
            player2.display.style.color = 'red'
            player.button.disabled = true
            opponent.button.disabled = true
        }
        player.display.textContent = player.score
    }
}

player1.button.addEventListener('click', function (){
    updateScore(player1, player2)
})

player2.button.addEventListener('click', function (){
    updateScore(player2, player1)
})

scoreSelect.addEventListener('click', function (){
    winningScore = parseInt(this.value);
    resetScore()
})

reset.addEventListener('click', resetScore)

function resetScore() {
    gameOver = false
    for (let player of [player1, player2]) {
        player.score = 0
        player.display.textContent = 0
        player.display.style.color = ''
        player.button.disabled = false
    }
}
