import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/home/Home.js'

import PageNotFound from './pages/PageNotFound'
import Profile from './pages/Profile'
import ProtectedRoutes from './component/ProtectedRoutes'

import store from './redux/store'
import { Paths } from './Routes'
import Login from './pages/form/Login.js'

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path={Paths.HOME} component={Home} />
					<Route path={Paths.LOGIN} component={Login} />
					<ProtectedRoutes
						path={Paths.PROFILE}
						isloggedIn={true}
						component={Profile}
					/>
					<Route path="*" component={PageNotFound} />
				</Switch>
			</Router>
		</Provider>
	)
}

export default App
