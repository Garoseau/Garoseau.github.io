import '../App.scss';
import React from 'react'
import { Link, Outlet}from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function Navbar() {
	AOS.init();
 return (
 <>
 	<div class="navbar">
		<Link className='textNavbar' data-aos="fade-in" data-aos-delay="40" data-aos-duration="500" data-aos-easing="linear" to="/">Julien "Garoseau" Gomes</Link>
 		<Link className='textNavbar' data-aos="fade-in" data-aos-delay="40" data-aos-duration="500" data-aos-easing="linear" to="/Work">Work</Link>
 		<Link className='textNavbar' data-aos="fade-in" data-aos-delay="40" data-aos-duration="500" data-aos-easing="linear" to="/Propos">About</Link>
 		<Link className='textNavbar' data-aos="fade-in" data-aos-delay="40" data-aos-duration="500" data-aos-easing="linear" to="/Contact">Contact</Link>
		<a className='textNavbar' data-aos="fade-in" data-aos-delay="40" data-aos-duration="500" data-aos-easing="linear">|</a>
 		<a class='textNavbar' data-aos="fade-in" data-aos-delay="40" data-aos-duration="500" data-aos-easing="linear" href="https://www.millenium.org/games/game-376" target="_blank">MGG StarCitizen</a>
 	</div>

 	<Outlet />
 </>
 )}

 export default Navbar