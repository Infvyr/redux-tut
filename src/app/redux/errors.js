const handleRejectedStatus = (state, action) => {
	state.status = 'failed';
	state.error = action.payload;
};

const handlePendingStatus = state => {
	if (state.status === 'idle') {
		state.status = 'loading';
		state.error = null;
	}
};

export { handleRejectedStatus, handlePendingStatus };
