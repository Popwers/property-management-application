import {StyledButton} from '../theme/design/componentsDesign'

export default function Button(props) {
    return (
        <StyledButton href="#" small={props.small}>
            {props.children}
        </StyledButton>
    );
}