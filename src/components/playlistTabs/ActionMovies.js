import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ActionMovies() {
  const {moviePlaylist} = useSelector((state) => state.moviePlaylist);
  // const actionMovies = Object.values(moviePlaylist).flat();
  console.log(moviePlaylist?.actionMovies)
  return (
    <Grid container width='80%'>
      {moviePlaylist?.actionMovies?.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={item?.Poster}
              alt={item?.Title}
            />           
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item?.Year}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item?.Title}
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