import React from 'react'
import { useSelector } from 'react-redux';
import PlayListCard from './PlayListCard';

const ScienceFictionMovies = () => {
    const { moviePlaylist } = useSelector((state) => state.moviePlaylist);
    return (
        <PlayListCard moviePlaylist={moviePlaylist?.scienceFictionMovies} />
    );
}

export default ScienceFictionMovies