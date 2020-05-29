import {
    GET_MY_DATA,
    GET_LOGOUT,
    GET_ADRESSE_SITE,
    TOOGLE_LOADER,
    TOOGLE_CLIENT_ADD_MODAL,
    TOOGLE_CHASSEUR_ADD_MODAL,
    TOOGLE_PROPRIETE_ADD_MODAL,
    TOOGLE_USER_MODAL,
    TOOGLE_DOSSIER_MODAL,
    TOOGLE_PROPRIETE_MODAL,
    SET_REGISTER_DATA,
} from "../constants";

const initialState = {
    userModal: false,
    dossierModal: false,
    proprieteModal: false,
    addClientModal: false,
    addChasseurModal: false,
    addProprieteModal: false,
    loader: {
        statut: false,
        message: 'Veuillez patienter ...'
    },
    registerData: {},
    logOut: '#logout',
    homeUrl: '#homeUrl',
    myData: {
        data: {
            id: null,
            avatar: 'default',
            display_name: 'Utilisateur',
            role: 'load',
        }
    }
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

        case TOOGLE_LOADER:
            if (action.payload.statut == 'null') {
                newState = {
                    ...state,
                    loader: {
                        statut: !state.loader.statut,
                        message: action.payload.message
                    }
                }
            } else {
                newState = {
                    ...state,
                    loader: {
                        statut: action.payload.statut,
                        message: action.payload.message
                    }
                }
            }

            return newState || state;

        case TOOGLE_CLIENT_ADD_MODAL:
            newState = {
                ...state,
                addClientModal: !state.addClientModal
            }

            return newState || state;

        case TOOGLE_CHASSEUR_ADD_MODAL:
            newState = {
                ...state,
                addChasseurModal: !state.addChasseurModal
            }

            return newState || state;

        case TOOGLE_PROPRIETE_ADD_MODAL:
            newState = {
                ...state,
                addProprieteModal: !state.addProprieteModal
            }

            return newState || state;

        case TOOGLE_USER_MODAL:
            newState = {
                ...state,
                userModal: !state.userModal
            }

            return newState || state;

        case TOOGLE_DOSSIER_MODAL:
            newState = {
                ...state,
                dossierModal: !state.dossierModal
            }

            return newState || state;

        case TOOGLE_PROPRIETE_MODAL:
            newState = {
                ...state,
                proprieteModal: !state.proprieteModal
            }

            return newState || state;

        case SET_REGISTER_DATA:
            if (action.payload.data < 100) {
                newState = {
                    ...state,
                    registerData: {
                        ...state.registerData,
                        [action.payload.key]: action.payload.data
                    }
                }
            } else {
                newState = {
                    ...state,
                    registerData: {
                        ...state.registerData
                    }
                }

                delete newState.registerData[action.payload.key];
            }

            return newState || state;

        default:
            return state;
    }
}