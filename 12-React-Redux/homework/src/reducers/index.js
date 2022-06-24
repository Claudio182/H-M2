import { SEARCH_MOVIES } from "../actions/actionsTyps";
import { ADD_FAVORITE } from "../actions/actionsTyps";
import { GET_MOVIE_DETAIL } from "../actions/actionsTyps";
import { CLEAR_STATE } from "../actions/actionsTyps";

const initialState = {
    favMovies: [],
    movies: [],
    moviesDetail: {}
}

export default function rootReducer (state = initialState, { type, payload }) {
    switch (type) {
        case SEARCH_MOVIES: return {
            ...state,
            movies: payload
        } 
        case ADD_FAVORITE: return {
            ...state,
            favMovies: state.favMovies.filter(movie => movie.id !== payload.id).concat(payload)
        }
        case GET_MOVIE_DETAIL: return {
            ...state,
            moviesDetail: payload
        }
        case CLEAR_STATE: return {
            ...state,
            moviesDetail: {}
        }

        default: return state;
    }
}