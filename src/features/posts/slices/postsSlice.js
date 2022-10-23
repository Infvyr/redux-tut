import { createSlice, nanoid } from '@reduxjs/toolkit';
import sub from 'date-fns/sub';

const initialState = [
	{
		id: '1',
		title: 'Learning Redux Toolkit',
		content: "I've heard good things.",
		date: sub(new Date(), { minutes: 10 }).toISOString(),
		reactions: {
			like: 0,
			heart: 0,
			cool: 0,
			coffee: 0,
		},
	},
	{
		id: '2',
		title: 'Slices...',
		content: 'The more I say slice, the more I want pizza.',
		date: sub(new Date(), { minutes: 5 }).toISOString(),
		reactions: {
			like: 0,
			heart: 0,
			cool: 0,
			coffee: 0,
		},
	},
];

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
});

export const selectAllPosts = state => state.posts;

export default postsSlice.reducer;
