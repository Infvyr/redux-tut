import { createSlice } from '@reduxjs/toolkit';
import { handlePendingStatus, handleRejectedStatus } from 'app/redux/errors';
import {
	addNewPerson,
	deletePerson,
	fetchPeople,
	onPersonUpdate,
	searchPeople,
	updatePerson,
} from 'features/crud/thunks';

const initialState = {
	people: [],
	status: 'idle', // idle | pending | succeeded | failed
	error: null,
	currentRequestId: undefined,
};

export const peopleSlice = createSlice({
	name: 'people',
	initialState,
	reducers: {
		editPerson: (state, action) => {
			onPersonUpdate(state, action);
		},
		removePerson: (state, action) => {
			const id = action.payload;
			state.people = state.people.filter(person => person.id !== id);
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchPeople.pending, (state, action) => {
				handlePendingStatus(state, action);
			})
			.addCase(fetchPeople.rejected, (state, action) => {
				handleRejectedStatus(state, action);
			})
			.addCase(fetchPeople.fulfilled, (state, action) => {
				const { requestId } = action.meta;
				if (
					state.status === 'pending' &&
					state.currentRequestId === requestId
				) {
					state.status = 'succeeded';
					const sortedPeople = action.payload.users.sort((a, b) => b.id - a.id);
					state.people = state.people.concat(sortedPeople);
					state.currentRequestId = undefined;
				}
			})
			.addCase(addNewPerson.pending, (state, action) => {
				handlePendingStatus(state, action);
			})
			.addCase(addNewPerson.fulfilled, (state, action) => {
				state.people.unshift(action.payload);
			})
			.addCase(addNewPerson.rejected, (state, action) => {
				if (action.payload) {
					state.error = action.payload;
				}
			})
			.addCase(updatePerson.fulfilled, (state, action) => {
				editPerson(state, action);
			})
			.addCase(updatePerson.rejected, (state, action) => {
				if (action.payload) {
					state.error = action.payload;
				}
			})
			.addCase(deletePerson.fulfilled, (state, action) => {
				const id = action.payload;
				state.people = state.people.filter(person => person.id !== id);
			})
			.addCase(deletePerson.rejected, (state, action) => {
				if (action.payload) {
					state.error = action.payload;
				}
			})
			.addCase(searchPeople.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(searchPeople.fulfilled, (state, action) => {
				state.people = action.payload.users;
				state.status = 'succeeded';
			});
	},
});

export const selectPeople = state => state.people.people;
export const getPeopleStatus = state => state.people.status;
export const getPeopleError = state => state.people.error;

export const { editPerson, removePerson } = peopleSlice.actions;

export default peopleSlice.reducer;
