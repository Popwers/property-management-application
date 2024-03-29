import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import manageGeneral from '../reducers/generalReducer';
import managePropriete from '../reducers/proprieteReducer';
import manageDossier from '../reducers/dossierReducer';
import manageUser from '../reducers/userReducer';
import manageNotification from '../reducers/notificationReducer';

import manageAddModal from '../reducers/addModalReducer';

const rootReducer = combineReducers({
    general: manageGeneral,
    addModal: manageAddModal,
    managePropriete,
    manageDossier,
    manageUser,
    manageNotification,
});

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    rootReducer,
    applyMiddleware(thunk)
    /*composeEnhancers(
        applyMiddleware(thunk)
    )*/
);