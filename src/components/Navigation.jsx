const { Component } = wp.element;

import { connect } from 'react-redux';
import {
	getPersonalData,
	toogleLoader,
	toogleAddClient,
	toogleAddChasseur,
	toogleAddPropriete,
	updateUserData,
	updateProprieteData,
	getAllNotifications,
	setNotificationCount,
} from '../actions';

import styled, { css } from 'styled-components';
import IconDefault from '../resources/userDefault.svg';

import Chart from '../resources/chart-pie.svg';
import Home from '../resources/home.svg';
import User from '../resources/user-tie.svg';
import Users from '../resources/users.svg';
import Bell from '../resources/bell.svg';
import Folder from '../resources/folder.svg';

import BackSite from '../components/BackSite';
import Loader from './Loader';

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
                font-size: 17px;
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
	const linkFormat = props.name.trim().toLowerCase().replace(/é/gi, 'e').replace(/ /gi, '_');
	return (
		<LinkStyled closeMenu={props.closeMenu} current={props.currentLink == props.name ? true : null} >
			<a href={'#' + linkFormat} onClick={() => props.changeView(props.name)} >
				{props.notifications && <Notification>{props.notifications}</Notification>}
				<img src={props.src} />
				<span>{props.name}</span>
			</a>

			{props.addButton ? <AddButton className='addButton' onClick={props.addButton} closeMenu={props.closeMenu} /> : null}
		</LinkStyled>
	);
}

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentLink: 'Tableau de bord',
		}

		this.handleChangeLink = this.handleChangeLink.bind(this);
	}

	componentDidMount() {
		this.props.getPersonalData();
		this.props.getAllNotifications();
		this.props.toogleLoader(true, 'Chargement des données en cours ...');
	}

	handleChangeLink(newLink) {
		this.setState({ currentLink: newLink });
		this.props.onChangeView(newLink);
	}

	render() {
		let showLink = new Array();

		if (this.props.myUserData.role != 'load' && this.props.myUserData.role != null) {
			if (this.props.loaderStat.statut) {
				this.props.toogleLoader(false, 'Chargement des données en cours ...');
			}

			// Count Notifications
			let data = null;
			let countNotifDossier = 0;
			let countNotifPropriete = 0;
			let countAllNotif = 0;

			if (this.props.list.data != null && Array.isArray(this.props.list.data)) {
				if (this.props.myUserData.role == 'client__investisseur') {
					data = this.props.list.data.filter(notif => notif.type_notification == 'updateDossier' || notif.type_notification == 'newPropriete');

					if (Array.isArray(data)) {
						if (data.length > 0) {
							let listDossier = null;
							if (this.props.listDossier != null && Array.isArray(this.props.listDossier)) {
								listDossier = this.props.listDossier.filter(dossier => dossier.id_client.id == this.props.myUserData.id);
							}

							data.forEach(notif => {
								let isRead = true;
								if (Array.isArray(notif.users_see)) {
									if (notif.users_see.length > 0) {
										notif.users_see.forEach(user => {
											if (user['ID'] == this.props.myUserData.id) {
												isRead = false;
											}
										});
									}
								}

								if (isRead) {
									if (notif.type_notification == 'updateDossier') {
										if (Array.isArray(listDossier)) {
											if (listDossier.length > 0) {
												listDossier.forEach(dossier => {
													if (dossier.id == notif.id_type) {
														countAllNotif++;
													}
												});
											}
										}
									} else {
										countAllNotif++;
									}
								}
							});
						}
					}
				} else if (this.props.myUserData.role == 'chasseur') {
					data = this.props.list.data.filter(notif => notif.type_notification == 'newDossier');

					if (Array.isArray(data)) {
						if (data.length > 0) {
							let listDossier = null;
							if (this.props.listDossier != null && Array.isArray(this.props.listDossier)) {
								listDossier = this.props.listDossier.filter(dossier => dossier.id_fiche_produit.chasseur.id == this.props.myUserData.id);
							}

							data.forEach(notif => {
								let isRead = true;
								if (Array.isArray(notif.users_see)) {
									if (notif.users_see.length > 0) {
										notif.users_see.forEach(user => {
											if (user['ID'] == this.props.myUserData.id) {
												isRead = false;
											}
										});
									}
								}

								if (isRead) {
									if (notif.type_notification == 'newDossier') {
										if (Array.isArray(listDossier)) {
											if (listDossier.length > 0) {
												listDossier.forEach(dossier => {
													if (dossier.id == notif.id_type) {
														countAllNotif++;
														countNotifDossier++;
													}
												});
											}
										}
									}
								}
							});
						}
					}
				} else {
					data = this.props.list.data.filter(notif => notif.type_notification != 'newPropriete');

					if (Array.isArray(data)) {
						if (data.length > 0) {
							data.forEach(notif => {
								let isRead = true;
								if (Array.isArray(notif.users_see)) {
									if (notif.users_see.length > 0) {
										notif.users_see.forEach(user => {
											if (user['ID'] == this.props.myUserData.id) {
												isRead = false;
											}
										});
									}
								}

								if (isRead) {
									if (notif.type_notification == 'newProprieteNoValid') {
										countNotifPropriete++;
									} else if (notif.type_notification == 'newDossier') {
										countNotifDossier++;
									}
									countAllNotif++;
								}
							});
						}
					}
				}

				this.props.setNotificationCount(countAllNotif);
			}

			// ALL
			showLink.push(<NavLink src={Chart}
				name="Tableau de bord"
				currentLink={this.state.currentLink}
				changeView={this.handleChangeLink}
				closeMenu={this.props.statMenu} />);

			// ONLY CHASSEUR AND SUPERVISEUR
			if (this.props.myUserData.role != 'client__investisseur') {
				showLink.push(<NavLink src={Home}
					name="Propriétés"
					notifications={countNotifPropriete > 0 ? countNotifPropriete : null}
					currentLink={this.state.currentLink}
					changeView={this.handleChangeLink}
					closeMenu={this.props.statMenu}
					addButton={() => {
						this.props.updateProprieteData('null')
						this.props.toogleAddPropriete();
					}} />);

				// ONLY SUPERVISEUR
				if (this.props.myUserData.role != 'chasseur') {
					showLink.push(<NavLink src={User}
						name="Chasseurs"
						currentLink={this.state.currentLink}
						changeView={this.handleChangeLink}
						closeMenu={this.props.statMenu}
						addButton={() => {
							this.props.updateUserData('null')
							this.props.toogleAddChasseur();
						}} />);
				}

				showLink.push(<NavLink src={Users}
					name="Mes clients"
					currentLink={this.state.currentLink}
					changeView={this.handleChangeLink}
					closeMenu={this.props.statMenu}
					addButton={() => {
						this.props.updateUserData('null')
						this.props.toogleAddClient();
					}} />);
			}

			// ALL
			showLink.push(<NavLink src={Bell}
				name="Notifications"
				notifications={countAllNotif > 0 ? countAllNotif : null}
				currentLink={this.state.currentLink}
				changeView={this.handleChangeLink}
				closeMenu={this.props.statMenu} />);

			// ONLY CHASSEUR AND SUPERVISEUR
			if (this.props.myUserData.role != 'client__investisseur') {
				showLink.push(<NavLink src={Folder}
					name="Suivi dossiers"
					notifications={countNotifDossier > 0 ? countNotifDossier : null}
					currentLink={this.state.currentLink}
					changeView={this.handleChangeLink}
					closeMenu={this.props.statMenu} />);
			}

		} else {
			if (!this.props.loaderStat.statut) {
				this.props.toogleLoader(true, 'Chargement des données en cours ...');
			}
		}

		return (
			<NavContainer closeMenu={this.props.statMenu} >
				<Avatar closeMenu={this.props.statMenu}>
					<div className='imgContainer'>
						<img src={this.props.myUserData.avatar != 'default' ? this.props.myUserData.avatar : IconDefault} />
					</div>
					<h2>{this.props.myUserData.display_name}</h2>
				</Avatar>

				<ul>
					{showLink}
				</ul>

				<BackSite />

				<Loader show={this.props.loaderStat.statut} message={this.props.loaderStat.message} />;
			</NavContainer>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setNotificationCount: (value) => dispatch(setNotificationCount(value)),
		getAllNotifications: () => dispatch(getAllNotifications()),
		getPersonalData: () => dispatch(getPersonalData()),
		toogleLoader: (statut, message) => dispatch(toogleLoader(statut, message)),
		toogleAddClient: () => dispatch(toogleAddClient()),
		toogleAddChasseur: () => dispatch(toogleAddChasseur()),
		toogleAddPropriete: () => dispatch(toogleAddPropriete()),
		updateUserData: (data) => dispatch(updateUserData(data)),
		updateProprieteData: (data) => dispatch(updateProprieteData(data)),
	}
}

const mapStateToProps = (state) => {
	return {
		myUserData: state.general.myData.data,
		list: state.manageNotification.listNotification,
		listDossier: state.manageDossier.listDossier.data,
		loaderStat: state.general.loader
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)