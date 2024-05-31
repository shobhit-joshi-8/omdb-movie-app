import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ActionMovies() {
  const {moviePlaylist} = useSelector((state) => state.moviePlaylist);
  // const actionMovies = Object.values(moviePlaylist).flat();
  console.log(moviePlaylist?.actionMovies)
  return (
    <Grid container width='80%' className="slider-container">
      {moviePlaylist?.actionMovies?.map((movie, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
            //   image={movie.Poster}
            //   alt={movie.Title}
            />
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {/* {movie.Year} */}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {/* {movie.description} */}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
}

export default ActionMovies;