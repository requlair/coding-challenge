import type { MovieDetails, MovieId } from "@/types";

const getMovieDetails = async ( id: MovieId ) => {
    try {
        const response = await fetch(`https://imdb-api.com/en/API/Title/k_r4t061he/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch movie');
        }
        const movie: MovieDetails = await response.json();
        if(movie.title === null) {
            throw new Error('No movie found');
        }
        return movie;
    } catch (err) {
        throw err;
    }
};

export default getMovieDetails;