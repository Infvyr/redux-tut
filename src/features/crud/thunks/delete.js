import { createAsyncThunk } from '@reduxjs/toolkit';
import { USERS_URL } from 'features/crud/data/constants';
import { removePerson } from 'features/crud/slices/peopleSlice';

export const deletePerson = createAsyncThunk(
	'people/deletePerson',
	async (id, { rejectWithValue, dispatch }) => {
		try {
			const response = await fetch(`${USERS_URL}/${id}`, {
				method: 'DELETE',
			});

			if (!response.ok) {
				throw new Error(
					'Sorry, a server error has occurred! Cannot delete the person right now.'
				);
			}

			dispatch(removePerson(id));
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
