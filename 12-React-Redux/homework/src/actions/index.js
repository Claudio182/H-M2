import { SEARCH_MOVIES, ADD_FAVORITE, GET_MOVIE_DETAIL, CLEAR_STATE, REMOVE_FAVORITE } from "./actionsTyps";

const apiKey = "368952f6";

export function searchMovies(movie) {
    return (dispatch) => {
        return fetch (`https://www.omdbapi.com/?s=${movie}&apikey=${apiKey}`)
            .then(response => response.json())
            .then(data => dispatch({
                    type: SEARCH_MOVIES,
                    payload: data.Search
            }))
    }
}

export function getMovieDetail (id) {
    return (dispatch) => {
        return fetch (`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
            .then(response => response.json())
            .then(data => dispatch({
                    type: GET_MOVIE_DETAIL,
                    payload: data
            }))
            
    }
}

export function addFavorite(payload) {
    return {
        type: ADD_FAVORITE,
        payload
    }
}

export function removeFavorite(payload) {
    return {
        type: REMOVE_FAVORITE,
        payload
    }
}

export function clearState () {
    return {
        type: CLEAR_STATE
    }
}
