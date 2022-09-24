const TotalMoney = ({ listTransaction }) => {
	const totalMoney = listTransaction.reduce((total, item) => {
		return total + item.amount;
	}, 0);

	return (
		<div className='total-money'>
			<h3>Total Money</h3>
			<p>{totalMoney}</p>
		</div>
	);
};

export default TotalMoney;
