const { Component } = wp.element;
import { connect } from 'react-redux';

import styled from 'styled-components';
import IconPencil from '../resources/pencil.svg';
import { Text, StyledButton, Row } from '../theme/design/componentsDesign';
import Galery from '../components/Galery';

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
                    <div>
                        <StyledButton src iconRight small alignCenter>Modifier <img src={IconPencil} /></StyledButton>
                    </div>
                </Row>

                <Text bold margin='0'>{this.props.modalData.type_bien}</Text>
                <Text light margin='10px 0px 30px 0px'>{this.props.modalData.adresse_postale}{this.props.modalData.ville != '' && this.props.modalData.ville != null ? ', '+this.props.modalData.ville : null}</Text>
                
                <Row>
                    <ContainerBlue>
                        <div>
                            <AssociateText label='Nom du chasseur'>
                                {nomChasseur != null ? nomChasseur : 'Non renseigné' }
                            </AssociateText>

                            <AssociateText label='Frais de notaire'>
                                {this.props.modalData.frais_de_notaire != '' 
                                && this.props.modalData.frais_de_notaire != null 
                                ? this.props.modalData.frais_de_notaire + ' €' : 'Non renseigné' }
                            </AssociateText>

                            <AssociateText label='Rentabilité Brute'>
                                {this.props.modalData.rentabilite_brut != '' 
                                && this.props.modalData.rentabilite_brut != null 
                                ? this.props.modalData.rentabilite_brut + ' €' : 'Non renseigné' }
                            </AssociateText>

                            <AssociateText label='Honoraires IMMO Malin'>
                                {this.props.modalData.honoraires_immomalin != '' 
                                && this.props.modalData.honoraires_immomalin != null 
                                ? this.props.modalData.honoraires_immomalin + ' €' : 'Non renseigné' }
                            </AssociateText>
                        </div>

                        <div>
                            <AssociateText label='Prix d’acquisition'>
                                {this.props.modalData.budget != '' 
                                && this.props.modalData.budget != null 
                                ? this.props.modalData.budget + ' €' : 'Non renseigné' }
                            </AssociateText>

                            <AssociateText label='Coût d’ameublement'>
                                {this.props.modalData.mobilier_equipement != '' 
                                && this.props.modalData.mobilier_equipement != null 
                                ? this.props.modalData.mobilier_equipement + ' €' : 'Non renseigné' }
                            </AssociateText>

                            <AssociateText label='Cashflow mensuel Brut'>
                                {this.props.modalData.cashflow_mensuel_brut != '' 
                                && this.props.modalData.cashflow_mensuel_brut != null 
                                ? this.props.modalData.cashflow_mensuel_brut + ' €' : 'Non renseigné' }
                            </AssociateText>

                            <AssociateText label='Prix au m²'>
                                {this.props.modalData.prix_au_m != '' 
                                && this.props.modalData.prix_au_m != null 
                                ? this.props.modalData.prix_au_m + ' €' : 'Non renseigné' }
                            </AssociateText>
                        </div>
                    </ContainerBlue>
                    {this.props.modalData.photos.length > 0 &&
                        <Galery images={this.props.modalData.photos} />
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
        
    }
}

const mapStateToProps = (state) => {
    return {
        modalData: state.managePropriete.seePropriete
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProprieteModal)