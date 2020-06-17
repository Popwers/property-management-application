const { Component } = wp.element;

import { connect } from 'react-redux';
import {
    getAllNotifications,
    getAllProprietes,
    getAllDossiers,
} from '../actions';

import { setDocumentTitle } from '../lib/functions';
import { TitleSection } from '../theme/design/componentsDesign';
import Table from '../components/Table';

const title = 'Liste des notifications';

const entete = {
    'description': '',
    'date_notification': '',
};

class Notification extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setDocumentTitle(title);

        this.props.getAllNotifications();
        this.props.getAllProprietes();
        this.props.getAllDossiers();
    }

    render() {
        let data = null;
        let newData = new Array();

        if (this.props.list.data != null) {
            if (this.props.myUserData.role == 'client__investisseur') {
                data = this.props.list.data.filter(notif => notif.type_notification == 'updateDossier' || notif.type_notification == 'newPropriete');

                if (Array.isArray(data)) {
                    if (data.length > 0) {
                        let listDossier = this.props.listDossier.filter(dossier => dossier.id_client.id == this.props.myUserData.id);
                        data.forEach(notif => {
                            if (notif.type_notification == 'updateDossier') {
                                if (Array.isArray(listDossier)) {
                                    if (listDossier.length > 0) {
                                        listDossier.forEach(dossier => {
                                            if (dossier.id == notif.id_type) newData.push(notif);
                                        });
                                    }
                                }
                            } else {
                                newData.push(notif);
                            }
                        });
                    } else {
                        newData = null;
                    }
                } else {
                    newData = null;
                }
            } else if (this.props.userData.role == 'chasseur') {
                data = this.props.list.data.filter(notif => notif.type_notification == 'newDossier' || notif.type_notification == 'newPropriete');

                if (Array.isArray(data)) {
                    if (data.length > 0) {
                        let listDossier = this.props.listDossier.filter(dossier => dossier.id_fiche_produit.chasseur.id == this.props.myUserData.id);
                        data.forEach(notif => {
                            if (notif.type_notification == 'newDossier') {
                                if (Array.isArray(listDossier)) {
                                    if (listDossier.length > 0) {
                                        listDossier.forEach(dossier => {
                                            if (dossier.id == notif.id_type) newData.push(notif);
                                        });
                                    }
                                }
                            } else {
                                newData.push(notif);
                            }
                        });
                    } else {
                        newData = null;
                    }
                } else {
                    newData = null;
                }
            } else {
                newData = this.props.list.data;
            }

            if (Array.isArray(newData)) {
                if (newData.length < 1) {
                    newData = null;
                }
            } else {
                newData = null;
            }
        }

        return (
            <>
                <TitleSection>{title}</TitleSection>
                <Table
                    listeProps={entete}
                    empty='Aucune notification pour le moment'
                    type='notification'
                    userData={this.props.myUserData}
                    data={newData}
                    statut={this.props.list.statut ? this.props.list.statut : null} />
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllNotifications: () => dispatch(getAllNotifications()),
        getAllProprietes: () => dispatch(getAllProprietes()),
        getAllDossiers: () => dispatch(getAllDossiers())
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.manageNotification.listNotification,
        listDossier: state.manageDossier.listDossier.data,
        myUserData: state.general.myData.data,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)