import {
    GET_PROPRIETE,
    UPDATE_PROPRIETE,
} from "../constants";

const initialState = { listPropriete: [] };

export default function managePropriete(state = initialState, action) {
    let newState;

    switch (action.type) {
        case GET_PROPRIETE:
            newState = {
                ...state,
                listPropriete: action.payload
            }

            return newState || state;

        case UPDATE_PROPRIETE:
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