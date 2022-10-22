import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'features/counter/slices/counterSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});
