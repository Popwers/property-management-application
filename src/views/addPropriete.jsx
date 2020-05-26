import Input from '../components/Input';
import { RowInput, TitleForm, Label } from '../theme/design/componentsDesign';

export default (props) => {
    return (
        <form enctype="multipart/form-data">
            <Input type="hidden" id="chasseur" value="" />*

            <TitleForm>Détails</TitleForm>

            <Input required type="text" id="titre" label="Titre" />
            <Input type="file" id="filesPhotos" multiple="true" accept=".png, .jpg, .jpeg" label='Ajouter des photos' />*

            <Input type='textarea' id="description" label='Courte description' />
            <Input type='text' id="adresse_postale" label='Adresse postale' />*
            <Input type='text' id="adresse_postale" label='artisan' />*

            <RowInput>
                <Input type='text' id="ville" label='Ville' />*
                <Input type='number' id="zip_code_postal" thousandSeparator='false' label='ZIP / Code postal' />*
                <Input type='select' id="type_bien" label='Type de bien' list={['Appartement', 'Maison', 'Autre']} required />*
            </RowInput>

            <RowInput>
                <Input type='number' id="annee" thousandSeparator='false' label='Année' />*
                <Input type='number' min="1" label='Superficie' id="superficie" suffix="m²" required />*
                <Input type='number' min="1" id="superficie_habitable" label='Superficie Habitable' suffix="m²" />*
            </RowInput>


            <TitleForm>Agencement intérieur</TitleForm>*

            <RowInput>
                <Input type='number' min="1" value="1" id="nombre_de_pieces" label='Nombre de Pièce' required />
                <Input type="number" value="0" id="nombre_de_chambre" label='Nombre de chambre' required />
                <Input type="number" value="0" id="nombre_de_salles_de_bains" label='Nombre de salle de Bain' required />
            </RowInput>

            <RowInput>
                <Input type="number" value="0" id="nombre_de_wc" label='Nombre de WC' required />
                <Input type="number" value="0" id="nombre_de_celliers" label='Nombre de Cellier' required />
                <Input type="number" value="0" id="nombre_de_buanderies" label='Nombre de Buanderie' required />
            </RowInput>

            <RowInput>
                <Input type="number" value="0" id="niveaux" label='Nombre de Niveaux' required />
                <Input type="checkbox" id="cuisine" label='Cuisine' />
                <Input type="checkbox" id="isolation" label='Isolation' />
            </RowInput>


            <TitleForm>Copropriété</TitleForm>*

            <RowInput>
                <Input required type="number" value="0" id="nombre_de_lots" />
                <Input required type="number" value="0" id="derniere_assemble" thousandSeparator='false' />
                <Input type="text" id="syndic" />
            </RowInput>

            <Input type='textarea' id="details_charges_copropriete" placeholder="Exemple: Eau, EDF communs, Gardien, Chauffage, Nettoyage, Syndic"></Input>

            <TitleForm>Équipements</TitleForm>*

            <Input type='textarea' id="equipements" placeholder="Exemple: Interphone, Câble, Double vitrage" />


            <TitleForm>Chauffage</TitleForm>*

            <Input type="text" id="type_de_chauffage" />
            <Input type="text" id="mode_de_chauffage" />
            <Input type="text" id="energie_du_chauffage" />

            <TitleForm>Diagnostics</TitleForm>*

            <Input type='textarea' id="diagnostics" />

            <TitleForm>Points positifs et négatifs</TitleForm>*

            <Input type='textarea' id="points_positif_et_negatifs" />


            <TitleForm>Agencement extérieur</TitleForm>*

            <RowInput>
                <Input required type="number" step=".01" value="0" id="caves" label='Nombre de cave' />
                <Input required type="number" step=".01" value="0" id="terrases" label='Nombre de terrase' />
            </RowInput>

            <RowInput>
                <Input required type="number" step=".01" value="0" id="balcons" label='Nombre de balcon' />
                <Input required type="number" step=".01" value="0" id="varangues" label='Nombre de varangue' />
            </RowInput>

            <RowInput>
                <Input required type="number" step=".01" value="0" id="piscines" label='Nombre de piscine' />
                <Input required type="number" step=".01" value="0" id="jacuzzis" label='Nombre de jacuzzi' />
            </RowInput>


            <TitleForm>Frais d'acquisition</TitleForm>*

            <RowInput>
                <Input required type="number" step=".01" id="prix_du_bien" euro label='Prix du bien' />
                <Input required type="number" step=".01" value="0" id="frais_dagence" euro label="Frais d'agence" />
            </RowInput>

            <RowInput>
                <Input required type="number" step=".01" value="0" id="frais_de_notaire" euro label='Frais de notaire' />
                <Input required type="number" step=".01" value="0" id="frais_de_travaux" euro label='Estimation Travaux' />
            </RowInput>

            <RowInput>
                <Input required type="number" step=".01" value="0" id="mobilier_equipement" euro label='Mobilier / Equipement' />
                <Input required type="number" step=".01" value="0" id="honoraires_immomalin" euro label='Commission chasseur' />
            </RowInput>

            <RowInput>
                <Input required type="number" step=".01" value="0" id="projet_global" euro label="Projet Global (Frais d'acquisition)" readonly disabled />
                <Input required type="number" step=".01" value="0" id="budget" euro label='BUDGET' readonly disabled />
            </RowInput>


            <TitleForm>Charges locatif</TitleForm>***

            <RowInput>
                <Label>Charges copropriété</Label>
                <Input required euro type="number" step=".01" id="charges_copropriete_mensuelles" label='Mensuelles' />
                <Input required euro type="number" step=".01" value="0" id="charges_copropriete_annuelles" label='Anuelles' />
            </RowInput>

            <RowInput>
                <Label>Taxe foncière</Label>
                <Input required euro type="number" step=".01" value="0" id="taxe_fonciere_mensuelles" label='Mensuelles' />
                <Input required euro type="number" step=".01" value="0" id="taxe_fonciere_annuelles" label='Anuelles' />
            </RowInput>

            <RowInput>
                <Label>Assurance PNO</Label>
                <Input required euro type="number" step=".01" value="0" id="assurance_pno_mensuelles" label='Mensuelles' />
                <Input required euro type="number" step=".01" value="0" id="assurance_pno_annuelles" label='Anuelles' />
            </RowInput>

            <RowInput>
                <Label>Assurances locatives</Label>
                <Input required euro type="number" step=".01" value="0" id="assurances_locatives_mensuelles" label='Mensuelles' />
                <Input required euro type="number" step=".01" value="0" id="assurances_locatives_annuelles" label='Anuelles' />
            </RowInput>

            <RowInput>
                <Label>Gestion locative</Label>
                <Input required euro type="number" step=".01" value="0" id="gestion_locative_mensuelles" label='Mensuelles' />
                <Input required euro type="number" step=".01" value="0" id="gestion_locative_annuelles" label='Anuelles' />
            </RowInput>

            <RowInput>
                <Label>Frais divers</Label>
                <Input required euro type="number" step=".01" value="0" id="frais_divers_mensuelles" label='Mensuelles' />
                <Input required euro type="number" step=".01" value="0" id="frais_divers_annuelles" label='Anuelles' />
            </RowInput>

            <RowInput>
                <Label>Eau</Label>
                <Input required euro type="number" step=".01" value="0" id="frais_electricite_mensuelle" label='Mensuelles' />
                <Input required euro type="number" step=".01" value="0" id="frais_electricite_annuelle" label='Anuelles' />
            </RowInput>

            <RowInput>
                <Label>Électricité</Label>
                <Input required euro type="number" step=".01" value="0" id="frais_eau_mensuelle" label='Mensuelles' />
                <Input required euro type="number" step=".01" value="0" id="frais_eau_annuelle" label='Anuelles' />
            </RowInput>

            <RowInput>
                <Label>Forfait internet</Label>
                <Input required euro type="number" step=".01" value="0" id="forfait_internet_mensuelle" label='Mensuelles' />
                <Input required euro type="number" step=".01" value="0" id="forfait_internet_annuelle" label='Anuelles' />
            </RowInput>

            <RowInput>
                <Label>TOTAL</Label>
                <Input required euro type="number" step=".01" value="0" id="total_charges_mensuelles" readonly disabled label='Mensuelles' />
                <Input required euro type="number" step=".01" value="0" id="total_charges_annuelles" readonly disabled label='Anuelles' />
            </RowInput>


            <TitleForm>Revenus locatif</TitleForm>*

            <RowInput>
                <Label>Loyer prévisionnel</Label>
                <Input required euro type="number" step=".01" id="loyer_previsionnel_mensuelles" label='Mensuelles' />
                <Input required euro type="number" step=".01" value="0" id="loyer_previsionnel_annuelles" label='Annuelles' readonly disabled />
            </RowInput>

            <Input required pourcent type="number" step=".01" value="0" id="vacance_locative" label='Vacance locative' />

            <RowInput>
                <Label>TOTAL</Label>
                <Input required euro type="number" step=".01" value="0" id="total_revenus_mensuelles" label='Mensuelles' readonly disabled />
                <Input required euro type="number" step=".01" value="0" id="total_revenus_annuelles" label='Annuelles' readonly disabled />
            </RowInput>

            <Input required euro type="number" step=".01" value="0" id="solde" readonly disabled />

            <TitleForm>Vue synthétique</TitleForm>

            <RowInput>
                <Label>Rentabilité</Label>
                <Input required pourcent type="number" step=".01" value="0" id="rentabilite_net" label='Brut' readonly disabled />
                <Input required pourcent type="number" step=".01" value="0" id="rentabilite_brut" label='Net' readonly disabled />
            </RowInput>

            <RowInput>
                <Label>Cashflow brut</Label>
                <Input required euro type="number" step=".01" value="0" id="cashflow_mensuel_brut" label='Mensuelle' readonly disabled />
            </RowInput>

            <Input required euro type="number" step=".01" value="0" id="prix_au_m" readonly disabled />


            <TitleForm>Résumé</TitleForm>

            <RowInput>
                <Input euro type="number" step=".01" value="0" id="total_revenus_resume" label='Total des revenus' readonly disabled />
                <Input euro type="number" step=".01" value="0" id="total_revenus_resume" label='Total des charges' readonly disabled />
                <Input euro type="number" step=".01" value="0" id="total_revenus_resume" label='Prix au m²' readonly disabled />
            </RowInput>

            <button type="submit">Enregistrer</button>
        </form>
    );
}