import axios from 'axios';

import {
    GET_PROPRIETE,
    ADD_PROPRIETE,
    UPDATE_PROPRIETE,
    DELETE_PROPRIETE,
    GET_DOSSIER,
    ADD_DOSSIER,
    UPDATE_DOSSIER,
    DELETE_DOSSIER,
    GET_USER,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER,
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

} from "../constants";

export function getAllProprietes() {
    return async function (dispatch) {
        let responseReq = null;
        let statutRes = 'success';

        await axios.get('../wp-admin/admin-ajax.php', {
            params: {
                action: 'get_proprietes_data'
            }
        })
        .then(function (response) {
            responseReq = formatToJson(response.data);
        })
        .catch(function (error) {
            responseReq = error;
            statutRes = 'error';
        });

        dispatch({ type: GET_PROPRIETE, payload: { data: responseReq, statut: statutRes } });
    }
};

export function getAllDossiers() {
    return async function (dispatch) {
        let responseReq = null;
        let statutRes = 'success';

        await axios.get('../wp-admin/admin-ajax.php', {
            params: {
                action: 'get_dossiers_data'
            }
        })
            .then(function (response) {
                responseReq = formatToJson(response.data);
            })
            .catch(function (error) {
                responseReq = error;
                statutRes = 'error';
            });

        dispatch({ type: GET_DOSSIER, payload: { data: responseReq, statut: statutRes } });
    }
};

export function getAllUsers() {
    return async function (dispatch) {
        let responseReq = null;
        let statutRes = 'success';

        await axios.get('../wp-admin/admin-ajax.php', {
            params: {
                action: 'get_users_data'
            }
        })
            .then(function (response) {
                responseReq = formatToJson(response.data);
            })
            .catch(function (error) {
                responseReq = error;
                statutRes = 'error';
            });

        dispatch({ type: GET_USER, payload: { data: responseReq, statut: statutRes } });
    }
};

/** UTILITY ACTIONS **/

export function getLogout() {
    return async function (dispatch) {
        let responseReq = null;
        let statutRes = 'success';

        await axios.get('../wp-admin/admin-ajax.php', {
            params: {
                action: 'get_logOut_data'
            }
        })
            .then(function (response) {
                responseReq = formatToJson(response.data);
            })
            .catch(function (error) {
                responseReq = error;
                statutRes = 'error';
            });

        dispatch({ type: GET_LOGOUT, payload: { data: responseReq, statut: statutRes } });
    }
};

export function getHomeUrl() {
    return async function (dispatch) {
        let responseReq = null;
        let statutRes = 'success';

        await axios.get('../wp-admin/admin-ajax.php', {
            params: {
                action: 'get_homeUrl_data'
            }
        })
            .then(function (response) {
                responseReq = formatToJson(response.data);
            })
            .catch(function (error) {
                responseReq = error;
                statutRes = 'error';
            });

        dispatch({ type: GET_ADRESSE_SITE, payload: { data: responseReq, statut: statutRes } });
    }
};

/** LOADER TOOGLE **/

export function toogleLoader(statut = null, messageShow = 'Veuillez patienter ...') {
    return { type: TOOGLE_LOADER, payload: { statut: statut, message: messageShow} };
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

        await axios.get('../wp-admin/admin-ajax.php', {
            params: {
                action: 'get_personal_data'
            }
        })
            .then(function (response) {
                responseReq = formatToJson(response.data);
            })
            .catch(function (error) {
                responseReq = error;
                statutRes = 'error';
            });

        dispatch({ type: GET_MY_DATA, payload: { data: responseReq, statut: statutRes } });
    }
};

/** ADD MODAL **/

export function handleChangeAddProprieteModal(key, data) {
    return { type: SET_PROPRIETE_ADD_MODAL, payload: { key: key, data: data } };
}

/***********************************************************/

function formatToJson(dataToFormat) {
    var regex = /<!\[CDATA\[(.*)\]\]>/gm;
    return JSON.parse(regex.exec(dataToFormat)[1]);
}