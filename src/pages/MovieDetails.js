import React, { useEffect } from 'react'
import PrimarySearchAppBar from '../components/Navbar'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { handleMovieDeatails } from '../redux/userSlice'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const MovieDetails = () => {
    const { movieDetails } = useSelector((state) => state.user)
    const { id } = useParams();
    const dispatch = useDispatch();
    const key = "2d4765cd";
    const API = `https://www.omdbapi.com/?apikey=${key}&i=${id}`

    useEffect(() => {
        fetchMovieDetails();
    }, [])

    const fetchMovieDetails = async () => {
        try {
            const response = await fetch(API, {
                // mode: "no-cors",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            })
            const data = await response.json();
            dispatch(handleMovieDeatails(data))                             
        } catch (error) {
            console.log('Error in search api', error);
        }
    }
    return (
        <>
            <PrimarySearchAppBar />
            <div className="relative h-screen w-full flex justify-center ">
                <img src="assets/hero-img.jpg" alt="details" className="h-screen w-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
                <Grid item container justifyContent='center' alignItems='center' className='absolute z-20  top-[20%]'>
                    <Grid item container justifyContent='center' alignItems='center' direction='column' className='' xs={10} lg={12}>
                        <Typography variant='h3' sx={{ color: '#fff' }}>
                            Unlimited movies, TV shows and more
                        </Typography>
                        <Grid item container justifyContent='center' alignItems='center' padding={3}>
                            <Grid item xs={10} sm={8} lg={4}>
                                <Card>
                                    <Grid container>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="50"
                                                image={movieDetails?.Poster}
                                                alt={movieDetails?.Title}
                                            />

                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {movieDetails?.Title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <strong>Year:</strong> {movieDetails?.Year}<br />
                                                    <strong>Rated:</strong> {movieDetails?.Rated}<br />
                                                    <strong>Released:</strong> {movieDetails?.Released}<br />
                                                    <strong>Runtime:</strong> {movieDetails?.Runtime}<br />
                                                    <strong>Genre:</strong> {movieDetails?.Genre}<br />
                                                    <strong>Director:</strong> {movieDetails?.Director}<br />
                                                    <strong>Writer:</strong> {movieDetails?.Writer}<br />
                                                    <strong>Actors:</strong> {movieDetails?.Actors}<br />
                                                    <strong>Plot:</strong> {movieDetails?.Plot}<br />
                                                    <strong>Language:</strong> {movieDetails?.Language}<br />
                                                    <strong>Country:</strong> {movieDetails?.Country}<br />
                                                    <strong>Awards:</strong> {movieDetails?.Awards}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Share
                                            </Button>
                                        </CardActions>
                                    </Grid>

                                </Card>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>


            </div>
        </>
    )
}

export default MovieDetails