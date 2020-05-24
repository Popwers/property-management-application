import { connect } from 'react-redux';
import { toogleUserModal } from '../actions';

import styled, { css } from 'styled-components';
import { setDocumentTitle, formatPrix } from '../lib/functions';
import { TitleSection, Text, Inline } from '../theme/design/componentsDesign';

import CardStat from '../components/CardStat';
import Button from '../components/Button';
import iconPencil from '../resources/pencil.svg';

import Modal from '../theme/layout/Modal';

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

const BarreContainer = styled(FlexRow)`
    margin-bottom: 40px;
`

const Barre = styled.div`
    position: relative;
    width: 100%;
    height: 14px;
    margin-right: 20px;
    border-radius: 20px;
    background: #A5A5A5;
    box-shadow: ${props => props.theme.shadows};

    &:before {
        content: "";
        position: absolute;
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
        <BarreContainer>
            <Barre pourcentage={props.pourcentage} max={props.max} />
            <TextBarre>{formatPrix(props.pourcentage)} € / {formatPrix(props.max)} € <br />{props.title}</TextBarre>
        </BarreContainer>
    );
}

function Board(props) {
    setDocumentTitle('Tableau de bord');

    return (
        <>
            <FlexDiv>
                <HeadDiv>
                    <FlexRow>
                        <Inline marginRight="20px"><TitleSection>Bonjour, {props.myUserData.first_name ? props.myUserData.first_name : 'Utilisateur'}</TitleSection></Inline>
                        <Button small light src={iconPencil} iconRight onClick={props.toogleUserModal}>Mon compte</Button>
                    </FlexRow>

                    <Text light>Vous avez 3 notifications</Text>
                    
                    <H2>Prochain Bonus</H2>
                    <BarreBonus title="De chiffre d’affaire" pourcentage={70000} max={120000} />
                </HeadDiv>

                <CardsContainer>
                    <CardStat
                        blue 
                        title="Nombre de projet en cours" 
                        value={12} />

                    <CardStat
                        green
                        title="Nombre de projet facturé" 
                        value={7} />
                </CardsContainer>
            </FlexDiv>
            
            <TitleSection>Vos chiffres</TitleSection>

            <CardsContainer>
                <CardStat
                    orange
                    title="Total Commission prévisionnel" 
                    value={4000}
                    euros />

                <CardStat
                    orange 
                    title="Total Chiffre d’affaire ImmoMalin facturé" 
                    value={2000}
                    euros />
            </CardsContainer>

            <CardsContainer>
                <CardStat
                    orange
                    title="Total Commission encaissé"
                    value={4000}
                    euros />

                <CardStat
                    orange
                    title="Total Chiffre d’affaire ImmoMalin prévisionnel"
                    value={2000}
                    euros />
            </CardsContainer>
        </>
    );
}

const mapStateToProps = (state) => {
    return { myUserData: state.general.myData.data };
}

const mapDispatchToProps = dispatch => {
    return {
        toogleUserModal: () => dispatch(toogleUserModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)