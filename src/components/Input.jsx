const { Component } = wp.element;

import styled, { css } from 'styled-components';
import NumberFormat from 'react-number-format';

const Label = styled.label`
    font-family: ${props => props.theme.roboto};    
    font-size: 16px;
    padding: 5px;
    display: block;

    ${props =>
        props.inlineLabel &&
        css`
            display: inline-block;
            margin-left: 15px;
        `}

    ${props =>
        props.isFile &&
        css`
            cursor: pointer;
            display: inline-block;
            position: relative;
            text-decoration: none;
            font-size: 16px;
            background: ${props => props.theme.blue};
            color: ${props => props.theme.white};
            padding: 10px 20px;
            margin: 10px 0px;
            margin-bottom: 30px;
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
        `}
`

const StyledInput = styled.input`
    font-weight: ${props => props.theme.light}; 
    font-family: ${props => props.theme.roboto};     
    font-size: 16px;
    border: 1px solid #ced4da;
    width: 100%;
    margin: 10px 0px;
    padding: 8px 10px 8px 15px;
    min-height: 16px;
    outline: none;
    border-radius: 30px;
    display: block;
    background: ${props => props.theme.white};
    transition: border 0.3s, box-shadow 0.3s;

    &:focus {
        box-shadow: ${props => props.theme.shadows};
        border: 1px solid ${props => props.theme.blue};
    }

    ${props =>
        props.inlineLabel &&
        css`
            display: inline-block;
            margin-left: 15px;
        `}

    ${props =>
        props.disabled &&
        css`
            cursor: not-allowed;
            background: #ced4da;
        `}
`

const StyledArea = styled.textarea`
    font-weight: ${props => props.theme.light}; 
    font-family: ${props => props.theme.roboto};    
    font-size: 16px;
    border: 1px solid #ced4da;
    width: 100%;
    max-width: 100%;
    min-height: 115px;
    margin: 10px 0px;
    padding: 8px 10px 8px 15px;
    min-height: 16px;
    outline: none;
    border-radius: 10px;
    display: block;
    background: ${props => props.theme.white};
    transition: border 0.3s, box-shadow 0.3s;

    &:focus {
        box-shadow: ${props => props.theme.shadows};
        border: 1px solid ${props => props.theme.blue};
    }

    ${props =>
        props.inlineLabel &&
        css`
            display: inline-block;
            margin-left: 15px;
        `}

    ${props =>
        props.disabled &&
        css`
            cursor: not-allowed;
            background: #ced4da;
        `}
`

const StyledSelect = styled.select`
    font-weight: ${props => props.theme.light}; 
    font-family: ${props => props.theme.roboto};    
    font-size: 16px;
    border: 1px solid #ced4da;
    width: 100%;
    margin: 10px 0px;
    padding: 8px 15px 8px 5px;
    min-height: 16px;
    outline: none;
    border-radius: 10px;
    display: block;
    background: ${props => props.theme.white};
    transition: border 0.3s, box-shadow 0.3s;

    &:focus {
        box-shadow: ${props => props.theme.shadows};
        border: 1px solid ${props => props.theme.blue};
    }

    ${props =>
        props.inlineLabel &&
        css`
            display: inline-block;
            margin-left: 15px;
        `}

    ${props =>
        props.disabled &&
        css`
            cursor: not-allowed;
            background: #ced4da;
        `}
`

const StyledNumberFormat = styled(NumberFormat)`
    font-weight: ${props => props.theme.light}; 
    font-family: ${props => props.theme.roboto};    
    font-size: 16px;
    border: 1px solid #ced4da;
    width: 100%;
    margin: 10px 0px;
    padding: 8px 10px 8px 15px;
    min-height: 16px;
    outline: none;
    border-radius: 30px;
    display: block;
    background: ${props => props.theme.white};
    transition: border 0.3s, box-shadow 0.3s;

    &:focus {
        box-shadow: ${props => props.theme.shadows};
        border: 1px solid ${props => props.theme.blue};
    }

    ${props =>
        props.inlineLabel &&
        css`
            display: inline-block;
            margin-left: 15px;
        `}

    ${props =>
        props.disabled &&
        css`
            cursor: not-allowed;
            background: #ced4da;
        `}
`

const Container = styled.div`
    margin-top: 20px;
    margin-right: 45px;

    ${props =>
        props.isFile &&
        css`
            margin-right: 0px;
        `}
`

const StyledFiles = styled.input`
    display: none;
`
const StyledFilesImg = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
`
const ImgPrevContainer = styled.div`
    width: 100px;
    height: 100px;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    position: relative;
    transition: transform 0.3s, box-shadow 0.3s;

	&:before,
	&:after {
		content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        border-radius: 5px;
        background: ${props => props.theme.red};
        transition: opacity 0.3s;
	}

	&:hover {
        box-shadow: ${props => props.theme.shadows};
        transform: scale(1.1);

        &:before,
        &:after {
            opacity: 0.4;
        }

        div {
            opacity: 0.8;
        }
	}

	&:active {
        transform: scale(0.9);

        &:before,
        &:after {
            opacity: 0.7;
        }

        div {
            opacity: 1;
        }
	}
`

const CloseHover = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    pointer-events: none;
	display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(45deg);
    opacity: 0;
	transition: opacity 0.3s;

	&:before,
	&:after {
		content: '';
		position: absolute;
		width: 45px;
		height: 2px;
		border-radius: 30px;
		background: ${props => props.theme.white};
	}

	&:after {
		transform: rotate(90deg);
	}
`

const ContainerPreview = styled.div`
    display: flex;
    width: 100%;
    max-width: 100%;
    overflow: scroll;
    justify-content: center;
`

const ImagePrev = (props) => {
    function handleClick() {
        props.onClick(props.src, props.file);
    }

    return (
        <ImgPrevContainer onClick={handleClick}>
            <CloseHover />
            <StyledFilesImg src={props.src} />
        </ImgPrevContainer>
    );
}

/** SWITCHER **/

const ToogleContainer = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
    margin: 0 5px;
    margin-bottom: 15px;

    input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked + span {
            background-color: ${props => props.theme.blue};
        }

        &:focus + span {
            box-shadow: 0 0 1px ${props => props.theme.blue};
        }

        &:checked + span:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }
    }
`

const SliderRound = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 34px;
    -webkit-transition: .4s;
    transition: .4s;

    &:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        border-radius: 50%;
        -webkit-transition: .4s;
        transition: .4s;
    }
`

const ToogleSwith = (props) => {
    return (
        <ToogleContainer>
            <input
                type={props.type}
                value={props.value}
                checked={props.checked}
                id={props.id}
                name={props.id}
                required={props.required}
                onChange={props.onChange} />
            <SliderRound></SliderRound>
        </ToogleContainer>
    );
}

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: null,
            formattedValue: null,
            filesList: new Array(),
            previewImg: new Array(),
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleChangeFiles = this.handleChangeFiles.bind(this);
        this.handleDeleteFiles = this.handleDeleteFiles.bind(this);
    }

    componentDidMount() {
        if (this.props.value && this.props.onChange) {
            if (this.props.type == 'file') {
                this.setState({ filesList: this.props.value });
            } else {
                this.props.onChange(this.props.id, this.props.value);
                this.setState({ inputValue: this.props.value });
            }
        }
    }

    handleChange(event) {
        if (this.props.type == 'checkbox') {
            if (this.props.onChange) this.props.onChange(this.props.id, event.target.checked);
            this.setState({ inputValue: event.target.checked });
        } else {
            if (this.props.onChange) this.props.onChange(this.props.id, event.target.value);
            this.setState({ inputValue: event.target.value });
        }
    }

    handleChangeFiles(event) {
        if (this.props.multiple) {
            let filesArr = Array.prototype.slice.call(event.target.files);
            let newPrev = new Array();
            filesArr.forEach(element => {
                newPrev.push({ preview: URL.createObjectURL(element), file: element });
            });

            this.setState({ previewImg: [...this.state.previewImg, ...newPrev] });

            if (this.props.onChange) this.props.onChange(this.props.id, [...this.props.value, ...filesArr]);
            this.setState({ filesList: [...this.state.filesList, ...filesArr] });
        } else {
            if (event.target.files.length > 0) {
                const theFile = event.target.files[0];
                let newPrev = [{ preview: URL.createObjectURL(theFile), file: theFile }];
                this.setState({ previewImg: newPrev });
                if (this.props.onChange) this.props.onChange(this.props.id, [theFile]);
                this.setState({ filesList: [theFile] });
            }
        }
    }

    handleDeleteFiles(img, file) {
        if (this.props.multiple) {
            const newPrev = this.state.previewImg.filter(element => element.preview != img);
            const newData = this.state.filesList.filter(element => element != file);

            this.setState({ previewImg: newPrev });

            if (this.props.onChange) this.props.onChange(this.props.id, newData);
            this.setState({ filesList: newData });
        } else {
            this.setState({ previewImg: new Array() });
            if (this.props.onChange) this.props.onChange(this.props.id, null);
            this.setState({ filesList: new Array() });
        }
    }

    handleChangeNumber(values) {
        const { formattedValue, value } = values;

        if (this.props.onChange) this.props.onChange(this.props.id, Number(value));
        this.setState({ formattedValue: formattedValue, inputValue: Number(value) });
    }

    render() {
        let haveSuffix = '';
        let input = null;
        let decimalScale = 0;
        let thousandSeparator = ' ';
        let decimalSeparator = ',';
        let value = null;
        let listFiles = null;
        let filesList = new Array();

        if (this.props.value != null && this.props.onChange) {
            if (this.props.type == 'file') {
                filesList = this.props.value;
            } else {
                value = this.props.value;
            }
        } else {
            value = this.state.inputValue;
        }

        if (this.props.euro) {
            haveSuffix = ' €';
        } else if (this.props.pourcent) {
            haveSuffix = ' %';
        } else if (this.props.suffix) {
            haveSuffix = ' ' + this.props.suffix;
        }

        if (this.props.thousandSeparator == 'false') {
            thousandSeparator = false;
        }

        if (this.props.type == 'file' && filesList.length > 0) {
            listFiles = this.state.previewImg.map(element => <ImagePrev src={element.preview} file={element.file} onClick={this.handleDeleteFiles} />);
        }

        if (this.props.step) {
            if (this.props.step == '.01') {
                decimalScale = 2;
            }
        }

        if (this.props.type == 'number') {
            input = <StyledNumberFormat
                format={this.props.tel ? "##.## ## ## ##" : null}
                value={value}
                decimalScale={this.props.tel ? null : decimalScale}
                step={this.props.step ? this.props.step : 1}
                min={this.props.min ? this.props.min : 0}
                max={this.props.max ? this.props.max : null}
                id={this.props.id}
                name={this.props.id}
                required={this.props.required}
                readonly={this.props.readonly}
                disabled={this.props.disabled}
                thousandSeparator={this.props.tel ? false : thousandSeparator}
                decimalSeparator={this.props.tel ? null : decimalSeparator}
                allowNegative={false}
                allowLeadingZeros={this.props.tel ? true : false}
                suffix={this.props.tel ? null : haveSuffix}
                placeholder={this.props.placeholder}
                onValueChange={this.handleChangeNumber}
                inlineLabel={this.props.inline}
            />
        } else if (this.props.type == 'textarea') {
            input = <StyledArea
                value={value}
                required={this.props.required}
                id={this.props.id}
                name={this.props.id}
                placeholder={this.props.placeholder}
                onChange={this.handleChange}></StyledArea>;
        } else if (this.props.type == 'select') {
            input = <StyledSelect
                value={value}
                required={this.props.required}
                id={this.props.id}
                name={this.props.id}
                onChange={this.handleChange} >
                <option value="" selected disabled hidden>Choisir...</option>
                {this.props.list.map(item => <option>{item}</option>)}
            </StyledSelect>;
        } else if (this.props.type == 'checkbox') {
            input = <ToogleSwith
                type={this.props.type}
                value={value}
                checked={value}
                id={this.props.id}
                name={this.props.id}
                required={this.props.required}
                onChange={this.handleChange}
                inlineLabel={this.props.inline}
            />
        } else if (this.props.type == 'file') {
            input = <StyledFiles
                type={this.props.type}
                value={value}
                id={this.props.id}
                name={this.props.id}
                multiple={this.props.multiple}
                accept={this.props.accept}
                required={this.props.required}
                disabled={this.props.disabled}
                placeholder={this.props.placeholder}
                onChange={this.handleChangeFiles}
                inlineLabel={this.props.inline}
            />
        } else {
            input = <StyledInput
                type={this.props.type}
                value={value}
                id={this.props.id}
                name={this.props.id}
                required={this.props.required}
                readonly={this.props.readonly}
                disabled={this.props.disabled}
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
                inlineLabel={this.props.inline}
            />
        }

        return (
            <Container isFile={this.props.type == 'file' ? true : false}>
                {this.props.label &&
                    <Label
                        isFile={this.props.type == 'file' ? true : false}
                        htmlFor={this.props.id} inlineLabel={this.props.inline} > {this.props.label} </Label>
                }

                {input}

                {this.props.type == 'file' &&
                    <ContainerPreview>
                        {listFiles}
                    </ContainerPreview>
                }
            </Container>
        );
    }
}