import { createAsyncThunk } from '@reduxjs/toolkit';
import { headers, USERS_URL } from 'features/crud/data/constants';
import { editPerson } from 'features/crud/slices/peopleSlice';

export const updatePerson = createAsyncThunk(
	'people/updatePerson',
	async (initialPerson, { rejectWithValue, dispatch }) => {
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
				throw new Error(
					'Sorry, a server error has occurred! Cannot update the person right now.'
				);
			}

			dispatch(editPerson(initialPerson));
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);

export const onPersonUpdate = (state, action) => {
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
