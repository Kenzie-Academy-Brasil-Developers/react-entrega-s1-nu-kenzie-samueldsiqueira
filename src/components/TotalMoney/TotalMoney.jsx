import Card from '../Card/Card';

const TotalMoney = ({ moneyStash }) => {
	return (
		<Card>
			<h3>Saldo:</h3>
			<p>$ {moneyStash}</p>
			<p>O saldo que você possui</p>
		</Card>
	);
};

export default TotalMoney;
