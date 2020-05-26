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
`

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
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
    }

    handleChange(event) {
        if (this.props.onChange) this.props.onChange(this.props.id, event.target.value);
        this.setState({ inputValue: event.target.value });
    }

    handleChangeNumber(values) {
        const { formattedValue, value } = values;

        if (this.props.onChange) this.props.onChange(this.props.id, Number(value));
        this.setState({ formattedValue: formattedValue, inputValue: value });
    }

    render() {
        let haveSuffix = '';
        let input = null;
        let thousandSeparator = ' ';
        let decimalSeparator = ',';
        let value = null;

        if (this.props.value && this.props.onChange) {
            value = this.props.value;
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

        if (this.props.type == 'number') {
            input = <StyledNumberFormat
                value={value}
                step={this.props.step ? this.props.step : 1}
                min={this.props.min ? this.props.min : 0}
                max={this.props.max ? this.props.max : null}
                id={this.props.id}
                name={this.props.id}
                required={this.props.required}
                readonly={this.props.readonly}
                disabled={this.props.disabled}
                thousandSeparator={thousandSeparator}
                decimalSeparator={decimalSeparator}
                allowNegative={false}
                allowLeadingZeros={false}
                suffix={haveSuffix}
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
                        id={this.props.id}
                        name={this.props.id}
                        required={this.props.required}
                        onChange={this.handleChange}
                        inlineLabel={this.props.inline}
                    />
        } else {
            input = <StyledInput
                type={this.props.type}
                value={value}
                id={this.props.id}
                name={this.props.id}
                multiple={this.props.multiple}
                accept={this.props.accept}
                required={this.props.required}
                readonly={this.props.readonly}
                disabled={this.props.disabled}
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
                inlineLabel={this.props.inline}
            />
        }

        return (
            <Container>
                {this.props.label &&
                    <Label htmlFor={this.props.id} inlineLabel={this.props.inline} > {this.props.label} </Label>
                }
                {input}
            </Container>
        );
    }
}