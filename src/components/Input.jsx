const { Component } = wp.element;

import styled, { css } from 'styled-components';
import NumberFormat from 'react-number-format';

const StyledInput = styled.input`
    ${props =>
        props.inlineLabel &&
        css`
            display: inline-block;
            margin-left: 15px;
        `}
`


const StyledNumberFormat = styled(NumberFormat)`
    ${props =>
        props.inlineLabel &&
        css`
            display: inline-block;
            margin-left: 15px;
        `}
`

const Container = styled.div`

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
        let haveSuffix = null;
        let input = null;

        if (this.props.euro) {
            haveSuffix = ' €';
        } else if (this.props.pourcent) {
            haveSuffix = ' %';
        }

        if (this.props.type == 'number') {
            input = <StyledNumberFormat
                        value={this.state.inputValue}
                        step={this.props.step ? this.props.step : null}
                        min={this.props.min ? this.props.min : null}
                        max={this.props.max ? this.props.max : null}
                        id={this.props.id}
                        name={this.props.id}
                        required={this.props.required}
                        readonly={this.props.readonly}
                        disabled={this.props.disabled}
                        thousandSeparator=" "
                        decimalSeparator=","
                        allowNegative={false}
                        allowLeadingZeros={false}
                        suffix={haveSuffix}
                        onValueChange={this.handleChangeNumber}
                        inlineLabel={this.props.inline}
                    />
        } else {
            input = <StyledInput
                        type={this.props.type}
                        value={this.state.inputValue}
                        id={this.props.id}
                        name={this.props.id}
                        required={this.props.required}
                        readonly={this.props.readonly}
                        disabled={this.props.disabled}
                        onChange={this.handleChange}
                        inlineLabel={this.props.inline}
                    />
        }

        return (
            <div>
                {this.props.label &&
                    <label htmlFor={this.props.id} > {this.props.label} </label>
                }
                {input}
            </div>
        );
    }
}