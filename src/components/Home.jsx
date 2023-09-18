import '../App.sass';
import React from 'react'
import { Outlet } from 'react-router-dom';

export default function Home() {
	return (	
		<div>
		<Outlet />
		<div data-aos="fade-up" class='Foreground centre'>

			<br />
			<p className='Title'>Julien Gomes.</p>
			<p className='SubText'>IS Coordinator & Business Analyst PowerPlatform</p>

		</div>
			
		</div>
	)
}