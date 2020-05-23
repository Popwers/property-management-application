const { Component } = wp.element;

import styled, { css } from 'styled-components';
import LogOut from "../../components/LogOutButton";
import Navigation from "../../components/Navigation";

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

export default class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openMenu: true,
        }
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

                <Navigation statMenu={this.state.openMenu} />

                <Main closeMenu={this.state.openMenu}>
                    {this.props.children}
                </Main>
            </>
        );
    }
}