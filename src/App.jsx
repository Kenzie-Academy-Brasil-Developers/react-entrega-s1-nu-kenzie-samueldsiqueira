import { useState } from 'react';
import './styles/globals.css';

function App() {
	const [listTransactions, setListTransactions] = useState([
		{ description: 'Salário recebido', type: 'entrada', value: 2500 },
		{ description: 'Conta de luz', type: 'saída', value: -150 },
	]);

	return (
		<div>
			<nav>
				<h1>to funcionando</h1>
				<button className='large-primary--button '>Clicke aqui</button>
			</nav>
		</div>
	);
}

export default App;