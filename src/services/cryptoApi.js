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
			query: (count) => ({ url: `/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${count}&offset=0` }),
		}),
		getCryptoDetails: builder.query({
			query: (coinId) => ({ url: `/coin/${coinId}` })
		}),

		// Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
		getCryptoHistory: builder.query({
			query: ({ coinId, timeperiod }) => ({ url: `coin/${coinId}/history?timeperiod=${timeperiod}` }),
		}),

		// Note: To access this endpoint you need premium plan
		getExchanges: builder.query({
			query: () => ({ url: '/exchanges' }),
		}),
	})
});

export const {
	useGetCryptosQuery,
	useGetCryptoDetailsQuery,
	useGetExchangesQuery,
	useGetCryptoHistoryQuery,
} = cryptoApi;
