import React      from 'react'
import {CardBeer} from './CardBeer'
import './style.css'

function Beers(props) {
	const arr = []
	props.favorite.forEach((item) => {
		arr.push(item.id)
	})

	return (
		props.beers.map((item, index) => {
			return <CardBeer
				key={item.id}
				fetched={props.fetched}
				popapSwicher={props.popapSwicher}
				iconColor={arr.includes(item.id) ? '#f89400' : 'black'}
				updateFavoriteList={props.addFavorite}
				item={item}
				updateSingleBeersData={()=>props.updateSingleBeersData(item.id)}
			/>
		})
	)
}

export default Beers