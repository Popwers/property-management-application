import { Switch, Route, Redirect } from "react-router-dom";

import Board from '../../views/Board';
import Notification from '../../views/Notification';
import Chasseur from '../../views/Chasseur';
import Client from '../../views/Client';
import Dossier from '../../views/Dossier';
import Propriete from '../../views/Propriete';

export default function Switcher() {
    return (
        <Switch>
            <Route exact path="/immoTEA/board">
                <Board />
            </Route>
            <Route path="/immoTEA/board/proprietes">
                <Propriete />
            </Route>
            <Route path="/immoTEA/board/chasseurs">
                <Chasseur />
            </Route>
            <Route path="/immoTEA/board/clients">
                <Client />
            </Route>
            <Route path="/immoTEA/board/notifications">
                <Notification />
            </Route>
            <Route path="/immoTEA/board/dossiers">
                <Dossier />
            </Route>

            <Redirect to="/immoTEA/board" />
        </Switch>
    );
}