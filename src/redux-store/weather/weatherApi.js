import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const key = 'X29V6K3L6T95CJD3RD5AGVV9N';
//JYCC66DUD5WQYLGQYTRVFLKRK 

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`,
  }),
  endpoints: builder => ({
    getWeather: builder.query({
      query: payload => {
        const cityTrim = payload.city
          .split('')
          .filter(e => e.trim().length)
          .join('');
        return `${cityTrim}/${payload.startDate}/${payload.endDate}?key=${key}`;
      },
      method: 'GET',
      providesTags: ['Weather'],
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
