import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Score {
  username: string;
  amount: string;
  time: string;
}

export interface LeaderboardState {
  scores: Score[];
}

const initialState: LeaderboardState = {
  scores: [
    { username: 'Anjum', amount: '₹50000', time: '00:56:23' },
    { username: 'Pragayna', amount: '₹5000', time: '00:56:23' },
    { username: 'Pragati Azad', amount: '₹500', time: '00:56:23' },
    { username: 'Hannibal Hector', amount: '₹500', time: '00:56:23' },
    { username: 'Razzi', amount: '₹500', time: '00:56:23' },
    { username: 'McRamble', amount: '₹500', time: '00:56:23' },
    { username: 'Razzi', amount: '₹500', time: '00:56:23' },
    { username: 'McRamble', amount: '₹500', time: '00:56:23' },
    { username: 'Muhammed Anjum Kunnummal', amount: '₹500', time: '00:56:23' },
  ],
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    addScore: (state, action: PayloadAction<Score>) => {
      state.scores.push(action.payload);
      state.scores.sort((a, b) => a.time.localeCompare(b.time));
    },
  },
});

export const { addScore } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
