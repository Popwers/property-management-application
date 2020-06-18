const { Component } = wp.element;

import { connect } from 'react-redux';
import { getAllProprietes } from '../actions';

import { setDocumentTitle } from '../lib/functions';
import { TitleSection } from '../theme/design/componentsDesign';
import Table from '../components/Table';

const title = 'Liste des propriétés';

const enteteSuperviseur = {
    'chasseur.first_name': 'Prénom du chasseur',
    'thumbnail': 'Photo',
    'type_bien': 'Type de bien',
    'ville': 'Ville',
    'interlocuteur': 'Nom de l\'interlocuteur',
    'honoraires_immomalin': ['CA ImmoMalin', '€'],
    'commission_component': ['Commission Chasseur', '€'],
};

const enteteChasseur = {
    'thumbnail': 'Photo',
    'type_bien': 'Type de bien',
    'ville': 'Ville',
    'interlocuteur': 'Nom de l\'interlocuteur',
    'honoraires_immomalin': ['CA ImmoMalin', '€'],
    'commission_component': ['Commission Chasseur', '€'],
};

class Propriete extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setDocumentTitle(title);
        this.props.getAllProprietes();
    }

    render() {
        let data = null;
        let entete = enteteSuperviseur;

        if (this.props.list.data != null && Array.isArray(this.props.list.data)) {
            if (this.props.userData.role == 'chasseur') {
                data = this.props.list.data.filter(propriete => propriete.chasseur.id == this.props.userData.id);
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
                    empty='Aucune propriétée enregistré pour le moment'
                    actionType='propriete'
                    deleteType='propriete'
                    data={data}
                    statut={this.props.list.statut ? this.props.list.statut : null} />
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllProprietes: () => dispatch(getAllProprietes())
    }
}

const mapStateToProps = (state) => {
    return { list: state.managePropriete.listPropriete };
}

export default connect(mapStateToProps, mapDispatchToProps)(Propriete)