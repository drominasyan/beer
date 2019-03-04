import {library}                  from '@fortawesome/fontawesome-svg-core'
import {far, faStar}              from '@fortawesome/free-regular-svg-icons'
import {faCode, faCoffee}         from '@fortawesome/free-solid-svg-icons'
import React, {Component}         from 'react'
import ReactPaginate              from 'react-paginate'
import io                         from 'socket.io-client'
import './App.css'
import Beers                      from './Components/ContentBeers'
import SinglePopupBeer
                                  from './Components/ContentBeers/SinglePopupBeer'
import Header                     from './Components/Header/index'
import {BEER_API_HOST, GET_BEERS} from './Constants/Api'
import ConsumerContext            from './HOC/ConsumerContext'
import {BeersHostRequest}         from './Network'

class App extends Component {
	state = {
		connect: false,
		errorMessage:""
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
	handlePageClick = (e) => {
		this.props.data.methods.updateFetched(false)
		BeersHostRequest(
			`${BEER_API_HOST}/v2/beers?page=${e.selected}&per_page=15`)
			.then((response) => {
				if(response.status === 200){
					this.props.data.methods.updateData(response.data)
					this.props.data.methods.updateFetched(true)
				}else{
					this.props.data.methods.updateData({})
					this.props.data.methods.updateFetched(true)
				}
			})
	}

	componentDidMount() {
		BeersHostRequest(GET_BEERS).then((response) => {
			if(response.status === 200 && response.data.length){
				this.props.data.methods.updateData(response.data)
				this.props.data.methods.updateFetched(true)
			}
		}).catch((e)=>{
			this.setState({
				errorMessage:e
			})
		})
	}

	render() {
		console.log(this.props.data.fetched)
		return (
			<>
				< Header/>
				{this.props.data.beers.length ?
					<div>
						<div className="container">
							<div className="beers-row"><Beers
								favorite={this.props.data.favList}
								fetched={this.props.data.fetched}
								beers={this.props.data.beers}
								addFavorite={this.props.data.methods.updateFavoriteList}
								updateSingleBeersData={this.props.data.methods.updateSingleBeersData}/>
							</div>
						</div>
						<div className="pagination">
							<ReactPaginate previousLabel={
								'previous'
							}
							               nextLabel={
								               'next'
							               }
							               breakLabel={
								               '...'
							               }
							               breakClassName={
								               'break-me'
							               }
							               pageCount={
								               15
							               }
							               marginPagesDisplayed={
								               2
							               }
							               pageRangeDisplayed={
								               5
							               }
							               onPageChange={
								               this.handlePageClick
							               }
							               containerClassName={
								               'pagination'
							               }
							               subContainerClassName={
								               'pages pagination'
							               }
							               activeClassName={
								               'active'
							               }
							/>
						</div>
					</div> :
					<h1 className={'beers-row'}>There is no any beer</h1>
				}

				{
					this.props.data.showPopup ? <SinglePopupBeer
						show={this.props.data.showPopup}
						popapSwicher={this.props.data.methods.popapSwicher}
						data={this.props.data.singleBeersData}/> : null
				}
			</>
		)
	}
}

library.add(far, faStar, faCode, faCoffee)
export default ConsumerContext(App)
