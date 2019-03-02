import {faTimes}         from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React             from 'react'

const SinglePopupBeer = (props) => {
	return (<div className={'single-popup-beer'}>
			<div className="popup-center">
				<span className="close"
				      onClick={()=>props.popapSwicher(false)}><FontAwesomeIcon
					icon={faTimes}/></span>
				<div className="left-side">
					<img src={props.data[0].image_url} alt="altImage"/>
				</div>
				<div className="right-side">
					<h1 className={'title'}>{props.data[0].name}</h1>
					<p className="description">{props.data[0].tagline}</p>
					<span className="meta">IBU: {props.data[0].ibu}</span>
					<span className="meta">ABV: {props.data[0].abv}</span>
					<span className="meta">EBC: {props.data[0].EBC}</span>
				</div>
			</div>
		</div>
	)
}

export default SinglePopupBeer