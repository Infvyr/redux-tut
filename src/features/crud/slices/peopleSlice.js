import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { handlePendingStatus, handleRejectedStatus } from 'app/redux/errors';

const USERS_URL = process.env.REACT_APP_USERS;

const initialState = {
	people: [],
	status: 'idle', // idle | loading | succeeded | failed
	error: null,
};

export const fetchPeople = createAsyncThunk(
	'people/fetchPeople',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(USERS_URL);

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

export const peopleSlice = createSlice({
	name: 'people',
	initialState,
	reducers: {
		addPeople: {
			reducer(state, action) {
				state.people.push(action.payload);
			},
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchPeople.pending, state => {
				handlePendingStatus(state);
			})
			.addCase(fetchPeople.rejected, (state, action) => {
				handleRejectedStatus(state, action);
			})
			.addCase(fetchPeople.fulfilled, (state, action) => {
				if (state.status === 'loading') {
					state.status = 'succeeded';
					state.people = state.people.concat(action.payload);
				}
			});
	},
});

export const selectPeople = state => state.people.people;
export const getPeopleStatus = state => state.people.status;
export const getPeopleError = state => state.people.error;

export const { addPeople } = peopleSlice.actions;

export default peopleSlice.reducer;
