import './list.scss';
import Card from '../Card';

const List = ({ listTransactions }) => {
	return (
		<div className='list'>
			<ul>
				{listTransactions.map((transaction, index) => (
					<Card transaction={transaction} key={index} />
				))}
			</ul>
		</div>
	);
};

export default List;
