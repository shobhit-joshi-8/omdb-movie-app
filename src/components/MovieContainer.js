import { Grid } from '@mui/material'
import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const MovieContainer = () => {
    const { movie } = useSelector((state) => state.user)
    return (
        <>
            <Grid container width='80%' className="slider-container" >
                    {movie?.length > 0 && movie.map((item) => (
                            <MovieCard item={item} />
                    ))}
                
            </Grid>
        </>
    )
}

export default MovieContainer