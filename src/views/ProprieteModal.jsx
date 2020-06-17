const { Component } = wp.element;
import { connect } from 'react-redux';

import axios from 'axios';
import { getAllDossiers, getAllProprietes, seeProprieteData } from '../actions';

import styled from 'styled-components';
import IconPencil from '../resources/pencil.svg';
import { Text, StyledButton, Row } from '../theme/design/componentsDesign';
import Galery from '../components/Galery';
import Button from '../components/Button';
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

const AssociateText = (props) => {
    return (
        <div>
            <Text bold margin='0px' fontSize='18px'>{props.label}</Text>
            <Text light margin='10px 0px 30px 0px' fontSize='16px'>{props.children}</Text>
        </div>
    );
}

class ProprieteModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick() {
        let dataSend = this.props.modalData.statut == 'En ligne' ? false : true;
        let responseReq = null;
        let statutRes = null;
        this.setState({ isLoading: true });

        let data = new FormData();
        data.append('action', 'active_propriete_data');
        data.append('id', this.props.modalData.id);
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

        await this.props.getAllProprietes();
        await this.props.getAllDossiers();
        await this.props.seeProprieteData(this.props.modalData.id, this.props.listDossiers);
        this.setState({ isLoading: false });
    }

    render() {
        let nomChasseur = null;

        if (this.props.modalData.chasseur != null) {
            if (this.props.modalData.chasseur.first_name != null && this.props.modalData.chasseur.last_name != null) {
                nomChasseur = this.props.modalData.chasseur.first_name + ' ' + this.props.modalData.chasseur.last_name;
            } else if (this.props.modalData.chasseur.last_name != null) {
                nomChasseur = this.props.modalData.chasseur.last_name;
            } else if (this.props.modalData.chasseur.first_name != null) {
                nomChasseur = this.props.modalData.chasseur.first_name;
            }
        }

        return (
            <>
                <Row alignCenter>
                    <Text bold fontSize='22px'>Propriete N°{this.props.modalData.id}</Text>
                    <Text badge red={this.props.modalData.statut == 'Hors ligne'} green={this.props.modalData.statut == 'En ligne'} margin='0 20px'>{this.props.modalData.statut}</Text>
                    {this.props.role != 'client__investisseur' &&
                        <div>
                            <Button action='updatePropriete' idToSee={this.props.modalData.id} src={IconPencil} iconRight small alignCenter>Modifier</Button>
                        </div>
                    }
                    {this.props.role == 'superviseur' || this.props.role == 'administrator' &&
                        <div>
                            <Button action='updatePropriete' idToSee={this.props.modalData.id} src={IconPencil} iconRight small alignCenter>Modifier</Button>
                            <StyledButton
                                onClick={this.handleClick}
                                red={this.props.modalData.statut != 'Hors ligne'}
                                green={this.props.modalData.statut != 'En ligne'}
                                disable={this.state.isLoading}
                                small alignCenter>
                                {this.props.modalData.statut == 'En ligne' ? 'Désactiver' : 'Activer'}
                            </StyledButton>
                        </div>
                    }
                </Row>

                <Text bold margin='0'>{this.props.modalData.type_bien}</Text>
                <Text light margin='10px 0px 30px 0px'>{this.props.modalData.adresse_postale}{this.props.modalData.ville != '' && this.props.modalData.ville != null ? ', ' + this.props.modalData.ville : null}</Text>

                <Row>
                    <ContainerBlue>
                        <div>
                            <AssociateText label='Nom du chasseur'>
                                {nomChasseur != null ? nomChasseur : 'Non renseigné'}
                            </AssociateText>

                            <AssociateText label='Frais de notaire'>
                                {this.props.modalData.frais_de_notaire != ''
                                    && this.props.modalData.frais_de_notaire != null
                                    ? formatPrix(this.props.modalData.frais_de_notaire, true) + ' €' : 'Non renseigné'}
                            </AssociateText>

                            <AssociateText label='Rentabilité Brute'>
                                {this.props.modalData.rentabilite_brut != ''
                                    && this.props.modalData.rentabilite_brut != null
                                    ? formatPrix(this.props.modalData.rentabilite_brut, true) + ' %' : 'Non renseigné'}
                            </AssociateText>

                            <AssociateText label='Honoraires IMMO Malin'>
                                {this.props.modalData.honoraires_immomalin != ''
                                    && this.props.modalData.honoraires_immomalin != null
                                    ? formatPrix(this.props.modalData.honoraires_immomalin, true) + ' €' : 'Non renseigné'}
                            </AssociateText>
                        </div>

                        <div>
                            <AssociateText label='Prix d’acquisition'>
                                {this.props.modalData.budget != ''
                                    && this.props.modalData.budget != null
                                    ? formatPrix(this.props.modalData.budget, true) + ' €' : 'Non renseigné'}
                            </AssociateText>

                            <AssociateText label='Coût d’ameublement'>
                                {this.props.modalData.mobilier_equipement != ''
                                    && this.props.modalData.mobilier_equipement != null
                                    ? formatPrix(this.props.modalData.mobilier_equipement, true) + ' €' : 'Non renseigné'}
                            </AssociateText>

                            <AssociateText label='Cashflow mensuel Brut'>
                                {this.props.modalData.cashflow_mensuel_brut != ''
                                    && this.props.modalData.cashflow_mensuel_brut != null
                                    ? formatPrix(this.props.modalData.cashflow_mensuel_brut, true) + ' €' : 'Non renseigné'}
                            </AssociateText>

                            <AssociateText label='Prix au m²'>
                                {this.props.modalData.prix_au_m != ''
                                    && this.props.modalData.prix_au_m != null
                                    ? formatPrix(this.props.modalData.prix_au_m, true) + ' €' : 'Non renseigné'}
                            </AssociateText>
                        </div>
                    </ContainerBlue>
                    {this.props.modalData.photos.length > 0 &&
                        <Galery thumbnail={this.props.modalData.thumbnail} images={this.props.modalData.photos} />
                    }
                </Row>

                {this.props.modalData.clientPositionne.length > 0 &&
                    <Text bold margin='40px 0px 10px 0px' fontSize='16px' >Clients positionnés</Text>
                }

                {this.props.modalData.clientPositionne.map(client => <Text badge orange margin='10px 10px 10px 0px'>{client.first_name} {client.last_name}</Text>)}
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllDossiers: () => dispatch(getAllDossiers()),
        getAllProprietes: () => dispatch(getAllProprietes()),
        seeProprieteData: (id, dossiers) => dispatch(seeProprieteData(id, dossiers)),
    }
}

const mapStateToProps = (state) => {
    return {
        role: state.general.myData.data.role,
        modalData: state.managePropriete.seePropriete,
        listDossiers: state.manageDossier.listDossier.data,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProprieteModal)