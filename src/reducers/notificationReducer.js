import {
    GET_NOTIFICATION,
} from "../constants";

const initialState = {
    listNotification: [],
};

export default function manageNotification(state = initialState, action) {
    let newState;

    switch (action.type) {
        case GET_NOTIFICATION:
            newState = {
                ...state,
                listNotification: action.payload
            }

            return newState || state;

        default:
            return state;
    }
}