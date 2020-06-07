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
        props.alignCenter &&
        css`
            margin: 0 auto;
        `
    };

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
                background-color: ${props => props.theme.orange};
            }

            &:active {
                background-color: darken($color: ${props => props.theme.orange}, $amount: 10);
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

            ${props =>
                props.noInvert &&
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
                        filter: invert(0) !important;
                    }

                    padding: ${props => props.iconRight ? '4px 40px 4px 20px' : '4px 20px 4px 40px'};
            `};
        `};
    
    ${props =>
        props.isImg &&
        css`
            padding: 0;
            width: 40px;
            height: 45px;
            border: none;
            outline: none;
            cursor: pointer;
            background: transparent;
            border-radius: initial;
            box-shadow: none;

            &:hover {
                background: transparent;
                transform: scale(1.05);
            }

            &:active {
                background: transparent;
                transform: scale(0.95);
            }

            img {
                width: 100% !important;
                height: 100% !important;
                object-fit: contain !important;
                border-radius: 0 !important;
                box-shadow: none !important;
            }
        `};

    ${props =>
        props.hide &&
        css`
            display: none;
        `
    };


    ${props =>
        props.disable &&
        css`
            opacity: 0.4;
            pointer-events: none;
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
    font-size: ${props => props.fontSize ? props.fontSize : '15px'};
    font-weight: ${props => props.theme.regular};
    font-family: ${props => props.theme.roboto};
    color: ${props => props.theme.black};
    margin: ${props => props.margin ? props.margin : null};
    text-align: ${props => props.textCenter ? 'center' : null};

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

    ${props =>
        props.montserrat &&
        css`
            font-family: ${props => props.theme.montserrat};
        `};

        ${props =>
            props.badge &&
            css`
                white-space: nowrap;
                background: ${props => props.theme.blue};
                display: inline-block;
                color: ${props => props.theme.white};
                padding: 5px 20px;
                border-radius: 100px;
                font-weight: ${props => props.theme.light};
                box-shadow: ${props => props.theme.shadows};

                ${props =>
                    props.orange &&
                    css`
                        background: ${props => props.theme.orange};
                    `};

                ${props =>
                    props.red &&
                    css`
                        background: ${props => props.theme.red};
                    `};

                ${props =>
                    props.green &&
                    css`
                        background: ${props => props.theme.green};
                    `};
            `}
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

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    ${props =>
        props.alignCenter &&
        css`
            align-items: center;
        `};
`

export const AlignCenter = styled.div`
    text-align: center;
`