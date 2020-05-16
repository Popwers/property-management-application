import {StyledButton} from '../theme/design/componentsDesign'

export default function Button(props) {
    let AddIconLeft = null;
    let AddIconRight = null;

    if (props.src) {
        if (props.iconRight) {
            AddIconRight = <img src={props.src} alt="icon" />;
        } else {
            AddIconLeft = <img src={props.src} alt="icon" />;
        }
    }

    return (
        <StyledButton 
            href={props.link ? props.link : "#"}
            small={props.small}
            light={props.light}
            orange={props.orange}
            blue={props.blue}
            red={props.red}
            green={props.green}
            iconRight={props.iconRight}
            src={props.src} >

            {AddIconLeft != null ? AddIconLeft : null}
            {props.children}
            {AddIconRight != null ? AddIconRight : null}
        </StyledButton>
    );
}