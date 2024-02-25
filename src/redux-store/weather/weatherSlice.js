import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const weatherSlice = createSlice({
  name: 'Weather',
  initialState,
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
    updatePage: (state, action) => {
      state.page = action.payload;
    },
    updateNewSwitch: state => {
      console.log(!state.changeNew);
      state.isFreshGamesFirst = !state.isFreshGamesFirst;
    },
  },
});

export const { setActiveItem, updatePage, updateNewSwitch } =
  weatherSlice.actions;
export default weatherSlice.reducer;
