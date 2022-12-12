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
    fullTitle: string,
    image: string,
    plot: string,
    directors: string,
    writers: string,
    stars: string,
    imDbRating: string,
    runtimeStr: string,
    videoId?: string
}
export interface CastMovie {
    id: MovieId,
    role: 'Director' | 'Actor',
}

export interface MovieResponse {
    results: Movie[];
}

export interface Trailer {
    imDbid: MovieId,
    videoId: string,
}