import { configureStore } from '@reduxjs/toolkit'

import authReducer from './features/auth/authSlice'
import cartReducer from './features/cartSlice'
import authApi from './features/auth/authApi'
import productsApi from './features/productsApi'
import reviewsApi from './features/reviewsApi'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		cart: cartReducer,

		[authApi.reducerPath]: authApi.reducer,
		[productsApi.reducerPath]: productsApi.reducer,
		[reviewsApi.reducerPath]: reviewsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			authApi.middleware,
			productsApi.middleware,
			reviewsApi.middleware
		),
})
