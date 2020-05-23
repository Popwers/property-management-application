import {
    GET_DOSSIER,
    ADD_DOSSIER,
    UPDATE_DOSSIER,
    DELETE_DOSSIER
} from "../constants";

const initialState = { listDossier: [] };

export default function manageDossier(state = initialState, action) {
    let newState;

    switch (action.type) {
        case GET_DOSSIER:
            newState = {
                ...state,
                listDossier: action.payload
            }

            return newState || state;

        case ADD_DOSSIER:
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

        case UPDATE_DOSSIER:
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