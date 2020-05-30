import Board from '../../views/Board';
import Notification from '../../views/Notification';
import Chasseur from '../../views/Chasseur';
import Client from '../../views/Client';
import Dossier from '../../views/Dossier';
import Propriete from '../../views/Propriete';

export default function Switcher(props) {
    let renderView = <Board />;

    switch (props.view) {
        case 'Tableau de bord':
            renderView = <Board />;
            break;

        case 'Propriétés':
            renderView = <Propriete />;
            break;

        case 'Chasseurs':
            renderView = <Chasseur />;
            break;
            
        case 'Mes clients':
            renderView = <Client />;
            break;

        case 'Notifications':
            renderView = <Notification />;
            break;

        case 'Suivi dossiers':
            renderView = <Dossier />;
            break;
    
        default:
            renderView = <Board />;
            break;
    }

    return (
        <>
            {renderView}
        </>
    );
}