export type PersonId = {
    id: string
}
export type MovieId = {
    id: string
}
export interface Movie {
    id: MovieId,
    role: 'Director' | 'Actor',
    title: string,
    year: number,
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
