import styles from './Information.module.css';

export function Information({ currentPlayer, isGameEnded }) {
	return <InformationLayout currentPlayer={currentPlayer} isGameEnded={isGameEnded} />;
}

function InformationLayout({ currentPlayer, isGameEnded }) {
	const playerInfo = <span className={styles['info__player']}>{currentPlayer}</span>;
	return (
		<>
			{!isGameEnded && <p className={styles['info']}>Player: {playerInfo}</p>}
			{isGameEnded && playerInfo}
		</>
	);
}
