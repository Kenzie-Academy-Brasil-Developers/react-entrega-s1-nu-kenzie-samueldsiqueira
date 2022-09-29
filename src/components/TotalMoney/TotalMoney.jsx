import styled from './TotalMoney.module.css';

const TotalMoney = ({ moneyStash }) => {
	return (
		<div className={styled.totalContent}>
			<div className={styled.yourMoney}>
				<h3>Saldo:</h3>
				<h3>
					<strong>R$ {moneyStash}</strong>
				</h3>
			</div>
			<div className={styled.textHelp}>
				<p>O saldo que você possui</p>
			</div>
		</div>
	);
};

export default TotalMoney;
