import styles from './Home.module.css';

function Home() {
	return (
		<div className={styles.wrapper}>
			<form>
				<h1>Русы против Ящеров - Оставь заявку</h1>
				<input type="name" placeholder="Введите имя:" />
				<input type="email" placeholder="Введите email:" />
				<button>Ящеры не захватят Русь!</button>
			</form>
		</div>
	);
}

export default Home;
