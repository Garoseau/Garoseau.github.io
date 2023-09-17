import '../App.sass';
import React from 'react'
import { Link, Outlet}from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function Navbar() {
	AOS.init();
 return (
 <>
 <div className='header'>
 	<div class="navbar">
		<div className='navbarLeft'>
		<Link className='TextNavbar2' data-aos="fade-in" data-aos-delay="40" data-aos-duration="500" data-aos-easing="linear" to="/">Julien Gomes</Link>
		</div>
		<div className='navbarRight'>
 		<Link className='TextNavbar' data-aos="fade-in" data-aos-delay="40" data-aos-duration="500" data-aos-easing="linear" to="/About">About</Link>
 		<Link className='TextNavbar' data-aos="fade-in" data-aos-delay="40" data-aos-duration="500" data-aos-easing="linear" to="/Work">Work</Link>
		</div>
 	</div>
 </div>

 	<Outlet />
 </>
 )}

 export default Navbar