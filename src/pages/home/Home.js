import React from 'react'
import { Button } from 'react-bootstrap'

import { Paths } from '../../Routes'

import '../home/home.css'
import Timer from './Timer'

const Home = () => {
	return (
		<div className="parent">
			<nav>
				<div className="nav-log">Navbar</div>
				<ul>
					<li>
						<a href="#">Sign Up</a>
					</li>
					<li>
						<a href="#">Features</a>
					</li>
					<li>
						<a href="#">Pricing</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
				</ul>
			</nav>
			<div className="btn-container">
				<Button className="btn" href={Paths.LOGIN}>
					Get Start
				</Button>
			</div>
			<div className="new">
				<Timer />
			</div>
		</div>
	)
}

export default Home
