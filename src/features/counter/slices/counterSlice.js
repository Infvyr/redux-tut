import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			state.count += 1; // state.count++
		},
		decrement(state) {
			state.count -= 1; // state.count--
		},
		incrementByAmount(state, action) {
			state.count += action.payload;
		},
		resetAll(state) {
			state.count = 0;
		},
	},
});

export const { increment, incrementByAmount, decrement, resetAll } =
	counterSlice.actions;
export default counterSlice.reducer;