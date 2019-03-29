import React, { useState,useEffect  } from 'react'
import Loader from 'react-loader-spinner'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {showPopuop} from "../../Actions/index"
import  {connect} from "react-redux"
const CardBeer = (props) => {
	const popup = (id)=>{
		const data = props.item[id]
		props.showPopuop(data)
	}
	console.log(props)
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
				onClick={()=>popup(props.item.id)}>
				{props.item.name}
			</h3>
			<p className="tagline-beers">
				{props.item.tagline}
			</p>
		</div>
	)
} 

const mapDispatchToProps =  {
	showPopuop
}

const mapStateToProps = state => {
	return {
		beers: state.data
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardBeer)