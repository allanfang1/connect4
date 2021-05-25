const New = ({gameOver, moveCount, newGame}) => {
	return(
		<div className="newBtn">
			<button onClick = {() => newGame()} > New Game </button>
		</div>
	)
}

export default New