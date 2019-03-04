import React, {Component}                         from 'react'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Switch
                                                  from 'react-router-dom/es/Switch'
import App                                        from '../App'
import LoginSignUp                                from '../Auth'
import favorite
                                                  from '../Components/Favorite/index'
import {PageNotFound}                             from '../Components/NoPage/PageNotFound'
import ContextProvider                            from '../Context/ContextBeers'

class BeerRouter extends Component {

	render() {
		return (
			<ContextProvider>
				<Router>
					<Switch>
						<Route exact path={'/'} component={LoginSignUp}/>
						<Route path={'/home'} render={(props) => {
							return localStorage.getItem('token') == null
								? <Redirect to={'/'}/>
								: <App/>
						}}/>
						<Route path={'/favorite'} component={favorite}/>
						<Route component={PageNotFound}/>
					</Switch>
				</Router>
			</ContextProvider>
		)
	}
}

export default BeerRouter