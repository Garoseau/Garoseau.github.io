import '../App.scss';
import React from 'react'
import { Link, Outlet}from "react-router-dom";

function Navbar() {

 return (
 <>
 	<div class="navbar">
		<Link className='gradient gB anime textNavbar' to="/">Julien "Garoseau" Gomes</Link>
 		<Link className='gradient gB anime textNavbar' to="/Work">Work</Link>
 		<Link className='gradient gB anime textNavbar' to="/Propos">About</Link>
 		<Link className='gradient gB anime textNavbar' to="/Contact">Contact</Link>
		<a className='gradient gB anime textNavbar'>|</a>
 		<a class="gradient gB anime textNavbar" href="https://www.millenium.org/games/game-376" target="_blank">MGG StarCitizen</a>
 	</div>

 	<Outlet />
 </>
 )}

 export default Navbar