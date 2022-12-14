import { getMovieIds } from '../getMovieIds';
import { vi, describe, expect, it } from 'vitest'
import type { PersonId } from "@/types";

describe('getMovieIds module', () => {
    const body = {
        castMovies: [{
            id: 'movieId',
            role: 'Director'
        }]
    };
    const response = { 
        ok: true,
        json: () => Promise.resolve(body),
    };
    global.fetch = vi.fn(() => Promise.resolve(response  as unknown as Response));
    const personId = 'personId' as unknown as PersonId;
    describe('getMovieIds function', () => {
        let error: Error;
        const setError = (err: any) => { error = err };
        it('should return movieIds', async () => {
            const result = await getMovieIds(personId, 'Director');
            expect(result).toEqual(['movieId']);
        });
        it('should throw error when reponse is not ok', async () => {
            response.ok = false;
            try {
                await getMovieIds(personId, 'Director');
            } catch (err: any){
                setError(err);
            }
            expect(error.message).toBe('Failed to fetch movies');
            response.ok = true;
        });
        it('should throw error when no movies are found', async () => {
            body.castMovies[0].role = 'Actor';
            try {
                await getMovieIds(personId, 'Director');
            } catch (err: any){
                setError(err);
            }
            expect(error.message).toBe('No movies found');
            body.castMovies[0].role = 'Director';
        });
    });
});