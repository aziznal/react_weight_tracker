import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './tabs-list-styles.scss';

const TabsList = () => {

	let currentRoute = useLocation();

	const getTabElevation = (tabPath) => {

		return (tabPath === currentRoute.pathname ? "elevated-tab" : "");

	}

	return (
		<ul className="tabs-list">
			
			<Link className={"tab-selector " + getTabElevation("/")} to='/'>Home</Link>
			<Link className={"tab-selector " + getTabElevation("/add-weight")} to='/add-weight'>New</Link>
			<Link className={"tab-selector " + getTabElevation("/about")} to='/about'>About</Link>

		</ul>
	)
}

export default TabsList
