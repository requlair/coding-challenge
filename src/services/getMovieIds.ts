import type { MovieId, PersonId } from "@/types";

const getMovieIds = async ( id: PersonId, role: 'Director' | 'Actor' ) => {
    try {
        const response = await fetch(`https://imdb-api.com/en/API/Name/k_r4t061he/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch Movies');
        }
        const movieList: { castMovies: castMovie[] } = await response.json();
        const moviesByRole = movieList.castMovies.filter(movie => movie.role === role);
        if (!moviesByRole.length) {
            throw new Error('No movies found');
        }
        const movieIds = moviesByRole.map(movie => movie.id);
        return movieIds;
    } catch (err) {
        throw err;
    }
};

export default getMovieIds;

interface castMovie {
    id: MovieId,
    role: 'Director' | 'Actor',
}