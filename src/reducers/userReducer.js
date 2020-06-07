import {
    GET_USER,
    UPDATE_USER,
    SEE_USER,
} from "../constants";

const initialState = {
    listUser: [], 
    seeUser: {
        id: null,
        role: null,
        pseudo: null,
        first_name: null,
        last_name: null,
        mail: null,
        telephone: null,
        adresse: null,
        adresse_postale_1: null,
        adresse_postale_2: null,
        ville: null,
        etat_province_region: null,
        zip_code_postal: null,
        pays: null,
        avatar: 'default',
    }
};

export default function manageUser(state = initialState, action) {
    let newState;

    switch (action.type) {
        case GET_USER:
            newState = {
                ...state,
                listUser: action.payload
            }

            return newState || state;

        case SEE_USER:
            let idToSee = action.payload;
            let userToSee = initialState.seeUser;
            for (let user of state.listUser.data) {
                if (user.id == idToSee) {
                    userToSee = user;
                    break;
                }
            }
            
            newState = {
                ...state,
                seeUser: userToSee
            }

            return newState || state;

        case UPDATE_USER:
            /*let id = action.payload;
            let userToSee = state.listUser.filter(user => user.id == id);

            newState = {
                ...state,
                seeUser: userToSee
            }

            return newState || state;*/

        default:
            return state;
    }
}