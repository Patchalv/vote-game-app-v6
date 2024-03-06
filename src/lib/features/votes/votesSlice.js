import { createSlice } from '@reduxjs/toolkit';
const { uuid } = require('uuidv4');

const initialState = [];

/*
games = [
  {
    playerIdx: 1,
    player: "Patrick", 
    games: [
      { gameId: 1, name: '7 Wonders', points: 4 },
      { gameId: 2, name: 'Birds', points: 3 },
      { gameId: 3, name: 'Settlers', points: 2 },
      { gameId: 4, name: 'Uno', points: 1 }
    ]
  },
  {
    playerIdx: 2,
    player: "Doug", 
    games: [
      { gameId: 1, name: '7 Wonders', points: 4 },
      { gameId: 2, name: 'Birds', points: 3 },
      { gameId: 3, name: 'Settlers', points: 2 },
      { gameId: 4, name: 'Uno', points: 1 }
    ]
  }
]
*/

const votesSlice = createSlice({
    name: 'votes',
    initialState,
    reducers: {
        addVote: (state, action) => {
            const playerId = action.payload.playerIdx;

            const containsPlayerId = state.some(
                (vote) => vote.playerIdx === playerId
            );

            const voteIndex = state.findIndex(
                (vote) => vote.playerIdx === playerId
            );

            if (!containsPlayerId) {
                state.push(action.payload);
            } else {
                state[voteIndex] = action.payload;
            }
        },
        resetVotes: (state) => {
            // Clear state
        },
    },
});

export const { addVote, resetVotes } = votesSlice.actions;
export default votesSlice.reducer;
