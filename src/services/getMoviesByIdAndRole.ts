import type { Movie, PersonId } from "@/types";

const getMoviesByIdAndRole = async ( id: PersonId, role: 'Director' | 'Actor' ) => {
    try {
        const response = await fetch(`https://imdb-api.com/en/API/Name/k_r4t061he/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch Movies');
        }
        const movieList: { castMovies: Movie[] } = await response.json();
        const moviesByRole = movieList.castMovies.filter(movie => movie.role === role);
        if (!moviesByRole.length) {
            throw new Error('No movies found');
        }
        return moviesByRole;
    } catch (err) {
        throw err;
    }
};

export default getMoviesByIdAndRole;