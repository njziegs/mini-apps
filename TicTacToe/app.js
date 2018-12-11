


window.onload = function() {
  collectPlayerXName();
  collectPlayerOName();
};

////STATE
var board = {
	currentTurn: 'X',
	rows: [
	[null, null, null],
	[null, null, null],
	[null, null, null]
	],
	lastWinner: null,
	playerXName: null,
	playerOName: null,
	playerXWinCount: 0,
	playerOWinCount: 0
}

board.checkIfWinner = function() {

	//loop through each row, have a counter for X and O at each row, determine if one has won
	//loop through each column, have a counter for X and O at each column, determine if one has won
	//check diagonals

	if ((board.currentTurn === board.rows[0][0] && board.rows[0][0] === board.rows[0][1] && board.rows[0][1] === board.rows[0][2]) || 
		(board.currentTurn === board.rows[1][0] && board.rows[1][0] === board.rows[1][1] && board.rows[1][1] === board.rows[1][2]) || 
		(board.currentTurn === board.rows[2][0] && board.rows[2][0] === board.rows[2][1] && board.rows[2][1] === board.rows[2][2]) || 
		(board.currentTurn === board.rows[0][0] && board.rows[0][0] === board.rows[1][0] && board.rows[1][0] === board.rows[2][0]) ||
		(board.currentTurn === board.rows[0][1] && board.rows[0][1] === board.rows[1][1] && board.rows[1][1] === board.rows[2][1]) ||
		(board.currentTurn === board.rows[0][2] && board.rows[0][2] === board.rows[1][2] && board.rows[1][2] === board.rows[2][2]) ||
		(board.currentTurn === board.rows[0][0] && board.rows[0][0] === board.rows[1][1] && board.rows[1][1] === board.rows[2][2]) ||
		(board.currentTurn === board.rows[0][2] && board.rows[0][2] === board.rows[1][1] && board.rows[1][1] === board.rows[2][0])) {
		alert('Well done, you won!');
		board.lastWinner = 'Player ' + board.currentTurn;
		if (board.currentTurn === 'X') {
			board.playerXWinCount += 1;
		} else {
			board.playerOWinCount += 1;
		}

		var renderPlayerXWins = document.getElementById("playerXWinCount");
		renderPlayerXWins.textContent = board.playerXWinCount

        var renderPlayerOWins = document.getElementById("playerOWinCount");
		renderPlayerOWins.textContent = board.playerOWinCount;

		lastWinner.textContent = board.lastWinner;
		board.restartGame();
		domBoardRepresentation.restartBoard();
		board.currentTurn = board.lastWinner;
	}
}

board.checkIfValid = function(elementId) {
	var integerPosition = Number(elementId.slice(1));
	var integerRow = Math.floor(integerPosition/3);
	var integerColumn = integerPosition - (3*integerRow);

	return board.rows[integerRow][integerColumn] === null
}

board.updatePosition = function(elementId) {
	var integerPosition = Number(elementId.slice(1));
	var integerRow = Math.floor(integerPosition/3);
	var integerColumn = integerPosition - (3*integerRow);

	return board.rows[integerRow][integerColumn] = board.currentTurn;
}

board.toggleCurrentTurn = function() {
	var currentId = this.id;
	if (board.checkIfValid(currentId)) {
		board.updatePosition(currentId);		
		this.innerHTML = board.currentTurn;	
		board.checkIfWinner();
		board.currentTurn === 'X' ? board.currentTurn = 'O' : board.currentTurn = 'X';
		currentPlayer.textContent = board.currentTurn;
	} else {
		alert('not a valid position')
	}
}

board.restartGame = function() {
	board.rows = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
	];


}

////PRESENTATION CODE

var domBoardRepresentation = {
	currentPlayer: document.getElementById("playerTurn"),
	lastWinner: document.getElementById("lastWinner"),
	renderPlayerXWins: document.getElementById("playerXWinCount"),
	renderPlayerOWins: document.getElementById("playerOWinCount")
}

domBoardRepresentation.restartBoard = function() {
	for (var i = 0; i < squareClass.length; i++) {
		squareClass[i].innerHTML = null;
	}
}

domBoardRepresentation.renderCurrentPlayer = function() {
	domBoardRepresentation.currentPlayer.textContent = board.currentTurn;
}

domBoardRepresentation.renderLastWinner = function() {
	domBoardRepresentation.lastWinner.textContent = board.lastWinner;
}


// renderPlayerXWins.textContent = board.playerXWinCount


// renderPlayerOWins.textContent = board.playerOWinCount;

// lastWinner.textContent = board.lastWinner;



var currentPlayer = document.getElementById("playerTurn");
		currentPlayer.textContent = board.currentTurn;

var lastWinner = document.getElementById("lastWinner");
		lastWinner.textContent = board.lastWinner;


////USER INPUT
var collectPlayerXName = function() {
    var person = prompt("Player 1, please enter your name");
    if (person != null) {
        document.getElementById("playerXName").innerHTML = 'Name: ' + person;
    }
    board.playerXName = person;
}

var collectPlayerOName = function() {
    var person = prompt("Player 2, please enter your name");
    if (person != null) {
        document.getElementById("playerOName").innerHTML = 'Name: ' + person;
    }
    board.playerOName = person;
}

var squareClass = document.getElementsByClassName('square');

for (var i = 0; i < squareClass.length; i++) {
  squareClass[i].addEventListener('click', board.toggleCurrentTurn, false);
}

var renderPlayerXWins = document.getElementById("playerXWinCount");
renderPlayerXWins.textContent = board.playerXWinCount

var renderPlayerOWins = document.getElementById("playerOWinCount");
renderPlayerOWins.textContent = board.playerOWinCount;










