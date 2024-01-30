import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';



interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: 'Freestroke',
    description: 'This is a media card. You can use this section to describe the content.',
    imageUrl: 'https://source.unsplash.com/random?sig=1',
  },
  {
    id: 2,
    title: 'Freestroke API',
    description: 'This is a media card. You can use this section to describe the content.',
    imageUrl: 'https://source.unsplash.com/random?sig=2',
  },
  {
    id: 3,
    title: 'NC News',
    description: 'This is a media card. You can use this section to describe the content.',
    imageUrl: 'https://source.unsplash.com/random?sig=3',
  },
  {
    id: 4,
    title: 'NC News API',
    description: 'This is a media card. You can use this section to describe the content.',
    imageUrl: 'https://source.unsplash.com/random?sig=4',
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
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

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <section id="portfolio">
        <main>
          <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="#F1C40F" gutterBottom>
                Projects
              </Typography>
              <Typography variant="h5" align="center" color="White" paragraph>
                Here are some of the projects I have worked on or currently working on!
              </Typography>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
  {cards.map(({ id, title, description, imageUrl }) => (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          sx={{
            height: 340, 

          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View Image</Button>
          <Button size="small">View Demo</Button>
          <Button size="small">View Repo</Button>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>

          </Container>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Thanks!
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
            Hope you enjoyed!
          </Typography>
        </Box>
        {/* End footer */}
      </section>
    </ThemeProvider>
  );
}