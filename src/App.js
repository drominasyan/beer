import {library}          from '@fortawesome/fontawesome-svg-core'
import {far, faStar}      from '@fortawesome/free-regular-svg-icons'
import {faCode, faCoffee} from '@fortawesome/free-solid-svg-icons'
import React, {Component} from 'react'
import io                 from 'socket.io-client'
import './App.css'
import Beers              from './Components/ContentBeers'
import SinglePopupBeer    from './Components/ContentBeers/SinglePopupBeer'
import {GET_BEERS}        from './Constants/Api'
import ContextProvider    from './Context/ContextBeers'
import ConsumerContext    from './HOC/ConsumerContext'
import {BeersHostRequest} from './Network'
import Header from './Components/Header/index';
import ReactPaginate from 'react-paginate';
 import Loader from 'react-loader-spinner'

class App extends Component {
	state = {
		connect: false,
	}

	connect = () => {
		this.socket = io.connect('http://10.25.40.103:3000')
		this.socket.on('connected', data => {
			console.log(data)
			this.setState({
				connect: data,
				value: 'dero',
			})
		})
	}

	componentDidMount() {
		BeersHostRequest(GET_BEERS).then((response) => {
			this.props.data.methods.updateData(response.data)
		})
	}

	render() {
		console.log("ssssssssssssssssssssssss",this.props)
		return (
			<>
			< Header/>
		
				{
					this.props.data.beers.length ?
						<div className="container">
							<div className="beers-row"><Beers
								favorite={this.props.data.favList}
								beers={this.props.data.beers}
								addFavorite={this.props.data.methods.updateFavoriteList}
								updateSingleBeersData={this.props.data.methods.updateSingleBeersData}/>
							</div>
						</div> :
							<Loader
							className = {
								"loader"
							}
							type = "Puff"
							zIndex = "4"
							color = "#00BFFF"
							
							 />
				}
				{
					this.props.data.showPopup ? <SinglePopupBeer
						show={this.props.data.showPopup}
						popapSwicher={this.props.data.methods.popapSwicher}
						data={this.props.data.singleBeersData}/> : null
				}
				<ReactPaginate />
			</>
		)
	}
}

library.add(far, faStar, faCode, faCoffee)
export default ConsumerContext(App)
