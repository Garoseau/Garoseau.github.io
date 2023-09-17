import '../App.sass';
import React from 'react'

export default function SocialMedia() {
	return (	
		<div data-aos="fade-up" class='ForegroundSocials'>

			<a href='https://twitter.com/Garoseau'>
				<img class='Socials' src={process.env.PUBLIC_URL + 'twitter.png'} width="24"/>
			</a>
			<a  href='https://www.linkedin.com/in/julien-gomes-855058229/'>
				<img class='Socials' src={process.env.PUBLIC_URL + 'linkedin.png'} width="24"/>
			</a>
		</div>
	)
}