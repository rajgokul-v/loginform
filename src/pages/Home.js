import React from 'react'
import { Link } from 'react-router-dom'

import '../index.css'
import { Paths } from '../Routes'

const Home = () => {
	return (
		<body>
			<div>
				<nav>
					<div className="logo-container">
						<i class="fas fa-copyright"></i>
						<h3>Code Studio</h3>
					</div>
				</nav>
			</div>
			<div className="btn-container">
				<Link className="btn" to={Paths.LOGIN}>
					Get Start
				</Link>
			</div>
		</body>
	)
}

export default Home
