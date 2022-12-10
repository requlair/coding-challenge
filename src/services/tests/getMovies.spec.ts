import getMovies from '../getMovies';
import { vi, describe, expect, it } from 'vitest'
import type { MovieId, PersonId } from "@/types";

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
    const personId = 'personId' as unknown as PersonId;
    describe('getMovies function', () => {
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
            let error;
            try {
                await getMovies(['id' as unknown as MovieId]);
            } catch (err: any){
                error = err;
            }
            expect(error.message).toBe('Failed to fetch movies');
            response.ok = true;
        });
        it('should throw error when no movies are found', async () => {
            body.results = [];
            let error;
            try {
                await getMovies(['id' as unknown as MovieId]);
            } catch (err: any){
                error = err;
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