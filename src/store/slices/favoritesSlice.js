import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	items: []
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorite(state, action) {
			const {id} = action.payload;
			const existingIndex = state.items.findIndex((item) => item.id === id);
			if(existingIndex !== -1) {
				state.items.splice(existingIndex, 1)
			} else {
				state.items.push(action.payload);
			}
		},
	},
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;