import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://news-api14.p.rapidapi.com/search';

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '50fce5a048msh8a10ac15ce2c64fp11357cjsnb9bcf750583d');
            headers.set('X-RapidAPI-Host', 'news-api14.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => ({
                method: 'GET',
                url: `?q=${newsCategory}&pageSize=${count}&country=us&language=en`,
            //     params: {
            //         'q': 'crypto',
            //         'country': 'us',
            //         'language': 'en',
            //         'pageSize': '10',
            //         'publisher': 'cnn.com,bbc.com'
            //     },
            })
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
