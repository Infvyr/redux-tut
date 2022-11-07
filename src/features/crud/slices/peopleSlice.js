import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { handlePendingStatus, handleRejectedStatus } from 'app/redux/errors';

// const USERS_URL = process.env.REACT_APP_USERS;
const USERS_URL = process.env.REACT_APP_DUMMY_USERS;
const headers = {
	'Content-Type': 'application/json',
};

const initialState = {
	people: [],
	status: 'idle', // idle | loading | succeeded | failed
	error: null,
};

export const fetchPeople = createAsyncThunk(
	'people/fetchPeople',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(`${USERS_URL}?limit=10`);

			if (!response.ok) {
				throw new Error('Server error!');
			}

			return await response.json();
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);

export const addNewPerson = createAsyncThunk(
	'people/addNewPerson',
	async (initialPerson, { rejectWithValue }) => {
		try {
			const response = await fetch(`${USERS_URL}/add`, {
				method: 'POST',
				body: JSON.stringify(initialPerson),
				headers,
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

export const updatePerson = createAsyncThunk(
	'people/updatePerson',
	async (initialPerson, { rejectWithValue }) => {
		try {
			const response = await fetch(`${USERS_URL}/${initialPerson.id}`, {
				method: 'PUT',
				body: JSON.stringify({
					firstName: initialPerson.firstName,
					lastName: initialPerson.lastName,
					birthDate: initialPerson.birthDate,
					email: initialPerson.email,
					address: { address: initialPerson.address },
				}),
				headers,
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

const onPersonUpdate = (state, action) => {
	const { id, firstName, lastName, birthDate, email, address } = action.payload;
	const existingPerson = state.people.find(person => person.id === id);
	if (existingPerson) {
		existingPerson.firstName = firstName;
		existingPerson.lastName = lastName;
		existingPerson.birthDate = birthDate;
		existingPerson.email = email;
		existingPerson.address = address;
	}
};

export const peopleSlice = createSlice({
	name: 'people',
	initialState,
	reducers: {
		updatePersonState: (state, action) => {
			onPersonUpdate(state, action);
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
					let sortedPeople = action.payload.users.sort((a, b) => b.id - a.id);
					state.people = state.people.concat(sortedPeople);
				}
			})
			.addCase(addNewPerson.fulfilled, (state, action) => {
				state.people.unshift(action.payload);
			})
			.addCase(updatePerson.fulfilled, (state, action) => {
				onPersonUpdate(state, action);
			});
	},
});

export const selectPeople = state => state.people.people;
export const getPeopleStatus = state => state.people.status;
export const getPeopleError = state => state.people.error;

export const { updatePersonState } = peopleSlice.actions;

export default peopleSlice.reducer;
