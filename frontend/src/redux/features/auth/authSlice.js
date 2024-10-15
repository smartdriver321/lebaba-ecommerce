import { createSlice } from '@reduxjs/toolkit'

const loadUserFromLocalStorage = () => {
	try {
		const serializedState = localStorage.getItem('user')
		if (serializedState == null) return { user: null }
		return { user: JSON.parse(serializedState) }
	} catch (error) {
		console.log(error)
		return { user: null }
	}
}

const initialState = loadUserFromLocalStorage()

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload.user
			localStorage.setItem('user', JSON.stringify(state.user))
		},
		logOut: (state) => {
			state.user = null
			localStorage.removeItem('user')
		},
	},
})

export const { setUser, logOut } = authSlice.actions
export default authSlice.reducer
