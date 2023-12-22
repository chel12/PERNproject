import styles from './Home.module.css';
const isSuccess = false;

function Home() {
	return (
		<div className={styles.wrapper}>
			<form>
				{isSuccess ? (
					<div className={styles.success}>Форма отправлена</div>
				) : (
					<>
						<h1>Русы против Ящеров - Оставь заявку</h1>
						<input type="name" placeholder="Введите имя:" />
						<input type="email" placeholder="Введите email:" />
						<button>Ящеры не захватят Русь!</button>
					</>
				)}
			</form>
		</div>
	);
}

export default Home;
