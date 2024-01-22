import styles from './Home.module.css';
import IFormState from './../Interface/interface';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';

function Home() {
	const { register, handleSubmit, reset } = useForm<IFormState>();
	//тип из реакт хук форм
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const submit: SubmitHandler<IFormState> = (data) => {
		setIsLoading(true);
		fetch('http://localhost:5000/api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((response) =>
			response
				.json()
				.then((data) => {
					if (!data) return;
					setIsSuccess(true), reset();
				})
				.finally(() => {
					setIsLoading(false);
				})
		);
	};
	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(submit)}>
				{isSuccess ? (
					<div className={styles.success}>Форма отправлена</div>
				) : (
					<>
						<h1>Русы против Ящеров - Оставь заявку</h1>
						<input
							type="name"
							placeholder="Введите имя:"
							{...register('name')}
						/>
						<input
							type="email"
							placeholder="Введите email:"
							{...register('email')}
						/>
						<button disabled={isLoading}>
							{isLoading ? `Загрузка` : `Хочу тоже бить ящеров!`}
						</button>
					</>
				)}
			</form>
		</div>
	);
}

export default Home;
