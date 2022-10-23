import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'features/counter/slices/counterSlice';
import usersReducer from 'features/users/slices/usersSlice';
import postsReducer from 'features/posts/slices/postsSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		users: usersReducer,
		posts: postsReducer,
	},
});
