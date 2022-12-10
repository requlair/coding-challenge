import { vi, describe, it, expect, beforeEach } from "vitest";
import stateManagement from "../stateManagement";
import * as getPersonId from "@/services/getPersonId";
import * as getMovieIds from "@/services/getMovieIds";
import * as getMovies from "@/services/getMovies";
import * as getMovieDetails from "@/services/getMovieDetails";
import * as utils from "@/utils/utilities";
import type { Movie, MovieDetails, MovieId, PersonId } from "@/types";

const getPersonIdSpy = vi.spyOn(getPersonId, 'getPersonId').mockResolvedValue('personId' as unknown as PersonId);
const getMovieIdsSpy = vi.spyOn(getMovieIds, 'getMovieIds').mockResolvedValue(['movieId' as unknown as MovieId]);
const getMoviesSpy = vi.spyOn(getMovies, 'getMovies').mockResolvedValue([{ id: 'id', title: 'title'} as unknown as Movie]);
const getMovieDetailsSpy = vi.spyOn(getMovieDetails, 'getMovieDetails').mockResolvedValue({ id: 'id', title: 'title', image: 'image'} as unknown as MovieDetails);

const findMatchingIdsSpy = vi.spyOn(utils, 'findMatchingIds');

describe('stateManagement module', () => {
    const {
        getLoadingState,
        loadMovies,
        getMoviesState,
        loadMovieDetails,
        getMovieDetailsState,
    } = stateManagement();

    describe('stateManagement functions', () => {
        beforeEach(() => {
            vi.clearAllMocks();
        })
        it('should set up initial states', () => {
            expect(getLoadingState.value).toEqual({ movies: 'initial', movieDetails: 'initial'});
            expect(getMoviesState.value).toEqual([]);
            expect(getMovieDetailsState.value).toEqual([]);
        });
        describe('when loading movies', () => {
            it('should set the status to error when an error occurs', async () => {
                getPersonIdSpy.mockRejectedValueOnce('Oops!');
                await loadMovies();
                expect(getLoadingState.value).toEqual({ movies: 'error', movieDetails: 'initial'});
            });
            it('should call the correct services when loading movies', async () => {
                await loadMovies();
                expect(getPersonIdSpy).toBeCalledTimes(2);
                expect(getMovieIdsSpy).toBeCalledTimes(2);
                expect(findMatchingIdsSpy).toBeCalled();
                expect(getMoviesSpy).toBeCalled();
                expect(getMovieDetailsSpy).not.toBeCalled();
            });
            it('should have set the correct states', () => {
                expect(getLoadingState.value).toEqual({ movies: 'done', movieDetails: 'initial'});
                expect(getMoviesState.value).toEqual([{ id: 'id', title: 'title'}]);
            });
            it('should not load when movies are already present', async () => {
                await loadMovies();
                expect(getPersonIdSpy).not.toBeCalled();
                expect(getMovieIdsSpy).not.toBeCalled();
                expect(findMatchingIdsSpy).not.toBeCalled();
                expect(getMoviesSpy).not.toBeCalled();
            });
        });
        describe('when loading movie details', () => {
            it('should set the status to error when an error occurs', async () => {
                getMovieDetailsSpy.mockRejectedValueOnce('Oops!');
                await loadMovieDetails('id' as unknown as MovieId);
                expect(getLoadingState.value).toEqual({ movies: 'done', movieDetails: 'error'});
            });
            it('should call the correct service when loading movie details', async () => {
                await loadMovieDetails('id' as unknown as MovieId);
                expect(getPersonIdSpy).not.toBeCalled();
                expect(getMovieIdsSpy).not.toBeCalled();
                expect(findMatchingIdsSpy).not.toBeCalled();
                expect(getMoviesSpy).not.toBeCalled();
                expect(getMovieDetailsSpy).toBeCalled();
            });
            it('should have set the correct states', () => {
                expect(getLoadingState.value).toEqual({ movies: 'done', movieDetails: 'done'});
                expect(getMovieDetailsState.value).toEqual([{ id: 'id', title: 'title', image: 'image'}]);
            });
            it('should not load when moviesdetails are already present', async () => {
                await loadMovies();
                expect(getMovieDetailsSpy).not.toBeCalled();
            });
        });
    });
});