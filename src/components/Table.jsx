const { Component } = wp.element;

import styled, { css } from 'styled-components';
import Button from '../components/Button';
import DeleteButton from '../components/DeleteButton';
import Commission from '../components/Commission';
import CAComponent from '../components/CAComponent';
import BChasseur from '../components/BChasseur';
import { Text } from '../theme/design/componentsDesign';
import IconView from '../resources/eye.svg';
import { formatPrix } from '../lib/functions';

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

    ${props =>
        props.inWait &&
        css`
            color: ${props => props.theme.white};
            margin: 5px;

            td {
                border: solid 1px rgba(0,0,0,0);
                border-style: solid none;
                padding: 10px;
                background: ${props => props.theme.orange};
            }

            td:first-child {
                border-left-style: solid;
                border-top-left-radius: 10px; 
                border-bottom-left-radius: 10px;
            }
            
            td:last-child {
                border-right-style: solid;
                border-bottom-right-radius: 10px; 
                border-top-right-radius: 10px; 
            }

            img {
                filter: invert(1) !important;
            }
        `}
`

const ValThHead = styled.th`
    min-width: 115px;
    padding: 0 10px;
    padding-bottom: 25px;
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

    handleDelete(value) {
        if (value) {
            this.setState({ lineStat: 'disable' });
        } else {
            this.setState({ lineStat: null });
        }

    }

    render() {
        let listItems = new Array();
        let optionTable = new Array();

        // Pour chaque entête on assigne la valeurs correspondant
        for (let [searchKey, value] of Object.entries(this.props.orderKeys)) {
            let returnVal = this.props.object[searchKey];

            // Si la clé est un sous element on va le chercher
            if (searchKey.indexOf('.') != -1) {
                searchKey = searchKey.split(".");

                let objVal = this.props.object;
                searchKey.forEach(key => {
                    objVal = objVal[key];
                });

                if (searchKey == 'last_update') {
                    if (this.props.object.statut == 'En attente') {
                        objVal = this.props.object.first_date;
                    }
                }

                if (searchKey == 'BChasseur') {
                    returnVal = <ValTd><BChasseur width wrap idChasseur={this.props.object.id} /></ValTd>;
                } else if (searchKey == 'CA_component_final') {
                    returnVal = <ValTd><CAComponent projetFinaux idChasseur={this.props.object.id} /></ValTd>;
                } else if (searchKey == 'CA_component_previ') {
                    returnVal = <ValTd><CAComponent projetEnCours idChasseur={this.props.object.id} /></ValTd>;
                } else if (searchKey == 'commission_component') {
                    returnVal = <ValTd><Commission ficheBien={this.props.object.id} /></ValTd>;
                } else if (searchKey == 'id') {
                    returnVal = <ValTh scope="row">{objVal}</ValTh>;
                } else if (searchKey == 'last_update') {
                    if (this.props.object.statut == 'En attente') {
                        returnVal = <ValTd>{objVal}</ValTd>;
                    } else {
                        returnVal = <ValTd>{convertDate(objVal)}</ValTd>;
                    }
                } else if (searchKey.indexOf('photo') != -1 || searchKey == 'thumbnail' && (objVal != null && objVal != false)) {
                    returnVal = <ValTd><img src={objVal} /></ValTd>;
                } else {
                    if (Array.isArray(value) && (objVal != null && objVal != '')) {
                        if (value[1] == '%' || value[1] == '€') {
                            returnVal = <ValTd>{formatPrix(objVal, true)} {value[1]}</ValTd>;
                        } else {
                            returnVal = <ValTd>{objVal} {value[1]}</ValTd>;
                        }
                    } else {
                        returnVal = <ValTd>{objVal}</ValTd>;
                    }
                }

                listItems.push(returnVal);
            } else {
                if (searchKey == 'last_update') {
                    if (this.props.object.statut == 'En attente') {
                        returnVal = this.props.object.first_date;
                    }
                }

                if (searchKey == 'BChasseur') {
                    returnVal = <ValTd><BChasseur width wrap idChasseur={this.props.object.id} /></ValTd>;
                } else if (searchKey == 'CA_component_final') {
                    returnVal = <ValTd><CAComponent projetFinaux idChasseur={this.props.object.id} /></ValTd>;
                } else if (searchKey == 'CA_component_previ') {
                    returnVal = <ValTd><CAComponent projetEnCours idChasseur={this.props.object.id} /></ValTd>;
                } else if (searchKey == 'commission_component') {
                    returnVal = <ValTd><Commission ficheBien={this.props.object.id} /></ValTd>;
                } else if (searchKey == 'id') {
                    returnVal = <ValTh scope="row">{returnVal}</ValTh>;
                } else if (searchKey == 'last_update') {
                    if (this.props.object.statut == 'En attente') {
                        returnVal = <ValTd>{returnVal}</ValTd>;
                    } else {
                        returnVal = <ValTd>{convertDate(returnVal)}</ValTd>;
                    }
                } else if (searchKey.indexOf('photo') != -1 || searchKey == 'thumbnail' && (returnVal != null && returnVal != false)) {
                    returnVal = <ValTd><img src={returnVal} /></ValTd>;
                } else {
                    if (Array.isArray(value) && (returnVal != null && returnVal != '')) {
                        if (value[1] == '%' || value[1] == '€') {
                            returnVal = <ValTd>{formatPrix(returnVal, true)} {value[1]}</ValTd>;
                        } else {
                            returnVal = <ValTd>{returnVal} {value[1]}</ValTd>;
                        }
                    } else {
                        returnVal = <ValTd>{returnVal}</ValTd>;
                    }
                }

                listItems.push(returnVal);
            }
        };

        if (this.props.delete == 'propriete') {
            optionTable.push(<ValTd><Text badge red={this.props.object.statut == 'Hors ligne'} green={this.props.object.statut == 'En ligne'} margin='0 20px'>{this.props.object.statut}</Text></ValTd>)
        }

        if (this.props.actions) {
            if (Array.isArray(this.props.actions)) {

            } else {
                switch (this.props.actions) {
                    case "user":
                        optionTable.push(<ValTd>
                            <Button
                                src={IconView}
                                isImg
                                noInvert
                                action='user'
                                idToSee={this.props.id} /></ValTd>);
                        break;

                    case "propriete":
                        optionTable.push(<ValTd>
                            <Button
                                src={IconView}
                                isImg
                                noInvert
                                action='propriete'
                                idToSee={this.props.id} /></ValTd>);
                        break;

                    case "dossier":
                        optionTable.push(<ValTd>
                            <Button
                                src={IconView}
                                isImg
                                noInvert
                                action='dossier'
                                idToSee={this.props.id} /></ValTd>);
                        break;
                }
            }
        }

        if (this.props.delete) {
            optionTable.push(<ValTd><DeleteButton type={this.props.delete} id={this.props.id} onClick={this.handleDelete} /></ValTd>)
        }

        return (
            <Line lineStat={this.state.lineStat} inWait={this.props.isDossier && this.props.object.statut == 'En attente'} >
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
        const headTable = Object.values(props.listeProps).map(item => {
            if (Array.isArray(item)) {
                return <ValThHead key={item[0].toString()} scope="col">{item[0]}</ValThHead>
            } else {
                return <ValThHead key={item.toString()} scope="col">{item}</ValThHead>
            }
        });
        const contentTable = props.data.map(item => <LineTable
            key={item.id}
            isDossier={props.isDossier}
            delete={props.deleteType}
            actions={props.actionType}
            id={item.id}
            object={item}
            orderKeys={props.listeProps} />);

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


function convertDate(value) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let date = new Date(value);
    return date.toLocaleDateString('FR-fr', options);
}