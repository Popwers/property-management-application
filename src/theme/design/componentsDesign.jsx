import styled, { css } from 'styled-components';

export const StyledButton = styled.a`
    cursor: pointer;    
    display: inline-block;
    position: relative;
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
    }

    &:active {
        transform: scale(0.95) !important;
        background-color: ${props => props.theme.red};
    }

    ${props =>
        props.noMarginLeft &&
        css`
            margin-left: 0px;
        `
    };

    ${props =>
        props.light &&
        css`
            font-weight: ${props => props.theme.light};
        `
    };

    ${props =>
        props.small &&
        css`
            padding: 4px 20px;

            &:hover {
                transform: scale(1.06);
            }
        `
    };

    ${props =>
        props.orange &&
        css`
            background: ${props => props.theme.orange};

            &:hover {
                background-color: ${props => props.theme.red};
            }

            &:active {
                background-color: darken($color: ${props => props.theme.red}, $amount: 10);
            }
        `
    };

    ${props =>
        props.red &&
        css`
            background: ${props => props.theme.red};

            &:hover {
                background-color: ${props => props.theme.orange};
            }

            &:active {
                background-color: darken($color: ${props => props.theme.orange}, $amount: 10);
            }
        `
    };

    ${props =>
        props.green &&
        css`
            background: ${props => props.theme.green};

            &:hover {
                background-color: ${props => props.theme.red};
            }

            &:active {
                background-color: darken($color: ${props => props.theme.red}, $amount: 10);
            }
        `
    };

    ${props =>
        props.src &&
        css`
            padding: ${props => props.iconRight ? '10px 40px 10px 20px' : '10px 20px 10px 40px'};

            img {
                height: 25px;
                width: 25px;
                position: absolute;
                top: 7px;
                margin-left: ${props => props.iconRight ? '5px' : '0'};
                margin-right: ${props => props.iconRight ? '0px' : '5px'};
                left: ${props => props.iconRight ? 'initiale' : '10px'};
                transition: filter 0.3s;
                filter: invert(1);
            }

            ${props =>
                props.small &&
                css`
                    img {
                        height: 25px;
                        width: 25px;
                        position: absolute;
                        top: 1px;
                        margin-left: ${props => props.iconRight ? '5px' : '0'};
                        margin-right: ${props => props.iconRight ? '0px' : '5px'};
                        left: ${props => props.iconRight ? 'initiale' : '10px'};
                        transition: filter 0.3s;
                        filter: invert(1);
                    }

                    padding: ${props => props.iconRight ? '4px 40px 4px 20px' : '4px 20px 4px 40px'};
                `};
        `
    };
`

export const TitleSection = styled.h2`
    font-size: 24px;
    position: relative;
    padding: 15px 0;

    &:after {
        content: "";
        position: absolute;
        width: 90px;
        height: 3px;
        border-radius: 30px;
        bottom: 0;
        left: 0;
        background: ${props => props.theme.black};
    }
`

export const Text = styled.p`
    font-size: 15px;
    font-weight: ${props => props.theme.regular};
    font-family: ${props => props.theme.roboto};
    color: ${props => props.theme.black};

    ${props =>
        props.light &&
        css`
            font-weight: ${props => props.theme.light};
        `};

    ${props =>
        props.bold &&
        css`
            font-weight: ${props => props.theme.bold};
        `};
`

export const Inline = styled.div`
    display: inline-block;
    margin-right: ${props => props.marginRight ? props.marginRight : 'initiale'};
`

export const RowInput = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    ${props => 
        props.dispatch &&
        css`
            justify-content: space-between;
        `}

    ${props => 
        props.result &&
        css`
            margin-top: 40px;
            color: ${props => props.theme.blue};

            &:before {
                content: '';
                position: absolute;
                width: calc(85% - 90px);
                height: 1px;
                top: 0px;
                background-color: ${props => props.theme.black};
                opacity: 0.2;
                border-radius: 5px;
            }
        `}
`

export const TitleForm = styled.h3`
    font-family: ${props => props.theme.montserrat};
    font-weight: ${props => props.theme.bold};
    font-size: 20px;
    position: relative;
    padding: 15px 0;
    margin-top: 50px;
    margin-bottom: 30px;

    &:after {
        content: "";
        position: absolute;
        width: 90px;
        height: 3px;
        border-radius: 30px;
        bottom: 0;
        left: 0;
        background: ${props => props.theme.black};
    }

    ${props =>
        props.isFirst &&
        css`
            margin-top: 0px;
        `}
`

export const Label = styled.h4`
    font-family: ${props => props.theme.montserrat};
    font-weight: ${props => props.theme.bold};
    font-size: 15px;
    min-width: 200px;
`

export const Form = styled.form`
    padding: 10px;
`

export const SendButton = styled.button`
    cursor: pointer;
    display: inline-block;
    position: relative;
    text-decoration: none;
    font-size: 16px;
    background: ${props => props.theme.blue};
    color: ${props => props.theme.white};
    padding: 10px 20px;
    margin-right: 10px;
    margin-top: 50px;
    margin-left: 0px;
    margin-bottom: 20px;
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
    }

    &:active {
        transform: scale(0.95) !important;
        background-color: ${props => props.theme.red};
    }
`