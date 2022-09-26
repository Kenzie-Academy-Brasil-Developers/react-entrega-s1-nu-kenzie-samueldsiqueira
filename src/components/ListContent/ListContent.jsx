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
	console.log(newListTransaction);
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
					{newListTransaction.length ? (
						newListTransaction.map((transaction) => (
							<li key={transaction.id}>
								<span>{transaction.type}</span>
								<p>{transaction.description}</p>
								<p>{transaction.value}</p>
								<button className='' onClick={() => removeThisTransaction(transaction.id)}>
									X
								</button>
							</li>
						))
					) : (
						<p>Nenhuma transação encontrada</p>
					)}
				</ul>
			</Card>
		</div>
	);
};

export default ListContent;
