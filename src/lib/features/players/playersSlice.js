import { createSlice } from '@reduxjs/toolkit';
const { uuid } = require('uuidv4');

const initialState = [];

/*
const initialState = [
    { id: 1, name: 'Patrick' },
    { id: 2, name: 'Doug' },
    { id: 3, name: 'Inge' },
    { id: 4, name: 'Jenny' },
];
*/

const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        addPlayer: (state, action) => {
            const newPlayer = {
                id: uuid(),
                name: action.payload,
            };
            state.push(newPlayer);
        },
        deletePlayer: (state, action) => {
            const playerId = action.payload;
            return state.filter((player) => player.id !== playerId);
        },
        resetPlayers: (state) => {
            // Clear state
        },
    },
});

export const { addPlayer, deletePlayer, resetPlayers } = playersSlice.actions;
export default playersSlice.reducer;
