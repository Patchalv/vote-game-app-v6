import { configureStore } from '@reduxjs/toolkit';
import playersSlice from './features/players/playersSlice';
import gamesSlice from './features/games/gamesSlice';
import votesSlice from './features/votes/votesSlice';

export const store = configureStore({
    reducer: {
        players: playersSlice,
        games: gamesSlice,
        votes: votesSlice,
    },
});
