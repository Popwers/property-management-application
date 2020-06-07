import { connect } from 'react-redux';
import {
    toogleAddClient,
    toogleAddChasseur,
    toogleAddPropriete,
    toogleUserModal,
    toogleDossierModal,
    toogleProprieteModal,
} from '../../actions';

import styled, { css } from 'styled-components';

const ContainerModal = styled.div`
    opacity: 0;
    z-index: 10;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    transition: opacity 0.4s;

    ${props =>
        props.open &&
        css`
            pointer-events: all;
            opacity: 1;
        `};
`

const StyledModal = styled.div`
    max-width: 80vw;
    max-height: 80vh;
    width: ${props => props.fitContent ? null : '65%'};
    min-width: 200px;
    min-height: 200px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.shadows};
    border-radius: 30px;
    padding: 45px;
    position: relative;
    text-align: ${props => props.alignCenter ? 'center' : 'null'};

    ${props =>
        props.haveTitle &&
        css`
            padding-top: 65px;
            
            &:after {
                content: '';
                position: absolute;
                width: calc(85% - 90px);
                height: 2px;
                top: 65px;
                background-color: ${props => props.theme.black};
                opacity: 0.1;
                border-radius: 5px;
            }
        `}
`

const ContentModal = styled.div`
    overflow: scroll;
    max-height: 80vh;
`

const CloseButton = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
	cursor: pointer;
	z-index: 2;
	min-width: 24px;
	width: 24px;
	height: 24px;
	margin-left: 15px;
	border-radius: 25px;
	display: flex;
    justify-content: center;
    align-items: center;
	background: ${props => props.theme.black};
    box-shadow: ${props => props.theme.shadows};
    transform: rotate(45deg);
	transition: transform 0.3s, opacity 0.8s;

	&:before,
	&:after {
		content: '';
		position: absolute;
		width: 14px;
		height: 2px;
		border-radius: 30px;
		background: ${props => props.theme.white};
	}

	&:after {
		transform: rotate(90deg);
	}

	&:hover {
        transform: scale(1.1) rotate(45deg);
	}

	&:active {
        transform: scale(0.95) rotate(45deg);
	}
`

const TitleModal = styled.h2`
    position: absolute;
    top: 20px;
    left: 45px;
    margin: 0;
    font-family: ${props => props.theme.montserrat};
    font-weight: ${props => props.theme.regular};
    font-size: 24px;
`

function Modal(props) {
    let closeButton = null;
    let titleModal = null;

    if (props.type == 'addPropriete') {
        closeButton = <CloseButton onClick={props.toogleAddPropriete} />
    } else if (props.type == 'addChasseur') {
        closeButton = <CloseButton onClick={props.toogleAddChasseur} />
    } else if (props.type == 'addClient') {
        closeButton = <CloseButton onClick={props.toogleAddClient} />
    } else if (props.type == 'userModal') {
        closeButton = <CloseButton onClick={props.toogleUserModal} />
    } else if (props.type == 'dossierModal') {
        closeButton = <CloseButton onClick={props.toogleDossierModal} />
    } else if (props.type == 'proprieteModal') {
        closeButton = <CloseButton onClick={props.toogleProprieteModal} />
    }

    if (props.title) {
        titleModal = <TitleModal>{props.title}</TitleModal>;
    }

    return (
        <ContainerModal open={props.show}>
            <StyledModal haveTitle={titleModal != null ? true : false} fitContent={props.fitContent} alignCenter={props.alignCenter} >
                {titleModal}
                {closeButton}
                <ContentModal>
                    {props.children}
                </ContentModal>
            </StyledModal>
        </ContainerModal>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        toogleAddClient: () => dispatch(toogleAddClient()),
        toogleAddChasseur: () => dispatch(toogleAddChasseur()),
        toogleAddPropriete: () => dispatch(toogleAddPropriete()),
        toogleUserModal: () => dispatch(toogleUserModal()),
        toogleDossierModal: () => dispatch(toogleDossierModal()),
        toogleProprieteModal: () => dispatch(toogleProprieteModal())
    }
}

export default connect(null, mapDispatchToProps)(Modal)