const { Component } = wp.element;
import { Switch, Route, Redirect } from "react-router-dom";

import Root from "./theme/layout/Root";
import AppContainer from "./theme/layout/AppContainer";

import Board from './views/Board';
import View from './theme/layout/View';

export default class App extends Component {  // instead of: ...extends React.Component
    constructor(props) {
        super(props);
        this.state = {};
        this.props = {
            propriete: { 'frais_de_notaire': 'Frais de notaire', 'ville': 'Ville lala' },
        }
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
                                listProps={this.props.propriete} />
                        </Route>
                        <Route path="/immoTEA/board/chasseurs">
                            <View 
                                title='Liste des chasseurs'
                                listProps={null} />
                        </Route>
                        <Route path="/immoTEA/board/clients">
                            <View 
                                title='Liste des clients'
                                listProps={null} />
                        </Route>
                        <Route path="/immoTEA/board/notifications">
                            <View 
                                title='Liste des notifications'
                                listProps={null} />
                        </Route>
                        <Route path="/immoTEA/board/dossiers">
                            <View 
                                title='Liste des dossiers'
                                listProps={null} />
                        </Route>

                        <Redirect to="/immoTEA/board" />
                    </Switch>
                </AppContainer>
            </Root>
        );
    }
}