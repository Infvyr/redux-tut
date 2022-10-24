import { createSlice, nanoid } from '@reduxjs/toolkit';
import sub from 'date-fns/sub';

const initialState = [
	{
		id: '1',
		title: 'Learning Redux Toolkit',
		content: "I've heard good things.",
		createdAt: sub(new Date(), { minutes: 10 }).toISOString(),
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
		createdAt: sub(new Date(), { minutes: 5 }).toISOString(),
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
	reducers: {
		postAdded: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(title, content, authorId) {
				return {
					payload: {
						id: nanoid(),
						title,
						content,
						createdAt: new Date().toISOString(),
						authorId,
						reactions: {
							like: 0,
							heart: 0,
							cool: 0,
							coffee: 0,
						},
					},
				};
			},
		},
		reactionAdded(state, action) {
			const { postId, reaction } = action.payload;
			const existingPost = state.find(post => post.id === postId);
			if (existingPost) {
				existingPost.reactions[reaction]++;
			}
		},
	},
});

export const selectAllPosts = state => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
