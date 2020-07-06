/* eslint-disable react/react-in-jsx-scope */
const { Component } = wp.element;

import { connect } from 'react-redux';
import { getHomeUrl } from '../actions';

import styled from 'styled-components';
import Icon from '../resources/back-site.svg';

const StyledButton = styled.a`
	cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 300;
    outline: none;
    border: none;
    white-space: pre;
	position: relative;
	top: calc(100% - 525px);
    bottom: 30px;
	color: ${props => props.theme.white};
	transition: color 0.3s, transform 0.3s, top 0.3s;

	img {
		height: 28px;
		width: 28px;
		object-fit: contain;
		margin-right: 12px;
		filter: drop-shadow(0px 3px 15px rgba(0,0,0,0.5));
		transition: transform 0.3s, width 0.3s, height 0.3s;
	}

	span {
		transition: opacity 0.3s;
	}

	&:hover {
		transform: translateX(10px);
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

class BackSite extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getHomeUrl();
	}

	render() {
		return (
			<StyledButton id='backSite' href={this.props.href + '/liste-proprietes/'}>
				<img src={Icon} />
				<span>Retour sur les annonces</span>
			</StyledButton>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getHomeUrl: () => dispatch(getHomeUrl())
	}
}

const mapStateToProps = (state) => {
	return { href: state.general.homeUrl.data };
}

export default connect(mapStateToProps, mapDispatchToProps)(BackSite)