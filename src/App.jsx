import { useState } from 'react';
import './styles/globals.css';
import Forms from './components/Forms';
import TransactionList from './components/TransactionList';
import List from './components/List/List';
import TotalMoney from './components/TotalMoney/TotalMoney';
import './App.css';

function App() {
	const [listTransactions, setListTransactions] = useState([
		{ description: 'Salário recebido', type: 'entrada', value: 2500 },
		{ description: 'Conta de luz', type: 'saída', value: -150 },
	]);

	return (
		<div className='App'>
			<header className='App-header'>
				<Forms></Forms>
				<TotalMoney listTransaction={listTransactions} />
				<List listTransactions={listTransactions}></List>
			</header>
		</div>
	);
}

export default App;
