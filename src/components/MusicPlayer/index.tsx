import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

import { setSong, playPause } from '../../store/slices/playerSlice';
import Controls from './Controls';
import Player from './Player';
import Seekbar from './Seekbar';
import Track from './Track';
import VolumeBar from './VolumeBar';

const MusicPlayer = () => {
  const dispatch = useAppDispatch();
  const { currentSongs, currentIndex, isActive, isPlaying, shuffle } = useAppSelector(
    (state) => state.player
  );

  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (!isActive) {
      dispatch(playPause(false));
      return;
    }

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(false));

    if (currentSongs.length == 0) return;

    if (shuffle) {
      dispatch(setSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(setSong((currentIndex + 1) % currentSongs.length));
    }
  };

  const handlePrevSong = () => {
    dispatch(playPause(false));

    if (currentSongs.length == 0) return;

    if (shuffle) {
      dispatch(setSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(setSong((currentIndex - 1 + currentSongs.length) % currentSongs.length));
    }
  };

  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} />

      <div className="flex-1 flex-col items-center justify-center">
        <Controls
          isPlaying={isPlaying}
          isActive={isActive}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />

        <Seekbar />

        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          currentIndex={currentIndex}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>
      <VolumeBar />
    </div>
  );
};

export default MusicPlayer;
