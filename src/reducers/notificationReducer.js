import {
    GET_NOTIFICATION,
    COUNT_NOTIFICATION,
} from "../constants";

const initialState = {
    listNotification: [],
    countNotifications: 0,
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

        case COUNT_NOTIFICATION:
            newState = {
                ...state,
                countNotifications: action.payload
            }

            return newState || state;

        default:
            return state;
    }
}