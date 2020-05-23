import { Provider } from 'react-redux';
import Store from './store';

import Root from "./theme/layout/Root";
import AppContainer from "./theme/layout/AppContainer";
import Switcher from './theme/layout/Switcher';

export default () => { 
    return (
        <Provider store={Store}>
            <Root>
                <AppContainer>
                    <Switcher />
                </AppContainer>
            </Root>
        </Provider>
    );
}