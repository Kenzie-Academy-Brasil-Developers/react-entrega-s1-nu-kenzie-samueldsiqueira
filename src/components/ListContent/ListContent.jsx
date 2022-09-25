import Card from '../Card/Card';

const ListContent = ({ listTransactions: { id, description, value, type }, removeThisTransaction }) => {
	return (
		<li id={id} className={type} key={id}>
			<h2> {description}</h2>
			<span> {value}</span>
			<p> {type}</p>
			<button type='submit' onClick={() => removeThisTransaction(id)}>
				Remove
			</button>
		</li>
	);
};

export default ListContent;
