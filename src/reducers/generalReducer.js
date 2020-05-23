import {
    GET_MY_DATA,
    GET_LOGOUT,
    GET_ADRESSE_SITE
} from "../constants";

const initialState = {
    logOut: '#logout',
    homeUrl: '#homeUrl',
    myData: {data: {
        avatar: 'default',
        display_name: 'Utilisateur',
        role: 'load',
    }}
};

export default function manageGeneral(state = initialState, action) {
    let newState;

    switch (action.type) {
        case GET_MY_DATA:
            newState = {
                ...state,
                myData: action.payload
            }

            return newState || state;

        case GET_LOGOUT:
            newState = {
                ...state,
                logOut: action.payload
            }

            return newState || state;

        case GET_ADRESSE_SITE:
            newState = {
                ...state,
                homeUrl: action.payload
            }

            return newState || state;

        default:
            return state;
    }
}