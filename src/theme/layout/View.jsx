import { setDocumentTitle } from '../../lib/functions';
import { TitleSection } from '../design/componentsDesign';
import Table from '../../components/Table';

export default function Section(props) {
    setDocumentTitle(props.title);
    
    return (
        <>
            <TitleSection>{props.title}</TitleSection>
            <Table listeProps={props.listProps} />
        </>
    );
}