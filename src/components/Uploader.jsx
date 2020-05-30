const { Component } = wp.element;

import { connect } from 'react-redux';
import styled, {css} from 'styled-components';

const UploadContainer = styled.div`
    position: fixed;
    z-index: 10;
    bottom: -100%;
    right: 20px;
    border-radius: 10px;
    padding: 20px 30px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.shadows};
    transition: bottom 0.5s ease-out;

    ${props =>
        props.show &&
        css`
            bottom: 20px;
        `}
`

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    min-width: 200px;
    margin: 10px 0px;
`

const ProgressBarStyle = styled.div`
    position: relative;
    width: 100%;
    height: 14px;
    margin-right: 20px;
    border-radius: 20px;
    background: #A5A5A5;
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.45);

    &:before {
        content: "";
        position: absolute;
        width: ${props => props.pourcentage}%;
        height: 14px;
        border-radius: 20px;
        ${props => props.theme.orangeRadius};
        transition: width 0.5s, right 0.5s;
    }

    ${props =>
        props.inderterminate &&
        css`
            &:before {
                animation-duration: 1.5s;
                animation-iteration-count: infinite;
                animation-name: moveIndeterminate;
                animation-timing-function: linear;
            }
        `}

    @keyframes moveIndeterminate {
        0% { 
            width: 0%;
            right: 0%;
        }

        50% { 
            width: 100%;
            right: 0%;
        }

        750% { 
            width: 0%;
            right: 100%;
        }

        100% { 
            width: 0%;
            right: 0%;
        }
    }
`

const TextBarre = styled.p`
    margin: 0;
    margin-bottom: 10px;
`

function ProgressBar(props) {
    return (
        <ItemContainer>
            <ProgressBarStyle inderterminate={props.pourcentage >= 90} pourcentage={props.pourcentage >= 90 ? 100 : props.pourcentage} />
            <TextBarre>{props.pourcentage}%</TextBarre>
        </ItemContainer>
    );
}

class Uploader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let uploads = new Array();
        for (const key in this.props.registerData) {
            uploads.push(<ProgressBar key={key} pourcentage={this.props.registerData[key]} />);
        }

        return (
            <UploadContainer show={uploads.length > 0}>
                <TextBarre>Envoie en cours ...</TextBarre>
                {uploads}
            </UploadContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return { registerData: state.general.registerData };
}

export default connect(mapStateToProps)(Uploader)