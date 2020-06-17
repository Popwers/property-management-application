/* eslint-disable react/react-in-jsx-scope */
const { Component } = wp.element;
import { connect } from 'react-redux';
import { formatPrix } from '../lib/functions';

class Commission extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let commission = 0;
        let projetEnCours = null;
        let projetFinaux = null;

        if (this.props.projetEnCours) {
            if (this.props.listDossier != null && Array.isArray(this.props.listDossier)) {
                if (this.props.isSuperviseur) {
                    projetEnCours = this.props.listDossier;
                } else {
                    projetEnCours = this.props.listDossier.filter(dossier => dossier.id_fiche_produit.chasseur.id == this.props.idChasseur);
                }

                projetEnCours = projetEnCours.filter(dossier => dossier.statut != 'Projet loué');

                if (Array.isArray(projetEnCours)) {
                    if (projetEnCours.length > 0) {
                        projetEnCours.forEach(element => {
                            let honoraire = Number(element.id_fiche_produit.honoraires_immomalin);
                            let total_projet = Number(element.id_fiche_produit.projet_global);

                            if (!Number.isNaN(total_projet) && total_projet > 0) {
                                if (total_projet <= 100000) {
                                    commission += 1000;
                                } else if (total_projet >= 100001 && total_projet <= 250000) {
                                    commission += 1500;
                                } else {
                                    if (!Number.isNaN(honoraire)) {
                                        commission += Number(((10 / 100) * honoraire).toFixed(2));
                                    }
                                }
                            }
                        });
                    }
                }
            }
        } else if (this.props.projetFinaux) {
            if (this.props.listDossier != null && Array.isArray(this.props.listDossier)) {
                if (this.props.isSuperviseur) {
                    projetFinaux = this.props.listDossier;
                } else {
                    projetFinaux = this.props.listDossier.filter(dossier => dossier.id_fiche_produit.chasseur.id == this.props.idChasseur);
                }

                projetFinaux = projetFinaux.filter(dossier => dossier.statut == 'Projet loué');

                if (Array.isArray(projetFinaux)) {
                    if (projetFinaux.length > 0) {
                        projetFinaux.forEach(element => {
                            let honoraire = Number(element.id_fiche_produit.honoraires_immomalin);
                            let total_projet = Number(element.id_fiche_produit.projet_global);

                            if (!Number.isNaN(total_projet) && total_projet > 0) {
                                if (total_projet <= 100000) {
                                    commission += 1000;
                                } else if (total_projet >= 100001 && total_projet <= 250000) {
                                    commission += 1500;
                                } else {
                                    if (!Number.isNaN(honoraire)) {
                                        commission += Number(((10 / 100) * honoraire).toFixed(2));
                                    }
                                }
                            }
                        });
                    }
                }
            }
        } else if (this.props.ficheBien) {
            if (this.props.listProjet != null && Array.isArray(this.props.listProjet)) {
                let listProp = this.props.listProjet.filter(propriete => propriete.id == this.props.ficheBien);

                if (Array.isArray(listProp)) {
                    if (listProp.length > 0) {
                        listProp.forEach(element => {
                            let honoraire = Number(element.honoraires_immomalin);
                            let total_projet = Number(element.projet_global);

                            if (!Number.isNaN(total_projet) && total_projet > 0) {
                                if (total_projet <= 100000) {
                                    commission += 1000;
                                } else if (total_projet >= 100001 && total_projet <= 250000) {
                                    commission += 1500;
                                } else {
                                    if (!Number.isNaN(honoraire)) {
                                        commission += Number(((10 / 100) * honoraire).toFixed(2));
                                    }
                                }
                            }
                        });
                    }
                }
            }
        }

        return (
            <>{formatPrix(commission) + ' €'}</>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listDossier: state.manageDossier.listDossier.data,
        listProjet: state.managePropriete.listPropriete.data,
    };
}

export default connect(mapStateToProps)(Commission)