import {
    SET_PROPRIETE_ADD_MODAL,
} from "../constants";

const initialState = {
    addProprieteModal: {
        titre: 'caca',
        description: null,
        cashflow_mensuel_brut: 0,
        rentabilite_net: 0,
        prix_au_m: 0,
        rentabilite_brut: 0,
        adresse_postale: null,
        ville: null,
        zip_code_postal: null,
        type_bien: null,
        annee: null,
        superficie: 0,
        superficie_habitable: 0,
        nombre_de_pieces: null,
        nombre_de_chambre: 0,
        nombre_de_salles_de_bains: 0,
        nombre_de_wc: 0,
        nombre_de_celliers: 0,
        nombre_de_buanderies: 0,
        niveaux: 0,
        cuisine: 0,
        isolation: 0,
        prix_du_bien: null,
        frais_dagence: 0,
        frais_de_travaux: 0,
        frais_de_notaire: 0,
        honoraires_immomalin: 0,
        mobilier_equipement: 0,
        projet_global: 0,
        budget: 0,
        charges_copropriete_mensuelles: null,
        charges_copropriete_annuelles: 0,
        taxe_fonciere_mensuelles: 0,
        taxe_fonciere_annuelles: 0,
        assurance_pno_mensuelles: 0,
        assurance_pno_annuelles: 0,
        assurances_locatives_mensuelles: 0,
        assurances_locatives_annuelles: 0,
        gestion_locative_mensuelles: 0,
        gestion_locative_annuelles: 0,
        frais_divers_mensuelles: 0,
        frais_divers_annuelles: 0,
        frais_electricite_mensuelle: 0,
        frais_electricite_annuelle: 0,
        frais_eau_mensuelle: 0,
        frais_eau_annuelle: 0,
        forfait_internet_mensuelle: 0,
        forfait_internet_annuelle: 0,
        total_charges_mensuelles: 0,
        total_charges_annuelles: 0,
        loyer_previsionnel_mensuelles: 0,
        loyer_previsionnel_annuelles: 0,
        vacance_locative: 0,
        total_revenus_mensuelles: 0,
        total_revenus_annuelles: 0,
        solde: 0,
        nombre_de_lots: null,
        derniere_assemble: null,
        syndic: null,
        details_charges_copropriete: null,
        type_de_chauffage: null,
        mode_de_chauffage: null,
        energie_du_chauffage: null,
        caves: 0,
        terrases: 0,
        balcons: 0,
        varangues: 0,
        piscines: 0,
        jacuzzis: 0,
        equipements: null,
        diagnostics: null,
        points_positif_et_negatifs: null,
        filesPhotos: null,
        chasseur: null,
        artisan: null,
    }
};

export default function manageAddModal(state = initialState, action) {
    let newState;

    switch (action.type) {
        case SET_PROPRIETE_ADD_MODAL:
            let newData = Object.assign({}, state.addProprieteModal);
            newData[action.payload.key] = action.payload.data;

            newState = {
                ...state,
                addProprieteModal: newData
            }

            return newState || state;

        default:
            return state;
    }
}