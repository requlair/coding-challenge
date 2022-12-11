export type PersonId = {
    id: string
}
export type MovieId = {
    id: string
}
export interface Movie {
    id: MovieId,
    image: string,
    title: string,
    year: number,
    description: string,
}
export interface MovieDetails {
    id: MovieId,
    title: string,
    year: string,
    image: string,
    releaseDate: string,
    runtimeMins: string,
    plot: string,
}
export interface CastMovie {
    id: MovieId,
    role: 'Director' | 'Actor',
}

export interface MovieResponse {
    results: Movie[];
}