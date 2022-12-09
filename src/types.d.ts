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
