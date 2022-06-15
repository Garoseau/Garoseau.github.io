import '../App.scss';
import React from 'react'
import SocialMedia from './SocialMedia';

export default function Home() {
	return (	
		<div>
		<div data-aos="fade-up" class='boxInvisible centre'>
			<div class=''>
			<h6 className='textBaseline, grey'>Bonjour, je m'appelle</h6>
			<h1 className='textBaseline,'>Julien Gomes</h1>
			<h2 className='textBaseline, grey'>Je suis étudiant en développement web. <br /> Je suis actuellement en plein travail sur ce petit portfolio alors n'hésite pas revenir plus tard !</h2>
			</div>
		</div>
			<SocialMedia />
		</div>
	)
}