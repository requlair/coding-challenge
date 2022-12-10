import { findMatchingIds } from "../utilities";
import { describe, expect, it } from 'vitest'
import type { MovieId } from "@/types";

describe('Utilities module', () => {
    describe('findMatchingIds function', () => {
        it('should return matching element',() => {
            const list1 = ['id1','id2','id3'] as unknown as MovieId[];
            const list2 = ['id2','id3','id4'] as unknown as MovieId[];
            const result = findMatchingIds(list1,list2);
            expect(result).toEqual(['id2','id3']);
        });
    });
});