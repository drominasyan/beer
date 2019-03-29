import React from 'react'
import {updateFavoriteList}    from '../../Actions/index'
import CardBeer         from '../ContentBeers/CardBeer'
import '../ContentBeers/style.css'
import Header from '../Header';
import {connect} from "react-redux"
const  Favorite =(props)=> {
	console.log(props)
	return (
		<>
			< Header/>
			<div className="container">
				<div className="beers-row">
					{props.favList.length ?
						props.favList.map((item, index) => {
							return <CardBeer
										key={item.id}
										updateFavoriteList={props.updateFavoriteList}
										item={item}
										updateSingleBeersData={() => props.updateSingleBeersData(item.id)}
									/>
						}) : <h1>There is nor any Favorite item</h1>
					}
				</div>
			</div>
			{/* {
				props.data.showPopup ? <SinglePopupBeer
					popapSwicher={props.data.methods.popapSwicher}
					 data={props.data.singleBeersData}/> : null
			} */}
		</>
	)
}
const mapStateToProps = (state) => {
	return {
		favList: state.favorits
	}
}
const mapDispatchToProps = {
	updateFavoriteList
}
export default connect(mapStateToProps,mapDispatchToProps)(Favorite)