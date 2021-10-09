import React from 'react'
import { Redirect, Route } from 'react-router'
import { useSelector } from 'react-redux'

import { Paths } from '../Routes'

const ProtectedRoutes = ({ component: Component, ...rest }) => {
	const { isLoggedIn, name, age } = useSelector((state) => ({
		isLoggedIn: state.isLoggedIn,
		name: state.name,
		age: state.age
	}))

	return (
		<Route
			{...rest}
			render={() =>
				isLoggedIn ? (
					<Component name={name} age={age} />
				) : (
					<Redirect to={Paths.LOGIN} />
				)
			}
		/>
	)
}

export default ProtectedRoutes
