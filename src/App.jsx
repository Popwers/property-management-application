const { Component } = wp.element;
import { Switch, Route } from "react-router-dom";

import Root from "./theme/layout/Root";
import AppContainer from "./theme/layout/AppContainer";

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default class App extends Component {  // instead of: ...extends React.Component
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Root>
                <AppContainer>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </AppContainer>
            </Root>
        );
    }
}