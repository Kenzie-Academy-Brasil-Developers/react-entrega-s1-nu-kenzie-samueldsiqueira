import { useState } from 'react';
import './styles/reset.css';
import './styles/globals.css';
import Forms from './components/Forms/Forms';
import TotalMoney from './components/TotalMoney/TotalMoney';
import Header from './components/Header/Header';
import ListContent from './components/ListContent/ListContent';

function App() {
	const [listTransactions, setListTransactions] = useState([
		{ id: 1, description: 'Salário recebido', type: 'entrada', value: 2500 },
		{ id: 2, description: 'Salário recebido', type: 'entrada', value: 2500 },
		{ id: 3, description: 'Conta de luz', type: 'saida', value: -150 },
	]);

	const [newData, setNewData] = useState({
		id: Number(listTransactions.length + 1),
		description: '',
		value: Number,
		type: '',
	});

	const removeTransaction = (id) => {
		const newList = listTransactions.filter((transaction) => transaction.id !== id);
		setListTransactions(newList);
	};

	const moneyStash = listTransactions.reduce((total, item) => {
		return total + item.value;
	}, 0);

	const handleSubmit = (event) => {
		event.preventDefault();
		setListTransactions([...listTransactions, newData]);

		setNewData({
			id: Number(listTransactions.length + 1),
			description: '',
			value: Number,
			type: '',
		});
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
				<ListContent listTransactions={listTransactions} removeThisTransaction={removeTransaction} />
			</ul>
			<>
				<TotalMoney moneyStash={moneyStash} />
			</>
			<></>
		</div>
	);
}

export default App;
