import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
  listTrip: [],
  activeModal: false,
  activeTrip: 0,
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
    setActiveTrip: (state, action) => {
      state.activeTrip = action.payload;
    },
    removeTrip: (state, action) => {
      state.listTrip = state.listTrip.filter((e, i) => i !== action.payload);
      state.activeTrip = { city: '', startDate: '', endDate: '' };
    },
  },
});

export const {
  setfilterWeather,
  addTrip,
  setActiveTrip,
  setActiveModal,
  removeTrip,
} = weatherSlice.actions;
export default weatherSlice.reducer;
