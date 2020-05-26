const { Component } = wp.element;

import styled, { css } from 'styled-components';
import NumberFormat from 'react-number-format';

const Label = styled.label`
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
`

const StyledArea = styled.textarea`
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
`

const StyledSelect = styled.select`
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
`

const StyledNumberFormat = styled(NumberFormat)`
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
`

const Container = styled.div`
    margin-top: 20px;
    margin-right: 45px;
`

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

    componentDidMount() {
        if (this.props.value != null && this.props.value != '') this.setState({ inputValue: this.props.value });
    }

    handleChange(event) {
        this.setState({ inputValue: event.target.value });
        if (this.props.handleChange) this.props.handleChange(event.target.value);
    }

    handleChangeNumber(values) {
        const { formattedValue, value } = values;
        this.setState({ formattedValue: formattedValue, inputValue: value });
        if (this.props.handleChange) this.props.handleChange(value);
    }

    render() {
        let haveSuffix = '';
        let input = null;
        let thousandSeparator = ' ';
        let decimalSeparator = ',';

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
                        value={this.state.inputValue}
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
        } else if (this.props.type == 'textearea') {
            input = <StyledArea
                        value={this.state.inputValue}
                        required={this.props.required}
                        id={this.props.id}
                        name={this.props.id}
                        placeholder={this.props.placeholder}
                        onChange={this.handleChange}></StyledArea>;
        } else if (this.props.type == 'select') {
            input = <StyledSelect 
                        value={this.state.inputValue}
                        required={this.props.required}
                        id={this.props.id}
                        name={this.props.id}
                        onChange={this.handleChange} >
                            <option value="" selected disabled hidden>Choisir...</option>
                            {this.props.list.map(item => <option>{item}</option>)}
                    </StyledSelect>;
        } else {
            input = <StyledInput
                        type={this.props.type}
                        value={this.state.inputValue}
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
                    <Label htmlFor={this.props.id} > {this.props.label} </Label>
                }
                {input}
            </Container>
        );
    }
}