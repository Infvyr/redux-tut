import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const USERS_URL = process.env.REACT_APP_USERS;

const initialState = {
	usersApi: [],
	status: 'idle', // idle | loading | succeeded | failed
	error: null,
};

export const fetchUsers = createAsyncThunk(
	'usersApi/fetchUsers',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(USERS_URL);

			if (!response.ok) {
				throw new Error('An error has been encountered!');
			}

			const data = await response.json();

			return data;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);

export const usersApiSlice = createSlice({
	name: 'usersApi',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchUsers.pending, state => {
				if (state.status === 'idle') {
					state.status = 'loading';
					state.error = null;
				}
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				if (state.status === 'loading') {
					state.status = 'succeeded';
					state.usersApi.push(...action.payload);
					// return action.payload
				}
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			});
	},
});

export const selectAllApiUsers = state => state.usersApi.usersApi;
export const getUsersStatus = state => state.usersApi.status;
export const getUsersError = state => state.usersApi.error;

export default usersApiSlice.reducer;
