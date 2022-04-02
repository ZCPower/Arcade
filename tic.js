
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
const cell1 = document.getElementById('cell1');
const cell2 = document.getElementById('cell2');
const cell3 = document.getElementById('cell3');
const cell4 = document.getElementById('cell4');
const cell5 = document.getElementById('cell5');
const cell6 = document.getElementById('cell6');
const cell7 = document.getElementById('cell7');
const cell8 = document.getElementById('cell8');
const cell9 = document.getElementById('cell9');
const gameContainer = document.getElementById('gameContainer')
const gameTurnTracker = document.createElement('p')
gameContainer.appendChild(gameTurnTracker);

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
    playerOne: { name: player1Name.value, symbol: 'X' },
    playerTwo: { name: player2Name.value, symbol: 'O' },
    gameGrid: 
        [
            [cell1.innerHTML, '', ''], // Row 0
            ['', '', ''], // Row 1
            ['', '', '']
        ],
}

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
            h2.style.color ='yellow'
        }
    }
}
//Use this to determine starting player. Will use the if statements elsewhere while the game is playing. Should set turnCount to a global cariable and have it increment every time a play is made (turnCount ++)

let turnCount = 0;
function startingPlayer() {
    turnCount = Math.floor(Math.random() * 2) + 1;
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



// if (turnCount % 2 === 0) gameTurnTracker.innerText = `It is ${game.playerOne.name}'s turn!`
// if (turnCount % 2 === 1) gameTurnTracker.innerText = `It is ${game.playerTwo.name}'s turn!`


//On click edit the innerText of the cell. Check
    //add the innerText to the game corresponding game grid spot. 

function addLetter(event) {
    if (event.target.innerText === '' || event.target.innerText === undefined){
        if (turnCount % 2 === 0) event.target.innerText = game.playerOne.symbol;
        else event.target.innerText = game.playerTwo.symbol;
        turnCount++
        clickSound()
        if (turnCount % 2 === 0) gameTurnTracker.innerText = `It is ${game.playerOne.name}'s turn!`
        if (turnCount % 2 === 1) gameTurnTracker.innerText = `It is ${game.playerTwo.name}'s turn!`
        console.log(turnCount)
        console.log(event.target)
        console.log(event.target.innerText)
        console.log(game.gameGrid)
        
}
}


//eventListener's for all the inputs/buttons/cells
singlePlayer.addEventListener('click', singlePlayerMode)
twoPlayer.addEventListener('click', twoPlayerMode)
player1Name.addEventListener('keydown', changePlayerOneName)
player2Name.addEventListener('keydown', generateBoard)
board.addEventListener('click', addLetter)

//



// // Check if the media query is true
// if (smallLaptop.matches) {
//     // Then trigger an alert
//     alert('You are on your little laptop')
// } 

// if (largeScreen.matches) {
//     alert('Big Screen livin')
// }

//Have the players symbol display in a each cell on mouse over. Only if the cell is unoccupied.
    //On click the symbol will be placed. Only if cell is unoccupied




//Opening screen will have player select game mode: 1 player or 2 player. 
    //have player select one or two
        //if singlePlayer have the heading change to What is your name and take that input and store it in an object. Player can decide if they are X or O. 



    //if 1 player - have player select name and player 2 will be named "Computer"
    //Computer will have to make moves that aren't just random rolls.
        //if (playerturn = [x]) {
            // computerturn =[o] on a corresponding square to block next move set up
        // }

    
    //if 2 player - each player will select their name and it will appear on the screen
    //order will be randomly generated
        // would like to have a coin flipping animation and have the odds be 1/2 to dictate who goes first.
    //turns will alternate
    //only be able to place marks in unooccupied spaces
        //if (space !== undefined) {
            // insert players mark
        // }
    //create a winning notification and animation
    //restart game without having to reset the browser