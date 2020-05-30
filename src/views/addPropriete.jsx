const { Component } = wp.element;

import axios from 'axios';
import { connect } from 'react-redux';
import { handleChangeAddProprieteModal, registerDataProgress, toogleAddPropriete } from '../actions';
import { formatToJson } from '../lib/functions';

import Input from '../components/Input';
import { RowInput, TitleForm, Label, Form, SendButton } from '../theme/design/componentsDesign';

class AddPropriete extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const fakeID = '_' + Math.random().toString(36).substr(2, 9);
        this.props.toogleAddPropriete();
        this.props.handleChangeModal('resetTheForm', true);
        event.preventDefault();

        this.props.handleChangeModal('chasseur', Number(this.props.chasseurID));

        let data = new FormData();
        data.append('action', 'form_add_propriete');

        for (var key in this.props.modalData) {
            if (key != 'filesPhotos' && this.props.modalData[key] != null) {
                data.append(key, this.props.modalData[key]);
            } else {
                if (this.props.modalData[key] != null) {
                    for (var item of this.props.modalData[key]) {
                        data.append('files[]', item);
                    }
                }
            }
        }

        axios.post('../wp-content/themes/themeplocatif/ajax-board.php', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: progress => {
                const { loaded, total } = progress;
                const percentageProgress = Math.floor((loaded / total) * 90);
                this.props.registerDataProgress(fakeID, percentageProgress);
            },
        })
        .then(response => {
            let result = formatToJson(response.data);
            if (result.id == null) {
                console.log('error');
            }
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => {
            this.props.registerDataProgress(fakeID, 100);
        });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input value={this.props.modalData.chasseur} onChange={this.props.handleChangeModal} type="hidden" id="chasseur" />

                <RowInput dispatch>
                    <TitleForm isFirst>Détails</TitleForm>
                    <Input value={this.props.modalData.filesPhotos} onChange={this.props.handleChangeModal} type="file" id="filesPhotos" multiple="true" accept=".png, .jpg, .jpeg" label='Ajouter des photos' />
                </RowInput>

                <Input value={this.props.modalData.titre} onChange={this.props.handleChangeModal} required type="text" id="title" label="Titre" />

                <Input value={this.props.modalData.description} onChange={this.props.handleChangeModal} type='textarea' id="description" label='Courte description' />
                <Input value={this.props.modalData.adresse_postale} onChange={this.props.handleChangeModal} type='text' id="adresse_postale" label='Adresse postale' />

                <RowInput>
                    <Input value={this.props.modalData.artisan} onChange={this.props.handleChangeModal} type='text' id="artisan" label='Artisan' />
                    <Input value={this.props.modalData.interlocuteur} onChange={this.props.handleChangeModal} type='text' id="interlocuteur" label='Interlocuteur' />
                </RowInput>

                <RowInput>
                    <Input value={this.props.modalData.ville} onChange={this.props.handleChangeModal} type='text' id="ville" label='Ville' />
                    <Input value={this.props.modalData.zip_code_postal} onChange={this.props.handleChangeModal} type='text' id="zip_code_postal" label='ZIP / Code postal' />
                    <Input value={this.props.modalData.type_bien} onChange={this.props.handleChangeModal} type='select' id="type_bien" label='Type de bien' list={['Appartement', 'Maison', 'Autre']} required />
                </RowInput>

                <RowInput>
                    <Input value={this.props.modalData.annee} onChange={this.props.handleChangeModal} type='number' id="annee" thousandSeparator='false' label='Année' />
                    <Input value={this.props.modalData.superficie} onChange={this.props.handleChangeModal} type='number' min="1" label='Superficie' id="superficie" suffix="m²" required />
                    <Input value={this.props.modalData.superficie_habitable} onChange={this.props.handleChangeModal} type='number' min="1" id="superficie_habitable" label='Superficie Habitable' suffix="m²" />
                </RowInput>


                <TitleForm>Agencement intérieur</TitleForm>

                <RowInput>
                    <Input value={this.props.modalData.nombre_de_pieces} onChange={this.props.handleChangeModal} type='number' min="1" id="nombre_de_pieces" label='Nombre de Pièce' required />
                    <Input value={this.props.modalData.nombre_de_chambre} onChange={this.props.handleChangeModal} type="number" id="nombre_de_chambre" label='Nombre de chambre' required />
                    <Input value={this.props.modalData.nombre_de_salles_de_bains} onChange={this.props.handleChangeModal} type="number" id="nombre_de_salles_de_bains" label='Nombre de salle de Bain' required />
                </RowInput>

                <RowInput>
                    <Input value={this.props.modalData.nombre_de_wc} onChange={this.props.handleChangeModal} type="number" id="nombre_de_wc" label='Nombre de WC' required />
                    <Input value={this.props.modalData.nombre_de_celliers} onChange={this.props.handleChangeModal} type="number" id="nombre_de_celliers" label='Nombre de Cellier' required />
                    <Input value={this.props.modalData.nombre_de_buanderies} onChange={this.props.handleChangeModal} type="number" id="nombre_de_buanderies" label='Nombre de Buanderie' required />
                </RowInput>

                <RowInput>
                    <Input value={this.props.modalData.niveaux} onChange={this.props.handleChangeModal} type="number" id="niveaux" label='Nombre de Niveaux' required />
                    <Input value={this.props.modalData.cuisine} onChange={this.props.handleChangeModal} type="checkbox" id="cuisine" label='Cuisine' />
                    <Input value={this.props.modalData.isolation} onChange={this.props.handleChangeModal} type="checkbox" id="isolation" label='Isolation' />
                </RowInput>


                <TitleForm>Agencement extérieur</TitleForm>

                <RowInput>
                    <Input value={this.props.modalData.caves} onChange={this.props.handleChangeModal} required type="number" step=".01" id="caves" label='Nombre de cave' />
                    <Input value={this.props.modalData.terrases} onChange={this.props.handleChangeModal} required type="number" step=".01" id="terrases" label='Nombre de terrase' />
                    <Input value={this.props.modalData.balcons} onChange={this.props.handleChangeModal} required type="number" step=".01" id="balcons" label='Nombre de balcon' />
                </RowInput>

                <RowInput>
                    <Input value={this.props.modalData.varangues} onChange={this.props.handleChangeModal} required type="number" step=".01" id="varangues" label='Nombre de varangue' />
                    <Input value={this.props.modalData.piscines} onChange={this.props.handleChangeModal} required type="number" step=".01" id="piscines" label='Nombre de piscine' />
                    <Input value={this.props.modalData.jacuzzis} onChange={this.props.handleChangeModal} required type="number" step=".01" id="jacuzzis" label='Nombre de jacuzzi' />
                </RowInput>


                <TitleForm>Copropriété</TitleForm>

                <RowInput>
                    <Input value={this.props.modalData.nombre_de_lots} onChange={this.props.handleChangeModal} required type="number" id="nombre_de_lots" label='Nombre de lots' />
                    <Input value={this.props.modalData.derniere_assemble} onChange={this.props.handleChangeModal} required type="number" id="derniere_assemble" thousandSeparator='false' label='Dernière assemblée' />
                    <Input value={this.props.modalData.syndic} onChange={this.props.handleChangeModal} type="text" id="syndic" label='Syndic' />
                </RowInput>

                <Input value={this.props.modalData.details_charges_copropriete} onChange={this.props.handleChangeModal} type='textarea' id="details_charges_copropriete" label='Détails charges' placeholder="Exemple: Eau, EDF communs, Gardien, Chauffage, Nettoyage, Syndic"></Input>


                <TitleForm>Chauffage</TitleForm>

                <Input value={this.props.modalData.type_de_chauffage} onChange={this.props.handleChangeModal} type="text" id="type_de_chauffage" label='Type' />
                <Input value={this.props.modalData.mode_de_chauffage} onChange={this.props.handleChangeModal} type="text" id="mode_de_chauffage" label='Mode' />
                <Input value={this.props.modalData.energie_du_chauffage} onChange={this.props.handleChangeModal} type="text" id="energie_du_chauffage" label='Énergie' />


                <TitleForm>Équipements</TitleForm>
                <Input value={this.props.modalData.equipements} onChange={this.props.handleChangeModal} type='textarea' id="equipements" placeholder="Exemple: Interphone, Câble, Double vitrage" />


                <TitleForm>Diagnostics</TitleForm>
                <Input value={this.props.modalData.diagnostics} onChange={this.props.handleChangeModal} type='textarea' id="diagnostics" />


                <TitleForm>Points positifs et négatifs</TitleForm>
                <Input value={this.props.modalData.points_positif_et_negatifs} onChange={this.props.handleChangeModal} type='textarea' id="points_positif_et_negatifs" />


                <TitleForm>Frais d'acquisition</TitleForm>

                <RowInput>
                    <Input value={this.props.modalData.prix_du_bien} onChange={this.props.handleChangeModal} required type="number" step=".01" id="prix_du_bien" euro label='Prix du bien' />
                    <Input value={this.props.modalData.frais_dagence} onChange={this.props.handleChangeModal} required type="number" step=".01" id="frais_dagence" euro label="Frais d'agence" />
                    <Input value={this.props.modalData.frais_de_notaire} onChange={this.props.handleChangeModal} required type="number" step=".01" id="frais_de_notaire" euro label='Frais de notaire' />
                </RowInput>

                <RowInput>
                    <Input value={this.props.modalData.frais_de_travaux} onChange={this.props.handleChangeModal} required type="number" step=".01" id="frais_de_travaux" euro label='Estimation Travaux' />
                    <Input value={this.props.modalData.mobilier_equipement} onChange={this.props.handleChangeModal} required type="number" step=".01" id="mobilier_equipement" euro label='Mobilier / Equipement' />
                    <Input value={this.props.modalData.honoraires_immomalin} onChange={this.props.handleChangeModal} required type="number" step=".01" id="honoraires_immomalin" euro label='Commission chasseur' />
                </RowInput>

                <RowInput result>
                    <Input value={this.props.modalData.projet_global} onChange={this.props.handleChangeModal} required type="number" step=".01" id="projet_global" euro label="Projet Global (Hors frais de notaire)" readonly disabled />
                    <Input value={this.props.modalData.budget} onChange={this.props.handleChangeModal} required type="number" step=".01" id="budget" euro label='BUDGET' readonly disabled />
                </RowInput>


                <TitleForm>Charges locatif</TitleForm>

                <RowInput>
                    <Label>Charges copropriété</Label>
                    <RowInput dispatch>
                        <Input value={this.props.modalData.charges_copropriete_mensuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="charges_copropriete_mensuelles" label='Mensuelles' />
                        <Input value={this.props.modalData.charges_copropriete_annuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="charges_copropriete_annuelles" label='Annuelles' />
                    </RowInput>
                </RowInput>

                <RowInput>
                    <Label>Taxe foncière</Label>
                    <RowInput dispatch>
                        <Input value={this.props.modalData.taxe_fonciere_mensuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="taxe_fonciere_mensuelles" label='Mensuelles' />
                        <Input value={this.props.modalData.taxe_fonciere_annuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="taxe_fonciere_annuelles" label='Annuelles' />
                    </RowInput>
                </RowInput>

                <RowInput>
                    <Label>Assurance PNO</Label>
                    <RowInput dispatch>
                        <Input value={this.props.modalData.assurance_pno_mensuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="assurance_pno_mensuelles" label='Mensuelles' />
                        <Input value={this.props.modalData.assurance_pno_annuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="assurance_pno_annuelles" label='Annuelles' />
                    </RowInput>
                </RowInput>

                <RowInput>
                    <Label>Assurances locatives</Label>
                    <RowInput dispatch>
                        <Input value={this.props.modalData.assurances_locatives_mensuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="assurances_locatives_mensuelles" label='Mensuelles' />
                        <Input value={this.props.modalData.assurances_locatives_annuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="assurances_locatives_annuelles" label='Annuelles' />
                    </RowInput>
                </RowInput>

                <RowInput>
                    <Label>Gestion locative</Label>
                    <RowInput dispatch>
                        <Input value={this.props.modalData.gestion_locative_mensuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="gestion_locative_mensuelles" label='Mensuelles' />
                        <Input value={this.props.modalData.gestion_locative_annuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="gestion_locative_annuelles" label='Annuelles' />
                    </RowInput>
                </RowInput>

                <RowInput>
                    <Label>Frais divers</Label>
                    <RowInput dispatch>
                        <Input value={this.props.modalData.frais_divers_mensuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="frais_divers_mensuelles" label='Mensuelles' />
                        <Input value={this.props.modalData.frais_divers_annuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="frais_divers_annuelles" label='Annuelles' />
                    </RowInput>
                </RowInput>

                <RowInput>
                    <Label>Eau</Label>
                    <RowInput dispatch>
                        <Input value={this.props.modalData.frais_electricite_mensuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="frais_electricite_mensuelles" label='Mensuelles' />
                        <Input value={this.props.modalData.frais_electricite_annuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="frais_electricite_annuelles" label='Annuelles' />
                    </RowInput>
                </RowInput>

                <RowInput>
                    <Label>Électricité</Label>
                    <RowInput dispatch>
                        <Input value={this.props.modalData.frais_eau_mensuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="frais_eau_mensuelles" label='Mensuelles' />
                        <Input value={this.props.modalData.frais_eau_annuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="frais_eau_annuelles" label='Annuelles' />
                    </RowInput>
                </RowInput>

                <RowInput>
                    <Label>Forfait internet</Label>
                    <RowInput dispatch>
                        <Input value={this.props.modalData.forfait_internet_mensuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="forfait_internet_mensuelles" label='Mensuelles' />
                        <Input value={this.props.modalData.forfait_internet_annuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="forfait_internet_annuelles" label='Annuelles' />
                    </RowInput>
                </RowInput>

                <RowInput result>
                    <Label>TOTAL</Label>
                    <RowInput dispatch>
                        <Input value={this.props.modalData.total_charges_mensuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="total_charges_mensuelles" readonly disabled label='Mensuelles' />
                        <Input value={this.props.modalData.total_charges_annuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="total_charges_annuelles" readonly disabled label='Annuelles' />
                    </RowInput>
                </RowInput>


                <TitleForm>Revenus locatif</TitleForm>

                <RowInput>
                    <Label>Loyer prévisionnel</Label>
                    <RowInput dispatch>
                        <Input value={this.props.modalData.loyer_previsionnel_mensuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="loyer_previsionnel_mensuelles" label='Mensuelles' />
                        <Input value={this.props.modalData.loyer_previsionnel_annuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="loyer_previsionnel_annuelles" label='Annuelles' />
                    </RowInput>
                </RowInput>

                <RowInput>
                    <Label>Vacance locative</Label>
                    <Input value={this.props.modalData.vacance_locative} onChange={this.props.handleChangeModal} required pourcent type="number" step=".01" id="vacance_locative" />
                </RowInput>

                <RowInput result>
                    <Label>TOTAL</Label>
                    <RowInput dispatch>
                        <Input value={this.props.modalData.total_revenus_mensuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="total_revenus_mensuelles" label='Mensuelles' readonly disabled />
                        <Input value={this.props.modalData.total_revenus_annuelles} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="total_revenus_annuelles" label='Annuelles' readonly disabled />
                    </RowInput>
                </RowInput>

                <RowInput>
                    <Label>Solde</Label>
                    <Input value={this.props.modalData.solde} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="solde" readonly disabled />
                </RowInput>


                <TitleForm>Vue synthétique</TitleForm>

                <RowInput>
                    <Label>Rentabilité</Label>
                    <RowInput dispatch>
                        <Input value={this.props.modalData.rentabilite_net} onChange={this.props.handleChangeModal} required pourcent type="number" step=".01" id="rentabilite_net" label='Brut' readonly disabled />
                        <Input value={this.props.modalData.rentabilite_brut} onChange={this.props.handleChangeModal} required pourcent type="number" step=".01" id="rentabilite_brut" label='Net' readonly disabled />
                    </RowInput>
                </RowInput>

                <RowInput>
                    <Label>Cashflow Brut</Label>
                    <Input value={this.props.modalData.cashflow_mensuel_brut} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="cashflow_mensuel_brut" label='mensuelle' readonly disabled />
                </RowInput>

                <RowInput>
                    <Label>Prix au m²</Label>
                    <Input value={this.props.modalData.prix_au_m} onChange={this.props.handleChangeModal} required euro type="number" step=".01" id="prix_au_m" readonly disabled />
                </RowInput>

                <SendButton noMarginLeft type="submit">Enregistrer</SendButton>
            </Form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChangeModal: (key, data) => dispatch(handleChangeAddProprieteModal(key, data)),
        registerDataProgress: (key, data) => dispatch(registerDataProgress(key, data)),
        toogleAddPropriete: () => dispatch(toogleAddPropriete()),
    }
}

const mapStateToProps = (state) => {
    return {
        chasseurID: state.general.myData.data.id,
        modalData: state.addModal.addProprieteModal
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPropriete)