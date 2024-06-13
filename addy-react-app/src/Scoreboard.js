import React from 'react';
import PropTypes from 'prop-types';
import './Scoreboard.css';

const Scoreboard = ({ score }) => (
	<table>
		<thead>
		<tr>
			<td className="score" colSpan="3">S C O R E</td>
		</tr>
		<tr>
			<th>Wins</th>
			<th>Losses</th>
			<th>Ties</th>
		</tr>
		</thead>
		<tbody>
		<tr>
			<td className="js-wins">{score.wins}</td>
			<td className="js-losses">{score.losses}</td>
			<td className="js-ties">{score.ties}</td>
		</tr>
		</tbody>
	</table>
);

Scoreboard.propTypes = {
	score: PropTypes.shape({
		wins: PropTypes.number,
		losses: PropTypes.number,
		ties: PropTypes.number,
	}).isRequired,
};

export default Scoreboard;
