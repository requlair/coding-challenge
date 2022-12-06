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
}
