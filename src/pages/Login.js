import React from 'react'
import { Form, useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Button, Card, FormGroup } from 'react-bootstrap'
import * as yup from 'yup'

import { login } from '../redux/action'
import Profile from './Profile'

const validationSchema = yup.object({
	name: yup.string('Enter your name').required('Name is required'),
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string('Enter your password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required')
})

const Login = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: ''
		},
		validationSchema: validationSchema,
		onSubmit: () => {
			dispatch(login(formik.values))
		}
	})
	const dispatch = useDispatch()

	const isLoggedIn = useSelector((state) => state.isLoggedIn)

	if (formik.isValid && isLoggedIn) {
		return <Profile />
	}

	return (
		<>
			<Card>
				<Card.Body>
					<form onSubmit={formik.handleSubmit}>
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<br />
							<br />
							<input
								name="name"
								value={formik.values.name}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.name && formik.errors.name ? (
								<div className="error">{formik.errors.name}</div>
							) : null}
						</Form.Group>
						<Form.Group>
							<label>Name</label>
							<input
								name="name"
								value={formik.values.name}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.name && formik.errors.name ? (
								<div className="error">{formik.errors.name}</div>
							) : null}
						</Form.Group>

						<Form.Group>
							<label>email</label>
							<br />
							<br />
							<input
								name="email"
								label="Email"
								value={formik.values.email}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.email && formik.errors.email ? (
								<div className="error">{formik.errors.email}</div>
							) : null}
						</Form.Group>
						<label>password</label>
						<input
							name="password"
							label="Password"
							type="password"
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.password && formik.errors.password ? (
							<div className="error">{formik.errors.password}</div>
						) : null}
						<br />
						<br />
						<div className="btn-container"></div>
						<Button className="btn" type="submit">
							Submit
						</Button>
					</form>
				</Card.Body>
			</Card>
		</>
	)
}

export default Login
