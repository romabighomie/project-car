import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
	},
	reducers: {
		addToCart(state, action) {
			const newItem = action.payload;
			const isItemInCart = state.items.some(item => item.id === newItem.id);
			if (!isItemInCart) {
				state.items.push(newItem);
			}
		},
		removeFromCart(state, action) {
			const itemIdToRemove = action.payload.id;
			state.items = state.items.filter((item) => item.id !== itemIdToRemove);
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;