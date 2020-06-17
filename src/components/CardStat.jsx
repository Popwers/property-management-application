import styled, { css } from 'styled-components';
import { formatPrix } from '../lib/functions';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 30px;
    box-shadow: 0 5px 20px rgba(251,97,7, 0.4);
    padding: 25px 35px;
    margin: 20px;
    min-width: 330px;
    max-height: 150px;

    span {
        max-width: 75%;
        font-size: 22px;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.roboto};
        font-weight: ${props => props.theme.regular};

        &:last-of-type {
            font-size: 50px;
            align-self: flex-end;
            margin-top: 10px;
            text-shadow: ${props => props.theme.shadows};
        }
    }

    ${props =>
        props.orange &&
        css`
            ${props => props.theme.orangeRadius};
        `};

    ${props =>
        props.blue &&
        css`
            ${props => props.theme.blueRadius};
        `};

    ${props =>
        props.green &&
        css`
            ${props => props.theme.greenRadius};
        `};
`

export default function Card(props) {
    let value = props.value;

    if (props.children) {
        value = props.children;
    }

    return (
        <CardContainer green={props.green} blue={props.blue} orange={props.orange} >
            <span>{props.title}</span>
            <span>{props.euros ? formatPrix(value) + ' €' : value}</span>
        </CardContainer>
    );
}