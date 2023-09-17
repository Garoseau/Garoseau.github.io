import { CardMedia, Button, CardActions, CardContent, Typography, Card, Cards } from '@mui/material';
import React from 'react'
import '../App.sass';
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
<Grid data-aos="fade-up" justifyContent={'center'} container spacing={6} rowSpacing={6} xs={12} key={Articles.id}
	sx={{mt: 2, maxHeight:760}}>

<ThemeProvider theme={theme}>

	<Grid item xs={'auto'}>
			<Card 
			sx={{ 
				maxWidth: 500, 
				bgcolor:'rgba(20, 20, 20, 0.8)', 
				maxHeight:760, 
				minHeight:760,
				borderRadius: 3, 
				backdropFilter: "blur(5px)", 
				border: 1, 
				borderColor: "#2B2B2B"
			}}>
				
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
	
			</Card>
	</Grid>

	<Grid item xs={'auto'}>
			<Card 
			sx={{ 
				maxWidth: 500, 
				bgcolor:'rgba(20, 20, 20, 0.8)', 
				maxHeight:760, 
				minHeight:760,
				borderRadius: 3, 
				backdropFilter: "blur(5px)", 
				border: 1, 
				borderColor: "#2B2B2B"
			}}>
			{/* img */}
			<CardActionArea className='' to="/Propos">
				<a href="https://www.artstation.com/artwork/EaK6Kv">
					<CardMedia component="img" height="500"
						image="https://cdna.artstation.com/p/assets/covers/images/050/407/434/smaller_square/julien-garoseau-gomes-julien-garoseau-gomes-sans-titre-1.jpg?1654776352"
						alt="" />
				</a>
			</CardActionArea>
				{/* title */}
			<CardContent>
				<Typography className='gradient gA anime' variant="h4">
					<a href="https://www.millenium.org/games/game-376">
					420 Corp Airsoft - Flyers & Calendar
					</a>
				</Typography>
			</CardContent>
				{/* description */}
			<CardContent>
				<Typography variant="h6" color="#A1A1A6" textAlign={'start'}>
				I am a part of the Airsoft team / association based in the Val d'Oise (France) and so 
				I did a couple of Flyers for them and here's the result hope you like it 🙂
				</Typography>
			</CardContent>
			</Card>
	</Grid>
		
	<Grid item xs={'auto'}>
			<Card 
			sx={{ 
				maxWidth: 500, 
				bgcolor:'rgba(20, 20, 20, 0.8)', 
				maxHeight:760, 
				minHeight:760,
				borderRadius: 3, 
				backdropFilter: "blur(5px)", 
				border: 1, 
				borderColor: "#2B2B2B"
			}}>
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
				<Typography className='gradient gA anime' variant="h4">
					<a href="https://www.artstation.com/artwork/mDZYa8">
					Star Citizen - Crusader Industries UI
					</a>
				</Typography>
			</CardContent>
				{/* description */}
			<CardContent>
				<Typography variant="h6" color="#A1A1A6" textAlign={'start'}>
				So I made this because I wanted to know where my skills were in terms of speed and it was pretty good, 
				where the Drake UI took me 1 month to do it, this one tuck me just 1 week, so I'm pretty happy🙂
				</Typography>
			</CardContent>
			</Card>
	</Grid>

	<Grid item xs={'auto'}>
			<Card 
			sx={{ 
				maxWidth: 500, 
				bgcolor:'rgba(20, 20, 20, 0.8)', 
				maxHeight:760, 
				minHeight:760,
				borderRadius: 3, 
				backdropFilter: "blur(5px)", 
				border: 1, 
				borderColor: "#2B2B2B"
			}}>
			{/* img */}
			<CardActionArea className='' to="/Propos">
				<a href="https://www.artstation.com/artwork/lVPore">
					<CardMedia component="img" height="500"
						image="https://cdnb.artstation.com/p/assets/images/images/023/683/685/large/julien-garoseau-gomes-asscendrake-render-v5.jpg?1580022377"
						alt="" />
				</a>
			</CardActionArea>
				{/* title */}
			<CardContent>
				<Typography className='gradient gA anime' variant="h4">
					<a href="https://www.artstation.com/artwork/lVPore">
					Star Citizen - Drake Interface (Fan made)
					</a>
				</Typography>
			</CardContent>
				{/* description */}
			<CardContent>
				<Typography variant="h6" color="#A1A1A6" textAlign={'start'}>
				So I made this because I wanted to know where my skills were in terms of speed and it was pretty good, 
				where the Drake UI took me 1 month to do it, this one tuck me just 1 week, so I'm pretty happy🙂
				</Typography>
			</CardContent>
			</Card>
	</Grid>

	<Grid item xs={'auto'}>
			<Card 
			sx={{ 
				maxWidth: 500, 
				bgcolor:'rgba(20, 20, 20, 0.8)', 
				maxHeight:760, 
				minHeight:760,
				borderRadius: 3, 
				backdropFilter: "blur(5px)", 
				border: 1, 
				borderColor: "#2B2B2B"
			}}>
			{/* img */}
			<CardActionArea className='' to="/Propos">
				<a href="https://www.artstation.com/artwork/EVgGNq">
					<CardMedia component="img" height="500"
						image="https://cdna.artstation.com/p/assets/images/images/019/222/890/large/julien-gomes-01-03-page-001.jpg?1562580871"
						alt="" />
				</a>
			</CardActionArea>
				{/* title */}
			<CardContent>
				<Typography className='gradient gA anime' variant="h4">
					<a href="https://www.artstation.com/artwork/EVgGNq">
					Black Sheep News
					</a>
				</Typography>
			</CardContent>
				{/* description */}
			<CardContent>
				<Typography variant="h6" color="#A1A1A6" textAlign={'start'}>
				A French newspaper about my organisation on the game Star Citizen.
				Made with La Grande Panthère & Pactole.
				</Typography>
			</CardContent>
			</Card>
	</Grid>

	<Grid item xs={'auto'}>
			<Card 
			sx={{ 
				maxWidth: 500, 
				bgcolor:'rgba(20, 20, 20, 0.8)', 
				maxHeight:760, 
				minHeight:760,
				borderRadius: 3, 
				backdropFilter: "blur(5px)", 
				border: 1, 
				borderColor: "#2B2B2B"
			}}>
			{/* img */}
			<CardActionArea className='' to="/Propos">
				<a href="https://www.millenium.org/news/388642.html">
					<CardMedia component="img" height="500"
						image="https://static1.millenium.org/articles/2/38/86/42/@/1578337-star-citizen-317-patch-banner-article_image_bd-2.jpg"
						alt="" />
				</a>
			</CardActionArea>
				{/* title */}
			<CardContent>
				<Typography className='gradient gA anime' variant="h4">
					<a href="https://www.millenium.org/news/388642.html">
					Star Citizen Patch 3.17
					</a>
				</Typography>
			</CardContent>
				{/* description */}
			<CardContent>
				<Typography variant="h6" color="#A1A1A6" textAlign={'start'}>
				Exemple d'article réalisé chez Millenium.
				</Typography>
			</CardContent>
			</Card>
	</Grid>
		
</ThemeProvider>
	
</Grid>

)}