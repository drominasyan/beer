import React from 'react'
import CardBeer         from '../ContentBeers/CardBeer'
import '../ContentBeers/style.css'
import Header from '../Header';
import {connect} from "react-redux"
const  Favorite =(props)=> {
	return (
		<>
			< Header/>
			<div className="container">
				<div className="beers-row">
					{props.favList.length ?
						props.favList.map((item, index) => {
							return <CardBeer
										key={item.id}
										item={item}
									/>
						}) : <h1>There is nor any Favorite item</h1>
					}
				</div>
			</div>
		</>
	)
}
const mapStateToProps = (state) => {
	console.log(state.favorits)
	return {
		favList: state.favorits
	}
}

export default connect(mapStateToProps,null)(Favorite)