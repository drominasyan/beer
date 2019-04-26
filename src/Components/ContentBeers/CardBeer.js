import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardBeer = (props) => {
	const [preloaded, setPreloaded] = useState(false);
	const img = new Image();
	img.src = props.item.image_url;
	img.onload = () => {
		setPreloaded(true)
	}

	const popup = (data) => {
		const singleData = {
			data: data,
			opened: true
		}
		props.popup(singleData)
	}
	
	return (
		<div className={'card-beers'}>
			<div className="favoriteIcon" onClick={() => {
				props.updateFavoriteList(props.item)
			}}>
				<FontAwesomeIcon icon={faStar} style={{ color: props.iconColor !== undefined ? props.iconColor : "#f89400" }} />
			</div>

			{preloaded ? <img src={img.src} alt="title" /> : <div className="loader">
				<Loader
					className={
						'loader'
					}
					type="ThreeDots"
					zIndex="4"
					color="#f89400"
					textAlign="center"
				/>
			</div>}
			<h3 className={'title'}
				onClick={() => popup(props.item)}>
				{props.item.name}
			</h3>
			<p className="tagline-beers">
				{props.item.tagline}
			</p>
		</div>
	)
}

export default CardBeer