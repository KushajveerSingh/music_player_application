import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit'
import { shazamCoreApi } from './features/shazamCore';
import playerReducer from './slices/playerSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
      player: playerReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
  });
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
export default store;