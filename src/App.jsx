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
		id: Math.random(),
		description: '',
		value: Number,
		type: '',
	});
	const [validateForm, setValidateForm] = useState(true);
	const moneyStash = listTransactions.reduce((total, item) => {
		return total + item.value;
	}, 0);
	const [foundedTransactions, setFoundedTransactions] = useState([]);
	const [filterTransaction, setFilterTransaction] = useState('todos');

	const removeTransaction = (id) => {
		const newList = listTransactions.filter((transaction) => transaction.id !== id);
		setListTransactions(newList);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (newData.description === '' || newData.value === '' || newData.type === '') {
			setValidateForm(false);
			return;
		}
		if (newData.value <= 0) {
			setValidateForm(false);

			return;
		}
		const newTransaction = {
			id: Math.random(),
			description: newData.description,
			value: Number(newData.value),
			type: newData.type,
		};

		setListTransactions([...listTransactions, newTransaction]);

		setNewData({
			id: Number(listTransactions.length + 1),
			description: '',
			type: 'entrada',
			value: Number,
		});
	};

	const handleFounded = (filter) => {
		const newFilter = listTransactions.filter((transaction) => transaction.type === filter);
		setFoundedTransactions(newFilter);
		setFilterTransaction(filter);
	};

	const handleResetSearch = () => {
		setFoundedTransactions([]);
		setFilterTransaction('todos');
	};

	return (
		<div>
			<>
				<Header></Header>
			</>
			<>
				<Forms
					newData={newData}
					setNewData={setNewData}
					handleSubmit={handleSubmit}
					validateForm={validateForm}
					setValidateForm={setValidateForm}
				></Forms>
			</>
			<ul>
				<ListContent
					listTransactions={listTransactions}
					foundedTransactions={foundedTransactions}
					filterTransaction={filterTransaction}
					removeThisTransaction={removeTransaction}
					handleSearch={handleFounded}
					handleResetSearch={handleResetSearch}
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
