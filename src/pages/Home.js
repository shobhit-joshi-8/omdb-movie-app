import React, { useEffect, useRef, useState } from 'react'
import PrimarySearchAppBar from '../components/Navbar'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchMovie, handleSearch } from '../redux/userSlice'
import MovieContainer from '../components/MovieContainer'
import Playlist from './MyPlaylist' 
import { setCurrentView } from '../redux/PlaylistSlice';

const Home = () => {
    const { searchMovieInput } = useSelector((state) => state.user)
    const { currentView } = useSelector((state) => state.moviePlaylist)
    const dispatch = useDispatch()
    const searchRef = useRef();
    const key = "2d4765cd";
    const API = `https://www.omdbapi.com/?apikey=${key}&s=${searchMovieInput}`
    // const [currentView, setCurrentView] = useState('Movie'); 

    useEffect(() => {
        searchMovie();
    }, [searchMovieInput])

    const searchMovie = async () => {
        try {
            const response = await fetch(API, {
                // mode: "no-cors",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            })
            const data = await response.json();
            console.log(data)
            dispatch(getSearchMovie(data.Search))
        } catch (error) {
            console.log('Error in search api', error)
        }
    }

    const handleSearchClick = () => {
        const searchValue = searchRef.current.value;
        console.log(searchMovie)
        dispatch(handleSearch(searchValue));
        dispatch(setCurrentView('Movie')); // Set the view to "Movie" when search button is clicked
    };

    const handlePlaylistClick = () => {
        dispatch(setCurrentView('Playlist')); // Set the view to "Playlist" when playlist button is clicked
    };

    return (
        <>
            <PrimarySearchAppBar />
            <div className="relative h-screen w-full flex justify-center ">
                <img src="assets/hero-img.jpg" alt="hero image" className="h-screen w-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
                <Grid item container justifyContent='center' alignItems='center' className='absolute z-20  top-[20%]'>
                    <Grid item container justifyContent='center' alignItems='center' direction='column' className='' xs={10} lg={12}>
                        <Typography variant='h3' sx={{ color: '#fff' }}>
                            Unlimited movies, TV shows and more
                        </Typography>
                        <Grid container gap={1} justifyContent='center' alignItems='center'>
                            <TextField id="serach-movie" type="search" placeholder='Search Movie...' defaultValue={searchMovieInput} sx={{ backgroundColor: '#fff', borderRadius: 2, width: 400 }}
                                inputRef={searchRef}
                            />
                            <Button sx={{ height: '100%', backgroundColor: '#E50914', color: '#fff', padding: 1.9 }}
                                onClick={handleSearchClick}
                            >search</Button>
                        </Grid>
                         <Grid>
                         <Button sx={{ height: '100%',marginTop:4, backgroundColor: '#E50914', color: '#fff', padding: 1.9 }}
                            onClick={handlePlaylistClick} // Add onClick handler
                            >My Playlist</Button>
                         </Grid>
                        <Grid item marginTop={15} container justifyContent='center' alignItems='center'>
                            {currentView === 'Movie' ? ( // Conditionally render MovieContainer or Playlist
                                <MovieContainer />
                            ) : (
                                <Playlist />
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <Grid container sx={{ backgroundColor: '#000' }} className='h-screen'>
                fgdfg
            </Grid>
        </>
    )
}

export default Home