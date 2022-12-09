import { reactive, computed, type Ref, readonly } from 'vue';
import getPersonIdByName from '@/services/getPersonIdByName';
import getMoviesByIdAndRole from '@/services/getMoviesByIdAndRole';
import getMovieDetails from '@/services/getMovieDetails';
import { findMatchingMovies } from '@/utils/utilities';
import type { Movie, MovieDetails, MovieId } from '@/types';

const loadingState: { overview: Status, details: Status }= reactive({
    overview: 'initial',
    details: 'initial'
});
const state: { overview: Movie[], details: MovieDetails[] } = reactive({
    overview: [],
    details: [],
});

function setLoadingState(key: 'overview' | 'details', status: Status) {
    loadingState[key] = status;
};

const getLoadingState = computed(() => loadingState);

async function loadOverview () {
    if(!state.overview.length){
        setLoadingState('overview','loading')
        try {
            const hanksId = await getPersonIdByName('Tom Hanks');
            const spielbergId = await getPersonIdByName('Steven Spielberg');
    
            const hankMovies = await getMoviesByIdAndRole(hanksId, 'Actor');
            const spielbergMovies = await getMoviesByIdAndRole(spielbergId, 'Director');
    
            const matchingMovies = findMatchingMovies(hankMovies, spielbergMovies);
            setOverview(matchingMovies);
            setLoadingState('overview', 'done');
        } catch (err) {
            setLoadingState('overview','error')
            throw err;
        }
    }
}
function setOverview(overview: Movie[]) { 
    state.overview = overview;
}
const getOverview = computed(() => state.overview);

async function loadDetails (movieId: MovieId) {
    const alreadyPresent = state.details.filter(movie => movie.id === movieId).length;
    if(!alreadyPresent){
        setLoadingState('details','loading')
        try {
            const details = await getMovieDetails(movieId);
            setDetails(details);
            setLoadingState('details','done')
        } catch (err) {
            setLoadingState('details','error')
            throw err;
        }
    }
}

function setDetails(details: MovieDetails) {
    state.details.push(details);
}

const getDetails = computed(() => state.details);

export default function stateManagement() {
    return {
        loadingState,
        getLoadingState,
        loadOverview,
        getOverview,
        loadDetails,
        getDetails,
    }
}

type Status = 'initial' | 'loading' | 'done' | 'error';