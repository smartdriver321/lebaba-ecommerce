import { configureStore } from '@reduxjs/toolkit'

import authReducer from './features/auth/authSlice'
import cartReducer from './features/cartSlice'
import authApi from './features/auth/authApi'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		cart: cartReducer,

		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware),
})
