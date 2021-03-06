import React, { FunctionComponent } from 'react';
import { Statistics } from '../../types/types';
import Modal from 'react-modal';
import './GameModal.scss';
import StatisticsDisplay from './StatisticsDisplay';
import GuessBars from './GuessBars';

interface IModalProps {
	statistics: Statistics;
	isOpen: boolean;
	onRequestClose: () => void;
	getTheWord: () => void;
	isGameOver: boolean;
	theWord: string;
	wonOnGuess: number;
}

const GameModal: FunctionComponent<IModalProps> = ({
	statistics,
	isOpen,
	onRequestClose,
	getTheWord,
	isGameOver,
	theWord,
	wonOnGuess,
}) => {
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			backgroundColor: '#222222',
			border: 'none',
			borderRadius: '10px',
			color: '#ffffff',
			width: '85vw',
			maxWidth: '450px',
		},
		overlay: {
			backgroundColor: 'rgba(0, 0, 0, 0.6)',
		},
	};

	Modal.setAppElement('#root');

	return (
		<div>
			<Modal
				isOpen={isOpen}
				onRequestClose={onRequestClose}
				style={customStyles}
				contentLabel='Example Modal'
				shouldCloseOnOverlayClick={false}
				shouldCloseOnEsc={false}
			>
				<div className='statisticsWrapper'>
					<h3>Statistics</h3>
					{theWord && (
						<div className='endGameMessage'>
							<div className='theWord'>{theWord}</div>
							<div className='message'>
								{statistics.currentStreak > 0
									? 'Nice Job!'
									: 'Better luck next time!'}
							</div>
						</div>
					)}
					<StatisticsDisplay statistics={statistics} />
					<GuessBars
						guesses={statistics.guesses}
						gamesWon={statistics.gamesWon}
						wonOnGuess={wonOnGuess}
					/>
					<button
						id='StartGame'
						className='button'
						onClick={getTheWord}
					>
						{isGameOver ? 'Play Again' : 'Start Game'}
					</button>
				</div>
			</Modal>
		</div>
	);
};

export default GameModal;
