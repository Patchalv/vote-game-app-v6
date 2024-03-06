import { createSlice } from '@reduxjs/toolkit';
const { uuid } = require('uuidv4');

const initialState = [];

/*
const initialState = [
    { id: 1, name: '7 Wonders' },
    { id: 2, name: 'Birds' },
    { id: 3, name: 'Settlers' },
    { id: 4, name: 'Uno' },
];
*/

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        addGame: (state, action) => {
            const newGame = {
                id: uuid(),
                name: action.payload,
            };
            state.push(newGame);
        },
        deleteGame: (state, action) => {
            const gameId = action.payload;
            return state.filter((game) => game.id !== gameId);
        },
        resetGames: (state) => {
            // Clear state
        },
    },
});

export const { addGame, deleteGame, resetGames } = gamesSlice.actions;
export default gamesSlice.reducer;
