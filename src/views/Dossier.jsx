const { Component } = wp.element;

import { connect } from 'react-redux';
import { getAllDossiers } from '../actions';

import { setDocumentTitle } from '../lib/functions';
import { TitleSection } from '../theme/design/componentsDesign';
import Table from '../components/Table';

const title = 'Liste des dossiers';

const entete = {
    'id_fiche_produit.chasseur.first_name': 'Prénom du chasseur',
    'id_client.display_name': 'Nom du client',
    'id_fiche_produit.id': 'ID du bien',
    'id_fiche_produit.budget': 'Montant total du projet',
    'id_fiche_produit.ville': 'Ville',
    'id_fiche_produit.interlocuteur': 'Nom de l\'interlocuteur',
    'id_fiche_produit.artisan': 'Artisan',
    'id_fiche_produit.honoraires_immomalin': 'CA ImmoMalin'
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
        return (
            <>
                <TitleSection>{title}</TitleSection>
                <Table
                    listeProps={entete}
                    data={this.props.list.data ? this.props.list.data : null}
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