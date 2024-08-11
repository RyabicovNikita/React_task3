import { useState } from 'react';
import styles from './Game.module.css';
import { Field } from './components/Field/Field';
import { Information } from './components/Information/Information';
import { CLEAN_PATTERNS } from './constants';

function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [fields, updateFields] = useState(CLEAN_PATTERNS);
	const [isGameEnded, setIsGameEnded] = useState(false);
	function startNewGame() {
		updateFields(CLEAN_PATTERNS);
		setIsGameEnded(false);
		setCurrentPlayer('X');
	}

	return (
		<GameLayout
			fields={fields}
			updateFields={updateFields}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			startNewGame={startNewGame}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
		/>
	);
}

function GameLayout({
	fields,
	updateFields,
	currentPlayer,
	setCurrentPlayer,
	startNewGame,
	isGameEnded,
	setIsGameEnded,
	isDraw,
}) {
	return (
		<div className={styles['tic-tac-toe']}>
			<button className={styles.btnStartNewGame} onClick={startNewGame}>
				Start new game
			</button>
			<Information currentPlayer={currentPlayer} isGameEnded={isGameEnded} />
			<Field
				fields={fields}
				updateFields={updateFields}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
			/>
		</div>
	);
}

export default Game;
