import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import manageGeneral from '../reducers/generalReducer';
import managePropriete from '../reducers/proprieteReducer';
import manageDossier from '../reducers/dossierReducer';
import manageUser from '../reducers/userReducer';

const rootReducer = combineReducers({
    general: manageGeneral,
    managePropriete,
    manageDossier,
    manageUser
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);