import type { MovieId, Movie } from "@/types";

const getMovies = async ( ids: MovieId[] ) => {
    try {
        const promises = ids.map(id => fetch(`https://imdb-api.com/en/API/SearchMovie/k_r4t061he/id=${id}`))
        const responses = await Promise.all(promises);
        responses.forEach(response => {
            if(!response.ok){
                throw new Error('Failed to fetch Movies');
            }
        })
        const movieList: MovieResponse[] = await Promise.all(responses.map((response) => response.json()));
        const movies: Movie[] = movieList.map(movie => movie.results[0]);
        if(!movies.length){
            throw new Error('No movies found');
        }
        return movies;
    } catch (err) {
        throw err;
    }
};

export default getMovies;

interface MovieResponse {
    results: Movie[];
}