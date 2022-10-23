import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{ id: '1', name: 'John Murphy' },
	{ id: '2', name: 'Martin Kelly' },
	{ id: '3', name: 'Billy Yates' },
];
export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
});

export const selectAllUsers = state => state.users;

export default usersSlice.reducer;
