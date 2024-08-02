import { useState } from 'react';
import styles from './App.module.css';

function App() {
	const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
	const [firstNumber, setFirstNumber] = useState('');
	const [secondNumber, setSecondNumber] = useState('');
	const [sign, setSign] = useState('');
	let displayValue = firstNumber + sign + secondNumber;
	const clearAllStates = () => {
		setFirstNumber('');
		setSecondNumber('');
		setSign('');
	};
	const getNewCalcValue = (prevValue, curValue) => {
		if (Number(prevValue) !== 0) return prevValue + curValue;
		else return curValue;
	};
	const handleClick = ({ target }) => {
		let value = target.value;
		if (!isNaN(Number(value))) {
			sign
				? setSecondNumber((prevValue) => getNewCalcValue(prevValue, value))
				: setFirstNumber((prevValue) => getNewCalcValue(prevValue, value));
		} else if (firstNumber && Number(firstNumber) !== 0) {
			if (value === '=') calcResult();
			else if (value === 'C') clearAllStates();
			else setSign(target.value);
		}
	};
	const handlePlus = () => {
		setFirstNumber(Number(firstNumber) + Number(secondNumber));
		setSecondNumber('');
		setSign('');
	};
	const handleMinus = () => {
		setFirstNumber(Number(firstNumber) - Number(secondNumber));
		setSecondNumber('');
		setSign('');
	};
	function calcResult() {
		switch (sign) {
			case '+':
				handlePlus();
				break;
			case '-':
				handleMinus();
				break;
		}
	}
	return (
		<div className={styles.calc}>
			<span className={styles.resultWindow} disabled>
				{displayValue || 0}
			</span>
			<div className={styles.container}>
				{numbers.map((number) => (
					<input
						className={styles.button + ' ' + styles.col4}
						key={number}
						type="button"
						value={number}
						onClick={handleClick}
					/>
				))}
				<input className={styles.button + ' ' + styles.col4} type="button" value="+" onClick={handleClick} />
				<input className={styles.button + ' ' + styles.col4} type="button" value="-" onClick={handleClick} />
				<input className={styles.button + ' ' + styles.col4} type="button" value="C" onClick={handleClick} />
				<input className={styles.button + ' ' + styles.col8} type="button" value="=" onClick={handleClick} />
			</div>
		</div>
	);
}

export default App;
