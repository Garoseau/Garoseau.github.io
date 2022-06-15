import '../App.scss';
import React from 'react'

export default function SocialMedia() {
	return (	
		<div data-aos="fade-up" class='boxRS'>
			<a href='Garoseau'>
				<img class='RS' src={process.env.PUBLIC_URL + 'github.png'} width="24"/>
			</a>
			<a href='https://twitter.com/Garoseau'>
				<img class='RS' src={process.env.PUBLIC_URL + 'twitter.png'} width="24"/>
			</a>
			<a  href='https://www.linkedin.com/in/julien-gomes-855058229/'>
				<img class='RS' src={process.env.PUBLIC_URL + 'linkedin.png'} width="24"/>
			</a>
		</div>
	)
}