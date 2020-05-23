import axios from 'axios';

import {
    GET_USER,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER
} from "../constants";

const initialState = { listUser: [] };

export default function manageUser(state = initialState, action) {
    let newState;

    switch (action.type) {
        case GET_USER:
            newState = {
                ...state,
                listUser: action.payload
            }

            return newState || state;

        case ADD_USER:
            /*const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
            if (favoriteFilmIndex !== -1) {
                // Le film est déjà dans les favoris, on le supprime de la liste
                newState = {
                    ...state,
                    favoritesFilm: state.favoritesFilm.filter((item, index) => index !== favoriteFilmIndex)
                }
            }
            else {
                // Le film n'est pas dans les films favoris, on l'ajoute à la liste
                newState = {
                    ...state,
                    favoritesFilm: [...state.favoritesFilm, action.value]
                }
            }*/

            return newState || state;

        case UPDATE_USER:
            /*const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
            if (favoriteFilmIndex !== -1) {
                // Le film est déjà dans les favoris, on le supprime de la liste
                newState = {
                    ...state,
                    favoritesFilm: state.favoritesFilm.filter((item, index) => index !== favoriteFilmIndex)
                }
            }
            else {
                // Le film n'est pas dans les films favoris, on l'ajoute à la liste
                newState = {
                    ...state,
                    favoritesFilm: [...state.favoritesFilm, action.value]
                }
            }*/

            return newState || state;

        default:
            return state;
    }
}