import {faTimes}         from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React             from 'react'
import "./style.css"
const SinglePopupBeer = (props) => {
	console.log(props.data)
	return (<div className={'single-popup-beer'}>
			<div className="popup-center">
				<span className="close"
				      onClick={()=>props.popapSwicher(false)}><FontAwesomeIcon
					icon={faTimes}/></span>
				<div className="left-side">
					<img src={props.data.image_url} alt="altImage"/>
				</div>
				<div className="right-side">
					<h1 className={'title'}>{props.data.name}</h1>
					<p className="tagline">{props.data.tagline}</p>
					<p className="description_popup">{props.data.description}</p>
					<div className="options">
					<span className="meta">IBU: {props.data.ibu}</span>
					<span className="meta">ABV: {props.data.abv}</span>
					<span className="meta">EBC: {props.data.ebc}</span></div>
				</div>
			</div>
		</div>
	)
}

export default SinglePopupBeer