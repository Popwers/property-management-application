import { connect } from 'react-redux';
import {
    seeUserData,
    seeProprieteData,
    seeDossierData,
    toogleUserModal,
    toogleProprieteModal,
    toogleDossierModal,
    toogleAddClient,
    toogleAddChasseur,
    toogleAddPropriete,
    updateUserData,
    updateProprieteData,
} from '../actions';
import { StyledButton } from '../theme/design/componentsDesign'

function Button(props) {
    let AddIconLeft = null;
    let AddIconRight = null;

    if (props.src) {
        if (props.iconRight) {
            AddIconRight = <img src={props.src} alt="icon" />;
        } else {
            AddIconLeft = <img src={props.src} alt="icon" />;
        }
    }

    async function handleClick(event) {
        event.preventDefault();
        if (props.onClick) props.onClick();
        if (props.action && props.idToSee) {
            switch (props.action) {
                case "user":
                    props.seeUserData(props.idToSee);
                    props.toogleUserModal();
                    break;

                case "propriete":
                    props.seeProprieteData(props.idToSee, props.listDossiers);
                    props.toogleProprieteModal();
                    break;

                case "dossier":
                    props.seeDossierData(props.idToSee);
                    props.toogleDossierModal();
                    break;

                case "updatePropriete":
                    let returnProp = props.listPropriete.filter(item => item.id == props.idToSee);
                    props.updateProprieteData('null');
                    props.updateProprieteData(returnProp);
                    props.toogleAddPropriete();
                    break;

                case "updateUser":
                    let returnUser = props.listUser.filter(item => item.id == props.idToSee)[0];
                    await props.updateUserData('null');
                    props.updateUserData(returnUser);
                    props.toogleUserModal();

                    if (returnUser.role == 'client__investisseur') {                        
                        props.toogleAddClient();
                    } else {
                        props.toogleAddChasseur();
                    }                    
                    break;
            }
        }
    }

    return (
        <StyledButton
            hide={props.hide}
            disable={props.disable}
            href={props.link ? props.link : "#"}
            small={props.small}
            light={props.light}
            orange={props.orange}
            blue={props.blue}
            red={props.red}
            green={props.green}
            iconRight={props.iconRight}
            src={props.src}
            isImg={props.isImg}
            noInvert={props.noInvert}
            onClick={handleClick} >

            {AddIconLeft != null ? AddIconLeft : null}
            {props.children}
            {AddIconRight != null ? AddIconRight : null}
        </StyledButton>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        seeUserData: (id) => dispatch(seeUserData(id)),
        seeProprieteData: (id, dossiers) => dispatch(seeProprieteData(id, dossiers)),
        seeDossierData: (id) => dispatch(seeDossierData(id)),
        toogleUserModal: () => dispatch(toogleUserModal()),
        toogleProprieteModal: () => dispatch(toogleProprieteModal()),
        toogleDossierModal: () => dispatch(toogleDossierModal()),

        toogleAddClient: () => dispatch(toogleAddClient()),
        toogleAddChasseur: () => dispatch(toogleAddChasseur()),
        toogleAddPropriete: () => dispatch(toogleAddPropriete()),
        updateUserData: (data) => dispatch(updateUserData(data)),
        updateProprieteData: (data) => dispatch(updateProprieteData(data)),
    }
}

const mapStateToProps = (state) => {
    return {
        listDossiers: state.manageDossier.listDossier.data,
        listUser: state.manageUser.listUser.data,
        listPropriete: state.managePropriete.listPropriete.data,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)