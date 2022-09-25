import { useState } from 'react';
import './styles/reset.css';
import './styles/globals.css';
import Forms from './components/Forms/Forms';
import TotalMoney from './components/TotalMoney/TotalMoney';
import Header from './components/Header/Header';
import ListContent from './components/ListContent/ListContent';

function App() {
	const [listTransactions, setListTransactions] = useState([
		{ id: 1, description: 'Salário recebido', type: 'Entrada', value: 2500 },
		{ id: 2, description: 'Salário recebido', type: 'Entrada', value: 2500 },
		{ id: 3, description: 'Conta de luz', type: 'Saída', value: -150 },
	]);

	const [newData, setNewData] = useState({
		id: Number(listTransactions.length + 1),
		description: '',
		value: Number,
		type: '',
	});

	// const [allTransactions, setListTransactions] = useState(listTransactions);
	const moneyStash = listTransactions.reduce((total, item) => {
		return total + item.value;
	}, 0);

	const removeTransaction = (id) => {
		const newList = listTransactions.filter((transaction) => transaction.id !== id);
		setListTransactions(newList);
	};

	const handleSubmit = () => {
		setListTransactions([...listTransactions, newData]);

		setNewData({
			id: Number(listTransactions.length + 1),
			description: '',
			value: Number,
			type: '',
		});
	};

	const handleAllTransactions = () => {
		const newList = listTransactions.map((transaction) => transaction);
		return newList;
	};

	const handleFilterTransactions = (type) => {
		const filterTransactions = listTransactions.filter((transaction) => transaction.type === type);
		setListTransactions(filterTransactions);
	};

	return (
		<div>
			<>
				<Header></Header>
			</>
			<>
				<Forms newData={newData} setNewData={setNewData} handleSubmit={handleSubmit}></Forms>
			</>
			<ul>
				<ListContent
					listTransactions={listTransactions}
					setListTransaction={setListTransactions}
					removeThisTransaction={removeTransaction}
					handleAllTransactions={handleAllTransactions}
					handleFilterTransactions={handleFilterTransactions}
				/>
			</ul>
			<>
				<TotalMoney moneyStash={moneyStash} />
			</>
			<></>
		</div>
	);
}

export default App;
