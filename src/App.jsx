import { useState } from 'react';
import './styles/reset.css';
import './styles/globals.css';
import Forms from './components/Forms/Forms';
import TotalMoney from './components/TotalMoney/TotalMoney';
import Header from './components/Header/Header';
import ListContent from './components/ListContent/ListContent';
import Card from './components/Card/Card';

const App = () => {
	const [listTransactions, setListTransactions] = useState([]);
	const [newData, setNewData] = useState({
		id: Math.random(),
		description: '',
		type: 'Entrada',
		value: Number(),
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
		} else if (newData.type === 'Saída') {
			if (newData.value > 0) {
				console.log(newData.value);
				setValidateForm(false);
			}
			return;
		}
		const newTransaction = {
			id: Math.random(),
			description: newData.description,
			type: newData.type,
			value: newData.value,
		};

		setListTransactions([...listTransactions, newTransaction]);

		setNewData({
			id: Number(Math.random()),
			description: '',
			type: 'Entrada',
			value: Number(),
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
		<>
			<>
				<Header />
			</>
			<Card>
				<>
					<Forms
						newData={newData}
						setNewData={setNewData}
						handleSubmit={handleSubmit}
						validateForm={validateForm}
						setValidateForm={setValidateForm}
					/>
				</>
				<>
					<TotalMoney moneyStash={moneyStash} />
				</>
			</Card>
			<Card>
				<>
					<ListContent
						listTransactions={listTransactions}
						foundedTransactions={foundedTransactions}
						filterTransaction={filterTransaction}
						removeThisTransaction={removeTransaction}
						handleSearch={handleFounded}
						handleResetSearch={handleResetSearch}
					/>
				</>
			</Card>
		</>
	);
};

export default App;
