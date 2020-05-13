import styled, { css } from 'styled-components';

export const StyledButton = styled.a`
    display: inline-block;
    text-decoration: none;
    font-size: 16px;
    background: ${props => props.theme.blue};
    color: ${props => props.theme.white};
    padding: 10px 20px;
    margin: 10px;
    border-radius: 100px;
    border: none;
    outline: none;
    font-weight: ${props => props.theme.regular};
    box-shadow: ${props => props.theme.shadows};
    transition: transform 0.3s,
                background 0.3s,
                color 0.3s,
                opacity 0.3s;

    &:hover {
        transform: scale(1.1);
        background-color: ${props => props.theme.orange};
        color: ${props => props.theme.white};

        /*
        img {
			height: 14px;
			position: relative;
			bottom: 1px;
			margin-right: 3px;
			filter: invert(1);
		}*/
    }

    &:active {
        transform: scale(0.95);
        background-color: darken($color: $orange, $amount: 10);
    }

    ${props =>
        props.small &&
        css `
            padding: 4px 24px;

            &:hover {
                transform: scale(1.06);
            }
        `
    };
`