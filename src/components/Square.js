

const Square = ({square, blueTurn, onAdd, gameOver}) => {
	return(
		<button className={`btn ${square.id === 'red' ? 'rouge' : square.id === 'blue' ? 'bleu' : ''}`} 
		onClick = {!gameOver ? () => onAdd(square.column, blueTurn) : null}> O </button>
	)
}

Square.defaultProps = {
	color: 'green',
}

export default Square