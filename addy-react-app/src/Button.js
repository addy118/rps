import React from 'react';
import './Button.css';

const Button = ({ onClick, emoji, alt }) => {
	return (
		<button className="move-button" onClick={onClick}>
			<img className="emoji" src={emoji} alt={alt} />
		</button>
	);
};

export default Button;
