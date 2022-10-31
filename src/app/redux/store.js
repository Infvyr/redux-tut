import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'features/counter/slices/counterSlice';
import usersReducer from 'features/users/slices/usersSlice';
import usersApiReducer from 'features/users/slices/dynamicUsersSlice';
import postsReducer from 'features/posts/slices/postsSlice';
import postsApiReducer from 'features/posts/slices/dynamicPostsSlice';
import peopleReducer from 'features/crud/slices/peopleSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		users: usersReducer,
		usersApi: usersApiReducer,
		posts: postsReducer,
		postsApi: postsApiReducer,
		people: peopleReducer,
	},
});
