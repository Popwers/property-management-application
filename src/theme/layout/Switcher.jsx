import { connect } from 'react-redux';

import Board from '../../views/Board';
import Notification from '../../views/Notification';
import Chasseur from '../../views/Chasseur';
import Client from '../../views/Client';
import Dossier from '../../views/Dossier';
import Propriete from '../../views/Propriete';

function Switcher(props) {
    let renderView = <Board />;

    switch (props.view) {
        case 'Tableau de bord':
            renderView = <Board userData={props.myUserData} />;
            break;

        case 'Propriétés':
            renderView = <Propriete userData={props.myUserData} />;
            break;

        case 'Chasseurs':
            renderView = <Chasseur userData={props.myUserData} />;
            break;
            
        case 'Mes clients':
            renderView = <Client userData={props.myUserData} />;
            break;

        case 'Notifications':
            renderView = <Notification userData={props.myUserData} />;
            break;

        case 'Suivi dossiers':
            renderView = <Dossier userData={props.myUserData} />;
            break;
    
        default:
            renderView = <Board userData={props.myUserData} />;
            break;
    }

    return (
        <>
            {renderView}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        myUserData: state.general.myData.data
    };
}

export default connect(mapStateToProps)(Switcher)