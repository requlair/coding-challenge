import type { MovieId, Trailer } from "@/types";

const getMovieTrailer = async ( id: MovieId ) => {
    try {
        const response = await fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_r4t061he/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch movie trailer');
        }
        const trailer: Trailer = await response.json();
        if (!trailer.imDbId) {
            throw new Error('Movie trailer not found');
        }
        return trailer;
    } catch (err) {
        throw err;
    }
};

export { getMovieTrailer };