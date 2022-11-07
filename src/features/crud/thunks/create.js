import { createAsyncThunk } from '@reduxjs/toolkit';
import { headers, USERS_URL } from 'features/crud/data/constants';

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
				throw new Error(
					'Sorry, A server error has occurred! Could not create a new person.'
				);
			}

			return await response.json();
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
