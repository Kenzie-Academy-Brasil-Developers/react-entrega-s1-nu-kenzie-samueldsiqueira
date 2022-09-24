import TransactionList from '../TransactionList';

const List = ({ listTransactions }) => {
	return (
		<div className='list'>
			<ul>
				{listTransactions.map((transaction, index) => (
					<TransactionList transaction={transaction} key={index} />
				))}
			</ul>
		</div>
	);
};

export default List;
