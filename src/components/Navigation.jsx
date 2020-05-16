const { Component } = wp.element;
import { Link } from "react-router-dom";
import styled, { css } from 'styled-components';
import IconDefault from '../resources/userDefault.svg';

import Chart from '../resources/chart-pie.svg';
import Home from '../resources/home.svg';
import User from '../resources/user-tie.svg';
import Users from '../resources/users.svg';
import Bell from '../resources/bell.svg';
import Folder from '../resources/folder.svg';

import BackSite from '../components/BackSite';

const NavContainer = styled.nav`
    width: 210px;
    height: calc(100vh - 55px);
    top: 55px;
    padding: 45px;
    position: fixed;
    z-index: 2;
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
            }

            &:hover {
                &:before {
                    width: 285px;
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
				
				&:hover {
                    transform: scale(1.05);
				}

				&:active {
					transform: scale(0.98);
				}
            }
        }
    }

    ${props =>
		!props.closeMenu &&
		css`
			overflow: hidden;
            width: 42px;
            padding: 45px 20px;

            li a span, .addButton {
                opacity: 0;
                pointer-events: none;
            }

            #backSite {
                img {
                    width: 42px;
                    height: 42px;
                }

                span {
                    opacity: 0;
                    pointer-events: none;
                }
            }

			&:hover {
				width: 210px;
				padding: 45px;

				h2 {
					opacity: 1;
				}

				li a span, .addButton {
					opacity: 1;
					pointer-events: all;
				}

				#backSite {
					img {
						width: 28px;
						height: 28px;
					}

					span {
						opacity: 1;
						pointer-events: all;
					}
				}
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

const AddButton = styled.div`
	position: relative;
	cursor: pointer;
	z-index: 2;
	min-width: 24px;
	width: 24px;
	height: 24px;
	margin-left: 15px;
	border-radius: 25px;
	display: flex;
    justify-content: center;
    align-items: center;
	background: ${props => props.theme.white};
	box-shadow: ${props => props.theme.shadows};
	transition: transform 0.3s, opacity 0.8s;

	&:before,
	&:after {
		content: '';
		position: absolute;
		width: 14px;
		height: 2px;
		border-radius: 30px;
		background: ${props => props.theme.black};
	}

	&:after {
		transform: rotate(90deg);
	}

	&:hover {
		transform: scale(1.1);
	}

	&:active {
		transform: scale(0.95);
	}

	${props =>
		!props.closeMenu &&
		css`
            opacity: 0;
			pointer-events: none;
        `};
`

const LinkStyled = styled.li`
	display: flex;
    flex-direction: row;
	align-items: center;
	
	${props =>
		props.current &&
		css`
			&:before {
				width: 285px !important;

				${props =>
					!props.closeMenu &&
					css`
						width: 95% !important;
				`};
			}
		`};
`

const NavLink = (props) => {
	return (
		<LinkStyled closeMenu={props.closeMenu} current={props.currentLink == props.name ? true : null} >
			<Link to={props.link} onClick={() => props.changeView(props.name)} >
				{props.notifications && <Notification>{props.notifications}</Notification>}
				<img src={props.src} />
				<span>{props.name}</span>
			</Link>

			{props.addButton ? <AddButton className='addButton' closeMenu={props.closeMenu} /> : null}
		</LinkStyled>
	);
}

export default class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentLink: 'Tableau de bord',
		}

		this.handleChangeLink = this.handleChangeLink.bind(this);
	}

	handleChangeLink(newLink) {
		this.setState({currentLink: newLink});
	}

	render() {
		return (
			<NavContainer closeMenu={this.props.statMenu}>
				<Avatar closeMenu={this.props.statMenu}>
					<div className='imgContainer'>
						<img src={this.props.userAvatar ? this.props.userAvatar : IconDefault} />
					</div>
					<h2>Benoit</h2>
				</Avatar>

				<ul>
					<NavLink src={Chart} 
						link="/immoTEA/board" 
						name="Tableau de bord"
						currentLink={this.state.currentLink}
						changeView={this.handleChangeLink}
						closeMenu={this.props.statMenu} />

					<NavLink src={Home} 
						link="/immoTEA/board/proprietes" 
						name="Propriétés" 
						currentLink={this.state.currentLink}
						changeView={this.handleChangeLink}
						closeMenu={this.props.statMenu}
						addButton />

					<NavLink src={User} 
						link="/immoTEA/board/chasseurs" 
						name="Chasseurs" 
						currentLink={this.state.currentLink}
						changeView={this.handleChangeLink}
						closeMenu={this.props.statMenu}
						addButton />

					<NavLink src={Users} 
						link="/immoTEA/board/clients" 
						name="Mes clients" 
						currentLink={this.state.currentLink}
						changeView={this.handleChangeLink}
						closeMenu={this.props.statMenu}
						addButton />

					<NavLink src={Bell} 
						link="/immoTEA/board/notifications" 
						name="Notifications" 
						currentLink={this.state.currentLink}
						changeView={this.handleChangeLink}
						closeMenu={this.props.statMenu} />

					<NavLink src={Folder} 
						link="/immoTEA/board/dossiers" 
						name="Suivi dossiers" 
						currentLink={this.state.currentLink}
						changeView={this.handleChangeLink}
						closeMenu={this.props.statMenu} />
				</ul>

				<BackSite />
			</NavContainer>
		);
	}
}