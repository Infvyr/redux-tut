import Button from 'components/Button';
import PageHeader from 'components/PageHeader';
import Space from 'components/Space';
import {
	decrement,
	increment,
	incrementByAmount,
	resetAll,
} from 'features/counter/slices/counterSlice';
import { PowerReset as ResetIcon } from 'grommet-icons/icons/PowerReset';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Counter.module.css';

const initialAmount = '3';

function Counter() {
	const [amount, setAmount] = useState(initialAmount);
	const count = useSelector(state => state.counter.count);
	const dispatch = useDispatch();

	const onIncrement = () => dispatch(increment());
	const onDecrement = () => dispatch(decrement());
	const onIncrementByAmount = () => dispatch(incrementByAmount(Number(amount)));
	const onReset = () => {
		dispatch(resetAll());
		setAmount(initialAmount);
	};
	const onInputChange = event => {
		let inputValue = event.target.value.replace(/\D/g, '');
		setAmount(inputValue);
	};

	return (
		<div>
			<PageHeader backTo={-1} />
			<Space />

			<div className="card h-screen">
				<header className={styles.group}>
					<Button
						title="Decrement by 1"
						aria-label="Decrement"
						onClick={onDecrement}
					>
						-
					</Button>
					<input
						type="text"
						readOnly
						value={count}
						className={styles['input--readonly']}
					/>
					<Button
						title="Increment by 1"
						aria-label="Increment"
						onClick={onIncrement}
					>
						+
					</Button>
				</header>

				<Space />

				<footer className={styles.group}>
					<input type="text" value={amount} onChange={onInputChange} />
					<Button aria-label="Add amount" onClick={onIncrementByAmount}>
						Add {amount || ''}
					</Button>
					<Button title="Reset all" aria-label="Reset" onClick={onReset}>
						<ResetIcon color="white" size="20" />
					</Button>
				</footer>
			</div>
		</div>
	);
}

export default Counter;
