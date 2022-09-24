import { useState } from 'react';
import './style.scss';

const Forms = ({ listTransactions, setListTransactions }) => {
	const [description, setDescription] = useState('');
	const [type, setType] = useState('');
	const [value, setValue] = useState('');

	const handleDescription = (event) => {
		setDescription(event.target.value);
	};

	const handleType = (event) => {
		setType(event.target.value);
	};

	const handleValue = (event) => {
		setValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newTransaction = {
			description,
			type,
			value: Number(value),
		};
		setListTransactions([...listTransactions, newTransaction]);
		setDescription('');
		setType('');
		setValue('');
	};

	return (
		<div>
			<form>
				<label>
					Descrição
					<input type='text' placeholder='Digite aqui sua descrição' />
					<span>Ex: Compra de roupas</span>
				</label>
				<label>
					Valor
					<input type='number' placeholder='Digite aqui o valor' />
					<span>Ex: 100,00</span>
				</label>
				<label>
					Tipo
					<select name='type' id='type'>
						<option value='entrada'>Entrada</option>
						<option value='saida'>Despesas</option>
					</select>
				</label>
				<button type='submit'>Adicionar</button>
			</form>
		</div>
	);
};

export default Forms;
