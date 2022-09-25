import style from './Card.module.css';

const Card = ({ children }) => {
	return <div className={style.cardContent}>{children}</div>;
};

export default Card;
