import type { MovieId } from "@/types";

const getMovieDetails = async ( id: MovieId ) => {
    try {
        const response = await fetch(`https://imdb-api.com/en/API/Title/k_r4t061he/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch movie');
        }
        const movie: MovieDetails = await response.json();
        return movie;
    } catch (err) {
        throw err;
    }
};

export default getMovieDetails;

interface MovieDetails {
    title: string,
    year: string,
    image: string,
    releaseDate: string,
    runtimeMins: string,
    plot: string,
}