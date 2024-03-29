const { Component } = wp.element;

import { connect } from 'react-redux';
import { getAllUsers } from '../actions';

import { setDocumentTitle } from '../lib/functions';
import { TitleSection } from '../theme/design/componentsDesign';
import Table from '../components/Table';

const title = 'Liste des chasseurs';

const entete = {
    'first_name': 'Prénom Chasseur',
    'telephone': 'Téléphone',
    'user_email': 'Mail',
    'CA_component_final': ['Total CA réalisé', '€'],
    'CA_component_previ': ['Total CA prévisionnel', '€'],
    'BChasseur': 'Prochain Bonus'
};

class Chasseur extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setDocumentTitle(title);
        this.props.getAllUsers();
    }

    render() {
        let data = null;

        if (this.props.list.data != null && Array.isArray(this.props.list.data)) {
            data = this.props.list.data.filter(user => user.role == 'chasseur');

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
                    data={data}
                    actionType='user'
                    deleteType='user'
                    empty='Aucun chasseur enregistré pour le moment'
                    statut={this.props.list.statut ? this.props.list.statut : null} />
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllUsers: () => dispatch(getAllUsers())
    }
}

const mapStateToProps = (state) => {
    return { list: state.manageUser.listUser };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chasseur)