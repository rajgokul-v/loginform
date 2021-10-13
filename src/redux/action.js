import { LOGIN, LOGOUT } from './constants'

export const login = ({ name, email, password }) => {
	return {
		type: LOGIN,
		payload: {
			name: name,
			email: email,
			password: password
		}
	}
}

export const logout = () => {
	return { type: LOGOUT }
}
