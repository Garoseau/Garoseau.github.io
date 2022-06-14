import '../App.scss';
import React from 'react'
import { Outlet } from 'react-router-dom';

  function Propos() {
	return (

		<>
			<Outlet />
			<div class="content_wrapper">

				<section>
					<div class="box centre">
						<h2 class="gradient gA anime text">à venir...</h2>
					</div>
				</section>


			</div>
		</>
		)
	}
	export default Propos;
