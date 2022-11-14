import { createAsyncThunk } from '@reduxjs/toolkit';
import { USERS_URL } from 'features/crud/data/constants';

export const searchPeople = createAsyncThunk(
	'people/searchPeople',
	async (search, { rejectWithValue }) => {
		if (search.length <= 1) return;

		try {
			const response = await fetch(`${USERS_URL}/search?q=${search}`);

			if (!response.ok) {
				throw new Error(
					'Sorry, A server error has occurred! Could not make a search request...'
				);
			}

			return await response.json();
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
