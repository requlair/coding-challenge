import type { Movie } from "@/types";

const findMatchingMovies = (movieList1: Movie[], movielist2: Movie[]) => {
    return movieList1.filter(movie1 => {
        return movielist2.find(movie2 => movie2.id === movie1.id)
    });
}

export {
    findMatchingMovies,
};