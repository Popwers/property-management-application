import {
    SET_PROPRIETE_ADD_MODAL,
    SET_CLIENT_ADD_MODAL,
    SET_CHASSEUR_ADD_MODAL,
    UPDATE_USER,
    UPDATE_PROPRIETE,
} from "../constants";

const initialState = {
    addProprieteModal: {
        title: null,
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
        cuisine: false,
        isolation: false,
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
        frais_electricite_mensuelles: 0,
        frais_electricite_annuelles: 0,
        frais_eau_mensuelles: 0,
        frais_eau_annuelles: 0,
        forfait_internet_mensuelles: 0,
        forfait_internet_annuelles: 0,
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
        filesPhotos: new Array(),
        chasseur: null,
        artisan: null,
        interlocuteur: null,
    },
    addClientModal: {
        id: null,
        role: 'client__investisseur',
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
        filesPhotosClient: new Array(),
    },
    addChasseurModal: {
        id: null,
        role: 'chasseur',
        pseudo: null,
        first_name: null,
        last_name: null,
        mail: null,
        telephone: null,
        filesPhotosChasseur: new Array(),
    },
};

export default function manageAddModal(state = initialState, action) {
    let newState;

    switch (action.type) {
        case SET_PROPRIETE_ADD_MODAL:
            if (action.payload.key != 'resetTheForm') {
                let newData = Object.assign({}, state.addProprieteModal);
                newData[action.payload.key] = action.payload.data;
                const theKey = action.payload.key;

                /* SET MENSUELLES VALUES */
                switch (theKey) {
                    case 'charges_copropriete_annuelles':
                    case 'taxe_fonciere_annuelles':
                    case 'assurance_pno_annuelles':
                    case 'assurances_locatives_annuelles':
                    case 'gestion_locative_annuelles':
                    case 'frais_divers_annuelles':
                    case 'frais_electricite_annuelles':
                    case 'frais_eau_annuelles':
                    case 'forfait_internet_annuelles':
                    case 'loyer_previsionnel_annuelles':
                        let keyForA = theKey.replace(/annuelles$/, "mensuelles");
                        newData[keyForA] = Number((action.payload.data / 12).toFixed(0));
                        break;
                }

                /* SET ANNUELLES VALUES */
                switch (theKey) {
                    case 'charges_copropriete_mensuelles':
                    case 'taxe_fonciere_mensuelles':
                    case 'assurance_pno_mensuelles':
                    case 'assurances_locatives_mensuelles':
                    case 'gestion_locative_mensuelles':
                    case 'frais_divers_mensuelles':
                    case 'frais_electricite_mensuelles':
                    case 'frais_eau_mensuelles':
                    case 'forfait_internet_mensuelles':
                    case 'loyer_previsionnel_mensuelles':
                        let keyForM = theKey.replace(/mensuelles$/, "annuelles");
                        newData[keyForM] = Number(action.payload.data * 12);
                        break;
                }

                /* SET TOTAL CHARGE MENSUELLES VALUES */
                switch (theKey) {
                    case 'charges_copropriete_mensuelles':
                    case 'taxe_fonciere_mensuelles':
                    case 'assurance_pno_mensuelles':
                    case 'assurances_locatives_mensuelles':
                    case 'gestion_locative_mensuelles':
                    case 'frais_divers_mensuelles':
                    case 'frais_electricite_mensuelles':
                    case 'frais_eau_mensuelles':
                    case 'forfait_internet_mensuelles':
                        newData.total_charges_mensuelles =
                            Number(
                                newData.charges_copropriete_mensuelles +
                                newData.taxe_fonciere_mensuelles +
                                newData.assurance_pno_mensuelles +
                                newData.assurances_locatives_mensuelles +
                                newData.gestion_locative_mensuelles +
                                newData.frais_divers_mensuelles +
                                newData.frais_electricite_mensuelles +
                                newData.frais_eau_mensuelles +
                                newData.forfait_internet_mensuelles);
                        break;
                }

                /* SET TOTAL CHARGE ANNUELLES VALUES */
                switch (theKey) {
                    case 'charges_copropriete_annuelles':
                    case 'taxe_fonciere_annuelles':
                    case 'assurance_pno_annuelles':
                    case 'assurances_locatives_annuelles':
                    case 'gestion_locative_annuelles':
                    case 'frais_divers_annuelles':
                    case 'frais_electricite_annuelles':
                    case 'frais_eau_annuelles':
                    case 'forfait_internet_annuelles':
                        newData.total_charges_annuelles =
                            Number(
                                newData.charges_copropriete_annuelles +
                                newData.taxe_fonciere_annuelles +
                                newData.assurance_pno_annuelles +
                                newData.assurances_locatives_annuelles +
                                newData.gestion_locative_annuelles +
                                newData.frais_divers_annuelles +
                                newData.frais_electricite_annuelles +
                                newData.frais_eau_annuelles +
                                newData.forfait_internet_annuelles);
                        break;
                }

                /* REVENU ANNUELLES */
                switch (theKey) {
                    case 'vacance_locative':
                    case 'loyer_previsionnel_annuelles':
                        newData.total_revenus_annuelles = Number(newData.loyer_previsionnel_annuelles / ((newData.vacance_locative / 100) + 1));
                        break;
                }

                /* REVENU ANNUELLES */
                switch (theKey) {
                    case 'vacance_locative':
                    case 'loyer_previsionnel_mensuelles':
                        newData.total_revenus_mensuelles = Number(newData.loyer_previsionnel_mensuelles / ((newData.vacance_locative / 100) + 1));
                        break;
                }

                /* PROJET GLOBAL */
                switch (theKey) {
                    case 'prix_du_bien':
                    case 'frais_dagence':
                    case 'frais_de_travaux':
                    case 'honoraires_immomalin':
                    case 'mobilier_equipement':
                        newData.projet_global = Number(newData.prix_du_bien + newData.frais_dagence + newData.frais_de_travaux + newData.honoraires_immomalin + newData.mobilier_equipement);
                        break;
                }

                /* BUDGET */
                switch (theKey) {
                    case 'frais_de_notaire':
                    case 'prix_du_bien':
                    case 'frais_dagence':
                    case 'frais_de_travaux':
                    case 'honoraires_immomalin':
                    case 'mobilier_equipement':
                        newData.budget = Number(newData.frais_de_notaire + newData.prix_du_bien + newData.frais_dagence + newData.frais_de_travaux + newData.honoraires_immomalin + newData.mobilier_equipement);
                        break;
                }

                /* SOLDE */
                switch (theKey) {
                    case 'total_charges_annuelles':
                    case 'total_revenus_annuelles':
                        newData.solde = Number(newData.total_revenus_annuelles - newData.total_charges_annuelles);
                        break;
                }

                /* RENTABILITE NET */
                switch (theKey) {
                    case 'loyer_previsionnel_mensuelles':
                    case 'total_charges_mensuelles':
                    case 'frais_de_notaire':
                    case 'prix_du_bien':
                    case 'frais_dagence':
                    case 'frais_de_travaux':
                    case 'honoraires_immomalin':
                    case 'mobilier_equipement':
                        newData.rentabilite_net = Number(((newData.loyer_previsionnel_mensuelles - newData.total_charges_mensuelles) * 12) / (newData.prix_du_bien + newData.frais_dagence + newData.frais_de_travaux + newData.frais_de_notaire + newData.honoraires_immomalin + newData.mobilier_equipement));
                        break;
                }

                /* RENTABILITE BRUT */
                switch (theKey) {
                    case 'loyer_previsionnel_annuelles':
                    case 'prix_du_bien':
                    case 'frais_dagence':
                    case 'frais_de_travaux':
                        newData.rentabilite_brut = Number(newData.loyer_previsionnel_annuelles / (newData.prix_du_bien + newData.frais_dagence + newData.frais_de_travaux));
                        break;
                }

                /* CASHFLOW BRUT */
                switch (theKey) {
                    case 'loyer_previsionnel_mensuelles':
                    case 'total_charges_mensuelles':
                        newData.cashflow_mensuel_brut = Number(newData.loyer_previsionnel_mensuelles - newData.total_charges_mensuelles);
                        break;
                }

                /* PRIX M CARRE */
                switch (theKey) {
                    case 'frais_dagence':
                    case 'prix_du_bien':
                    case 'superficie':
                        newData.prix_au_m = Number((newData.prix_du_bien + newData.frais_dagence) / newData.superficie);
                        break;
                }

                newState = {
                    ...state,
                    addProprieteModal: newData
                }
            } else {
                newState = {
                    ...state,
                    addProprieteModal: {
                        title: '',
                        description: '',
                        cashflow_mensuel_brut: 0,
                        rentabilite_net: 0,
                        prix_au_m: 0,
                        rentabilite_brut: 0,
                        adresse_postale: '',
                        ville: '',
                        zip_code_postal: '',
                        type_bien: '',
                        annee: '',
                        superficie: 0,
                        superficie_habitable: 0,
                        nombre_de_pieces: '',
                        nombre_de_chambre: 0,
                        nombre_de_salles_de_bains: 0,
                        nombre_de_wc: 0,
                        nombre_de_celliers: 0,
                        nombre_de_buanderies: 0,
                        niveaux: 0,
                        cuisine: false,
                        isolation: false,
                        prix_du_bien: '',
                        frais_dagence: 0,
                        frais_de_travaux: 0,
                        frais_de_notaire: 0,
                        honoraires_immomalin: 0,
                        mobilier_equipement: 0,
                        projet_global: 0,
                        budget: 0,
                        charges_copropriete_mensuelles: '',
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
                        frais_electricite_mensuelles: 0,
                        frais_electricite_annuelles: 0,
                        frais_eau_mensuelles: 0,
                        frais_eau_annuelles: 0,
                        forfait_internet_mensuelles: 0,
                        forfait_internet_annuelles: 0,
                        total_charges_mensuelles: 0,
                        total_charges_annuelles: 0,
                        loyer_previsionnel_mensuelles: 0,
                        loyer_previsionnel_annuelles: 0,
                        vacance_locative: 0,
                        total_revenus_mensuelles: 0,
                        total_revenus_annuelles: 0,
                        solde: 0,
                        nombre_de_lots: '',
                        derniere_assemble: '',
                        syndic: '',
                        details_charges_copropriete: '',
                        type_de_chauffage: '',
                        mode_de_chauffage: '',
                        energie_du_chauffage: '',
                        caves: 0,
                        terrases: 0,
                        balcons: 0,
                        varangues: 0,
                        piscines: 0,
                        jacuzzis: 0,
                        equipements: '',
                        diagnostics: '',
                        points_positif_et_negatifs: '',
                        filesPhotos: new Array(),
                        chasseur: '',
                        artisan: '',
                        interlocuteur: '',
                    }
                }
            }

            return newState || state;

        case SET_CLIENT_ADD_MODAL:
            if (action.payload.key != 'resetTheForm') {
                let newData = Object.assign({}, state.addClientModal);
                newData[action.payload.key] = action.payload.data;

                newState = {
                    ...state,
                    addClientModal: newData
                }
            } else {
                newState = {
                    ...state,
                    addClientModal: {
                        id: '',
                        role: 'client__investisseur',
                        pseudo: '',
                        first_name: '',
                        last_name: '',
                        mail: '',
                        telephone: '',
                        adresse: '',
                        adresse_postale_1: '',
                        adresse_postale_2: '',
                        ville: '',
                        etat_province_region: '',
                        zip_code_postal: '',
                        pays: '',
                        filesPhotosClient: new Array(),
                    }
                }
            }

            return newState || state;

        case SET_CHASSEUR_ADD_MODAL:
            if (action.payload.key != 'resetTheForm') {
                let newData = Object.assign({}, state.addChasseurModal);
                newData[action.payload.key] = action.payload.data;

                newState = {
                    ...state,
                    addChasseurModal: newData
                }
            } else {
                newState = {
                    ...state,
                    addChasseurModal: {
                        id: '',
                        role: 'chasseur',
                        pseudo: '',
                        first_name: '',
                        last_name: '',
                        mail: '',
                        telephone: '',
                        filesPhotosChasseur: new Array(),
                    }
                }
            }

            return newState || state;

        case UPDATE_USER:
            if (action.payload != null && action.payload.role != null) {
                if (action.payload.role == 'client__investisseur') {
                    let initiale = Object.assign({}, initialState.addClientModal);
                    let newData = Object.assign(initiale, action.payload);
                    newData['pseudo'] = action.payload.user_login;
                    newData['mail'] = action.payload.user_email;
                    newData['edit'] = true;
                    newState = {
                        ...state,
                        addClientModal: newData
                    }
                } else {
                    let initiale = Object.assign({}, initialState.addChasseurModal);
                    let newData = Object.assign(initiale, action.payload);
                    newData['pseudo'] = action.payload.user_login;
                    newData['mail'] = action.payload.user_email;
                    newData['edit'] = true;
                    newState = {
                        ...state,
                        addChasseurModal: newData
                    }
                }
            } else {
                newState = {
                    ...state,
                    addClientModal: {
                        id: null,
                        role: 'client__investisseur',
                        pseudo: '',
                        first_name: '',
                        last_name: '',
                        mail: '',
                        telephone: '',
                        adresse: '',
                        adresse_postale_1: '',
                        adresse_postale_2: '',
                        ville: '',
                        etat_province_region: '',
                        zip_code_postal: '',
                        pays: '',
                        filesPhotosClient: new Array(),
                    },
                    addChasseurModal: {
                        id: null,
                        role: 'chasseur',
                        pseudo: '',
                        first_name: '',
                        last_name: '',
                        mail: '',
                        telephone: '',
                        filesPhotosChasseur: new Array(),
                    },
                }
            }

            return newState || state;

        case UPDATE_PROPRIETE:

            newState = {
                ...state,
                addProprieteModal: action.payload
            }

            return newState || state;

        default:
            return state;
    }
}