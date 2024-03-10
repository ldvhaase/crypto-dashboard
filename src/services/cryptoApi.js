import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
		prepareHeaders: (headers) => {
			headers.set('X-RapidAPI-Key', '50fce5a048msh8a10ac15ce2c64fp11357cjsnb9bcf750583d');
			headers.set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com');
			return headers;
		}
	}),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => ({ url: `/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${count}&offset=0` })
		// Defaults
		// referenceCurrencyUuid: yhjMzLPhuIDl
		// timePeriod: 24h
		// tiers: 1
		// orderBy: marketCap
		// orderDirection: desc
		// limit: 50
		// offset: 0
		})
	})
})

export const { useGetCryptosQuery } = cryptoApi;
