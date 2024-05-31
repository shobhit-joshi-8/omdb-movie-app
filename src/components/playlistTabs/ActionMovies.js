import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ActionMovies() {
    const { moviePlaylist } = useSelector((state) => state.moviePlaylist);
    console.log(moviePlaylist?.actionMovies)
    return (
      <>
      <Button size="small" color="primary" variant='contained'>
      Share
  </Button>
        <Grid container width='100%' gap={5}>
            {moviePlaylist?.actionMovies?.map((item, index) => (
                <Card key={index} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={item?.Poster}
                            alt={item?.Title}
                            sx={{ height: '375px' }}
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

                    </CardActions>
                </Card>
            ))}
        </Grid>
        </>
    );
}

export default ActionMovies;