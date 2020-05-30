const { Component } = wp.element;

import styled, { css } from 'styled-components';
import DeleteButton from '../components/DeleteButton';

const StyledTable = styled.table`
    margin-top: 40px;
    border-collapse: collapse;
` 

const Line = styled.tr`
    padding: 20px 0;
    border-bottom: 1px solid #D8D8D8;

    &:last-child {
         border-bottom: none;
    }

    ${props =>
        props.lineStat == 'disable' &&
        css`
            pointer-events: none;
            opacity: 0.4;
        `}
` 

const ValThHead = styled.th`
    padding: 0 10px;
    font-size: 15px;
    text-align: center;

    &:first-child {
        padding-left: 0px;
    }
`

const ValTh = styled.th`
    padding: 20px 10px;
    font-family: ${props => props.theme.robot};
    font-size: 13px;
    font-weight: ${props => props.theme.light};
    text-align: center;

    &:first-child {
        padding-left: 0px;
    }

    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 15px;
        box-shadow: ${props => props.theme.shadows};
    }
`

const ValTd = styled.td`
    padding: 20px 10px;
    font-family: ${props => props.theme.robot};
    font-size: 13px;
    font-weight: ${props => props.theme.light};
    text-align: center;

    &:first-child {
        padding-left: 0px;
    }

    img {
        width: 100%;
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 15px;
        box-shadow: ${props => props.theme.shadows};
    }
`

class LineTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lineStat: null,
        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.setState({ lineStat: 'disable' })
    }

    render() {
        let listItems = new Array();
        let optionTable = new Array();

        // Pour chaque entête on assigne la valeurs correspondant
        this.props.orderKeys.forEach(searchKey => {
            let returnVal = this.props.object[searchKey];

            // Si la clé est un sous element on va le chercher
            if (searchKey.indexOf('.') != -1) {
                searchKey = searchKey.split(".");

                let objVal = this.props.object;
                searchKey.forEach(key => {
                    objVal = objVal[key];
                });

                if (searchKey == 'id') {
                    returnVal = <ValTh scope="row">{objVal}</ValTh>;
                } else if (searchKey.indexOf('photo') != -1 || searchKey == 'thumbnail' && (objVal != null && objVal != false)) {
                    returnVal = <ValTd><img src={objVal} /></ValTd>;
                } else {
                    returnVal = <ValTd>{objVal}</ValTd>;
                }

                listItems.push(returnVal);
            } else {
                if (searchKey == 'id') {
                    returnVal = <ValTh scope="row">{returnVal}</ValTh>;
                } else if (searchKey.indexOf('photo') != -1 || searchKey == 'thumbnail' && (returnVal != null && returnVal != false)) {
                    returnVal = <ValTd><img src={returnVal} /></ValTd>;
                } else {
                    returnVal = <ValTd>{returnVal}</ValTd>;
                }

                listItems.push(returnVal);
            }
        });

        if (this.props.delete) {
            optionTable.push(<ValTd><DeleteButton type={this.props.delete} id={this.props.id} onClick={this.handleDelete} /></ValTd>)
        }

        return (
            <Line key={this.props.id} lineStat={this.state.lineStat}>
                {listItems}
                {optionTable}
            </Line>
        );
    }
}

export default function Table(props) {
    if (props.statut == 'error') {
        return <div>Impossible de charger les données ...</div>;
    } else if (props.statut == null && props.data == null) {
        return <div>Chargement...</div>;
    } else if (props.statut != null && props.data == null) {
        return <div>{props.empty}</div>;
    } else {
        const headTable = Object.values(props.listeProps).map(item => (<ValThHead scope="col">{item}</ValThHead>));
        const contentTable = props.data.map(item => <LineTable
                                                            delete={props.deleteType}
                                                            id={item.id}
                                                            object={item}
                                                            orderKeys={Object.keys(props.listeProps)} />);

        return (
            <StyledTable>
                <thead>
                    <tr>
                        {headTable}
                    </tr>
                </thead>

                <tbody>
                    {contentTable}
                </tbody>
            </StyledTable>
        );
    }
}