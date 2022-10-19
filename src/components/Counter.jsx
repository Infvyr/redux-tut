import {
	decrement,
	increment,
	incrementByAmount,
	resetAll,
} from 'features/counter/counterSlice';
import { PowerReset as ResetIcon } from 'grommet-icons/icons/PowerReset';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
			<h1 className="text-3xl font-bold underline">Simple Counter</h1>
			<header>
				<button onClick={onDecrement}>-</button>
				<input type="text" readOnly value={count} />
				<button onClick={onIncrement}>+</button>
			</header>
			<footer>
				<input type="text" value={amount} onChange={onInputChange} />
				<button onClick={onIncrementByAmount}>Add {amount || ''}</button>
				<button onClick={onReset}>
					<ResetIcon />
				</button>
			</footer>
		</div>
	);
}

export default Counter;
