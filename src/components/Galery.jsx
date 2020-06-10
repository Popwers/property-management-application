const { Component } = wp.element;

import styled, { css } from 'styled-components';

const GaleryStyled = styled.div`
    display: inline-block;
    min-width: 300px;
    max-width: 475px;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        cursor: pointer;
    }
`

const ContainerPictures = styled.div`
    border-radius: 15px;
    box-shadow: ${props => props.theme.shadows};
    overflow: hidden;
    height: 300px;
    cursor: pointer;
    transition: transform 0.3s;

    &:active {
        transform: scale(0.9);
    }
`

const SlidePictures = styled.div`
    padding: 15px;
    display: flex;
    align-items: center;
    width: 100%;
    overflow: scroll;

    div {
        border-radius: 12px;
        box-shadow: ${props => props.theme.shadows};
        overflow: hidden;
        width: 100px;
        height: 100px;
        min-width: 100px;
        margin: 0 20px;
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.1);
        }

        &:active {
            transform: scale(0.9);
        }
    }
`

const ShowFullscreen = styled.div`
    top: 0px;
    left: 0px;
    opacity: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.8);
    transition: opacity 0.5s;

    img {
        max-width: 80vw;
        max-height: 80vh;
        border-radius: 5px;
    }

    ${props =>
        props.show &&
        css`
            opacity: 1;
            pointer-events: all;
        `};
`


export default class Galery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImg: null,
            showFullscreen: false,
            imgFullscreen: false,
        }
    }

    componentDidMount() {
        let current = this.props.images[0].guid;
        if (this.props.thumbnail) {
            current = this.props.thumbnail;
        }
        this.setState({ currentImg: current });
    }

    render() {
        let haveThumbnail = false;
        let nbImages = 0;

        if (this.props.images.length > 0) {
            nbImages = this.props.images.length;
        }

        if (this.props.thumbnail) {
            haveThumbnail = true;
            nbImages++;
        }
        
        return (
            <>
                <GaleryStyled>
                    <ContainerPictures>
                        <img src={this.state.currentImg} 
                            alt='Photo principale' 
                            onClick={() => this.setState({ showFullscreen: true, imgFullscreen: this.state.currentImg })} />
                    </ContainerPictures>

                    {nbImages > 1 &&
                        <SlidePictures>
                            {haveThumbnail &&
                                <div>
                                    <img
                                        src={this.props.thumbnail}
                                        alt='Photo Slide'
                                        onClick={() => this.setState({ currentImg: this.props.thumbnail })} />
                                </div>
                            }

                            {this.props.images.length > 0 &&
                                this.props.images.map(img =>
                                    <div>
                                        <img
                                            src={img.guid}
                                            alt='Photo Slide'
                                            onClick={() => this.setState({ currentImg: img.guid })} />
                                    </div>)
                            }
                        </SlidePictures>
                    }
                </GaleryStyled>

                <ShowFullscreen show={this.state.showFullscreen != false} onClick={() => this.setState({ showFullscreen: false })}>
                    <img src={this.state.imgFullscreen} />
                </ShowFullscreen>
            </>
        );
    }
}