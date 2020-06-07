const { Component } = wp.element;

import { connect } from 'react-redux';
import { getAllDossiers } from '../actions';

import { setDocumentTitle } from '../lib/functions';
import { TitleSection } from '../theme/design/componentsDesign';
import Table from '../components/Table';

const title = 'Liste des dossiers';

const enteteSuperviseur = {
    'id_client.display_name': 'Nom du client',
    'id_fiche_produit.id': 'ID du bien',
    'id_fiche_produit.budget': ['Montant total du projet', '€'],
    'id_fiche_produit.ville': 'Ville',
    'id_fiche_produit.interlocuteur': 'Nom de l\'interlocuteur',
    'id_fiche_produit.artisan': 'Artisan',
    'id_fiche_produit.honoraires_immomalin': ['CA ImmoMalin', '€'],
    'statut': 'Suivi',
    'last_update': 'Date de la dernière étape',
};

const enteteChasseur = {
    'id_client.display_name': 'Nom du client',
    'id_fiche_produit.budget': 'Montant total du projet',
    'id_fiche_produit.ville': 'Ville',
    'id_fiche_produit.interlocuteur': 'Nom de l\'interlocuteur',
    'id_fiche_produit.artisan': 'Artisan',
    'id_fiche_produit.honoraires_immomalin': ['CA ImmoMalin', '€'],
    'statut': 'Suivi',
    'last_update': 'Date de la dernière étape',
};

class Dossier extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setDocumentTitle(title);
        this.props.getAllDossiers();
    }

    render() {
        let data = null;
        let entete = enteteSuperviseur;

        if (this.props.list.data != null) {
            if (this.props.userData.role == 'chasseur') {
                data = this.props.list.data.filter(dossier => dossier.id_fiche_produit.chasseur.id == this.props.userData.id);
                entete = enteteChasseur;
            } else {
                data = this.props.list.data;
            }

            if (Array.isArray(data)) {
                if (data.length < 1) {
                    data = null;
                }
            } else {
                data = null;
            }
        }

        return (
            <>
                <TitleSection>{title}</TitleSection>
                <Table
                    listeProps={entete}
                    actionType='dossier'
                    deleteType='dossier'
                    empty='Aucun dossier enregistré pour le moment'
                    data={data}
                    isDossier
                    statut={this.props.list.statut ? this.props.list.statut : null} />
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllDossiers: () => dispatch(getAllDossiers())
    }
}

const mapStateToProps = (state) => {
    return { list: state.manageDossier.listDossier };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dossier)