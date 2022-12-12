import { reactive, computed } from 'vue';
import { getPersonId } from '@/services/getPersonId'
import { getMovieIds } from '@/services/getMovieIds';
import { getMovies } from '@/services/getMovies';
import { getMovieDetails } from '@/services/getMovieDetails';
import { getMovieTrailer } from '@/services/getMovieTrailer';
import { findMatchingIds } from '@/utils/utilities';
import type { Movie, MovieDetails, MovieId } from '@/types';

const loadingState: { movies: Status, movieDetails: Status }= reactive({
    movies: 'initial',
    movieDetails: 'initial'
});
const state: { movies: Movie[], movieDetails: MovieDetails[], favourites: MovieId[] } = reactive({
    movies: [],
    movieDetails: [],
    favourites: [],
});

function setLoadingState(key: 'movies' | 'movieDetails', status: Status) {
    loadingState[key] = status;
}

const getLoadingState = computed(() => loadingState);

async function loadMovies () {
    if(!state.movies.length){
        setLoadingState('movies','loading')
        try {
            const [ spielBergId, hanksId ] = await Promise.all([getPersonId('Steven Spielberg'), getPersonId('Tom Hanks')]);
            const [ spielBergMovies, hanksMovies ] = await Promise.all([getMovieIds(spielBergId, 'Director'), getMovieIds(hanksId, 'Actor')]);
            const matchingIds = findMatchingIds(spielBergMovies, hanksMovies);
            const movies = await getMovies(matchingIds);
            setOverview(movies);
            setLoadingState('movies', 'done');
        } catch (err) {
            setLoadingState('movies','error')
        }
    }
}
function setOverview(movies: Movie[]) { 
    state.movies = movies;
}
const getMoviesState = computed(() => state.movies);

async function loadMovieDetails (movieId: MovieId) {
    const alreadyPresent = state.movieDetails.filter(movie => movie.id === movieId).length;
    if(!alreadyPresent){
        setLoadingState('movieDetails','loading')
        try {
            const details = await getMovieDetails(movieId);
            const trailer = await getMovieTrailer(movieId);
            details.videoId = trailer.videoId;
            setDetails(details);
            setLoadingState('movieDetails','done')
        } catch (err) {
            setLoadingState('movieDetails','error')
        }
    }
}

function setDetails(movieDetails: MovieDetails) {
    state.movieDetails.push(movieDetails);
}

const getMovieDetailsState = computed(() => state.movieDetails);

const addFavourite = (id: MovieId) => {
    state.favourites.push(id);
}
const removeFavourite = (id: MovieId) => {
    const index = state.favourites.indexOf(id);
    state.favourites.splice(index, 1)
}
const getFavouritesState = computed(() => {
    return state.favourites;
})

export default function stateManagement() {
    return {
        getLoadingState,
        loadMovies,
        getMoviesState,
        loadMovieDetails,
        getMovieDetailsState,
        addFavourite,
        removeFavourite,
        getFavouritesState,
    }
}

type Status = 'initial' | 'loading' | 'done' | 'error';