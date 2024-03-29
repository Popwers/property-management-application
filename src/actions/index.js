import axios from 'axios';
import { formatToJson } from '../lib/functions';

import {
    GET_PROPRIETE,
    UPDATE_PROPRIETE,
    SEE_PROPRIETE,
    GET_DOSSIER,
    SEE_DOSSIER,
    GET_USER,
    UPDATE_USER,
    SEE_USER,
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
    SET_PROPRIETE_ADD_MODAL,
    SET_CLIENT_ADD_MODAL,
    SET_CHASSEUR_ADD_MODAL,
    SET_REGISTER_DATA,
    GET_NOTIFICATION,
    COUNT_NOTIFICATION,
} from "../constants";

export function getAllProprietes() {
    return async function (dispatch) {
        let responseReq = null;
        let statutRes = 'success';

        let action = new FormData();
        action.append('action', 'get_proprietes_data');

        await axios.post('../wp-content/themes/themeplocatif/ajax-board.php', action)
            .then(function (response) {
                responseReq = formatToJson(response.data);
            })
            .catch(function (error) {
                responseReq = error;
                statutRes = 'error';
            });

        dispatch({ type: GET_PROPRIETE, payload: { data: responseReq, statut: statutRes } });
    }
}

export function getAllDossiers() {
    return async function (dispatch) {
        let responseReq = null;
        let statutRes = 'success';

        let action = new FormData();
        action.append('action', 'get_dossiers_data');

        await axios.post('../wp-content/themes/themeplocatif/ajax-board.php', action)
            .then(function (response) {
                responseReq = formatToJson(response.data);
                if (responseReq == 'fail') {
                    statutRes = 'success';
                    responseReq = null;
                }
            })
            .catch(function (error) {
                responseReq = error;
                statutRes = 'error';
            });

        dispatch({ type: GET_DOSSIER, payload: { data: responseReq, statut: statutRes } });
    }
}

export function getAllUsers() {
    return async function (dispatch) {
        let responseReq = null;
        let statutRes = 'success';

        let action = new FormData();
        action.append('action', 'get_users_data');

        await axios.post('../wp-content/themes/themeplocatif/ajax-board.php', action)
            .then(function (response) {
                responseReq = formatToJson(response.data);
                if (responseReq == 'fail') {
                    statutRes = 'success';
                    responseReq = null;
                }
            })
            .catch(function (error) {
                responseReq = error;
                statutRes = 'error';
            });

        dispatch({ type: GET_USER, payload: { data: responseReq, statut: statutRes } });
    }
}

export function getAllNotifications() {
    return async function (dispatch) {
        let responseReq = null;
        let statutRes = 'success';

        let action = new FormData();
        action.append('action', 'get_notification_data');

        await axios.post('../wp-content/themes/themeplocatif/ajax-board.php', action)
            .then(function (response) {
                responseReq = formatToJson(response.data);
            })
            .catch(function (error) {
                responseReq = error;
                statutRes = 'error';
            });

        dispatch({ type: GET_NOTIFICATION, payload: { data: responseReq, statut: statutRes } });
    }
}

/** UTILITY ACTIONS **/

export function getLogout() {
    return async function (dispatch) {
        let responseReq = null;
        let statutRes = 'success';

        let action = new FormData();
        action.append('action', 'get_logOut_data');

        await axios.post('../wp-content/themes/themeplocatif/ajax-board.php', action)
            .then(function (response) {
                responseReq = formatToJson(response.data);
                if (responseReq == 'fail') {
                    statutRes = 'success';
                    responseReq = null;
                }
            })
            .catch(function (error) {
                responseReq = error;
                statutRes = 'error';
            });

        dispatch({ type: GET_LOGOUT, payload: { data: responseReq, statut: statutRes } });
    }
}

export function getHomeUrl() {
    return async function (dispatch) {
        let responseReq = null;
        let statutRes = 'success';

        let action = new FormData();
        action.append('action', 'get_homeUrl_data');

        await axios.post('../wp-content/themes/themeplocatif/ajax-board.php', action)
            .then(function (response) {
                responseReq = formatToJson(response.data);
                if (responseReq == 'fail') {
                    statutRes = 'success';
                    responseReq = null;
                }
            })
            .catch(function (error) {
                responseReq = error;
                statutRes = 'error';
            });

        dispatch({ type: GET_ADRESSE_SITE, payload: { data: responseReq, statut: statutRes } });
    }
}

/** LOADER TOOGLE **/

export function toogleLoader(statut = null, messageShow = 'Veuillez patienter ...') {
    return { type: TOOGLE_LOADER, payload: { statut: statut, message: messageShow } };
}

/** MODAL TOOGLE **/

export function toogleAddClient() {
    return { type: TOOGLE_CLIENT_ADD_MODAL };
}

export function toogleAddChasseur() {
    return { type: TOOGLE_CHASSEUR_ADD_MODAL };
}

export function toogleAddPropriete() {
    return { type: TOOGLE_PROPRIETE_ADD_MODAL };
}


export function toogleUserModal() {
    return { type: TOOGLE_USER_MODAL };
}

export function toogleDossierModal() {
    return { type: TOOGLE_DOSSIER_MODAL };
}

export function toogleProprieteModal() {
    return { type: TOOGLE_PROPRIETE_MODAL };
}

/** PERSONAL DATA **/

export function getPersonalData() {
    return async function (dispatch) {
        let responseReq = null;
        let statutRes = 'success';

        let action = new FormData();
        action.append('action', 'get_personal_data');

        await axios.post('../wp-content/themes/themeplocatif/ajax-board.php', action)
            .then(function (response) {
                responseReq = formatToJson(response.data);
                if (responseReq == 'fail') {
                    statutRes = 'success';
                    responseReq = null;
                }
            })
            .catch(function (error) {
                responseReq = error;
                statutRes = 'error';
            });

        dispatch({ type: GET_MY_DATA, payload: { data: responseReq, statut: statutRes } });
    }
}

/** ADD MODAL **/

export function handleChangeAddProprieteModal(key, data) {
    return { type: SET_PROPRIETE_ADD_MODAL, payload: { key: key, data: data } };
}

export function handleChangeAddClientModal(key, data) {
    return { type: SET_CLIENT_ADD_MODAL, payload: { key: key, data: data } };
}

export function handleChangeAddChasseurModal(key, data) {
    return { type: SET_CHASSEUR_ADD_MODAL, payload: { key: key, data: data } };
}


/** REGISTER DATA **/

export function registerDataProgress(key, data) {
    return { type: SET_REGISTER_DATA, payload: { key: key, data: data } };
}

/** SEE DATA **/

export function seeUserData(id) {
    return { type: SEE_USER, payload: id };
}

export function seeProprieteData(id, dossiers) {
    return { type: SEE_PROPRIETE, payload: { id: id, dossiers: dossiers } };
}

export function seeDossierData(id) {
    return { type: SEE_DOSSIER, payload: id };
}

/** UPDATE DATA **/

export function updateUserData(userData) {
    return { type: UPDATE_USER, payload: userData };
}

export function updateProprieteData(proprieteData) {
    return { type: UPDATE_PROPRIETE, payload: proprieteData };
}

/** NOTIFICATION COUNT **/

export function setNotificationCount(value) {
    return { type: COUNT_NOTIFICATION, payload: value };
}