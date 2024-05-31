import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import PlayListCard from './PlayListCard';
import InfoIcon from '@mui/icons-material/Info';
function ActionMovies() {
    const { moviePlaylist } = useSelector((state) => state.moviePlaylist);
    // console.log(moviePlaylist?.actionMovies)
    return (
        <>
            {
                Object.keys(moviePlaylist?.documentaryMovies || {}).length <= 0 ?
                    (<Grid item container xs={12} spacing={2} sx={{ height: '500px' }} justifyContent={'center'} marginTop={3}>
                        <Grid item>
                            <InfoIcon sx={{ color: 'red', fontSize: 40 }} />
                        </Grid>
                        <Grid item>
                            <Typography fontSize={18} fontWeight={600} sx={{ color: 'red' }}>No Movies added in Playlist</Typography>
                        </Grid>
                    </Grid>) : (<PlayListCard moviePlaylist={moviePlaylist?.documentaryMovies} />)
            }
        </>
    );
}

export default ActionMovies;