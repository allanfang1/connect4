import Board from './components/Board'
import Turn from './components/Turn'
import New from './components/New'
import Header from './components/Header'
import { useState, useEffect } from 'react'

function App() {
	const [blueTurn, changeTurn] = useState(true)
	const [gameOver, endGame] = useState(false)
	const [moveCount, stepUp] = useState(0)
	
	const startState = [
	{
		row: 0,
		column: 0,
		id: "gray",
	},{
		row: 0,
		column: 1,
		id: "gray",
	},{
		row: 0,
		column: 2,
		id: "gray",
	},{
		row: 0,
		column: 3,
		id: "gray",
	},{
		row: 0,
		column: 4,
		id: "gray",
	},{
		row: 0,
		column: 5,
		id: "gray",
	},{
		row: 0,
		column: 6,
		id: "gray",
	},{
		row: 1,
		column: 0,
		id: "gray",
	},{
		row: 1,
		column: 1,
		id: "gray",
	},{
		row: 1,
		column: 2,
		id: "gray",
	},{
		row: 1,
		column: 3,
		id: "gray",
	},{
		row: 1,
		column: 4,
		id: "gray",
	},{
		row: 1,
		column: 5,
		id: "gray",
	},{
		row: 1,
		column: 6,
		id: "gray",
	},{
		row: 2,
		column: 0,
		id: "gray",
	},{
		row: 2,
		column: 1,
		id: "gray",
	},{
		row: 2,
		column: 2,
		id: "gray",
	},{
		row: 2,
		column: 3,
		id: "gray",
	},{
		row: 2,
		column: 4,
		id: "gray",
	},{
		row: 2,
		column: 5,
		id: "gray",
	},{
		row: 2,
		column: 6,
		id: "gray",
	},{
		row: 3,
		column: 0,
		id: "gray",
	},{
		row: 3,
		column: 1,
		id: "gray",
	},{
		row: 3,
		column: 2,
		id: "gray",
	},{
		row: 3,
		column: 3,
		id: "gray",
	},{
		row: 3,
		column: 4,
		id: "gray",
	},{
		row: 3,
		column: 5,
		id: "gray",
	},{
		row: 3,
		column: 6,
		id: "gray",
	},{
		row: 4,
		column: 0,
		id: "gray",
	},{
		row: 4,
		column: 1,
		id: "gray",
	},{
		row: 4,
		column: 2,
		id: "gray",
	},{
		row: 4,
		column: 3,
		id: "gray",
	},{
		row: 4,
		column: 4,
		id: "gray",
	},{
		row: 4,
		column: 5,
		id: "gray",
	},{
		row: 4,
		column: 6,
		id: "gray",
	},
	]
	
	const [squares, setSquares] = useState(startState)
	
	const newGame = () => {
		setSquares(startState);
		stepUp(0);
		endGame(false);
		changeTurn(true);
	}
	
	const addTile = (column, turn) => {
		var i;
		var added = false;
		var newSquare = [];
		var id = "red";
		var nRow;
		if (turn){id = "blue";}
		if (moveCount < 35){
			for (i = squares.length-1; i >= 0; i--){
				if (added){
					newSquare.unshift(squares[i]);
				} else if (squares[i].id === "gray" && squares[i].column === column){
					nRow = squares[i].row;
					newSquare.unshift({row: nRow, column: column, id: id});
					added = true;
				} else {
					newSquare.unshift(squares[i]);
				}			
			}
			setSquares(newSquare);
		}
		if (added){
			changeTurn(!blueTurn);
			stepUp(prevState => prevState + 1);
		}
	}
	
	useEffect(() => {
		const horWin = (id) => {
		var i;
		var count = 0;
		for (i = 0; i < 35; i++ ){
			if (i%7 === 0){ count = 0;}
			if (squares[i].id === id){
				count += 1;
				if (count >= 4){return true;}
			} else {
				count = 0;
			}
		}
		return false;
	}
	
	const vertWin = (id) => {
		var i;
		var j;
		var count;
		for (i = 0; i < 7; i++){
			count = 0;
			for (j = 0; j < 29; j+=7){
				if (squares[i+j].id === id){
					count += 1;
				if (count >= 4){return true;}
				} else {
					count = 0;
				}
			}
		}
		return false;
	}
	
	const aiguWin = (id) => {
		var i;
		var j;
		var count;
		for (i = 4; i < 7; i++){
			count = 0;
			for (j = 0; j < 25; j+=6){
				if (squares[i+j].id === id){
					count += 1;
				if (count >= 4){return true;}
				} else {
					count = 0;
				}
			}
		}
		for (i = 3; i < 14; i+=10){
			count = 0;
			for (j = 0; j < 19; j+=6){
				if (squares[i+j].id === id){
					count += 1;
				if (count >= 4){return true;}
				} else {
					count = 0;
				}
			}
		}
		return false;
	}
	
	const graveWin = (id) => {
		var i;
		var j;
		var count;
		console.log(id);
		for (i = 0; i < 3; i++){
			count = 0;
			for (j = 0; j < 33; j+=8){
				if (squares[i+j].id === id){
					count += 1;
				if (count >= 4){return true;}
				} else {
					count = 0;
				}
			}
		}
		for (i = 3; i < 8; i+=4){
			count = 0;
			for (j = 0; j < 25; j+=8){
				if (squares[i+j].id === id){
					count += 1;
				if (count >= 4){return true;}
				} else {
					count = 0;
				}
			}
		}
		return false;
	}
		if (vertWin("blue") || horWin("blue") || aiguWin("blue") || graveWin("blue")){
			endGame(true);
		} else if (vertWin("red") || horWin("red") || aiguWin("red") || graveWin("red")){
			endGame(true);
		}
	}, [squares]);
	
	
	
	return (
		<div className="container">
			<Header />
			<Board squares = {squares} blueTurn = {blueTurn} onAdd = {addTile} gameOver={gameOver} />
			<Turn blueTurn = {blueTurn} gameOver = {gameOver} moveCount={moveCount}/>
			<New gameOver = {gameOver} moveCount={moveCount} newGame={newGame} />
		</div>
	);
}

export default App;
 