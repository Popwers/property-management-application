const { Component } = wp.element;
import { Switch, Route, Redirect } from "react-router-dom";

import Root from "./theme/layout/Root";
import AppContainer from "./theme/layout/AppContainer";

import Board from './views/Board';
import View from './theme/layout/View';

export default class App extends Component { 
    constructor(props) {
        super(props);
        this.state = {};

        this.propriete = { 'ville': 'Ville lala' };
        this.chasseurs = { 'frais_de_notaire': 'Frais de notaire', 'ville': 'Ville lala' };
        this.clients = { 'frais_de_notaire': 'Frais de notaire', 'ville': 'Ville lala' };
        this.notifications = { 'frais_de_notaire': 'Frais de notaire', 'ville': 'Ville lala' };
        this.dossiers = { 'frais_de_notaire': 'Frais de notaire', 'ville': 'Ville lala' };
    }

    render() {
        return (
            <Root>
                <AppContainer>
                    <Switch>
                        <Route exact path="/immoTEA/board">
                            <Board />
                        </Route>
                        <Route path="/immoTEA/board/proprietes">
                            <View 
                                title='Liste des propriétés'
                                listProps={this.propriete} />
                        </Route>
                        <Route path="/immoTEA/board/chasseurs">
                            <View 
                                title='Liste des chasseurs'
                                listProps={this.chasseurs} />
                        </Route>
                        <Route path="/immoTEA/board/clients">
                            <View 
                                title='Liste des clients'
                                listProps={this.clients} />
                        </Route>
                        <Route path="/immoTEA/board/notifications">
                            <View 
                                title='Liste des notifications'
                                listProps={this.notifications} />
                        </Route>
                        <Route path="/immoTEA/board/dossiers">
                            <View 
                                title='Liste des dossiers'
                                listProps={this.dossiers} />
                        </Route>

                        <Redirect to="/immoTEA/board" />
                    </Switch>
                </AppContainer>
            </Root>
        );
    }
}