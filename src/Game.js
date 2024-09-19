import React, { useState, useEffect } from 'react';
import Button from './Button';
import Scoreboard from './Scoreboard';
import './Game.css';

const Game = () => {
	const [score, setScore] = useState(JSON.parse(localStorage.getItem('ls-score')) || { wins: 0, losses: 0, ties: 0 });
	const [result, setResult] = useState('');
	const [computerMove, setComputerMove] = useState('tleft-emoji');
	const [playerMove, setPlayerMove] = useState('tright-emoji');
	const [isAutoPlaying, setIsAutoPlaying] = useState(false);
	const [intervalId, setIntervalId] = useState(null);
	
	useEffect(() => {
		localStorage.setItem('ls-score', JSON.stringify(score));
	}, [score]);
	
	const playGame = (playerMove) => {
		const computerMove = pickComputerMove();
		setPlayerMove(`${playerMove}-emoji`);
		setComputerMove(`${computerMove}-emoji`);
		
		let result = '';
		if (computerMove === playerMove) {
			result = 'Tie';
			setScore(prevScore => ({ ...prevScore, ties: prevScore.ties + 1 }));
		} else if (
			(computerMove === 'rock' && playerMove === 'scissor') ||
			(computerMove === 'paper' && playerMove === 'rock') ||
			(computerMove === 'scissor' && playerMove === 'paper')
		) {
			result = 'You Lose!';
			setScore(prevScore => ({ ...prevScore, losses: prevScore.losses + 1 }));
		} else {
			result = 'You Win!';
			setScore(prevScore => ({ ...prevScore, wins: prevScore.wins + 1 }));
		}
		
		setResult(result);
	};
	
	const pickComputerMove = () => {
		const moves = ['rock', 'paper', 'scissor'];
		return moves[Math.floor(Math.random() * moves.length)];
	};
	
	const newGame = () => {
		setScore({ wins: 0, losses: 0, ties: 0 });
		localStorage.removeItem('ls-score');
		setResult('');
		setComputerMove('tleft-emoji');
		setPlayerMove('tright-emoji');
		if (isAutoPlaying) {
			setIsAutoPlaying(false);
			clearInterval(intervalId);
			setIntervalId(null);
		}
	};
	
	const autoPlay = () => {
		if (!isAutoPlaying) {
			setIsAutoPlaying(true);
			const id = setInterval(() => {
				playGame(pickComputerMove());
			}, 1500);
			setIntervalId(id);
		} else {
			setIsAutoPlaying(false);
			clearInterval(intervalId);
			setIntervalId(null);
		}
	};
	
	return (
		<div className="game-container">
			<div className="button-container">
				<Button onClick={() => playGame('rock')} emoji="rock-emoji.png" alt="rock" />
				<Button onClick={() => playGame('paper')} emoji="paper-emoji.png" alt="paper" />
				<Button onClick={() => playGame('scissor')} emoji="scissor-emoji.png" alt="scissor" />
			</div>
			<div className="moves">
				<div className="computer">
					<p>Computer</p>
					<img src={`${process.env.PUBLIC_URL}/${computerMove}.png`} alt="computer move" className="emoji" />
				</div>
				<div className="vs"><img src="vs-emoji.png" alt="vs" className="emoji" /></div>
				<div className="player">
					<p>You</p>
					<img src={`${process.env.PUBLIC_URL}/${playerMove}.png`} alt="player move" className="emoji" />
				</div>
			</div>
			<p className="result">{result || "\u00A0"}</p>
			<Scoreboard score={score} />
			<div className="controls">
				<button onClick={newGame} className="new-game">New Game</button>
				<button onClick={autoPlay} className="auto-play">{isAutoPlaying ? 'Stop Play' : 'Auto Play'}</button>
			</div>
		</div>
	);
};

export default Game;
