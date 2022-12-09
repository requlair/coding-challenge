import type { Movie, MovieId } from "@/types";

const findMatchingIds = (idList1: MovieId[], idList2: MovieId[]) => {
    return idList1.filter(id1 => {
        return idList2.find(id2 => id2 === id1)
    });
}

export {
    findMatchingIds,
};