import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const PlayListCard = ({moviePlaylist}) => {
    
  return (
    <>
         <Grid container width='100%' gap={5}>
            {moviePlaylist?.map((item, index) => (
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
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Grid>
    </>
  )
}

export default PlayListCard