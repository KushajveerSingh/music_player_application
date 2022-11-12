import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setSeekTime } from '../../store/slices/playerSlice';

const getTime = (time: number) => {
  return `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;
};

const Seekbar = () => {
  const dispatch = useAppDispatch();
  const appTime = useAppSelector((state) => state.player.appTime);
  const seekTime = useAppSelector((state) => state.player.seekTime);
  const duration = useAppSelector((state) => state.player.duration);

  return (
    <div className="sm:flex flex-row items-center">
      <button
        type="button"
        onClick={() => dispatch(setSeekTime(appTime - 5))}
        className="lg:mr-4 lg:block text-white"
      >
        -
      </button>
      <p className="text-white">{appTime == 0 ? '0:00' : getTime(appTime)}</p>

      <input
        type="range"
        step="any"
        value={appTime}
        min="0"
        max={duration}
        onChange={(e) => dispatch(setSeekTime(e.target.value))}
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      />

      <p className="text-white">{duration == 0 ? '0:00' : getTime(duration)}</p>
      <button
        type="button"
        onClick={() => dispatch(setSeekTime(appTime + 5))}
        className="lg:mr-4 lg:block text-white"
      >
        +
      </button>
    </div>
  );
};

export default Seekbar;
