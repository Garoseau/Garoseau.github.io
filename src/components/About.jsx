import '../App.sass';
import React from 'react'
import { Outlet } from 'react-router-dom';

  function About() {
	return (

		<>
			<Outlet />
			<div data-aos="fade-up" class="content_wrapper">

				<section>
					<div class="Foreground centre">
						<br />
						<p class="SubText">à venir...</p>
					</div>
				</section>


			</div>
		</>
		)
	}
	export default About;
