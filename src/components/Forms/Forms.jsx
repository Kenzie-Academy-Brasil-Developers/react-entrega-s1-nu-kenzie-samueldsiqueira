import Card from '../Card/Card';

const Forms = ({ newData: { id, description, value, type }, setNewData, handleSubmit }) => {
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<label id={id}></label>
				<label>
					Descrição
					<input
						type='text'
						placeholder='Digite aqui sua descrição'
						value={description}
						onChange={(event) => setNewData({ ...description, description: event.target.value.trim() })}
					/>
					<span>Ex: Compra de roupas</span>
				</label>

				<label>
					Valor
					<input
						type='number'
						placeholder='Digite aqui o valor'
						value={value}
						onChange={(event) => setNewData({ ...value, value: Number(event.target.value) })}
					/>
					<span>Ex: 100,00</span>
				</label>

				<label>
					Tipo
					<select
						name='type'
						placeholder='Selecione'
						onChange={(event) => setNewData({ ...type, type: toString(event.target.value) })}
					>
						<option value='entrada'>Entrada</option>
						<option value='saida'>Despesas</option>
					</select>
				</label>
				<button type='submit'>Adicionar</button>
			</form>
		</Card>
	);
};

export default Forms;
