import { Grid, Typography } from '@mui/material'
import React from 'react'

const MovieCard = ({item}) => {
    return (
        <>
            <Grid item className="xl:w-1/4 md:w-1/2 sm:w-full w-full p-4 ">
                <Grid item className="bg-gray-100 p-6 rounded-lg h-full">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={item?.Poster} alt="content" />
                        <Typography variant='h6' className="tracking-widest text-red-500 text-xs font-medium title-font">{item?.Title}</Typography>
                        <Typography variant='h5' className="text-lg text-gray-900 font-medium title-font mb-4">{item?.Year}</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default MovieCard