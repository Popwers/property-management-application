const { Component } = wp.element;

import { connect } from 'react-redux';
import { getAllUsers } from '../actions';

import { setDocumentTitle } from '../lib/functions';
import { TitleSection } from '../theme/design/componentsDesign';
import Table from '../components/Table';

const title = 'Liste des clients';

const entete = {
    'display_name': 'Nom',
    'telephone': 'Téléphone',
    'user_email': 'Mail',
    'ville': 'Ville'
};

class Client extends Component {
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
            data = this.props.list.data.filter(user => user.role == 'client__investisseur');

            if (data.length < 1) {
                data = null;
            }
        }

        return (
            <>
                <TitleSection>{title}</TitleSection>
                <Table
                    listeProps={entete}
                    data={data}
                    deleteType='user'
                    empty='Aucun client enregistré pour le moment'
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

export default connect(mapStateToProps, mapDispatchToProps)(Client)