import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isConfirm: false,
};

const confirmSlice = createSlice({
	name: "confirm",
	initialState,
	reducers: {
		setIsConfirm(state, action) {
			state.isConfirm = action.payload;
		},
	},
});

export const { setIsConfirm } = confirmSlice.actions;

export default confirmSlice.reducer;