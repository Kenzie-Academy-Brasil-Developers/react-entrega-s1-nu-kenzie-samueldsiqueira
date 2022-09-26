import Card from '../Card/Card';

const ListContent = ({
	listTransactions,
	foundedTransactions,
	filterTransaction,
	removeThisTransaction,
	handleSearch,
	handleResetSearch,
}) => {
	const newListTransaction = filterTransaction !== 'todos' ? foundedTransactions : listTransactions;

	return (
		<div>
			<Card>
				<>
					<h2>Resumo financeiro</h2>
				</>
				<button
					className='large-primary--button'
					onClick={() => {
						handleResetSearch();
					}}
					disabled={filterTransaction === 'todos' ? true : false}
				>
					Todas
				</button>
				<button
					className='large-primary--button'
					onClick={() => handleSearch('Entrada')}
					disabled={filterTransaction === 'Entrada' ? true : false}
				>
					Entradas
				</button>
				<button
					className='large-primary--button'
					onClick={() => handleSearch('Saída')}
					disabled={filterTransaction === 'Saída' ? true : false}
				>
					Saídas
				</button>
			</Card>

			<Card>
				<ul>
					{newListTransaction.map((transaction) => (
						<li key={transaction.id}>
							<p>{transaction.description}</p>
							<p>{transaction.value}</p>
							<button className='' onClick={() => removeThisTransaction(transaction.id)}>
								X
							</button>
						</li>
					))}
				</ul>
			</Card>
		</div>
	);
};

export default ListContent;
