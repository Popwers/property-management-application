const { Component } = wp.element;

import { connect } from 'react-redux';
import { getAllProprietes } from '../actions';

import { setDocumentTitle } from '../lib/functions';
import { TitleSection } from '../theme/design/componentsDesign';
import Table from '../components/Table';

const title = 'Liste des propriétés';

const entete = {
    'chasseur.first_name': 'Prénom du chasseur',
    'thumbnail': 'Photo',
    'type_bien': 'Type de bien',
    'ville': 'Ville',
    'interlocuteur': 'Nom de l\'interlocuteur',
    'honoraires_immomalin': 'CA ImmoMalin',
    'honoraires_immomalin': 'Commission Chasseur'
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
        return (
            <>
                <TitleSection>{title}</TitleSection>
                <Table
                    listeProps={entete}
                    empty='Aucune propriétée enregistré pour le moment'
                    deleteType='propriete'
                    data={this.props.list.data ? this.props.list.data : null}
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