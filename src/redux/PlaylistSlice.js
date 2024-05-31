import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  moviePlaylist: {},
  selectedPlaylist: null,
  currentView:"Movie"
};

const moviePlaylistSlice = createSlice({
  name: 'moviePlaylist',
  initialState,
  reducers: {
    addMovieToPlaylist: (state, action) => {
      if (!state.moviePlaylist[action.payload.playlist]) {
        state.moviePlaylist[action.payload.playlist] = [];
      }
      state.moviePlaylist[action.payload.playlist].push(action.payload.movie);
      toast.success("Movie added to playlist successfully!")
    },
    removeMovieFromPlaylist: (state, action) => {
      if (state.moviePlaylist[action.payload.playlist]) {
        state.moviePlaylist[action.payload.playlist] = state.moviePlaylist[action.payload.playlist].filter((movie) => movie.id !== action.payload.id);
      }
    },
    selectPlaylist: (state, action) => {
      state.selectedPlaylist = action.payload;
    },
    setCurrentView: (state, action) => {
      state.currentView = action.payload; 
    }
  },
});

export const { setCurrentView,addMovieToPlaylist, removeMovieFromPlaylist, selectPlaylist } = moviePlaylistSlice.actions;
export default moviePlaylistSlice.reducer;