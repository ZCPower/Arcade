const h2 = document.getElementById('h2');
const singlePlayer = document.getElementById('singlePlayer');
const twoPlayer = document.getElementById('twoPlayer');
const gameModeSelection = document.getElementById('gameModeSelection')
const player1Name = document.createElement('input');
player1Name.setAttribute('placeholder','Enter your name!')
const player2Name = document.createElement('input');
player2Name.setAttribute('placeholder', 'Enter your name!')
const board = document.getElementById('gameContainer');

let playerCount = 0; //This variable will determine whether to continue on in playerSelection functions
game = {
    playerOne: { name: player1Name.value },
    playerTwo: {name: player2Name.value }
}

function singlePlayerMode() {
    h2.innerText = 'What is your name?'
    singlePlayer.remove()
    twoPlayer.remove();
    gameModeSelection.appendChild(player1Name);
    playerCount = 1;
}

function twoPlayerMode() {
    playerCount = 2;
    h2.innerText = "What is player one's name?";
    singlePlayer.remove()
    twoPlayer.remove();
    gameModeSelection.appendChild(player1Name)
}



function changePlayerOneName(event) {
    if (event.key === 'Enter') {
        if (playerCount === 1) {
            game.playerOne.name = player1Name.value;
            board.style.display = 'flex';
            gameModeSelection.remove();
        }
        else {
            game.playerOne.name = player1Name.value;
            h2.innerText = "What is player two's name?"
            gameModeSelection.appendChild(player2Name)
            player1Name.remove()
        }
}
}

function generateBoard(event) {
    if (event.key === 'Enter') {
        game.playerTwo.name = player2Name.value
        board.style.display = 'flex';
        gameModeSelection.remove();
    }
}

singlePlayer.addEventListener('click', singlePlayerMode)
twoPlayer.addEventListener('click', twoPlayerMode)
player1Name.addEventListener('keydown', changePlayerOneName)
player2Name.addEventListener('keydown', generateBoard)


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