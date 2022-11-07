const handleRejectedStatus = (state, action) => {
	const { requestId } = action.meta;
	if (state.status === 'pending' && state.currentRequestId === requestId) {
		state.status = 'failed';
		state.error = action.payload;
		state.currentRequestId = undefined;
	}
};

const handlePendingStatus = (state, action) => {
	if (state.status === 'idle') {
		state.status = 'pending';
		state.currentRequestId = action.meta.requestId;
		state.error = action.payload;
	}
};

export { handleRejectedStatus, handlePendingStatus };
