import { useState } from 'react';
import { WIN_PATTERNS } from '../../constants';
import styles from './Field.module.css';

export function Field({ fields, updateFields, currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded }) {
	return (
		<FieldLayout
			fields={fields}
			updateFields={updateFields}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
		/>
	);
}

function FieldLayout({ fields, updateFields, currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded }) {
	const checkWinner = (newFields) => {
		if (WIN_PATTERNS.some((item) => item.every((i) => newFields[i] === 'X'))) {
			setCurrentPlayer('Player X won!');
			setIsGameEnded(true);
		} else if (WIN_PATTERNS.some((item) => item.every((i) => newFields[i] === '0'))) {
			setCurrentPlayer('Player Y won!');
			setIsGameEnded(true);
		} else if (newFields.every((item) => item !== '')) {
			setCurrentPlayer('Game over. Draw!');
			setIsGameEnded(true);
		}
	};
	function handleClick(index) {
		const newFields = JSON.parse(JSON.stringify(fields));
		if (newFields[index] === '' && !isGameEnded) {
			newFields[index] = currentPlayer;
			updateFields(newFields);
			currentPlayer === 'X' ? setCurrentPlayer('0') : setCurrentPlayer('X');
			checkWinner(newFields);
		}
	}
	return (
		<div className={styles['fields-container']}>
			{fields.map((item, index) => (
				<button
					key={index}
					className={`${styles['fields-container__field']} col-4`}
					onClick={() => handleClick(index)}
				>
					{item}
				</button>
			))}
		</div>
	);
}
