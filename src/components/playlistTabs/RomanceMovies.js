import React from 'react'
import PlayListCard from './PlayListCard';
import { useSelector } from 'react-redux';

const RomanceMovies = () => {
    const { moviePlaylist } = useSelector((state) => state.moviePlaylist);
    return (
        <PlayListCard moviePlaylist={moviePlaylist?.romanceMovies} />
    );
}

export default RomanceMovies