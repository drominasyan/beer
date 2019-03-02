import React, {Component}               from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App                              from '../App'
import LoginSignUp                      from '../Auth'
import favorite                         from '../Components/Favorite/index'
import ContextProvider                  from '../Context/ContextBeers'

class BeerRouter extends Component {

	render() {
		return (
			<Router>
				<>
					<Route exact path={'/'} component={LoginSignUp}/>
					<ContextProvider>
						<Route exact path={'/home'} component={App}/>
						<Route path={'/favorite'} component={favorite}/>
					</ContextProvider>
				</>
			</Router>
		)
	}
}

export default BeerRouter