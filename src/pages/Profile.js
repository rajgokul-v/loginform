import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../index.css'
import { logout } from '../redux/action'

const Profile = ({ name, age }) => {
	const dispatch = useDispatch()

	const email = useSelector((state) => state.email)

	const handleLogout = () => {
		dispatch(logout())
	}
	return (
		<div className="body">
			<div className="pro-container">
				<h3>profile</h3>
				<div className="pic"></div>
				<h5>{name}</h5>
				<h5>{age}</h5>
				<h5>{email}</h5>
			</div>
			<button id="btn" onClick={handleLogout}>
				Log out
			</button>
		</div>
	)
}

export default Profile
