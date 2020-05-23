
const { Component } = wp.element;
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
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.shadows};
    border-radius: 30px;
`

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openStatut: false,
        }

        const newStat = !this.state.openStatut;
        this.setState({ openStatut: newStat });
    }

    render() {
        return (
            <ContainerModal open={this.state.openStatut}>
                <StyledModal>
                    {this.props.children}
                </StyledModal>
            </ContainerModal>
        );
    }
}