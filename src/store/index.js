import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import favoritesSlice from "./slices/favoritesSlice";

const saveToSessionStorage = (store) => (next) => (action) => {
	const result = next(action);
	const state = store.getState();
	sessionStorage.setItem('reduxState', JSON.stringify(state));
	return result;
};

const preloadedState = JSON.parse(sessionStorage.getItem('reduxState')) || {};

export const store = configureStore({
	reducer: {
		user: userReducer,
		favorites: favoritesSlice,
	},
	preloadedState,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveToSessionStorage),
});