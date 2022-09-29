import style from './Header.module.css';

const Header = () => {
	return (
		<div className={style.headerNav}>
			<div className={style.headerContent}>
				<h1 className={style.brand}>
					<strong>Nu </strong> Kenzie
				</h1>

				<div className={style.btnHeader}>
					<button className='large-primary--button'>Inicio</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
