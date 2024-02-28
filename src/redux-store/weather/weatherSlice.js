import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
  listTrip: [],
  activeModal: false,
};

const weatherSlice = createSlice({
  name: 'Weather',
  initialState,
  reducers: {
    setfilterWeather: (state, action) => {
      state.filter = action.payload;
    },

    addTrip: (state, action) => {
      state.listTrip.push(action.payload);
    },
    setActiveModal: (state, action) => {
      state.activeModal = action.payload;
    },
    updateNewSwitch: state => {
      console.log(!state.changeNew);
      state.isFreshGamesFirst = !state.isFreshGamesFirst;
    },
  },
});

export const { setfilterWeather, addTrip, setActiveModal } =
  weatherSlice.actions;
export default weatherSlice.reducer;
