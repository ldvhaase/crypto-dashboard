import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://crypto-news16.p.rapidapi.com/news/top/5';

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '50fce5a048msh8a10ac15ce2c64fp11357cjsnb9bcf750583d');
            headers.set('X-RapidAPI-Host', 'crypto-news16.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => ({
                method: 'GET',
                // url: `?keyword=${newsCategory}&size=${count}`,
                // params: null,
            })
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
