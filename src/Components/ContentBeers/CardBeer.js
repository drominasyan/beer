import {faStar}          from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React             from 'react'

export const CardBeer = (props) => {
	return (
		<div className={'card-beers'}>
			<div className="favoriteIcon" onClick={() => {
				props.updateFavoriteList(props.item)
			}}><FontAwesomeIcon icon={faStar}  style={{color: props.iconColor !== undefined ? props.iconColor : "#f89400"}}/>
			</div>
			<img src={props.item.image_url} alt="title"/>
			<h3 className={'title'}
			    onClick={() => props.updateSingleBeersData(props.item.id)}>
				{props.item.name}
			</h3>
			<p className="tagline-beers">
				{props.item.tagline}
			</p>
		</div>
	)
}