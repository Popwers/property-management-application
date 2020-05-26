import { connect } from 'react-redux';
import { handleChangeAddProprieteModal } from '../actions';

import styled from 'styled-components';
import Input from '../components/Input';
import { RowInput, TitleForm, Label, Form } from '../theme/design/componentsDesign';

const SendButton = styled.button`
    cursor: pointer;
    display: inline-block;
    position: relative;
    text-decoration: none;
    font-size: 16px;
    background: ${props => props.theme.blue};
    color: ${props => props.theme.white};
    padding: 10px 20px;
    margin-right: 10px;
    margin-top: 50px;
    margin-left: 0px;
    margin-bottom: 20px;
    border-radius: 100px;
    border: none;
    outline: none;
    font-weight: ${props => props.theme.regular};
    box-shadow: ${props => props.theme.shadows};
    transition: transform 0.3s,
                background 0.3s,
                color 0.3s,
                opacity 0.3s;

    &:hover {
        transform: scale(1.1);
        background-color: ${props => props.theme.orange};
        color: ${props => props.theme.white};
    }

    &:active {
        transform: scale(0.95) !important;
        background-color: ${props => props.theme.red};
    }
`

function AddPropriete(props) {
    return (
        <Form enctype="multipart/form-data" onSubmit={() => console.log('Send' + event.target.value)}>
            <Input value={props.modalData.chasseur} onChange={props.handleChangeModal} type="hidden" id="chasseur" />

            <TitleForm>Détails</TitleForm>

            <Input value={props.modalData.titre} onChange={props.handleChangeModal} required type="text" id="titre" label="Titre" />
            <Input value={props.modalData.filesPhotos} onChange={props.handleChangeModal} type="file" id="filesPhotos" multiple="true" accept=".png, .jpg, .jpeg" label='Ajouter des photos' />

            <Input value={props.modalData.description} onChange={props.handleChangeModal} type='textarea' id="description" label='Courte description' />
            <Input value={props.modalData.adresse_postale} onChange={props.handleChangeModal} type='text' id="adresse_postale" label='Adresse postale' />
            <Input value={props.modalData.artisan} onChange={props.handleChangeModal} type='text' id="artisan" label='Artisan' />

            <RowInput>
                <Input value={props.modalData.ville} onChange={props.handleChangeModal} type='text' id="ville" label='Ville' />
                <Input value={props.modalData.zip_code_postal} onChange={props.handleChangeModal} type='number' id="zip_code_postal" thousandSeparator='false' label='ZIP / Code postal' />
                <Input value={props.modalData.type_bien} onChange={props.handleChangeModal} type='select' id="type_bien" label='Type de bien' list={['Appartement', 'Maison', 'Autre']} required />
            </RowInput>

            <RowInput>
                <Input value={props.modalData.annee} onChange={props.handleChangeModal} type='number' id="annee" thousandSeparator='false' label='Année' />
                <Input value={props.modalData.superficie} onChange={props.handleChangeModal} type='number' min="1" label='Superficie' id="superficie" suffix="m²" required />
                <Input value={props.modalData.superficie_habitable} onChange={props.handleChangeModal} type='number' min="1" id="superficie_habitable" label='Superficie Habitable' suffix="m²" />
            </RowInput>


            <TitleForm>Agencement intérieur</TitleForm>

            <RowInput>
                <Input value={props.modalData.nombre_de_pieces} onChange={props.handleChangeModal} type='number' min="1" id="nombre_de_pieces" label='Nombre de Pièce' required />
                <Input value={props.modalData.nombre_de_chambre} onChange={props.handleChangeModal} type="number" id="nombre_de_chambre" label='Nombre de chambre' required />
                <Input value={props.modalData.nombre_de_salles_de_bains} onChange={props.handleChangeModal} type="number" id="nombre_de_salles_de_bains" label='Nombre de salle de Bain' required />
            </RowInput>

            <RowInput>
                <Input value={props.modalData.nombre_de_wc} onChange={props.handleChangeModal} type="number" id="nombre_de_wc" label='Nombre de WC' required />
                <Input value={props.modalData.nombre_de_celliers} onChange={props.handleChangeModal} type="number" id="nombre_de_celliers" label='Nombre de Cellier' required />
                <Input value={props.modalData.nombre_de_buanderies} onChange={props.handleChangeModal} type="number" id="nombre_de_buanderies" label='Nombre de Buanderie' required />
            </RowInput>

            <RowInput>
                <Input value={props.modalData.niveaux} onChange={props.handleChangeModal} type="number" id="niveaux" label='Nombre de Niveaux' required />
                <Input value={props.modalData.cuisine} onChange={props.handleChangeModal} type="checkbox" id="cuisine" label='Cuisine' />
                <Input value={props.modalData.isolation} onChange={props.handleChangeModal} type="checkbox" id="isolation" label='Isolation' />
            </RowInput>


            <TitleForm>Agencement extérieur</TitleForm>

            <RowInput>
                <Input value={props.modalData.caves} onChange={props.handleChangeModal} required type="number" step=".01" id="caves" label='Nombre de cave' />
                <Input value={props.modalData.terrases} onChange={props.handleChangeModal} required type="number" step=".01" id="terrases" label='Nombre de terrase' />
                <Input value={props.modalData.balcons} onChange={props.handleChangeModal} required type="number" step=".01" id="balcons" label='Nombre de balcon' />
            </RowInput>

            <RowInput>
                <Input value={props.modalData.varangues} onChange={props.handleChangeModal} required type="number" step=".01" id="varangues" label='Nombre de varangue' />
                <Input value={props.modalData.piscines} onChange={props.handleChangeModal} required type="number" step=".01" id="piscines" label='Nombre de piscine' />
                <Input value={props.modalData.jacuzzis} onChange={props.handleChangeModal} required type="number" step=".01" id="jacuzzis" label='Nombre de jacuzzi' />
            </RowInput>


            <TitleForm>Copropriété</TitleForm>

            <RowInput>
                <Input value={props.modalData.nombre_de_lots} onChange={props.handleChangeModal} required type="number" id="nombre_de_lots" label='Nombre de lots' />
                <Input value={props.modalData.derniere_assemble} onChange={props.handleChangeModal} required type="number" id="derniere_assemble" thousandSeparator='false' label='Dernière assemblée' />
                <Input value={props.modalData.syndic} onChange={props.handleChangeModal} type="text" id="syndic" label='Syndic' />
            </RowInput>

            <Input value={props.modalData.details_charges_copropriete} onChange={props.handleChangeModal} type='textarea' id="details_charges_copropriete" label='Détails charges' placeholder="Exemple: Eau, EDF communs, Gardien, Chauffage, Nettoyage, Syndic"></Input>


            <TitleForm>Chauffage</TitleForm>

            <Input value={props.modalData.type_de_chauffage} onChange={props.handleChangeModal} type="text" id="type_de_chauffage" label='Type' />
            <Input value={props.modalData.mode_de_chauffage} onChange={props.handleChangeModal} type="text" id="mode_de_chauffage" label='Mode' />
            <Input value={props.modalData.energie_du_chauffage} onChange={props.handleChangeModal} type="text" id="energie_du_chauffage" label='Énergie' />


            <TitleForm>Équipements</TitleForm>
            <Input value={props.modalData.equipements} onChange={props.handleChangeModal} type='textarea' id="equipements" placeholder="Exemple: Interphone, Câble, Double vitrage" />


            <TitleForm>Diagnostics</TitleForm>
            <Input value={props.modalData.diagnostics} onChange={props.handleChangeModal} type='textarea' id="diagnostics" />


            <TitleForm>Points positifs et négatifs</TitleForm>
            <Input value={props.modalData.points_positif_et_negatifs} onChange={props.handleChangeModal} type='textarea' id="points_positif_et_negatifs" />


            <TitleForm>Frais d'acquisition</TitleForm>

            <RowInput>
                <Input value={props.modalData.prix_du_bien} onChange={props.handleChangeModal} required type="number" step=".01" id="prix_du_bien" euro label='Prix du bien' />
                <Input value={props.modalData.frais_dagence} onChange={props.handleChangeModal} required type="number" step=".01" id="frais_dagence" euro label="Frais d'agence" />
                <Input value={props.modalData.frais_de_notaire} onChange={props.handleChangeModal} required type="number" step=".01" id="frais_de_notaire" euro label='Frais de notaire' />
            </RowInput>

            <RowInput>
                <Input value={props.modalData.frais_de_travaux} onChange={props.handleChangeModal} required type="number" step=".01" id="frais_de_travaux" euro label='Estimation Travaux' />
                <Input value={props.modalData.mobilier_equipement} onChange={props.handleChangeModal} required type="number" step=".01" id="mobilier_equipement" euro label='Mobilier / Equipement' />
                <Input value={props.modalData.honoraires_immomalin} onChange={props.handleChangeModal} required type="number" step=".01" id="honoraires_immomalin" euro label='Commission chasseur' />
            </RowInput>

            <RowInput result>
                <Input value={props.modalData.projet_global} onChange={props.handleChangeModal} required type="number" step=".01" id="projet_global" euro label="Projet Global (Hors frais de notaire)" readonly disabled />
                <Input value={props.modalData.budget} onChange={props.handleChangeModal} required type="number" step=".01" id="budget" euro label='BUDGET' readonly disabled />
            </RowInput>


            <TitleForm>Charges locatif</TitleForm>

            <RowInput>
                <Label>Charges copropriété</Label>
                <RowInput dispatch>
                    <Input value={props.modalData.charges_copropriete_mensuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="charges_copropriete_mensuelles" label='Mensuelles' />
                    <Input value={props.modalData.charges_copropriete_annuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="charges_copropriete_annuelles" label='Annuelles' />
                </RowInput>
            </RowInput>

            <RowInput>
                <Label>Taxe foncière</Label>
                <RowInput dispatch>
                    <Input value={props.modalData.taxe_fonciere_mensuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="taxe_fonciere_mensuelles" label='Mensuelles' />
                    <Input value={props.modalData.taxe_fonciere_annuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="taxe_fonciere_annuelles" label='Annuelles' />
                </RowInput>
            </RowInput>

            <RowInput>
                <Label>Assurance PNO</Label>
                <RowInput dispatch>
                    <Input value={props.modalData.assurance_pno_mensuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="assurance_pno_mensuelles" label='Mensuelles' />
                    <Input value={props.modalData.assurance_pno_annuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="assurance_pno_annuelles" label='Annuelles' />
                </RowInput>
            </RowInput>

            <RowInput>
                <Label>Assurances locatives</Label>
                <RowInput dispatch>
                    <Input value={props.modalData.assurances_locatives_mensuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="assurances_locatives_mensuelles" label='Mensuelles' />
                    <Input value={props.modalData.assurances_locatives_annuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="assurances_locatives_annuelles" label='Annuelles' />
                </RowInput>
            </RowInput>

            <RowInput>
                <Label>Gestion locative</Label>
                <RowInput dispatch>
                    <Input value={props.modalData.gestion_locative_mensuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="gestion_locative_mensuelles" label='Mensuelles' />
                    <Input value={props.modalData.gestion_locative_annuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="gestion_locative_annuelles" label='Annuelles' />
                </RowInput>
            </RowInput>

            <RowInput>
                <Label>Frais divers</Label>
                <RowInput dispatch>
                    <Input value={props.modalData.frais_divers_mensuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="frais_divers_mensuelles" label='Mensuelles' />
                    <Input value={props.modalData.frais_divers_annuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="frais_divers_annuelles" label='Annuelles' />
                </RowInput>
            </RowInput>

            <RowInput>
                <Label>Eau</Label>
                <RowInput dispatch>
                    <Input value={props.modalData.frais_electricite_mensuelle} onChange={props.handleChangeModal} required euro type="number" step=".01" id="frais_electricite_mensuelle" label='Mensuelles' />
                    <Input value={props.modalData.frais_electricite_annuelle} onChange={props.handleChangeModal} required euro type="number" step=".01" id="frais_electricite_annuelle" label='Annuelles' />
                </RowInput>
            </RowInput>

            <RowInput>
                <Label>Électricité</Label>
                <RowInput dispatch>
                    <Input value={props.modalData.frais_eau_mensuelle} onChange={props.handleChangeModal} required euro type="number" step=".01" id="frais_eau_mensuelle" label='Mensuelles' />
                    <Input value={props.modalData.frais_eau_annuelle} onChange={props.handleChangeModal} required euro type="number" step=".01" id="frais_eau_annuelle" label='Annuelles' />
                </RowInput>
            </RowInput>

            <RowInput>
                <Label>Forfait internet</Label>
                <RowInput dispatch>
                    <Input value={props.modalData.forfait_internet_mensuelle} onChange={props.handleChangeModal} required euro type="number" step=".01" id="forfait_internet_mensuelle" label='Mensuelles' />
                    <Input value={props.modalData.forfait_internet_annuelle} onChange={props.handleChangeModal} required euro type="number" step=".01" id="forfait_internet_annuelle" label='Annuelles' />
                </RowInput>
            </RowInput>

            <RowInput result>
                <Label>TOTAL</Label>
                <RowInput dispatch>
                    <Input value={props.modalData.total_charges_mensuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="total_charges_mensuelles" readonly disabled label='Mensuelles' />
                    <Input value={props.modalData.total_charges_annuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="total_charges_annuelles" readonly disabled label='Annuelles' />
                </RowInput>
            </RowInput>


            <TitleForm>Revenus locatif</TitleForm>

            <RowInput>
                <Label>Loyer prévisionnel</Label>
                <RowInput dispatch>
                    <Input value={props.modalData.loyer_previsionnel_mensuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="loyer_previsionnel_mensuelles" label='Mensuelles' />
                    <Input value={props.modalData.loyer_previsionnel_annuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="loyer_previsionnel_annuelles" label='Annuelles' readonly disabled />
                </RowInput>
            </RowInput>

            <RowInput>
                <Label>Vacance locative</Label>
                <Input value={props.modalData.vacance_locative} onChange={props.handleChangeModal} required pourcent type="number" step=".01" id="vacance_locative" />
            </RowInput>

            <RowInput result>
                <Label>TOTAL</Label>
                <RowInput dispatch>
                    <Input value={props.modalData.total_revenus_mensuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="total_revenus_mensuelles" label='Mensuelles' readonly disabled />
                    <Input value={props.modalData.total_revenus_annuelles} onChange={props.handleChangeModal} required euro type="number" step=".01" id="total_revenus_annuelles" label='Annuelles' readonly disabled />
                </RowInput>
            </RowInput>

            <RowInput>
                <Label>Solde</Label>
                <Input value={props.modalData.solde} onChange={props.handleChangeModal} required euro type="number" step=".01" id="solde" readonly disabled />
            </RowInput>


            <TitleForm>Vue synthétique</TitleForm>

            <RowInput>
                <Label>Rentabilité</Label>
                <RowInput dispatch>
                    <Input value={props.modalData.rentabilite_net} onChange={props.handleChangeModal} required pourcent type="number" step=".01" id="rentabilite_net" label='Brut' readonly disabled />
                    <Input value={props.modalData.rentabilite_brut} onChange={props.handleChangeModal} required pourcent type="number" step=".01" id="rentabilite_brut" label='Net' readonly disabled />
                </RowInput>
            </RowInput>

            <RowInput>
                <Label>Cashflow Brut</Label>
                <Input value={props.modalData.cashflow_mensuel_brut} onChange={props.handleChangeModal} required euro type="number" step=".01" id="cashflow_mensuel_brut" label='mensuelle' readonly disabled />
            </RowInput>

            <RowInput>
                <Label>Prix au m²</Label>
                <Input value={props.modalData.prix_au_m} onChange={props.handleChangeModal} required euro type="number" step=".01" id="prix_au_m" readonly disabled />
            </RowInput>

            <SendButton noMarginLeft type="submit">Enregistrer</SendButton>
        </Form>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        handleChangeModal: (key, data) => dispatch(handleChangeAddProprieteModal(key, data))
    }
}

const mapStateToProps = (state) => {
    return {
        modalData: state.addModal.addProprieteModal
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPropriete)