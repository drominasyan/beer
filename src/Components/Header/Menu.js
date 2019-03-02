import React     from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

const Menu = (props) => (
	<>
		<div className={'menu'}>
			<ul className={'menu-ul'}>
				<li className="menu-item">
					<a href="/">Home</a>
				</li>
				<li className="menu-item ">
					<NavLink to="/favorite">Favorits</NavLink>
				</li>
			</ul>
			<div className="menu-content">
				<h1 className={"title"}> The Beer Bank</h1>
				<p className={"description"}>Find your favorite beer here</p>
				<input className={"search"} type="text" placeholder={"Search for beer name"}/>
			</div>
		</div>
	</>

)

export default Menu