import {
    GET_DOSSIER,
    UPDATE_DOSSIER,
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

        default:
            return state;
    }
}