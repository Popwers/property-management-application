const { Component } = wp.element;

import axios from 'axios';
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
        let finalData = new Array();

        if (this.props.list.data != null && Array.isArray(this.props.list.data)) {
            if (this.props.myUserData.role == 'client__investisseur') {
                data = this.props.list.data.filter(notif => notif.type_notification == 'updateDossier' || notif.type_notification == 'newPropriete');

                if (Array.isArray(data)) {
                    if (data.length > 0) {
                        let listDossier = null;
                        if (this.props.listDossier != null && Array.isArray(this.props.listDossier)) {
                            listDossier = this.props.listDossier.filter(dossier => dossier.id_fiche_produit.chasseur.id == this.props.myUserData.id);
                        }

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
            } else if (this.props.myUserData.role == 'chasseur') {
                data = this.props.list.data.filter(notif => notif.type_notification == 'newDossier');

                if (Array.isArray(data)) {
                    if (data.length > 0) {
                        let listDossier = null;
                        if (this.props.listDossier != null && Array.isArray(this.props.listDossier)) {
                            listDossier = this.props.listDossier.filter(dossier => dossier.id_fiche_produit.chasseur.id == this.props.myUserData.id);
                        }

                        data.forEach(notif => {
                            if (notif.type_notification == 'newDossier') {
                                if (Array.isArray(listDossier)) {
                                    if (listDossier.length > 0) {
                                        listDossier.forEach(dossier => {
                                            if (dossier.id == notif.id_type) newData.push(notif);
                                        });
                                    }
                                }
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

            let importantNotif = new Array();
            let notImportantNotif = new Array();

            if (Array.isArray(newData)) {
                if (newData.length < 1) {
                    finalData = null;
                } else if (newData.length > 0) {
                    newData.forEach(item => {
                        if (Array.isArray(item.users_see)) {
                            if (item.users_see.length > 0) {
                                let addNotif = false;
                                item.users_see.forEach(user => {
                                    if (user['ID'] == this.props.myUserData.id) {
                                        addNotif = true;
                                    }
                                });

                                if (addNotif) {
                                    notImportantNotif.push(item);
                                } else {
                                    importantNotif.push(item);
                                }
                            } else {
                                importantNotif.push(item);
                            }
                        } else {
                            importantNotif.push(item);
                        }
                    });

                    if (importantNotif.length < 10 && notImportantNotif.length > 0) {
                        let count = 0;
                        importantNotif.forEach(notif => finalData.push(notif));
                        notImportantNotif.forEach(notif => {
                            if (count < 10) {
                                finalData.push(notif);
                            }
                        });
                    } else {
                        finalData = importantNotif;
                    }

                    if (Array.isArray(importantNotif)) {
                        if (importantNotif.length > 0) {
                            importantNotif.forEach(notif => {
                                setTimeout(async () => {
                                    await disableNotification(notif.id, this.props.myUserData.id);
                                    this.props.getAllNotifications();
                                }, 10000);
                            });
                        }
                    }
                }
            } else {
                finalData = null;
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
                    data={finalData}
                    statut={this.props.list.statut ? this.props.list.statut : null} />
            </>
        );
    }
}

async function disableNotification(id, user_id) {
    let data = new FormData();
    data.append('action', 'disable_notification_board');
    data.append('id', id);
    data.append('user_id', user_id);

    await axios.post('../wp-content/themes/themeplocatif/ajax-board.php', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    })
        .then(response => {
            let result = formatToJson(response.data);
            if (result != 'success') {
                console.log('error');
            }
        })
        .catch(error => {
            console.log(error);
        });
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