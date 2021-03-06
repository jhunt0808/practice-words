import React, { FunctionComponent } from 'react';
import { Guesses } from '../../types/types';
import './GuessBars.scss';

interface IGuessBarsProps {
	guesses: Guesses;
	gamesWon: number;
	wonOnGuess: number;
}

const GuessBars: FunctionComponent<IGuessBarsProps> = ({
	guesses,
	gamesWon,
	wonOnGuess,
}) => {
	const guessesList: number[] = Object.values(guesses);
	guessesList.pop();
	const guessesStringList: string[] = guessesList.map(String);

	const mostWon = Math.max(...guessesList);

	const getWidth = (guess: string): string => {
		return ((parseInt(guess) / mostWon) * 100).toString() + '%';
	};

	const winningGuess = (index: number): string => {
		return wonOnGuess === index + 1 ? 'winningGuess' : '';
	};

	return (
		<div className='guess-bars'>
			{guessesStringList &&
				guessesStringList.map((guess, index) => {
					return (
						<div key={index} className='bars-wrapper'>
							<div className='bar-wrapper'>
								<div className='guess'>{index + 1}</div>
								<div className='bar'>
									<div
										style={{
											width: getWidth(guess),
										}}
										className={`fill ${winningGuess(
											index
										)}`}
									>
										{guess}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			{/* {guessesStringList && (
				<div className='bars-wrapper'>
					<div className='bar-wrapper'>
						<div className='guess'>1</div>
						<div className='bar'>
							<div
								style={{
									width: getWidth(guessesStringList[0]),
								}}
								className='fill'
							>
								{guessesStringList[0]}
							</div>
						</div>
					</div>
					<div className='bar-wrapper'>
						<div className='guess'>2</div>
						<div className='bar'>
							<div
								style={{
									width: getWidth(guessesStringList[1]),
								}}
								className='fill'
							>
								{guessesStringList[1]}
							</div>
						</div>
					</div>
					<div className='bar-wrapper'>
						<div className='guess'>3</div>
						<div className='bar'>
							<div
								style={{
									width: getWidth(guessesStringList[2]),
								}}
								className='fill'
							>
								{guessesStringList[2]}
							</div>
						</div>
					</div>
					<div className='bar-wrapper'>
						<div className='guess'>4</div>
						<div className='bar'>
							<div
								className='fill'
								style={{
									width: getWidth(guessesStringList[3]),
								}}
							>
								{guessesStringList[3]}
							</div>
						</div>
					</div>
					<div className='bar-wrapper'>
						<div className='guess'>5</div>
						<div className='bar'>
							<div
								className='fill'
								style={{
									width: getWidth(guessesStringList[4]),
								}}
							>
								{guessesStringList[4]}
							</div>
						</div>
					</div>
					<div className='bar-wrapper'>
						<div className='guess'>6</div>
						<div className='bar'>
							<div
								className='fill'
								style={{
									width: getWidth(guessesStringList[5]),
								}}
							>
								{guessesStringList[5]}
							</div>
						</div>
					</div>
				</div>
			)} */}
		</div>
	);
};

export default GuessBars;
