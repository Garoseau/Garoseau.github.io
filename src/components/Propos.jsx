import '../App.css';
import React from 'react'
import { Outlet } from 'react-router-dom';

  function Propos() {
	return (

		<>
			<Outlet />
			<div class="content_wrapper">

				<section>
					<div class="box centre">
						<h2 class="gradient gB anime text">This is a damn test</h2>
						<div class="text">
							<p class="gC">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus ex vel volutpat
								finibus. Integer tempor nisi non accumsan pharetra. Duis consectetur blandit metus, nec mattis risus
								laoreet non. Etiam in eros id quam eleifend tristique. Suspendisse tempor elit urna, vehicula finibus erat
								volutpat ac. Quisque in ultricies est. Sed gravida non urna in aliquam. Etiam consectetur eget urna in
								tempor. Nunc et iaculis turpis, eu tincidunt nunc. Etiam dictum mi neque, nec tempor arcu vulputate a.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium leo dui, vel imperdiet metus
								ultrices ac. Ut suscipit mauris vitae est maximus egestas.</p>
						</div>
					</div>
				</section>


			</div>
		</>
		)
	}
	export default Propos;
