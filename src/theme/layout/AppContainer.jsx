const { Component } = wp.element;

import Switcher from '../layout/Switcher';
import { connect } from 'react-redux';
import {
    getAllProprietes,
    getAllDossiers,
    getAllUsers,
    getPersonalData,
    getAllNotifications,
} from '../../actions';

import styled, { css } from 'styled-components';
import LogOut from "../../components/LogOutButton";
import Navigation from "../../components/Navigation";
import Modal from './Modal';
import AddPropriete from '../../views/AddPropriete';
import AddClient from '../../views/AddClient';
import AddChasseur from '../../views/AddChasseur';
import Uploader from '../../components/Uploader';
import UserModal from '../../views/UserModal';
import ProprieteModal from '../../views/ProprieteModal';
import DossierModal from '../../views/DosssierModal';


const BarreTop = styled.div`
    position: fixed;
    top: 0;
    z-index: 2;
    background: ${props => props.theme.white};

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100vw - 90px);
    height: 55px;
    padding: 0 45px;
    box-shadow: ${props => props.theme.shadows};
`

const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
`

const MenuBurger = styled.div`
    cursor: pointer;
    padding: 10px;
    margin-left: -10px;
    width: 25px;
    display: inline-block;
    transition: transform 0.3s;

    div {
        display: block;
        margin-bottom: 5px;
        width: 100%;
        height: 2px;
        border-radius: 50px;
        background-color: ${props => props.theme.black};

        &:last-child {
            margin-bottom: 0px;
        }
    }

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.95);
    }
`

const Title = styled.h1`
    font-size: 22px;
    margin-left: 20px;
    text-transform: uppercase;
    font-weight: ${props => props.theme.regular};

    span {
        font-weight: ${props => props.theme.light};
    }
`

const Main = styled.main`
    padding: 55px 45px 45px 45px;
    margin-left: 300px;
    transition: margin 0.4s;

    ${props =>
        !props.closeMenu &&
        css`
            margin-left: 82px;
        `};
`

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openMenu: true,
            view: 'Tableau de bord',
        }

        this.handleChangeView = this.handleChangeView.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            this.props.getAllNotifications();
            this.props.getAllProprietes();
            this.props.getAllDossiers();
            this.props.getAllUsers();
            this.props.getPersonalData();
        }, 15000);
    }

    handleChangeView(newView) {
        this.setState({ view: newView });
    }

    render() {
        return (
            <>
                <BarreTop>
                    <ContainerTitle>
                        <MenuBurger onClick={() => this.setState({ openMenu: !this.state.openMenu })}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </MenuBurger>

                        <Title>Projet<span>locatif</span></Title>
                    </ContainerTitle>

                    <LogOut />
                </BarreTop>

                <Navigation statMenu={this.state.openMenu} onChangeView={this.handleChangeView} />

                {/** MODAL ADD **/}

                <Modal type='addPropriete' show={this.props.showModalAddPropriete} title="Ajouter une Propriété">
                    <AddPropriete />
                </Modal>

                <Modal type='addChasseur' show={this.props.showModalAddChasseur}>
                    <AddChasseur />
                </Modal>

                <Modal type='addClient' show={this.props.showModalAddClient}>
                    <AddClient />
                </Modal>

                {/** MODAL INFOBOX **/}

                <Modal type='userModal' show={this.props.showModalUser} fitContent alignCenter>
                    <UserModal />
                </Modal>

                <Modal type='dossierModal' show={this.props.showModalDossier} fitContent>
                    <DossierModal />
                </Modal>

                <Modal type='proprieteModal' show={this.props.showModalPropriete} fitContent>
                    <ProprieteModal />
                </Modal>

                <Main closeMenu={this.state.openMenu}>
                    <Switcher view={this.state.view} />
                </Main>

                <Uploader />
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllNotifications: () => dispatch(getAllNotifications()),
        getAllProprietes: () => dispatch(getAllProprietes()),
        getAllDossiers: () => dispatch(getAllDossiers()),
        getAllUsers: () => dispatch(getAllUsers()),
        getPersonalData: () => dispatch(getPersonalData()),
    }
}

const mapStateToProps = (state) => {
    return {
        myUserData: state.general.myData.data,

        showModalAddPropriete: state.general.addProprieteModal,
        showModalAddChasseur: state.general.addChasseurModal,
        showModalAddClient: state.general.addClientModal,

        showModalPropriete: state.general.proprieteModal,
        showModalDossier: state.general.dossierModal,
        showModalUser: state.general.userModal,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)