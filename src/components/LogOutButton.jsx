import styled from 'styled-components';
import Icon from '../resources/logout.svg';

const StyledButton = styled.a`
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 300;
	outline: none;
	padding: 4px 16px;
	border: none;
	transition: color 0.3s;

	img {
		height: 12px;
		margin-right: 5px;
        transition: filter 0.3s;
	}

	&:hover {
		color: ${props => props.theme.orange};

		img {
			filter: invert(47%) sepia(96%) saturate(2099%) hue-rotate(350deg) brightness(93%) contrast(112%);
		}
	}

	&:active {
		transform: scale(0.95);
        
        img {
			filter: invert(47%) sepia(96%) saturate(2099%) hue-rotate(350deg) brightness(93%) contrast(112%);
		}
	}
`

export default function LogOut(props) {
    return (
        <StyledButton>
            <img src={Icon} />
            {'Déconnexion'.toUpperCase()}
        </StyledButton>
    );
}