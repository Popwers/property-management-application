const { Component } = wp.element;

import { connect } from 'react-redux';
import { getAllProprietes, getAllDossiers } from '../actions';

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
    'CA': 'CA ImmoMalin',
    'honoraires_immomalin': 'Commission Chasseur'
};

class Notification extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setDocumentTitle(title);

        this.props.getAllProprietes();
        this.props.getAllDossiers();
        this.props.getAllUsers();
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
        getAllProprietes: () => dispatch(getAllProprietes()),
        getAllDossiers: () => dispatch(getAllDossiers())
    }
}

const mapStateToProps = (state) => {
    return { list: state.managePropriete.listPropriete };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)