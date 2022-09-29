import style from './Forms.module.css';

const Forms = ({ handleSubmit, setNewData, newData, validateForm, setValidateForm, moneyStash }) => {
	return (
		<div className={style.forms}>
			<form className={style.formsContent} onSubmit={handleSubmit}>
				<label className={style.labelText}>
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
					<span className={style.helpText}>Ex: Compra de roupas</span>
				</label>
				<div className={style.valueSection}>
					<div className={style.formValue}>
						<label className={style.labelText}>
							Valor
							<input
								className={validateForm ? style.validForm : style.invalidForm}
								type='number'
								id='valueForm'
								placeholder='R$ 0,00'
								name='value'
								value={newData.value}
								onChange={(event) => setNewData({ ...newData, value: Number(event.target.value) })}
							/>
							<span className={style.helpText}>Ex: 100,00</span>
						</label>
					</div>

					<div className={style.selectTransaction}>
						<label>
							<p className={style.labelText}>Tipo</p>
						</label>
						<select
							name='type'
							placeholder='Selecione'
							id='typeForme'
							className={style.validateForm}
							value={newData.type}
							onChange={(event) => setNewData({ ...newData, type: event.target.value })}
						>
							<option value='Entrada'>Entrada</option>
							<option value='Despesas'>Despesas</option>
						</select>
					</div>
				</div>

				<button type='submit'>Adicionar</button>
			</form>
		</div>
	);
};

export default Forms;
