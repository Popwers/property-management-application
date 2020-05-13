import styled from 'styled-components';
import LogOut from "../../components/LogOutButton";
import Navigation from "../../components/Navigation";

const BarreTop = styled.div`
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
    padding: 45px;
    margin-left: 300px;
`

export default function AppContainer(props) {
    return (
        <>
            <BarreTop>
                <ContainerTitle>
                    <MenuBurger>
                        <div></div>
                        <div></div>
                        <div></div>
                    </MenuBurger>

                    <Title>Projet<span>locatif</span></Title>
                </ContainerTitle>

                <LogOut />
            </BarreTop>
            
            <Navigation />

            <Main>
                {props.children}
            </Main>
        </>
    );
}