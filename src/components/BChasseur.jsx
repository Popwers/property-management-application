/* eslint-disable react/react-in-jsx-scope */
const { Component } = wp.element;
import { connect } from 'react-redux';
import { getAllDossiers } from '../actions';
import { formatPrix } from '../lib/functions';
import styled, { css } from 'styled-components';
import { Text } from '../theme/design/componentsDesign';

const FlexRow = styled.div`
    display: flex;
    align-items: center;
`

const BarreContainer = styled(FlexRow)`
    margin-bottom: 0px;
    width: ${props => props.width ? '180px' : null};
    flex-wrap: ${props => props.wrap ? 'wrap' : null};
`

const Barre = styled.div`
    margin-bottom: 10px;
    position: relative;
    width: 100%;
    min-width: 180px;
    height: 14px;
    margin-right: 20px;
    border-radius: 20px;
    background: #A5A5A5;
    box-shadow: ${props => props.theme.shadows};

    &:before {
        content: "";
        position: absolute;
        left: 0;
        width: ${props => (props.pourcentage * 100 / props.max)}%;
        height: 14px;
        border-radius: 20px;
        ${props => props.theme.orangeRadius};
        transition: width 0.5s;
    }
`

const TextBarre = styled(Text)`
    min-width: 160px;
    margin: 0;
`

function BarreBonus(props) {
    return (
        <BarreContainer width={props.width} wrap={props.wrap} >
            <Barre pourcentage={props.pourcentage} max={props.max} />
            <TextBarre>{formatPrix(props.pourcentage)} € / {formatPrix(props.max)} € <br />{props.title}</TextBarre>
        </BarreContainer>
    );
}

class BChasseur extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllDossiers();
    }

    render() {
        let CA = 0;
        let max = 0;

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

        if (CA <= 50000) {
            max = 50000;
        } else if (CA >= 50001 && CA <= 100000) {
            max = 100000;
        } else if (CA >= 100001 && CA <= 200000) {
            max = 200000;
        } else if (CA >= 200001 && CA <= 350000) {
            max = 350000;
        } else if (CA >= 350001 && CA <= 500000) {
            max = 500000;
        } else if (CA >= 500001) {
            max = 500000;
            CA = 500000;
        }

        return (
            <><BarreBonus
                title="De chiffre d’affaire"
                pourcentage={CA}
                max={max}
                width={this.props.width}
                wrap={this.props.wrap} /></>
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

export default connect(mapStateToProps, mapDispatchToProps)(BChasseur)