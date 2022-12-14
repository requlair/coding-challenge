import { getPersonId } from '../getPersonId';
import { vi, describe, expect, it } from 'vitest'

describe('getPersonId module', () => {
    const body = {
        results: [{
            id: 'personId',
            title: 'Tom Hanks'
        }]
    };
    const response = { 
        ok: true,
        json: () => Promise.resolve(body),
    };
    global.fetch = vi.fn(() => Promise.resolve(response  as unknown as Response));
    describe('getPersonId function', () => {
        let error: Error;
        const setError = (err: any) => { error = err };
        it('should return personId', async () => {
            const result = await getPersonId('Tom Hanks');
            expect(result).toEqual('personId');
        });
        it('should throw error when reponse is not ok', async () => {
            response.ok = false;
            try {
                await getPersonId('Tom Hanks');
            } catch (err: any){
                setError(err);
            }
            expect(error.message).toBe('Failed to fetch personId');
            response.ok = true;
        });
        it('should throw error when no movies are found', async () => {
            body.results[0].title = 'Steven Spielberg';
            try {
                await getPersonId('Tom Hanks');
            } catch (err: any){
                setError(err);
            }
            expect(error.message).toBe('Person not found');
            body.results[0].title = 'Tom Hanks';
        });
    });
});