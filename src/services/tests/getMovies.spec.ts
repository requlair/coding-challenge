import { getMovies } from '../getMovies';
import { vi, describe, expect, it } from 'vitest'
import type { MovieId } from "@/types";

describe('getMovies module', () => {
    const body = {
            results: [{
                id: 'id',
                image: 'image',
                title: 'title',
                description: 'description',
            }]
    };
    const response = { 
        ok: true,
        json: () => Promise.resolve(body),
    };
    global.fetch = vi.fn(() => Promise.resolve(response  as unknown as Response));
    describe('getMovies function', () => {
        let error: Error;
        const setError = (err: any) => { error = err };
        it('should return movies', async () => {
            const result = await getMovies(['id' as unknown as MovieId]);
            expect(result).toEqual([{
                id: 'id',
                image: 'image',
                title: 'title',
                description: 'description',
            }]);
        });
        it('should throw error when reponse is not ok', async () => {
            response.ok = false;
            try {
                await getMovies(['id' as unknown as MovieId]);
            } catch (err: any){
                setError(err);
            }
            expect(error.message).toBe('Failed to fetch movies');
            response.ok = true;
        });
        it('should throw error when no movies are found', async () => {
            body.results = [];
            try {
                await getMovies(['id' as unknown as MovieId]);
            } catch (err: any){
                setError(err);
            }
            expect(error.message).toBe('No movies found');
            body.results = [{
                id: 'id',
                image: 'image',
                title: 'title',
                description: 'description',
            }];
        });
    });
});