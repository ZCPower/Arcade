
//all the dom variables
const h2 = document.getElementById('h2');
const singlePlayer = document.getElementById('singlePlayer');
const twoPlayer = document.getElementById('twoPlayer');
const gameModeSelection = document.getElementById('gameModeSelection')
const player1Name = document.createElement('input');
player1Name.setAttribute('placeholder', 'Enter your name!')
const player2Name = document.createElement('input');
player2Name.setAttribute('placeholder', 'Enter your name!')
const board = document.getElementById('gameContainer');
const buttonContainer = document.getElementById('buttonContainer');
const mediumDisplay = window.matchMedia('(max-width: 1280px)')
const largeDisplay = window.matchMedia('(min-width: 1281px')
const cell0 = document.getElementById('cell0');
const cell1 = document.getElementById('cell1');
const cell2 = document.getElementById('cell2');
const cell3 = document.getElementById('cell3');
const cell4 = document.getElementById('cell4');
const cell5 = document.getElementById('cell5');
const cell6 = document.getElementById('cell6');
const cell7 = document.getElementById('cell7');
const cell8 = document.getElementById('cell8');
const gameContainer = document.getElementById('gameContainer')
const gameTurnTracker = document.createElement('p')
gameContainer.appendChild(gameTurnTracker);

//replay button
const replayButton = document.createElement('button');
replayButton.innerText = 'Replay!'
replayButton.style.padding = '2em'
replayButton.style.backgroundColor = 'red'
replayButton.style.marginTop = '6vh'
replayButton.style.color = 'white'

//newGame Button
const newGameButton = document.createElement('button');
newGameButton.innerText = 'Game Mode Selection'
newGameButton.style.padding = '2em'
newGameButton.style.backgroundColor = 'red'
newGameButton.style.marginTop = '6vh'
newGameButton.style.color = 'white'

//variables for sounds
const error = document.getElementById('error')
function errorSound() {
    error.play()
}
const click = document.getElementById('click')
function clickSound() {
    click.play()
}
let playerCount = 0; //This variable will determine whether to continue on in playerSelection functions
//starting game object
game = {
    playerOne: { name: player1Name.value, mark: 'X' },
    playerTwo: { name: player2Name.value, mark: 'O' },
    gameGrid:
        [],
    winner: ''
}

// [][]

// gameGrid[0][1] = cell2.innerText

//selects a single player mode
function singlePlayerMode() {
    h2.innerText = 'What is your name?'
    singlePlayer.remove()
    twoPlayer.remove();
    gameModeSelection.appendChild(player1Name);
    playerCount = 1;
}


//select a two player mode
function twoPlayerMode() {
    playerCount = 2;
    h2.innerText = "What is player one's name?";
    singlePlayer.remove()
    twoPlayer.remove();
    gameModeSelection.appendChild(player1Name)
}


//creates an input to select player one's name
function changePlayerOneName(event) {
    if (event.key === 'Enter') {
        if (player1Name.value.length < 16 && player1Name.value.length > 0) {
            if (playerCount === 1) {
                game.playerOne.name = player1Name.value;
                game.playerTwo.name = 'Computer'
                board.style.display = 'flex';
                gameContainer.display = 'flex'
                gameContainer.style.flexDirection = 'column'
                // gameModeSelection.remove();
                buttonContainer.remove();
                player1Name.remove();
                startingPlayer()
                gameModeSelection.style.marginTop = '7.5vh';
                h2.innerText = game.playerOne.name + ' vs. ' + game.playerTwo.name
                h2.style.color = 'white'
                if (mediumDisplay.matches) h2.style.fontSize = '1rem'
                else h2.style.fontSize = '2rem'
            }
            else {
                game.playerOne.name = player1Name.value;
                h2.innerText = "What is player two's name?"
                h2.style.color = 'white'
                gameModeSelection.appendChild(player2Name)
                player1Name.remove()
            }
        } else {
            errorSound()
            h2.innerText = 'Please choose a name with a length of 1-16'
            h2.style.color = 'yellow'
        }
    }
}


//generate's gameboard after player two is selected
function generateBoard(event) {
    if (event.key === 'Enter') {
        if (player2Name.value.length < 16 && player2Name.value.length > 0) {
            game.playerTwo.name = player2Name.value
            board.style.display = 'flex';
            // gameModeSelection.remove();
            buttonContainer.remove();
            player2Name.remove();
            gameModeSelection.style.marginTop = '7.5vh';
            gameContainer.display = 'flex'
            gameContainer.style.flexDirection = 'column'
            h2.style.color = 'white'
            startingPlayer();
            if (game.playerTwo.name === undefined || game.playerTwo.name === '') {
                h2.innerText = game.playerOne.name + ' vs.  Computer'
                if (mediumDisplay.matches) h2.style.fontSize = '1rem'
                else h2.style.fontSize = '2rem'
            } else {
                h2.innerText = game.playerOne.name + ' vs. ' + game.playerTwo.name
                if (mediumDisplay.matches) h2.style.fontSize = '1rem'
                else h2.style.fontSize = '2rem'
            }
        } else {
            errorSound()
            h2.innerText = 'Please choose a name with a length of 1-16'
            h2.style.color = 'yellow'
        }
    }
}
//Use this to determine starting player. Will use the if statements elsewhere while the game is playing. Should set turnCount to a global cariable and have it increment every time a play is made (turnCount ++)

let turnCount = 0;
function startingPlayer() {
    turnCount = Math.floor(Math.random() * 2);
    console.log(turnCount)
    if (turnCount % 2 === 0) {
        console.log(`It is ${game.playerOne.name}'s turn!`)
        gameTurnTracker.innerText = `It is ${game.playerOne.name}'s turn!`
    }
    if (turnCount % 2 === 1) {
        console.log(`It is ${game.playerTwo.name}'s turn!`)
        gameTurnTracker.innerText = `It is ${game.playerTwo.name}'s turn!`
    }
}

function updateGameArray() {
    game.gameGrid[0] = cell0.innerText;
    game.gameGrid[1] = cell1.innerText;
    game.gameGrid[2] = cell2.innerText;
    game.gameGrid[3] = cell3.innerText;
    game.gameGrid[4] = cell4.innerText;
    game.gameGrid[5] = cell5.innerText;
    game.gameGrid[6] = cell6.innerText;
    game.gameGrid[7] = cell7.innerText;
    game.gameGrid[8] = cell8.innerText;
}


// if (turnCount % 2 === 0) gameTurnTracker.innerText = `It is ${game.playerOne.name}'s turn!`
// if (turnCount % 2 === 1) gameTurnTracker.innerText = `It is ${game.playerTwo.name}'s turn!`


//On click edit the innerText of the cell. Check
//add the innerText to the game corresponding game grid spot. 

function addLetter(event) {
    if (event.target.innerText === '' || event.target.innerText === undefined) {
        turnCount++
        clickSound()
        if (turnCount % 2 === 1) {
            gameTurnTracker.innerText = `It is ${game.playerTwo.name}'s turn!`
            event.target.innerText = game.playerOne.mark;
            updateGameArray()
            checkForWin()
        }
        if (turnCount % 2 === 0) {
            gameTurnTracker.innerText = `It is ${game.playerOne.name}'s turn!`
            event.target.innerText = game.playerTwo.mark;
            updateGameArray()
            checkForWin()
        }
        // console.log(turnCount)
        // console.log(event.target)
        // console.log(event.target.innerText)
        // console.log(game.gameGrid)
    }
}


//eventListener's for all the inputs/buttons/cells
singlePlayer.addEventListener('click', singlePlayerMode)
twoPlayer.addEventListener('click', twoPlayerMode)
player1Name.addEventListener('keydown', changePlayerOneName)
player2Name.addEventListener('keydown', generateBoard)
board.addEventListener('click', addLetter)
replayButton.addEventListener('click', replay)


//winning combos
function checkForWin() {
    checkRows();
    checkColumns();
    checkDiagonals();
}


//a check to see if there is a winner after every turn. Could add a way to that indicates a winner on board i.e. a line through the section OR change color of text of the winning line.
function checkRow1() {
    if (game.gameGrid[0] === 'X' && game.gameGrid[1] === 'X' && game.gameGrid[2] === 'X') playerOneWins()
    if (game.gameGrid[0] === 'O' && game.gameGrid[1] === 'O' && game.gameGrid[2] === 'O') playerTwoWins()
}
function checkRow2() {
    if (game.gameGrid[3] === 'X' && game.gameGrid[4] === 'X' && game.gameGrid[5] === 'X') playerOneWins()
    if (game.gameGrid[3] === 'O' && game.gameGrid[4] === 'O' && game.gameGrid[5] === 'O') playerTwoWins()
}
function checkRow3() {
    if (game.gameGrid[6] === 'X' && game.gameGrid[7] === 'X' && game.gameGrid[8] === 'X') playerOneWins()
    if (game.gameGrid[6] === 'O' && game.gameGrid[7] === 'O' && game.gameGrid[8] === 'O') playerTwoWins()
}

function checkColumn1() {
    if (game.gameGrid[0] === 'X' && game.gameGrid[3] === 'X' && game.gameGrid[6] === 'X') playerOneWins()
    if (game.gameGrid[0] === 'O' && game.gameGrid[3] === 'O' && game.gameGrid[6] === 'O') playerTwoWins()
}

function checkColumn2() {
    if (game.gameGrid[1] === 'X' && game.gameGrid[4] === 'X' && game.gameGrid[7] === 'X') playerOneWins()
    if (game.gameGrid[1] === 'O' && game.gameGrid[4] === 'O' && game.gameGrid[7] === 'O') playerTwoWins()
}

function checkColumn3() {
    if (game.gameGrid[2] === 'X' && game.gameGrid[5] === 'X' && game.gameGrid[8] === 'X') playerOneWins()
    if (game.gameGrid[2] === 'O' && game.gameGrid[5] === 'O' && game.gameGrid[8] === 'O') playerTwoWins()
}

function checkDiagonal1() {
    if (game.gameGrid[0] === 'X' && game.gameGrid[4] === 'X' && game.gameGrid[8] === 'X') playerOneWins()
    if (game.gameGrid[0] === 'O' && game.gameGrid[4] === 'O' && game.gameGrid[8] === 'O') playerTwoWins()
}

function checkDiagonal2() {
    if (game.gameGrid[2] === 'X' && game.gameGrid[4] === 'X' && game.gameGrid[6] === 'X') playerOneWins()
    if (game.gameGrid[2] === 'O' && game.gameGrid[4] === 'O' && game.gameGrid[6] === 'O') playerTwoWins()
}

function checkRows() {
    checkRow1();
    checkRow2();
    checkRow3();
}

function checkColumns() {
    checkColumn1();
    checkColumn2();
    checkColumn3();
}

function checkDiagonals() {
    checkDiagonal1();
    checkDiagonal2();
}



function playerOneWins() {
    h2.innerText = `${game.playerOne.name} is the winner!`
    h2.style.color = 'green'
    gameContainer.appendChild(replayButton);
    gameTurnTracker.remove();
    board.style.pointerEvents = 'none'
    replayButton.style.pointerEvents = 'auto'
}

function playerTwoWins() {
    h2.innerText = `${game.playerTwo.name} is the winner!`
    if (playerCount === 1) h2.style.color = 'red'
    else h2.style.color = 'green'
    gameContainer.appendChild(replayButton)
    gameTurnTracker.remove();
    board.style.pointerEvents = 'none'
    replayButton.style.pointerEvents = 'auto'
    //need to create a way that checks the player count. if player two wins and player count = 1, the text should be red. 
}

function newGame() {
    gameModeSelection();
}

function replay() {
    clearGameArray();
    reseth2Text();
    replayButton.remove();
    gameContainer.appendChild(gameTurnTracker)
    startingPlayer()
    board.style.pointerEvents = 'auto'
}

//Clears the game board.
function clearGameArray() {
    game.gameGrid = [];
    cell0.innerText = '';
    cell1.innerText = '';
    cell2.innerText = '';
    cell3.innerText = '';
    cell4.innerText = '';
    cell5.innerText = '';
    cell6.innerText = '';
    cell7.innerText = '';
    cell8.innerText = '';
}

function gameEndingSound() {

}

function reseth2Text() {
    h2.innerText = `${game.playerOne.name} vs. ${game.playerTwo.name}`
    h2.style.color = 'white'
}


//create a way for computer to play
function computerTurn() {
    let computerCell = ''
    if (playerCount = 1 && turnCount % 2 === 1) {
        computerCell = Math.floor(Math.random() * 8);
        gameGrid[computerCell] = 'O';
        cell[computerCell].innerHTML = 'O'
    }
}



    //create a winning notification and animation
    //restart game without having to reset the browser