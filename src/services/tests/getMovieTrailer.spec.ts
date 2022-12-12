import { getMovieTrailer } from '../getMovieTrailer';
import { vi, describe, expect, it } from 'vitest'
import type { MovieId } from '@/types';

describe('getMovieTrailer module', () => {
    const body = {
        imDbId: 'id',
        videoId: 'videoId'
    };
    const response = { 
        ok: true,
        json: () => Promise.resolve(body),
    };
    global.fetch = vi.fn(() => Promise.resolve(response  as unknown as Response));
    describe('getMovieTrailer function', () => {
        let error: Error;
        const setError = (err: any) => { error = err };
        it('should return trailer', async () => {
            const result = await getMovieTrailer('id' as unknown as MovieId);
            expect(result).toEqual({ imDbId: 'id', videoId: 'videoId' });
        });
        it('should throw error when reponse is not ok', async () => {
            response.ok = false;
            try {
                await getMovieTrailer('id' as unknown as MovieId);
            } catch (err: any){
                setError(err);
            }
            expect(error.message).toBe('Failed to fetch movie trailer');
            response.ok = true;
        });
        it('should throw error when no trailer is found', async () => {
            body.imDbId = null as unknown as string;
            try {
                await getMovieTrailer('id' as unknown as MovieId);
            } catch (err: any){
                setError(err);
            }
            expect(error.message).toBe('Movie trailer not found');
            body.imDbId = 'id';
        });
    });
});