import { Link } from "react-router-dom";
import styled, { css } from 'styled-components';
import IconDefault from '../resources/userDefault.svg';

import Chart from '../resources/chart-pie.svg';
import Home from '../resources/home.svg';
import User from '../resources/user-tie.svg';
import Users from '../resources/users.svg';
import Bell from '../resources/bell.svg';
import Folder from '../resources/folder.svg';


const NavContainer = styled.nav`
    width: 210px;
    height: 100vh;
    padding: 45px;
    position: fixed;
    background: ${props => props.theme.black};
    transition: width 0.4s, padding 0.4s;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            width: 100%;

            &:before {
                content: '';
                z-index: -1;
                position: absolute;
                height: 50px;
                width: 0;
                left: 0;
                border-radius: 0px 50px 50px 0px;
                transition: width 0.4s;
                box-shadow: 0 0 10px rgba(251, 97, 7, 0.5);
                ${props => props.theme.orangeRadius};

                ${props => 
                    props.current && 
                    css`
                        width: 285px;
                    `};
            }

            &:hover {
                &:before {
                    width: 285px;
                }

                img, a {
                    transform: scale(1.05);

                    span {
                        opacity: 1;
                        pointer-events: all;
                    }
                }
            }
            
            &:active {
                img, a {
                    transform: scale(0.98);
                }
            }

            img {
                width: 42px;
                height: 42px;
                object-fit: contain;
                margin-right: 12px;
                filter: drop-shadow(0px 3px 15px rgba(0,0,0,0.5));
                transition: transform 0.3s;
            }

            a {
                position: relative;
                display: flex;
                flex-direction: row;
                align-items: center;
                height: 50px;
                margin: 0;
                font-size: 20px;
                font-family: ${props => props.theme.roboto};
                font-weight: ${props => props.theme.light};
                color: ${props => props.theme.white};
                text-shadow: ${props => props.theme.shadows};
                text-decoration: none;
                transition: transform 0.3s;

                span {
                    transition: opacity 0.3s;
                    white-space: pre;
                }
            }
        }
    }

    ${props => 
        !props.closeMenu &&
        css`
            width: 42px;
            padding: 45px 20px;

            li a span {
                opacity: 0;
                pointer-events: none;
            }
        `};
`

const Avatar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;

    .imgContainer {
        overflow: hidden;
        min-width: 42px;
        width: 42px;
        height: 42px;
        border-radius: 50px;

        img {
            width: 100%;
            height: 100%;
            object-position: center;
            object-fit: cover;
        }
    }

    h2 {
        font-size: 24px;
        color: ${props => props.theme.white};
        font-weight: ${props => props.theme.regular};
        margin-left: 20px;
        white-space: pre;
        transition: opacity 0.3s;
    }

    ${props =>
        !props.closeMenu &&
        css`
            h2 {
                opacity: 0;
            }
        `};
`

const Notification = styled.div`
    width: 17px;
    height: 17px;
    border-radius: 50%;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 8px;
    left: 3px;
    z-index: 1;
    font-family: ${props => props.theme.roboto};
    font-weight: ${props => props.theme.regular};
    background: ${props => props.theme.red};
    box-shadow: ${props => props.theme.shadows};
`

const NavLink = (props) => {
    return (
        <li>
            <Link to={props.link} current={props.current}>
                {props.notifications && <Notification>{props.notifications}</Notification>}
                <img src={props.src} />
                <span>{props.name}</span>
            </Link>
        </li>
    );
}

export default function Navigation(props) {
    return (
        <NavContainer closeMenu={props.statMenu}>
            <Avatar closeMenu={props.statMenu}>
                <div className='imgContainer'>
                    <img src={props.userAvatar ? props.userAvatar : IconDefault} />
                </div>
                <h2>Benoit</h2>
            </Avatar>

            <ul>
                <NavLink src={Chart} link="/immoTEA/board" name="Tableau de bord" current/>
                <NavLink src={Home} link="/immoTEA/board/proprietes" name="Propriétés" />
                <NavLink src={User} link="/immoTEA/board/chasseurs" name="Chasseurs" />
                <NavLink src={Users} link="/immoTEA/board/clients" name="Mes clients" />
                <NavLink src={Bell} link="/immoTEA/board/notifications" name="Notifications" />
                <NavLink src={Folder} link="/immoTEA/board/dossiers" name="Suivi dossiers" />
            </ul>
        </NavContainer>
    );
}