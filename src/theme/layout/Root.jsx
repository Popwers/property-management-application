import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { themeVariable } from '../variable';

const GlobalStyle = createGlobalStyle`
  body, html {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&family=Roboto:wght@300;500;700&display=swap');

    font-family: ${props => props.theme.montserrat};
	font-weight: ${props => props.theme.regular};
    color: ${props => props.theme.black};
  }
`

export default (props) => {
	return (
		<ThemeProvider theme={themeVariable}>
			<GlobalStyle />
			{props.children}
		</ThemeProvider>
	);
}