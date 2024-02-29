import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const key = 'key=32947262-816ad506c9db86c30ae5e3e11';

export const cityApi = createApi({
  reducerPath: 'cityApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://pixabay.com/api`,
  }),
  endpoints: builder => ({
    getCity: builder.query({
      query: payload => {
        const cityTrim = payload.city
          .split('')
          .filter(e => e.trim().length)
          .join('');
        return `?q=${cityTrim}&page=$1&${key}&image_type=photo&orientation=horizontal&per_page=3`;
      },
      method: 'GET',
      providesTags: ['City'],
    }),
  }),
});

export const { useGetCityQuery } = cityApi;
