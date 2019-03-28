import React, { useState,useEffect  } from 'react'
import Loader from 'react-loader-spinner'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CardBeer = (props) => {
	let [preLoaded, setImages] = useState(false);
	let [showPopup, setPopup] = useState(false);
	const images = new Image();
	images.src =  props.item.image_url;
	// setImages(preLoaded = true)
	useEffect(()=>console.log("ssssssssssssssssssssssssssssss"));

	return (
		<div className={'card-beers'}>
			<div className="favoriteIcon" onClick={() => {
				props.updateFavoriteList(props.item)
			}}><FontAwesomeIcon icon={faStar} style={{ color: props.iconColor !== undefined ? props.iconColor : "#f89400" }} />
			</div>
{/* 
			{true ? <img src={props.item.image_url} alt="title" /> : <div className="loader">
				<Loader
					className={
						'loader'
					}
					type="ThreeDots"
					zIndex="4"
					color="#f89400"
					textAlign="center"
				/>
			</div>} */}
			<img src={props.item.image_url} alt="title" />
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