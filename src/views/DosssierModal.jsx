const { Component } = wp.element;
import { connect } from 'react-redux';

import axios from 'axios';
import styled, { css } from 'styled-components';
import { Text, AlignCenter, Row } from '../theme/design/componentsDesign';
import { getAllDossiers, seeDossierData } from '../actions';
import Button from '../components/Button';
import Galery from '../components/Galery';
import { formatPrix } from '../lib/functions';

const ContainerBlue = styled.div`
    display: flex;
    background: ${props => props.theme.blue};
    padding: 20px;
    border-radius: 10px;
    margin-right: 30px;
    margin-bottom: 40px;
    box-shadow: ${props => props.theme.shadows};

    p {
        color: ${props => props.theme.white};
    }

    > div {
        position: relative;

        &:first-child {
            margin-right: 30px;
            padding-right: 30px;

            &:after {
                content: '';
                position: absolute;
                top: calc((100% - 80%) / 2);
                right: 0;
                width: 1px;
                height: 80%;
                background: ${props => props.theme.white};
            }
        }

        div {
            &:last-child {
                p {
                    margin-bottom: 0;
                }
            }
        }
    }
`

const StepProcess = styled.div`
    padding-top: 65px;
    overflow: auto;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        min-width: 800px;
        counter-reset: inst;
    }
`

const LiStyled = styled.li`
    position: relative;
    text-align: center;
    padding: 0px 10px;
    min-width: 100px;
    counter-increment: inst;

    h3 {
        margin-top: 0;
        font-size: 14px;
        font-weight: 400;
        position: relative;

        &:after {
            content: '';
            background-color: ${props => props.theme.orange};
            width: 40px;
            height: 40px;
            position: absolute;
            top: -52px;
            left: 0;
            right: 0;
            margin: 0 auto;
            border-radius: 50px;
            box-shadow: ${props => props.theme.shadows};
            transition: background 0.5s;
        }
    }

    &:after {
        content: counter(inst);
        color: #FFF;
        position: absolute;
        top: -44px;
        left: 0px;
        right: 0px;
        text-align: center;
        width: 30px;
        margin: 0 auto;
        font-weight: ${props => props.theme.regular};
        font-family: ${props => props.theme.roboto};
        font-size: 20px;
    }

    &:before {
        content: '';
        background-color: ${props => props.theme.orange};
        width: 105%;
        height: 5px;
        position: absolute;
        top: -35px;
        left: 0;
        right: 0;
        border-radius: 10px;
        transition: background 0.5s;
    }

    &:first-child {
        &:before {
            width: 55%;
            left: inherit;
            right: -5px;
        }
    }

    &:last-child {
        &:before {
            width: 55%;
            left: -5px;
            right: inherit;
        }
    }

     ${props =>
        props.validate &&
        css`
            &:before {
                background-color: ${props => props.theme.green};
            }

            h3:after {
                background-color: ${props => props.theme.green};
            }
        `};

    ${props =>
        props.current &&
        css`
            &:before {
                background: rgb(13, 171, 118);
                background: -moz-linear-gradient(90deg, rgba(13, 171, 118, 1) 10%, rgba(53, 51, 255, 1) 50%, rgba(251, 97, 6, 1) 90%);
                background: -webkit-linear-gradient(90deg, rgba(13, 171, 118, 1) 10%, rgba(53, 51, 255, 1) 50%, rgba(251, 97, 6, 1) 90%);
                background: linear-gradient(90deg, rgba(13, 171, 118, 1) 10%, rgba(53, 51, 255, 1) 50%, rgba(251, 97, 6, 1) 90%);

                linear-gradient(90deg,rgb(13, 171, 118) 10%,rgba(53,51,255,1) 50%,rgb(251, 97, 6) 90%)
            }

            h3:after {
                background-color: ${props => props.theme.blue};
            }
        `};
`

const StatutDossier = (props) => {
    return (
        <StepProcess>
            <ul>
                {props.step.map(item => {
                    return(
                        <LiStyled key={item[0] + '' + props.id} validate={item[1] != null && item[1] != '' && item[1] != '0000-00-00'} current={props.current == item[0] && props.current != 'Projet loué'}>
                            <h3>{item[0]}<br />{item[1] != '0000-00-00' && item[1] != '' && item[1] != null ? convertDate(item[1]) : null}</h3>
                        </LiStyled>
                    );
                })}
            </ul>
        </StepProcess>
    );
}

const AssociateText = (props) => {
    return (
        <div>
            <Text bold margin='0px' fontSize='18px'>{props.label}</Text>
            <Text light margin='10px 0px 30px 0px' fontSize='16px'>{props.children}</Text>
        </div>
    );
}

class DossierModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick(dataSend) {
        let responseReq = null;
        let statutRes = null;
        this.setState({ isLoading: true });

        let data = new FormData();
        data.append('action', 'update_dossier_data');
        data.append('id', this.props.modalData.id);
        data.append('statut', this.props.modalData.statut);
        data.append('actionString', dataSend);

        await axios.post('../wp-content/themes/themeplocatif/ajax-board.php', data)
        .then(function (response) {
            responseReq = formatToJson(response.data);
            if (responseReq == 'fail') {
                statutRes = 'success';
                responseReq = null;
            }
        })
        .catch(function (error) {
            responseReq = error;
            statutRes = 'error';
        });
        
        await this.props.getAllDossiers();
        await this.props.seeDossierData(this.props.modalData.id);
        this.setState({ isLoading: false });
    }

    render() {
        let step = new Array();
        step.push(['Proposition acceptée', this.props.modalData.proposition_acceptee]);
        step.push(['Devis travaux', this.props.modalData.devis_travaux]);
        step.push(['Signature compromis', this.props.modalData.signature_compromis]);
        step.push(['Dossier bancaire envoyé', this.props.modalData.dossier_bancaire_envoye]);
        step.push(['Accord de prêt', this.props.modalData.accord_de_pret]);
        step.push(['Offre de prêt éditée', this.props.modalData.offre_de_pret_edite]);
        step.push(['Début des travaux', this.props.modalData.debut_des_travaux]);
        step.push(['30% travaux', this.props.modalData['30_travaux']]);
        step.push(['60% travaux', this.props.modalData['60_travaux']]);
        step.push(['100% travaux', this.props.modalData['100_travaux']]);
        step.push(['Ameublement', this.props.modalData.ameublement]);
        step.push(['Projet finalisé', this.props.modalData.projet_finalise]);
        step.push(['Projet loué', this.props.modalData.projet_loue]);

        let nomChasseur = null;
        let nomClient = null;
        let type_bien = null;
        let artisan = null;
        let interlocuteur = null;
        let honoraires_immomalin = null;
        let prix_au_m = null;
        let photos = new Array();
        let user_email = null;
        let telephone = null;
        let adresse_postale = null;
        let ville = null;

        if (this.props.modalData.id_fiche_produit != null) {
            if (this.props.modalData.id_fiche_produit.chasseur != null) {
                if (this.props.modalData.id_fiche_produit.chasseur.first_name != null && this.props.modalData.id_fiche_produit.chasseur.last_name != null) {
                    nomChasseur = this.props.modalData.id_fiche_produit.chasseur.first_name + ' ' + this.props.modalData.id_fiche_produit.chasseur.last_name;
                } else if (this.props.modalData.id_fiche_produit.chasseur.last_name != null) {
                    nomChasseur = this.props.modalData.id_fiche_produit.chasseur.last_name;
                } else if (this.props.modalData.id_fiche_produit.chasseur.first_name != null) {
                    nomChasseur = this.props.modalData.id_fiche_produit.chasseur.first_name;
                }
            }

            ville = this.props.modalData.id_fiche_produit.ville;
            adresse_postale = this.props.modalData.id_fiche_produit.adresse_postale;
            type_bien = this.props.modalData.id_fiche_produit.type_bien;
            artisan = this.props.modalData.id_fiche_produit.artisan;
            interlocuteur = this.props.modalData.id_fiche_produit.interlocuteur;
            honoraires_immomalin = this.props.modalData.id_fiche_produit.honoraires_immomalin;
            prix_au_m = this.props.modalData.id_fiche_produit.prix_au_m;
            photos = this.props.modalData.id_fiche_produit.photos;
        }

        if (this.props.modalData.id_client != null) {
            if (this.props.modalData.id_client.first_name != null && this.props.modalData.id_client.last_name != null) {
                nomClient = this.props.modalData.id_client.first_name + ' ' + this.props.modalData.id_client.last_name;
            } else if (this.props.modalData.id_client.last_name != null) {
                nomClient = this.props.modalData.id_client.last_name;
            } else if (this.props.modalData.id_client.first_name != null) {
                nomClient = this.props.modalData.id_client.first_name;
            }

            user_email = this.props.modalData.id_client.user_email;
            telephone = this.props.modalData.id_client.telephone;
        }

        return (
            <>
                <Row alignCenter>
                    <Text bold fontSize='22px'>Dossier N°{this.props.modalData.id}</Text>
                    <Text badge blue margin='0 20px'>{this.props.modalData.statut}</Text>
                </Row>

                <Text bold margin='0 0 40px 0' fontSize='16px'>Client positionné le {this.props.modalData.first_date}</Text>

                <Text bold margin='0 10px 0 0'>{type_bien}</Text>
                <Text light margin='10px 0px 30px 0px'>{adresse_postale}{ville != '' && ville != null ? ', ' + ville : null}</Text>

                <Row>
                    <ContainerBlue>
                        <div>
                            <AssociateText label='Nom du chasseur'>
                                {nomChasseur != null
                                    && nomChasseur != '' ? nomChasseur : 'Non renseigné'}
                            </AssociateText>

                            <AssociateText label='Artisan'>
                                {artisan != null
                                    && artisan != '' ? artisan : 'Non renseigné'}
                            </AssociateText>

                            <AssociateText label='Nom de l’interlocuteur'>
                                {interlocuteur != null
                                    && interlocuteur != '' ? interlocuteur : 'Non renseigné'}
                            </AssociateText>

                            <AssociateText label='Estimation commission'>
                                {honoraires_immomalin != null
                                    && honoraires_immomalin != '' ? honoraires_immomalin + ' €' : 'Non renseigné'}
                            </AssociateText>
                        </div>

                        <div>
                            <AssociateText label='Nom du client'>
                                {nomClient != null
                                    && nomClient != '' ? nomClient : 'Non renseigné'}
                            </AssociateText>

                            <AssociateText label='Mail'>
                                {user_email != null
                                    && user_email != '' ? user_email : 'Non renseigné'}
                            </AssociateText>

                            <AssociateText label='Téléphone'>
                                {telephone != null
                                    && telephone != '' ? telephone : 'Non renseigné'}
                            </AssociateText>

                            <AssociateText label='Prix au m²'>
                                {prix_au_m != null
                                    && prix_au_m != '' ? formatPrix(prix_au_m, true) + ' €' : 'Non renseigné'}
                            </AssociateText>
                        </div>
                    </ContainerBlue>
                    {photos.length > 0 &&
                        <Galery images={photos} />
                    }
                </Row>

                <Text bold margin='40px 0px 10px 0px' fontSize='16px' >Dernière étape validé le {this.props.modalData.statut != 'En attente' ? convertDate(this.props.modalData.last_update) : this.props.modalData.first_date}</Text>

                <StatutDossier step={step} current={this.props.modalData.statut} id={this.props.modalData.id} />

                <AlignCenter>
                    <Button 
                        hide={this.props.modalData.statut == 'En attente'} 
                        disable={this.state.isLoading} 
                        small light 
                        onClick={() => this.handleClick('previous')}>Revenir à l’étape précédente</Button>
                    <Button 
                        hide={this.props.modalData.statut == 'Projet loué'} 
                        disable={this.state.isLoading} small green light 
                        onClick={() => this.handleClick('next')}>Valider "{this.props.modalData.statut}"</Button>
                </AlignCenter>
            </>
        );
    }
}

function convertDate(value) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let date = new Date(value);
    return date.toLocaleDateString('FR-fr', options);
}

const mapDispatchToProps = dispatch => {
    return {
        getAllDossiers: () => dispatch(getAllDossiers()),
        seeDossierData: (id) => dispatch(seeDossierData(id)),
    }
}

const mapStateToProps = (state) => {
    return {
        modalData: state.manageDossier.seeDossier
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DossierModal)