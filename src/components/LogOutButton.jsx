const { Component } = wp.element;

import { connect } from 'react-redux';
import { getLogout } from '../actions';

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
	color: ${props => props.theme.black};
	transition: color 0.3s, transform 0.3s;

	img {
		height: 12px;
		margin-right: 5px;
        transition: filter 0.3s;
	}

	&:hover {
		transform: scale(1.1);
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

class LogOut extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getLogout();
	}

	render() {
		return (
			<StyledButton href={this.props.href}>
				<img src={Icon} />
				{'Déconnexion'.toUpperCase()}
			</StyledButton>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getLogout: () => dispatch(getLogout())
	}
}

const mapStateToProps = (state) => {
	return { href: state.general.logOut.data };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogOut)