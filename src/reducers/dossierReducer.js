import {
    GET_DOSSIER,
    SEE_DOSSIER,
} from "../constants";

const initialState = { 
    listDossier: [],
    seeDossier: {
        id: null,
        link: null,
        notification: null,
        proposition_acceptee: null,
        devis_travaux: null,
        signature_compromis: null,
        dossier_bancaire_envoye: null,
        accord_de_pret: null,
        offre_de_pret_edite: null,
        debut_des_travaux: null,
        '30_travaux': null,
        '60_travaux': null,
        '100_travaux': null,
        ameublement: null,
        projet_finalise: null,
        projet_loue: null,
        statut: null,
        id_client: null,
        id_fiche_produit: null,
        first_date: null,
        last_update: null,
    }
};

export default function manageDossier(state = initialState, action) {
    let newState;

    switch (action.type) {
        case GET_DOSSIER:
            newState = {
                ...state,
                listDossier: action.payload
            }

            return newState || state;

        case SEE_DOSSIER:
            let idToSee = action.payload;
            let dossierToSee = initialState.seeDossier;
            for (let dossier of state.listDossier.data) {
                if (dossier.id == idToSee) {
                    dossierToSee = dossier;
                    break;
                }
            }

            newState = {
                ...state,
                seeDossier: dossierToSee
            }

            return newState || state;

        default:
            return state;
    }
}