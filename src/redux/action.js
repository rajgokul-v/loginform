import { LOGIN, LOGOUT } from './constants'

export const login = () => {
	return {
		type: LOGIN,
		payload: { name: 'Gokul Raj', age: 21, fullName: 'Gokul danger' }
	}
}

export const logout = () => {
	return { type: LOGOUT }
}
