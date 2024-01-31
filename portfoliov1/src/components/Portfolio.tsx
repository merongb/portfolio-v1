import * as React from 'react'
import { useState } from 'react';
import CloseIcon from "@mui/icons-material/Close";
import { Modal, Box, Typography, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container, createTheme, ThemeProvider } from '@mui/material';
import { Fade } from '@mui/material';

import { blue, yellow } from '@mui/material/colors';



interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string; 
  repoUrl: string;
  techStack: string[];
}

const cards: CardData[] = [
  {
    id: 1,
    title: 'Freestroke',
    description: "An app designed for people who enjoy wild swimming and its purpose is to help users discover beautiful swimming spots across the country. Users can view an interactive map showcasing hundreds of wild swimming spots in the UK, including beaches, and lakes.",
    imageUrl: "https://i.ibb.co/41BB8Y3/Final-freestroke-image.png",
    demoUrl: "https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL3YvYy9hZjEwNTRjMThjZDAyYTcyL0VYOVlyN20xUlhSTGxRdXhPNi0tV1RNQkRPUkZtRDd2VFhBOXppV0FyTXQxaEE%5FZT10NFBUU1c&cid=AF1054C18CD02A72&id=AF1054C18CD02A72%21sb9af587f45b54b74950bb13bafbe5933&parId=root&o=OneUp",
    repoUrl: 'https://github.com/merongb/freestroke-app',
    techStack: ['Javascript','React Native','Expo', 'SQLite', 'Firebase']
  },
  {
    id: 2,
    title: 'Freestroke API',
    description: 'A Restful API supported by a MongoDB database interfaced through Mongosh. With the provided API endpoints, users can perform a variety of actions, including viewing and posting locations, as well as reviews.',
    imageUrl: 'https://i.ibb.co/Jnt8cd5/Screenshot-2024-01-30-at-02-00-26.png',
    demoUrl: 'https://freestroke-api.onrender.com/api' ,
    repoUrl: 'https://github.com/merongb/be-freestroke',
    techStack: ['Javascript','NodeJs','MongoDB', 'ExpressJs']
  },
  {
    id: 3,
    title: 'NC News',
    description: 'A dynamic and user-centric platform that seamlessly integrates with the NC-News-API. Its primary purpose is to empower users with an interactive and engaging experience that closely mirrors the functionality of real-world applications.',
    imageUrl: 'https://i.ibb.co/D1zBd9C/Screenshot-2024-01-30-at-13-10-41.png',
    demoUrl: 'https://nc-newsgb.netlify.app/',
    repoUrl: 'https://github.com/merongb/nc-news',
    techStack: ['Javascript','ReactJs']
  },
  {
    id: 4,
    title: 'NC News API',
    description: 'A Restful API supported by a relational database, interfaced through PostgreSQL. With the provided API endpoints, users can perform a variety of actions, including viewing and commenting on articles',
    imageUrl: 'https://i.ibb.co/10nnmJh/Screenshot-2024-01-30-at-23-08-50.png',
    demoUrl: 'https://news-article-slsk.onrender.com/api' ,
    repoUrl: 'https://github.com/merongb/NC-News-API',
    techStack: ['Javascript','PostgreSQL', 'ExpressJs', 'NodeJs']
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[600],
    },
    secondary: {
      main: blue[500],
    },
    background: {
      default: '#111',
      paper: '#111',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
});

export default function Portfolio(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const handleOpen = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
    setOpen(true);
  };


  const handleClose = (): void => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <section id="portfolio">
        <main>
          <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h4" align="center" color="white" gutterBottom>
                Projects
              </Typography>
              <Typography
  variant="h5"
  align="center"
  paragraph
  style={{
    background: 'linear-gradient(to right, white, #F1C40F)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',

  }}
>
  Explore the projects I've worked on so far
</Typography>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
  {cards.map(({ id, title, description, imageUrl, demoUrl, repoUrl, techStack }) => (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column',  }}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', 
            cursor: "pointer"
          }}
          onClick={() => handleOpen(imageUrl)}
        />
        <CardContent sx={{ flexGrow: 1, }}>
          <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight:'bold',  }}>
            {title}
          </Typography>
          <Typography>
            {description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, marginTop: 1 }}>
          {techStack.map((tech, index) => (
            <Typography key={index} variant="caption" sx={{ background: '#333', color: '#F1C40F',fontWeight:'bold', borderRadius: 1, padding: '2px 8px' }}>
              {tech}
            </Typography>
          ))}
        </Box>
        </CardContent>
        <CardActions>
        <Button size="small" component="a" href={demoUrl} target="_blank" rel="noopener noreferrer" sx={{color: '#F1C40F',fontWeight:'bolder', borderRadius: 1, padding: '2px 8px' }}>View Live</Button>
        <Button size="small" component="a" href={repoUrl} target="_blank" rel="noopener noreferrer" sx={{color: '#F1C40F',fontWeight:'bolder', borderRadius: 1, padding: '2px 8px' }}>View Repo</Button>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>

          </Container>
          <Modal
  open={open}
  onClose={handleClose}
  closeAfterTransition
  aria-labelledby="image-modal-title"
  aria-describedby="image-modal-description"
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  <Fade in={open} timeout={500}>
    <Box sx={{
      position: 'relative',
      outline: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 4, 
      bgcolor: 'background.paper',
    }}>
      <Button
        onClick={handleClose}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          color: 'white',
        }}
        aria-label="Close" 
      >
        <CloseIcon />
      </Button>
      <img src={selectedImage} alt="Enlarged" style={{ maxWidth: '90vw', maxHeight: '90vh' }} />
    </Box>
  </Fade>
</Modal>
        </main>

      </section>
    </ThemeProvider>
  );
}