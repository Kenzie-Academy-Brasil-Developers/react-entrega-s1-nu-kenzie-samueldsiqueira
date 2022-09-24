import { useState } from 'react';

const Card = ({ transaction }) => {
	return (
		<>
			<li>
				<span>{transaction.description}</span>
				<span>{transaction.type}</span>
				<span>{transaction.value}</span>
			</li>
		</>
	);
};

export default Card;
