import { createSlice } from '@reduxjs/toolkit';
import type { TracksHit, Tracks, Track } from '../../types';

export interface MusicPlayerSliceState {
  currentSongs: TracksHit[] | Tracks[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: Track | null;
  genreListId: string;
  volume: number;
  appTime: number;
  seekTime: number;
  duration: number;
  repeat: boolean;
  shuffle: boolean;
}
const initialState: MusicPlayerSliceState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: null,
  genreListId: '',
  volume: 0.5,
  appTime: 0,
  seekTime: 0,
  duration: 0,
  repeat: false,
  shuffle: false,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      if (action.payload.song == null) {
        state.isActive = false;
        state.isPlaying = false;
        state.activeSong = null;
        return;
      }

      state.activeSong = action.payload.song;
    },

    setSong: (state, action) => {

    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },

    setVolume: (state, action) => {
      state.volume = action.payload;
    },

    setAppTime: (state, action) => {
      state.appTime = action.payload;
    },

    setSeekTime: (state, action) => {
      state.seekTime = action.payload;
    },

    setDuration: (state, action) => {
      state.duration = action.payload;
    },

    setRepeat: (state, action) => {
      state.repeat = action.payload;
    },

    setShuffle: (state, action) => {
      state.shuffle = action.payload;
    },
  },
});

export const {
  setActiveSong,
  setSong,
  playPause,
  selectGenreListId,
  setVolume,
  setAppTime,
  setSeekTime,
  setDuration,
  setRepeat,
  setShuffle,
} = playerSlice.actions;
export default playerSlice.reducer;
