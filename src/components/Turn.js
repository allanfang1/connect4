const Turn = (prop) => {
	return(
		<div className = 'turnDis'>
			<p> {prop.gameOver && prop.blueTurn ? "Red wins!" : 
				prop.gameOver && !prop.blueTurn ? "Blue wins!" :
				prop.moveCount > 34 ? "Game Over" :
				prop.blueTurn ? "Blue turn":
				!prop.blueTurn ? "Red turn": 
				"Error"}  
			</p>
		</div>
	)
}

Turn.defaultProps = {
	id: 'green',
}

export default Turn