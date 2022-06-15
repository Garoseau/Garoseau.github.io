import '../App.scss';
import React from 'react'
import { Outlet } from 'react-router-dom';
import SocialMedia from './SocialMedia';

  function Propos() {
	return (

		<>
			<Outlet />
			<div data-aos="fade-up" class="content_wrapper">

				<section>
					<div class="boxInvisible centre">
						<h2 class="gradient gA anime text">à venir...</h2>
					</div>
				</section>


			</div>
		</>
		)
	}
	export default Propos;
