import { CardMedia, Button, CardActions, CardContent, Typography, Card, Cards } from '@mui/material';
import React from 'react'
import '../App.css';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';

const theme = createTheme();

theme.typography.h4 = {
  fontSize: 
	'22pt',
};
theme.typography.h6 = {
  fontSize: 
	'12pt',
};


export default function Articles() {
	return (

<Grid justifyContent={'center'} container spacing={6} rowSpacing={6} xs={12} key={Articles.id}
	sx={{mt: 2, maxHeight:760}}>

<ThemeProvider theme={theme}>

		<Grid item xs={'auto'}>
			<Card sx={{ maxWidth: 500, bgcolor:'rgba(20, 20, 20, 0.8)', maxHeight:760, minHeight:760,borderRadius: 3, backdropFilter: "blur(5px)", border: 1, borderColor: "#2B2B2B"}}>
				
				{/* img */}
				<CardActionArea className='' to="/Propos">
					<a href="https://www.millenium.org/games/game-376">
						<CardMedia component="img" height="500"
							image="https://cdna.artstation.com/p/assets/images/images/027/839/028/large/julien-garoseau-gomes-gladius-concept-screen-ui.jpg?1592708367"
							alt="" />
					</a>
				</CardActionArea>

				{/* title */}
				<CardContent>
					<Typography className='gradient gA anime' variant="h4" >
					<a href="https://www.millenium.org/games/game-376">
						Star Citizen: UI Concept "Aegis Dynamics"
					</a>
					</Typography>
				</CardContent>

				{/* description */}
				<CardContent>
					<Typography variant="h6" color="#A1A1A6" textAlign={'start'}>
						For the sake of an article on Millenium Star Citizen, I undertook to recreate the Concept Screen UI
						shown in the show "Inside Star Citizen". Except for the fonts, I think I did well in 4 hours of work.
						It' was done on photoshop and illustator.
					</Typography>
				</CardContent>
				
				{/* share */}
				<CardActions>
					<Button size="small" color="success" sx={{color:'#fff'}}>Partager</Button>
				</CardActions>
			</Card>
		</Grid>

		<Grid item xs={'auto'}>
			<Card sx={{ maxWidth: 500, bgcolor:'rgba(20, 20, 20, 0.8)', maxHeight:760, minHeight:760,borderRadius: 3, backdropFilter: "blur(5px)", border: 1, borderColor: "#2B2B2B"}}>
				
				{/* img */}
				<CardActionArea className='' to="/Propos">
					<a href="https://www.artstation.com/artwork/mDZYa8">
						<CardMedia component="img" height="500"
							image="https://cdna.artstation.com/p/assets/images/images/027/584/976/large/julien-garoseau-gomes-ascenseura.jpg?1591950082"
							alt="" />
					</a>
				</CardActionArea>

				{/* title */}
				<CardContent>
					<Typography className='gradient gA anime' variant="h4" >
					<a href="https://www.millenium.org/games/game-376">
					Star Citizen: UI Concept "Crusader Industries"
					</a>
					</Typography>
				</CardContent>

				{/* description */}
				<CardContent>
					<Typography variant="h6" color="#A1A1A6" textAlign={'start'}>
					So I made this because I wanted to know where my skills were in terms of speed and it was pretty good,
								where the Drake UI took me 1 month to do it, this one tuck me just 1 week, so I'm pretty happy
					</Typography>
				</CardContent>
				
				{/* share */}
				<CardActions>
					<Button size="small" color="success" sx={{color:'#fff'}}>Partager</Button>
				</CardActions>
			</Card>
		</Grid>



		<Grid item xs={'auto'}>
			<Card
				sx={{ maxWidth: 500, bgcolor:'rgba(20, 20, 20, 0.8)', maxHeight:760, minHeight:760,borderRadius: 3, backdropFilter: "blur(5px)", border: 1, borderColor: "#2B2B2B"}}>

				<CardActionArea className='boxCard'>
					<a href='https://www.artstation.com/artwork/lVPore'>
						<CardMedia component="img" height="500"
							image="https://cdnb.artstation.com/p/assets/images/images/023/683/685/large/julien-garoseau-gomes-asscendrake-render-v5.jpg?1580022377"
							alt="" />

						<CardContent>
							<Typography className='gradient gA anime' variant="h4">
								Star Citizen: UI Concept "Drake Interplanetary"
							</Typography>

						</CardContent>

						<CardContent>
							<Typography variant="h6" color="#A1A1A6" textAlign={'start'}>
								So I made this because I wanted to know where my skills were in terms of speed and it was pretty good,
								where the Drake UI took me 1 month to do it, this one tuck me just 1 week, so I'm pretty happy
							</Typography>
						</CardContent>

					</a>
				</CardActionArea>

				<CardActions>
					<Button size="small" color="success" sx={{color:'#fff'}}>Partager</Button>
				</CardActions>

			</Card>
		</Grid>

		<Grid item xs={'auto'}>
			<Card
				sx={{ maxWidth: 500, bgcolor:'rgba(20, 20, 20, 0.8)', maxHeight:760, minHeight:760,borderRadius: 3, backdropFilter: "blur(5px)", border: 1, borderColor: "#2B2B2B"}}>
				<CardActionArea className='boxCard' to="/Propos">
					<a href="https://www.artstation.com/artwork/9eLG1q">
						<CardMedia component="img" height="500"
							image="https://cdnb.artstation.com/p/assets/images/images/020/889/735/large/garoseau-gd-stands.jpg?1569555560"
							alt="" />
						<CardContent>
							<Typography className='gradient gA anime' variant="h4">
								Stands
							</Typography>

						</CardContent>
						<CardContent>
							<Typography variant="h6" color="#A1A1A6" textAlign={'start'}>

							</Typography>
						</CardContent>
					</a>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="success" sx={{color:'#fff'}}>Partager</Button>
				</CardActions>
			</Card>
		</Grid>

		<Grid item xs={'auto'}>
			<Card
				sx={{ maxWidth: 500, bgcolor:'rgba(20, 20, 20, 0.8)', maxHeight:760, minHeight:760,borderRadius: 3, backdropFilter: "blur(5px)", border: 1, borderColor: "#2B2B2B"}}>

				<CardActionArea className='boxCard'>
					<a href='https://www.artstation.com/artwork/EVgGNq'>
						<CardMedia component="img" height="500"
							image="https://cdna.artstation.com/p/assets/images/images/019/222/890/large/julien-gomes-01-03-page-001.jpg?1562580871"
							alt="" />

						<CardContent>
							<Typography className='gradient gA anime' variant="h4">
								Black Sheep News
							</Typography>

						</CardContent>

						<CardContent>
							<Typography variant="h6" color="#A1A1A6" textAlign={'start'}>
								A French newspaper about my old org Black Sheep, a quite wonderful adventure that made me encounter
								great people. Made with La Grande Panthère & Pactole. <br /><br /><br /><br />
							</Typography>
						</CardContent>

					</a>
				</CardActionArea>

				<CardActions>
					<Button size="small" color="success" sx={{color:'#fff'}}>Partager</Button>
				</CardActions>

			</Card>
		</Grid>

		<Grid item xs={'auto'}>
			<Card
				sx={{ maxWidth: 500, bgcolor:'rgba(20, 20, 20, 0.8)', maxHeight:760, minHeight:760,borderRadius: 3, backdropFilter: "blur(5px)", border: 1, borderColor: "#2B2B2B"}}>

				<CardActionArea className='boxCard'>
					<a href='https://www.millenium.org/news/350397.html'>
						<CardMedia component="img" height="500"
							image="https://static1.millenium.org/articles/7/35/03/97/@/1196508-v-rapport-octobre-article_image_bd-1.png"
							alt="" />

						<CardContent>
							<Typography className='gradient gA anime' variant="h4">
								Les récompenses des Subscribers du mois de octobre
							</Typography>

						</CardContent>

						<CardContent>
							<Typography variant="h6" color="#A1A1A6" textAlign={'start'}>
								Tous les mois, les subscribers de Star Citizen ont accès à de nouveaux items en jeu. Découvrez les
								avantages Subscribers du mois de mars 2021.
							</Typography>
						</CardContent>

					</a>
				</CardActionArea>

				<CardActions>
					<Button size="small" color="success" sx={{color:'#fff'}}>Partager</Button>
				</CardActions>

			</Card>
		</Grid>

</ThemeProvider>
	
</Grid>

)}