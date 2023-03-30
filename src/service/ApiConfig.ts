import axios from 'axios';

const moviesURL = import.meta.env.VITE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const getByTitle = (movies: string) =>
  axios.create({
    baseURL: `${moviesURL}${apiKey}&s=${movies}`,
  });

export const getByOmdbID = (omdbID: string) =>
  axios.create({
    baseURL: `${moviesURL}${apiKey}&i=${omdbID}`,
  });
