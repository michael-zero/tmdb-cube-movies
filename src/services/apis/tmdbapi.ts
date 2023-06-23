import axios from 'axios';

export const apiTMDB = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_TMDB,
});

apiTMDB.interceptors.request.use(
	config => {
			if (config.headers !== undefined) {
				config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`;
			}
		return config;
	},
	error => Promise.reject(error),
);
