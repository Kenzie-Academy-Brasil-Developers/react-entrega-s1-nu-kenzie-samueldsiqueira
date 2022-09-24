const TotalMoney = ({ listTransaction }) => {
	const moneyStash = listTransaction.reduce((total, item) => {
		return total.value + item;
	}, 0);

	return (
		<div className='total-money'>
			<h3>Saldo:</h3>
			<p>{moneyStash}</p>
			<p>O saldo que você possui</p>
		</div>
	);
};

export default TotalMoney;
