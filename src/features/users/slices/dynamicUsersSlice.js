import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { handlePendingStatus } from 'app/redux/errors';

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

			return await response.json();
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
			.addCase(fetchUsers.pending, (state, action) => {
				handlePendingStatus(state, action);
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				if (state.status === 'pending') {
					state.status = 'succeeded';
					state.usersApi = action.payload;
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
