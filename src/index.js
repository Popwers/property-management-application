const { Component, render } = wp.element;
import Root from "./theme/layout/Root";

class App extends Component {     // instead of: ...extends React.Component
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Root>
                <h1>App</h1>
            </Root>
        );
    }
}

/* RENDER APP */
render(
    <App />,
    document.getElementById('root-app')
);