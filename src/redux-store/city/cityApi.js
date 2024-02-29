import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const key = 'key=32947262-816ad506c9db86c30ae5e3e11';

export const cityApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://pixabay.com/api`,
  }),
  endpoints: builder => ({
    getCityImg: builder.query({
      query: payload => {
        return `?q=${payload.city}&page=$1&${key}&image_type=photo&orientation=horizontal&per_page=3`;
      },
      method: 'GET',
      providesTags: ['CityImg'],
    }),
  }),
});

export const { useGetCityImgQuery } = cityApi;
