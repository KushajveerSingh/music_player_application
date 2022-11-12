import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setVolume } from '../../store/slices/playerSlice';
import {
  BsFillVolumeUpFill,
  BsFillVolumeDownFill,
  BsFillVolumeMuteFill,
} from 'react-icons/bs';

const VolumeBar = () => {
  const dispatch = useAppDispatch();
  const volume = useAppSelector((state) => state.player.volume);

  return (
    <div className="flex flex-1 items-center justify-end">
      {volume <= 1 && volume > 0.5 && (
        <BsFillVolumeUpFill
          size={25}
          color="#FFF"
          onClick={() => dispatch(setVolume(0))}
        />
      )}
      {volume <= 0.5 && volume > 0 && (
        <BsFillVolumeDownFill
          size={25}
          color="#FFF"
          onClick={() => dispatch(setVolume(0))}
        />
      )}
      {volume == 0 && (
        <BsFillVolumeMuteFill
          size={25}
          color="#FFF"
          onClick={() => dispatch(setVolume(1))}
        />
      )}

      <input
        type="range"
        step="any"
        value={volume}
        min="0"
        max="1"
        onChange={(e) => dispatch(setVolume(e.target.value))}
        className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
      />
    </div>
  );
};

export default VolumeBar;
