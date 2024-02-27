import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import weatherReducer from './weather/weatherSlice';
import { weatherApi } from './weather/weatherApi';

import { setupListeners } from '@reduxjs/toolkit/query';

const weatherPersistConfig = {
  key: 'weather',
  storage,
  whitelist: ['listTrip'],
};

export const store = configureStore({
  reducer: {
    weatherReducer: persistReducer(weatherPersistConfig, weatherReducer),
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    weatherApi.middleware,
  ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
