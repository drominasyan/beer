import React, {Component} from 'react'
import {GET_BEERS}        from '../Constants/Api'
import {BeersHostRequest} from '../Network'
import Context            from './index'

class ContextProvider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			beers: [],
			singleBeersData: null,
			showPopup: false,
			favList: JSON.parse(localStorage.getItem('favorites')) || [],
			methods: {
				updateData: this.updateBeers,
				updateSingleBeersData: this.updateSingleBeersData,
				updateFavoriteList: this.updateFavoriteList,
				popapSwicher: this.popapSwicher,
			},
		}
	}

	updateFavoriteList = (data) => {
		console.log('clicked', data)
		const favorite = this.state.favList
		console.log('favorite', favorite.length)
		let equal = true
		if (favorite.length) {
			favorite.forEach((item, index) => {
				if (item.id === data.id) {
					favorite.splice(index, 1)
					localStorage.setItem('favorites', JSON.stringify(favorite))
					equal = false
					this.setState({
						favorite,
					})
				}
			})
			if (equal) {
				favorite.push(data)
				localStorage.setItem('favorites', JSON.stringify(favorite))
				this.setState({
					favorite,
				})
			}
		} else {
			favorite.push(data)
			localStorage.setItem('favorites', JSON.stringify(favorite))
			this.setState({
				favList: favorite,
			})
		}
	}

	updateBeers = data => {
		this.setState({
			beers: data,
		})
	}

	popapSwicher = data => {
		this.setState({
			showPopup: data,
		})
	}

	updateSingleBeersData = (id) => {
		
		BeersHostRequest(GET_BEERS + '/' + id).then((response) => {
			
		})
		for (let i = 0; i < this.state.beers.length;i++){
		if(id === this.state.beers[i].id){
			console.log(this.state.beers[i])
				this.setState({
					singleBeersData: this.state.beers[i],
					showPopup: true,
				})
		}
		}
	}

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		)
	}
}

export default ContextProvider
