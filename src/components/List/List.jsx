import './list.scss';

const List = ({ listTransactions }) => {
	return (
		<div className='list'>
			<ul>
				{listTransactions.map((transaction, index) => (
					<li key={index}>
						<span>{transaction.description}</span>
						<span>{transaction.type}</span>
						<span>{transaction.value}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default List;
