import { createAsyncThunk } from '@reduxjs/toolkit';
import { USERS_URL } from 'features/crud/data/constants';

export const fetchPeople = createAsyncThunk(
	'people/fetchPeople',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(`${USERS_URL}?limit=10`);

			if (!response.ok) {
				throw new Error("Sorry, an error has occurred! Couldn't fetch data...");
			}

			return await response.json();
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
