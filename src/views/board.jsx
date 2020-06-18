const { Component } = wp.element;

import { connect } from 'react-redux';
import { getAllDossiers, toogleUserModal, getAllUsers } from '../actions';

import styled, { css } from 'styled-components';
import { setDocumentTitle } from '../lib/functions';
import { TitleSection, Text, Inline } from '../theme/design/componentsDesign';

import Table from '../components/Table';
import CardStat from '../components/CardStat';
import Button from '../components/Button';
import Commission from '../components/Commission';
import BChasseur from '../components/BChasseur';
import iconPencil from '../resources/pencil.svg';

const enteteDossier = {
    'id': 'ID Projet',
    'id_fiche_produit.chasseur.display_name': 'Prénom Chasseur',
    'id_fiche_produit.chasseur.telephone': 'Téléphone du chasseur',
    'statut': 'Suivi',
    'last_update': 'Date de la dernière étape',
};

const FlexDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;

    ${props =>
        props.grow &&
        css`
            flex-grow: ${props => props.grow != true ? props.grow : 1};
        `}

    ${props =>
        props.width &&
        css`
            width: ${props => props.width};
        `}
`

const HeadDiv = styled.div`
    min-width: 375px;
    margin-right: 20px;
`

const FlexRow = styled.div`
    display: flex;
    align-items: center;
`

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -20px;
`

const H2 = styled.h2`
    margin-top: 40px;
    margin-bottom: 10px;
`

class Board extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setDocumentTitle('Tableau de bord');
        this.props.getAllDossiers();
        this.props.getAllUsers();
    }

    render() {
        let data = null;
        let countProjet = 0;
        let countProjetFinal = 0;
        let chiffreEstimationProjet = 0;
        let chiffreProjetFacture = 0;

        if (this.props.list.data != null && Array.isArray(this.props.list.data)) {
            if (this.props.userData.role == 'client__investisseur') {
                data = this.props.list.data.filter(dossier => dossier.id_client.id == this.props.userData.id);
            } else if (this.props.userData.role == 'chasseur') {
                data = this.props.list.data.filter(dossier => dossier.id_fiche_produit.id == this.props.userData.id);
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

            if (data != null) {
                let projetEnCours = data.filter(dossier => dossier.statut != 'Projet loué');
                let projetFinaux = data.filter(dossier => dossier.statut == 'Projet loué');

                if (Array.isArray(projetEnCours)) {
                    if (projetEnCours.length > 0) {
                        countProjet = projetEnCours.length;
                        projetEnCours.forEach(element => {
                            let honoraire = Number(element.id_fiche_produit.honoraires_immomalin);
                            if (!Number.isNaN(honoraire)) chiffreEstimationProjet += honoraire;
                        });
                    }
                }

                if (Array.isArray(projetFinaux)) {
                    if (projetFinaux.length > 0) {
                        countProjetFinal = projetFinaux.length;
                        projetFinaux.forEach(element => {
                            let honoraire = Number(element.id_fiche_produit.honoraires_immomalin);
                            if (!Number.isNaN(honoraire)) chiffreProjetFacture += honoraire;
                        });
                    }
                }
            }
        }

        return (
            <>
                <FlexDiv>
                    <HeadDiv>
                        <FlexRow>
                            <Inline marginRight="20px"><TitleSection>Bonjour, {this.props.myUserData.first_name ? this.props.myUserData.first_name : 'Utilisateur'}</TitleSection></Inline>
                            <Button
                                small
                                light
                                src={iconPencil}
                                iconRight
                                action='user'
                                idToSee={this.props.myUserData.id} >Mon compte</Button>
                        </FlexRow>

                        <Text light>{
                            this.props.countNotification != null && this.props.countNotification > 0
                                ? `Vous avez ${this.props.countNotification} notifications.`
                                : "Vous n'avez aucunes notifications."}</Text>

                        {(this.props.userData.role == 'chasseur') &&
                            <>
                                <H2>Prochain Bonus</H2>
                                <BChasseur idChasseur={this.props.userData.id} />
                            </>
                        }
                    </HeadDiv>

                    <CardsContainer>
                        <CardStat
                            blue
                            title="Nombre de projet en cours"
                            value={countProjet} />

                        <CardStat
                            green
                            title={this.props.userData.role == 'client__investisseur' ? 'Nombre de projet finalisé' : 'Nombre de projet facturé'}
                            value={countProjetFinal} />
                    </CardsContainer>
                </FlexDiv>


                {(this.props.userData.role != 'client__investisseur') &&
                    <>
                        <TitleSection>Vos chiffres</TitleSection>

                        <CardsContainer>
                            <CardStat
                                orange
                                title="Total Commission prévisionnel">
                                <Commission
                                    projetEnCours
                                    isSuperviseur={this.props.userData.role == 'superviseur' || this.props.userData.role == 'administrator'}
                                    idChasseur={this.props.userData.id} />
                            </CardStat>

                            <CardStat
                                orange
                                title="Total Chiffre d’affaire ImmoMalin facturé"
                                value={chiffreProjetFacture}
                                euros />
                        </CardsContainer>

                        <CardsContainer>
                            <CardStat
                                orange
                                title="Total Commission encaissé">
                                <Commission
                                    projetFinaux
                                    isSuperviseur={this.props.userData.role == 'superviseur' || this.props.userData.role == 'administrator'}
                                    idChasseur={this.props.userData.id} />
                            </CardStat>

                            <CardStat
                                orange
                                title="Total Chiffre d’affaire ImmoMalin prévisionnel"
                                value={chiffreEstimationProjet}
                                euros />
                        </CardsContainer>
                    </>
                }

                {(this.props.userData.role == 'client__investisseur') &&
                    <>
                        <TitleSection>Vos projets</TitleSection>

                        <Table
                            listeProps={enteteDossier}
                            data={data}
                            deleteType='dossier'
                            empty='Aucun projet en cours'
                            statut={this.props.list.statut ? this.props.list.statut : null} />
                    </>
                }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        myUserData: state.general.myData.data,
        list: state.manageDossier.listDossier,
        countNotification: state.manageNotification.countNotifications,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getAllDossiers: () => dispatch(getAllDossiers()),
        getAllUsers: () => dispatch(getAllUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)