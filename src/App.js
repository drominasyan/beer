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
import { fetchBeers, updateFavoriteList, showPopupMethod } from "./Actions/index"
import { GET_BEERS } from "./Constants/Api"
import { bindActionCreators } from 'redux'
class App extends Component {
	handlePageClick = (e) => {
		this.props.fetchBeers(`${BEER_API_HOST}/v2/beers?page=${e.selected + 1}&per_page=15`)
	}

	componentDidMount() {
		this.props.fetchBeers(GET_BEERS)
	}

	render() {
		console.log("this.props", this.props)
		const arr = []
		this.props.favorits.forEach((item) => {
			arr.push(item.id)
		})

		const { beers, loading, error } = this.props.data
		return (
			<>
				<Header />
				{
					<div>
						<div className="container">
							<div className="beers-row">
								{
									loading ? < h1 > Loading </h1>
										: error ? <h1>Error </h1>
											: <>{beers.map((item, index) => <CardBeer key={
												item.id
											}
												iconColor={
													arr.includes(item.id) ? '#f89400' : 'black'
												}
												updateFavoriteList={
													this.props.updateFavoriteList
												}
												item={
													item
												}
												popup={
													this.props.showPopupMethod
												}
												updateSingleBeersData={
													() => this.props.updateSingleBeersData(item.id)
												}
								/>)}
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
								</>
								}
							</div>
						</div>
					</div>
				}
				{
					this.props.showPopup.opened ? <SinglePopupBeer
						data={this.props.showPopup.data} popup={this.props.showPopupMethod} /> : null
				}

			</>
		)
	}
}
const mapStateToProps = state => {
	return {
		data: state.data,
		favorits: state.favorits,
		showPopup: state.showPopup
	}
}


const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		fetchBeers,
		updateFavoriteList,
		showPopupMethod
	}, dispatch)
}

library.add(far, faStar, faCode, faCoffee)
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
