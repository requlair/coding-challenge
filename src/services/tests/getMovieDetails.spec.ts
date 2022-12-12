import { getMovieDetails } from '../getMovieDetails';
import { vi, describe, expect, it } from 'vitest'
import type { MovieId } from "@/types";

describe('getMovieDetails module', () => {
    const body = {
        id: 'id',
        title: 'title',
        year: 'year',
        image: 'image',
    };
    const response = { 
        ok: true,
        json: () => Promise.resolve(body),
    };
    global.fetch = vi.fn(() => Promise.resolve(response  as unknown as Response));
    const movieId = 'movieId' as unknown as MovieId;
    describe('getMovieDetails function', () => {
        let error: Error;
        const setError = (err: any) => { error = err };
        it('should return movieDetails', async () => {
            const result = await getMovieDetails(movieId);
            expect(result).toEqual({
                id: 'id',
                title: 'title',
                year: 'year',
                image: 'image',
            });
        });
        it('should throw error when reponse is not ok', async () => {
            response.ok = false;
            try {
                await getMovieDetails(movieId);
            } catch (err: any){
                setError(err);
            }
            expect(error.message).toBe('Failed to fetch movie');
            response.ok = true;
        });
        it('should throw error when no movies are found', async () => {
            body.title = null as unknown as string;
            try {
                await getMovieDetails(movieId)
            } catch (err: any){
                setError(err);
            }
            expect(error.message).toBe('No movie found');
            body.title = 'title'
        });
    });
});