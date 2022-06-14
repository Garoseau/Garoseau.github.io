import '../App.css';
import React from 'react'
import { Link, Outlet}from "react-router-dom";

function Navbar() {

 return (
 <>
 	<div class="navbar">
		<a className='gradient gB anime navbar_text' href="/public/Resume FR Julien Gomes.pdf" >Julien "Garoseau" Gomes</a>
 		<Link className='gradient gB anime navbar_text' to="/">Projects</Link>
 		<Link className='gradient gB anime navbar_text' to="/Propos">About</Link>
 		<Link className='gradient gB anime navbar_text' to="/Contact">Contact</Link>
		<a className='gradient gB anime navbar_text'>|</a>
 		<a class="gradient gB anime navbar_text" href="https://www.millenium.org/games/game-376" target="_blank">MGG StarCitizen</a>
 	</div>

 	<Outlet />
 </>
 )}

 export default Navbar