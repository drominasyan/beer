import React, {useContext, useState} from 'react'
import {NavLink, withRouter}         from 'react-router-dom'
import Context                       from '../../Context/index'
import {BEER_API_HOST, GET_BEERS} from '../../Constants/Api'
import {BeersHostRequest}         from '../../Network/index'
import { bindActionCreators } from 'redux'
import {connect} from "react-redux"
import {fetchBeers} from "../../Actions/index"
const Menu = (props) => {
	const context = useContext(Context)
	const [inputVal, setValue] = useState('')
	
console.log(props)
	const logout = () => {
		localStorage.removeItem('token')
		return props.history.push('/')
	}
	const search = (e) => {
		setValue(e.target.value)
		if(e.target.value !== ""){
			// context.methods.updateFetched(false)
			console.log(props);
			props.fetchBeers(`${GET_BEERS}&beer_name=${e.target.value}`)
			// BeersHostRequest(`${GET_BEERS}&beer_name=${e.target.value}`).then((response) => {
			// 	context.methods.updateData(response.data)
			// 	context.methods.updateFetched(true)
			// })
		}else{
			// context.methods.updateFetched(false)
			props.fetchBeers(`${GET_BEERS}`)
			// BeersHostRequest(`${GET_BEERS}`).then((response) => {
			// 	context.methods.updateData(response.data)
			// 	context.methods.updateFetched(true)
			// })
		}
	}
	return <>
		<div className={'menu'}>
			<ul className={'menu-ul'}>
				<li className="menu-item">
					<a href="/home">Home</a>
				</li>
				<li className="menu-item ">
					<NavLink to="/favorite">Favorits</NavLink>
				</li>
				<li className="menu-item ">
					<span onClick={logout}>Logout</span>
				</li>
			</ul>
			<div className="menu-content">
				<h1 className={'title'}> The Beer Bank</h1>
				<p className={'description'}>Find your favorite beer here</p>
				<input className={'search'} type="text"
				       value={inputVal}
				       placeholder={'Search for beer name'} onChange={search}/>
			</div>
		</div>
	</>
}


const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		fetchBeers,
	}, dispatch)
}

export default connect(null,mapDispatchToProps)(withRouter(Menu))