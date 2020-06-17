/* eslint-disable react/react-in-jsx-scope */
const { Component } = wp.element;
import { connect } from 'react-redux';
import { getAllDossiers } from '../actions';
import { formatPrix } from '../lib/functions';

class CAComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllDossiers();
    }

    render() {
        let CA = 0;

        if (this.props.projetEnCours) {
            if (this.props.listDossier != null && Array.isArray(this.props.listDossier)) {
                let projetEnCours = this.props.listDossier.filter(dossier => dossier.id_fiche_produit.chasseur.id == this.props.idChasseur);
                projetEnCours = projetEnCours.filter(dossier => dossier.statut != 'Projet loué');

                if (Array.isArray(projetEnCours)) {
                    if (projetEnCours.length > 0) {
                        projetEnCours.forEach(element => {
                            let honoraire = Number(element.id_fiche_produit.honoraires_immomalin);
                            if (!Number.isNaN(honoraire) && honoraire > 0) CA += honoraire;
                        });
                    }
                }
            }
        } else if (this.props.projetFinaux) {
            if (this.props.listDossier != null && Array.isArray(this.props.listDossier)) {
                let projetFinaux = this.props.listDossier.filter(dossier => dossier.id_fiche_produit.chasseur.id == this.props.idChasseur);
                projetFinaux = projetFinaux.filter(dossier => dossier.statut == 'Projet loué');

                if (Array.isArray(projetFinaux)) {
                    if (projetFinaux.length > 0) {
                        projetFinaux.forEach(element => {
                            let honoraire = Number(element.id_fiche_produit.honoraires_immomalin);
                            if (!Number.isNaN(honoraire) && honoraire > 0) CA += honoraire;
                        });
                    }
                }
            }
        }

        return (
            <>{formatPrix(CA) + ' €'}</>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllDossiers: () => dispatch(getAllDossiers())
    }
}

const mapStateToProps = (state) => {
    return {
        listDossier: state.manageDossier.listDossier.data
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CAComponent)