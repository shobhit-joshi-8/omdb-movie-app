// MovieCard.js
import { Button, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovieToPlaylist } from '../redux/PlaylistSlice';
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ item }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddToPlaylist = () => {
        dispatch(addMovieToPlaylist({ movie: item, playlist: selectedPlaylist }));
        handleClose();
    };

    const playlistOptions = [
        { name: 'actionMovies' },
        { name: 'Comedy Movies' },
        { name: 'Drama Movies' },
        { name: 'Horror Movies' },
        { name: 'Romance Movies' },
        { name: 'Science Fiction Movies' },
        { name: 'Animation Movies' },
        { name: 'Documentary Movies' },
    ];

    const Navigate = useNavigate()
    return (
        <>
            <Grid item className="xl:w-1/4 md:w-1/2 sm:w-full w-full p-4">
                <Grid item className="bg-gray-100 p-6 rounded-lg h-full" container direction='column' justifyContent='space-between'>
                    <Grid item>
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={item?.Poster} alt="content" />
                        <Typography variant='h6' className="tracking-widest text-red-500 text-xs font-medium title-font">{item?.Title}</Typography>
                        <Typography variant='h5' className="text-lg text-gray-900 font-medium title-font mb-4">{item?.Year}</Typography>
                    </Grid>
                    <Grid item container gap={1}>
                        <Button variant='contained' className='' onClick={()=> Navigate(`/movie-details/${item.imdbID}`)} >View Details</Button>
                        <Button variant='contained' onClick={handleClickOpen} className=''>Add to Playlist</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Select Playlist</DialogTitle>
                <DialogContent>
                    <select
                        value={selectedPlaylist}
                        onChange={(e) => setSelectedPlaylist(e.target.value)}
                        className='w-full p-2 border border-gray-400 rounded'
                    >
                        <option value={null}>Select a playlist</option>
                        {playlistOptions.map((playlist) => (
                            <option key={playlist.name} value={playlist.name}>{playlist.name}</option>
                        ))}
                    </select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAddToPlaylist}>Add to Playlist</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default MovieCard;