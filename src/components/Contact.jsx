import '../App.scss';
import React from 'react'

export default function Contact() {
	return (	
		<div class='box centre'>
			<form action="mailto:julien.gomes.school@gmail.com" method="post" autocomplete="off">

				<div class="form">
					<input type="text" name="nom" id="nom" placeholder="Nom" required="requis" autocomplete="off" />

					<input type="text" name="prénom" id="prénom" placeholder="Prénom" required="requis" autocomplete="off" />

					<input type="email" name="email" id="email" placeholder="Email" required="requis" autocomplete="off" />

					<textarea name="message" id="message" cols="80" rows="8" placeholder="Ecrivez-moi."
						required="requis"></textarea>
				</div>

				<div class="buttonbox">
					<input class="button" type="reset" value="annuler" />
					<input class="button" type="submit" value="envoyer" />
				</div>

			</form>
		</div>
	)
}
