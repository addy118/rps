import React from 'react';
import './Scoreboard.css';

const Scoreboard = ({ score }) => {
	return (
		<table>
			<thead>
			<tr>
				<th colSpan="3">S C O R E</th>
			</tr>
			<tr>
				<th>Wins</th>
				<th>Losses</th>
				<th>Ties</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td>{score.wins}</td>
				<td>{score.losses}</td>
				<td>{score.ties}</td>
			</tr>
			</tbody>
		</table>
	);
};

export default Scoreboard;
