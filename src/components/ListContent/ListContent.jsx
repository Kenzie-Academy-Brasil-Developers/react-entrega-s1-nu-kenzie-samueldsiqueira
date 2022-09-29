import { FaTrash } from 'react-icons/fa';
import style from './ListContent.module.css';

const ListContent = ({
	listTransactions,
	foundedTransactions,
	filterTransaction,
	removeThisTransaction,
	handleSearch,
	handleResetSearch,
}) => {
	const newListTransaction = filterTransaction !== 'todos' ? foundedTransactions : listTransactions;

	const typeTransactionItem = (type) => {
		if (type === 'Entrada') {
			return style.itemGain;
		} else {
			return style.itemLoss;
		}
	};

	return (
		<>
			<div className={style.btnSection}>
				<div className={style.btnTitle}>
					<h3>Resumo financeiro</h3>
				</div>
				<div className={style.btnGrupe}>
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
						onClick={() => handleSearch('Despesas')}
						disabled={filterTransaction === 'Despesas' ? true : false}
					>
						Despesas
					</button>
				</div>
			</div>
			<div>
				<ul className={style.listItens}>
					{newListTransaction.length ? (
						newListTransaction.map((transaction) => (
							<li key={transaction.id}>
								<div className={typeTransactionItem(transaction.type)}>
									<div className={style.itemDescription}>
										<h2>{transaction.description}</h2>
										<div className={style.rightSide}>
											<h3>{transaction.value}</h3>
											<button className={style.btnRemove} onClick={() => removeThisTransaction(transaction.id)}>
												<FaTrash />
											</button>
										</div>
									</div>
									<div className={style.itemType}>
										<p>{transaction.type}</p>
									</div>
								</div>
							</li>
						))
					) : (
						<div className='no-render'>
							<h2>Você ainda não possui nenhum lançamento</h2>
							<ul>
								<li>
									<p></p>
									<div className={style.emptyItem}>
										<div className={style.emptyContent}></div>
										<div className={style.emptySubContent}></div>
									</div>
								</li>
								<li>
									<div className={style.emptyItem}>
										<div className={style.emptyContent}></div>
										<div className={style.emptySubContent}></div>
									</div>
								</li>
								<li>
									<div className={style.emptyItem}>
										<div className={style.emptyContent}></div>
										<div className={style.emptySubContent}></div>
									</div>
								</li>
								<li>
									<div className={style.emptyItem}>
										<div className={style.emptyContent}></div>
										<div className={style.emptySubContent}></div>
									</div>
								</li>
							</ul>
						</div>
					)}
				</ul>
			</div>
		</>
	);
};

export default ListContent;
