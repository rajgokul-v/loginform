import React from 'react'
import { Button } from 'react-bootstrap'

import { Paths } from '../../Routes'

import '../home/home.css'

const Home = () => {
	return (
		<div className="parent">
			<nav>
				<div className="nav-log">Navbar</div>
				<ul>
					<li>
						<a>Home</a>
					</li>
					<li>
						<a>Features</a>
					</li>
					<li>
						<a>Pricing</a>
					</li>
					<li>
						<a>About</a>
					</li>
				</ul>
			</nav>
			<div className="btn-container">
				<Button className="btn" href={Paths.LOGIN}>
					Get Start
				</Button>
			</div>
			<div className="new"></div>
		</div>
	)
}

export default Home
