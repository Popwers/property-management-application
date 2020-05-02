const { Component } = wp.element;
import Root from "./theme/layout/Root";

export default class App extends Component {     // instead of: ...extends React.Component
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Root>
                <h1>App v4</h1>
                <p>test</p>
            </Root>
        );
    }
}