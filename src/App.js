import { library } from '@fortawesome/fontawesome-svg-core'
import { far, faStar } from '@fortawesome/free-regular-svg-icons'
import { faCode, faCoffee } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import { withRouter } from 'react-router-dom'
import './App.css'
import SinglePopupBeer from './Components/ContentBeers/SinglePopupBeer'
import Header from './Components/Header/index'
import { BEER_API_HOST } from './Constants/Api'
import CardBeer from "./Components/ContentBeers/CardBeer"
import { connect } from "react-redux"
import { fetchBeers, updateFavoriteList } from "./Actions/index"
import { bindActionCreators } from 'redux'
import { GET_BEERS } from './Constants/Api'
class App extends Component {
	constructor(props) {
		// console.log(props.state)
		super(props)
		this.state = {
			fetched:false
		}
	}

	handlePageClick = (e) => {
		this.props.fetchBeers(`${BEER_API_HOST}/v2/beers?page=${e.selected + 1}&per_page=15`)
	}

	componentDidMount() {
		// console.log(this.props)
		this.props.fetchBeers(GET_BEERS)
	}

	render() {
		//  console.log("this.props",this.props.state)
		const arr = []
		this.props.state.favorits.forEach((item) => {
			arr.push(item.id)
		})

		return (
			<>
				<Header />
				{this.props.state.beers.length ?
					<div>
						<div className="container">
							<div className="beers-row">
								{
									this.props.state.beers.map((item, index) => <CardBeer
										key={item.id}
										popapSwicher={this.props.popapSwicher}
										iconColor={arr.includes(item.id) ? '#f89400' : 'black'}
										updateFavoriteList={this.props.updateFavoriteList}
										item={item}
										updateSingleBeersData={() => this.props.updateSingleBeersData(item.id)}
									/>)
								}
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

				{/* {
					this.props.data.showPopup ? <SinglePopupBeer
						show={this.props.data.showPopup}
						popapSwicher={this.props.data.methods.popapSwicher}
						data={this.props.data.singleBeersData} /> : null
				} */}
			</>
		)
	}
}
const mapStateToProps = state => {
	return {
		state: state
	}
}


const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		fetchBeers,
		updateFavoriteList
	}, dispatch)
}

library.add(far, faStar, faCode, faCoffee)
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
