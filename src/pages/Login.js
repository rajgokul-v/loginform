import React from 'react'
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
import { Paths } from '../Routes'

import { login } from '../redux/action'

const Login = () => {
	const dispatch = useDispatch()

	const isLoggedIn = useSelector((state) => state.isLoggedIn)

	if (isLoggedIn) {
		return <Redirect to={Paths.PROFILE} />
	}
	const handleLogin = () => {
		dispatch(login())
	}

	return (
		<div>
			<h3>Login</h3>
			<button onClick={handleLogin}>Login</button>
		</div>
	)
}

export default Login
