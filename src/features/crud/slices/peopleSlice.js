import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
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

export const addNewPerson = createAsyncThunk(
	'people/addNewPerson',
	async (initialPerson, { rejectWithValue }) => {
		try {
			const response = await fetch(USERS_URL, {
				method: 'POST',
				body: JSON.stringify(initialPerson),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});

			if (!response.ok) {
				throw new Error('Server error!');
			}

			return await response.json();
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
			prepare(name, city, email, companyName) {
				return {
					payload: {
						id: nanoid(3),
						name,
						address: { city },
						email,
						company: { name: companyName },
					},
				};
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
			})
			.addCase(addNewPerson.fulfilled, (state, action) => {
				console.log('addNewPeople.fulfilled --> ', action);
				state.people.push(action.payload);
			});
	},
});

export const selectPeople = state => state.people.people;
export const getPeopleStatus = state => state.people.status;
export const getPeopleError = state => state.people.error;

export const { addPeople } = peopleSlice.actions;

export default peopleSlice.reducer;
