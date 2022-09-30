/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import exampleImage from './assets/example.svg';
import { useState } from 'react';
import './styles/reset.css';
import './styles/globals.css';
import Forms from './components/Forms/Forms';
import TotalMoney from './components/TotalMoney/TotalMoney';
import Header from './components/Header/Header';
import ListContent from './components/ListContent/ListContent';

const App = () => {
	const [listTransactions, setListTransactions] = useState([]);

	const [newData, setNewData] = useState({
		id: Math.random(),
		description: '',
		type: 'Entrada',
		value: Number().toFixed(2).replace('.', ',').toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}),
	});
	const [login, setLogin] = useState(false);

	const [validateForm, setValidateForm] = useState(true);

	const [foundedTransactions, setFoundedTransactions] = useState([]);

	const [filterTransaction, setFilterTransaction] = useState('todos');

	const moneyStash = listTransactions.reduce((total, item) => {
		return total + item.value;
	}, 0);

	const removeTransaction = (id) => {
		const newList = listTransactions.filter((item) => item.id !== id);
		setListTransactions(newList);
		setFilterTransaction('todos');
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (newData.description === '' || newData.value === '') {
			setValidateForm(false);
			return;
		}

		const newTransaction = {
			id: Math.random(),
			description: newData.description,
			type: newData.type,
			value: newData.value,
		};

		newTransaction.type === 'Entrada'
			? (newTransaction.value = newTransaction.value)
			: (newTransaction.value = -newTransaction.value);

		setListTransactions([...listTransactions, newTransaction]);

		setNewData({
			id: Number(Math.random()),
			description: '',
			type: 'Entrada',
			value: Number().toFixed(2).replace('.', ',').toLocaleString('pt-BR', {
				style: 'currency',
				currency: 'BRL',
			}),
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
			{login ? (
				<>
					<Header setLogin={setLogin} />
					<main>
						<section className='form-section'>
							<Forms
								newData={newData}
								setNewData={setNewData}
								handleSubmit={handleSubmit}
								validateForm={validateForm}
								setValidateForm={setValidateForm}
								moneyStash={moneyStash}
							/>
							<>
								<TotalMoney moneyStash={moneyStash} />
							</>
						</section>
						<section className='transaction-section'>
							<ListContent
								listTransactions={listTransactions}
								foundedTransactions={foundedTransactions}
								filterTransaction={filterTransaction}
								removeThisTransaction={removeTransaction}
								handleSearch={handleFounded}
								handleResetSearch={handleResetSearch}
							/>
						</section>
					</main>
				</>
			) : (
				<div className='no-login'>
					<div className='client-login'>
						<h1 className='brand-title'>
							<strong>Nu</strong> Kenzie
						</h1>
						<h2 className='brand-text'>Centralize o controle das suas finanças</h2>
						<p className='sub-text'>de forma rápida e segura</p>
						<button className='btn-primary' onClick={() => setLogin(true)}>
							Iniciar
						</button>
					</div>
					<div className='client-image'>
						<img src={exampleImage} />
					</div>
				</div>
			)}
		</div>
	);
};

// 	);
// };

export default App;
