import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onClick, emoji, alt }) => (
	<button className="move-button" onClick={onClick}>
		<img className="emoji" src={emoji} alt={alt} />
	</button>
);

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	emoji: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default Button;
