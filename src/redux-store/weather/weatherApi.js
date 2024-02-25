import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const key = 'X29V6K3L6T95CJD3RD5AGVV9N';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=${key}`,
  }),
  endpoints: builder => ({
    getWeather: builder.query({
      query(params) {
        return {
          method: 'GET',
        };
      },
      invalidatesTags: ['Weather'],
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
