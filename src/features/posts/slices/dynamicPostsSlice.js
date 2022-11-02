import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import { handlePendingStatus, handleRejectedStatus } from 'app/redux/errors';
import sub from 'date-fns/sub';

const POSTS_URL = process.env.REACT_APP_POSTS;

const initialState = {
	postsApi: [],
	status: 'idle', // idle | loading | succeeded | failed
	error: null,
};

export const fetchPosts = createAsyncThunk(
	'postsApi/fetchPosts',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(`${POSTS_URL}?_start=0&_limit=2`);

			if (!response.ok) {
				throw new Error('Server error!');
			}

			const data = await response.json();

			return data;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);

export const addNewPost = createAsyncThunk(
	'postsApi/addNewPost',
	async (initialPost, { rejectWithValue }) => {
		try {
			const response = await fetch(POSTS_URL, {
				method: 'POST',
				body: JSON.stringify(initialPost),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});

			if (!response.ok) {
				throw new Error('Server error!');
			}

			const data = await response.json();

			return data;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);

export const postsApiSlice = createSlice({
	name: 'postsApi',
	initialState,
	reducers: {
		postAdded: {
			reducer(state, action) {
				state.postsApi.push(action.payload);
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
			const existingPost = state.postsApi.find(post => post.id === postId);
			if (existingPost) {
				existingPost.reactions[reaction]++;
			}
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchPosts.pending, state => {
				handlePendingStatus(state);
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				if (state.status === 'loading') {
					state.status = 'succeeded';

					// adding date and reactions
					let min = 1;
					const loadedPosts = action.payload.map(post => {
						post.createdAt = sub(new Date(), { minutes: min++ }).toISOString();
						post.reactions = {
							like: 0,
							heart: 0,
							cool: 0,
							coffee: 0,
						};

						return post;
					});

					// add any fetched posts to the array
					state.postsApi = state.postsApi.concat(loadedPosts);
				}
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				handleRejectedStatus(state, action);
			})
			.addCase(addNewPost.fulfilled, (state, action) => {
				action.payload.userId = Number(action.payload.userId);
				action.payload.createdAt = new Date().toISOString();
				action.payload.reactions = {
					like: 0,
					heart: 0,
					cool: 0,
					coffee: 0,
				};

				state.postsApi.push(action.payload);
			});
	},
});

export const selectAllApiPosts = state => state.postsApi.postsApi;
export const getPostsStatus = state => state.postsApi.status;
export const getPostsError = state => state.postsApi.error;

export const { reactionAdded } = postsApiSlice.actions;

export default postsApiSlice.reducer;
