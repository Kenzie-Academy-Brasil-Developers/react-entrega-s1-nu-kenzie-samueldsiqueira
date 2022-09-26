import Card from '../Card/Card';
import style from './Forms.module.css';

const Forms = ({ handleSubmit, setNewData, newData, validateForm, setValidateForm }) => {
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<label>
					Descrição
					<input
						type='text'
						id='descriptionForm'
						name='description'
						className={validateForm ? style.validForm : style.invalidForm}
						placeholder='Digite aqui sua descrição'
						value={newData.description}
						onChange={(event) => setNewData({ ...newData, description: event.target.value })}
					/>
					<span>Ex: Compra de roupas</span>
				</label>

				<label>
					Valor
					<input
						className={validateForm ? style.validForm : style.invalidForm}
						type='number'
						id='valueForm'
						placeholder='Digite aqui o valor'
						name='value'
						value={newData.value}
						onChange={(event) => setNewData({ ...newData, value: Number(event.target.value) })}
					/>
					<span>Ex: 100,00</span>
				</label>

				<label>
					Tipo
					<select
						name='type'
						placeholder='Selecione'
						id='typeForme'
						className={style.validateForm}
						value={newData.type}
						onChange={(event) => setNewData({ ...newData, type: event.target.value })}
					>
						<option value='Entrada'>Entrada</option>
						<option value='Saída'>Despesas</option>
					</select>
				</label>
				<button type='submit'>Adicionar</button>
			</form>
		</Card>
	);
};

export default Forms;
