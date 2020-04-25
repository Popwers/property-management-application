import { ThemeProvider } from 'styled-components';
import { themeVariable } from '../variable';

export default (props) => {
    return (
        <ThemeProvider theme={themeVariable}>
            {props.children}
        </ThemeProvider>
    );
}