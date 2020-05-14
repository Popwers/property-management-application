import { setDocumentTitle } from '../lib/functions';

export default function Board(props) {
    setDocumentTitle('Tableau de bord');

    return (
        <>
        <h2>Bonjour, Benoit</h2>

        <h2>Vos chiffres</h2>
        </>
    );
}