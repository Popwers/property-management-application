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
    '': 'Secteur',
    '': 'Total CA réalisé',
    '': 'Total CA prévisionnel',
    '': 'Barre de progession vers son prochain BONUS'
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

        if (this.props.list.data != null) {
            data = this.props.list.data.filter(user => user.role == 'chasseur');
        }

        return (
            <>
                <TitleSection>{title}</TitleSection>
                <Table
                    listeProps={entete}
                    data={data}
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