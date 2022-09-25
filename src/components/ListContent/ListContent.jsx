import Card from '../Card/Card';

const ListContent = ({
	listTransactions,
	setListTransactions,
	removeThisTransaction,
	handleAllTransactions,
	handleFilterTransactions,
}) => {
	return (
		<div>
			<Card>
				<>
					<h2>Resumo financeiro</h2>
				</>
				<button
					onClick={(event) => {
						event.preventDefault();
						handleAllTransactions();
					}}
				>
					Todas
				</button>
				<button
					onClick={(event) => {
						event.preventDefault();
						handleFilterTransactions('Entrada');
					}}
				>
					Entradas
				</button>
				<button
					onClick={(event) => {
						event.preventDefault();
						handleFilterTransactions('Saída');
					}}
				>
					Saídas
				</button>
			</Card>

			<Card>
				<ul>
					{listTransactions.map((transaction) => {
						return (
							<li key={transaction.id}>
								<p>{transaction.description}</p>
								<p>{transaction.value}</p>
								<button onClick={() => removeThisTransaction(transaction.id)}>X</button>
							</li>
						);
					})}
				</ul>
			</Card>
		</div>
	);
};

export default ListContent;
