import Square from './Square'

const Board = ({squares, blueTurn, onAdd, gameOver }) => {
	
	return(
		<div className = 'boardContainer'>
			{squares.map((square) => (
			<Square square = {square} blueTurn = {blueTurn} onAdd = {onAdd} gameOver = {gameOver} />
			))}
		</div>
	)
}


export default Board