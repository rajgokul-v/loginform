import { LOGIN, LOGOUT } from './constants'

const initialState = {
	isLoggedIn: false
}

const reducer = (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case LOGIN:
			return {
				isLoggedIn: true,
				name: payload.name,
				age: payload.age,
				fullName: payload.fullName
			}

		case LOGOUT:
			return {
				isLoggedIn: false
			}
		default:
			return state
	}
}

export default reducer
