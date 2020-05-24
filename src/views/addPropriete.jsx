import Input from '../components/Input';
import { RowInput, TitleForm } from '../theme/design/componentsDesign';

export default (props) => {
    return (
        <>
            <TitleForm>Ajouter une Propriété</TitleForm>

<form enctype="multipart/form-data">
    <input id="author" type="hidden" value="" />

    <TitleForm>Détails</TitleForm>

    <div class="form-group">
        <label for="titre">Titre</label>
        <input required type="text" class="form-control" id="titre" name="titre" />
    </div>

                <Input type="text" id="titre" label="Titre" required />

    <div class="form-group ">
        <div class="custom-file">
            <input type="file" class="custom-file-input" id="filesPhotos" name="filesPhotos" multiple="true" value="" accept=".png, .jpg, .jpeg" />
            <label class="custom-file-label" id="labelPhotos" for="filesPhotos">Ajouter des photos</label>
        </div>
    </div>

    <div class="form-group">
        <label for="description">Courte description</label>
        <textarea class="form-control" id="description"></textarea>
    </div>

    <div class="form-group">
        <label for="address">Adresse postale</label>
        <input type="text" class="form-control" id="address" name="address" />
    </div>

    <div class="form-row">
        <div class="col-lg-4">
            <div class="form-group">
                <label for="ville">Ville</label>
                <input type="text" class="form-control" id="ville" name="ville" />
            </div>
        </div>
        <div class="col-lg-4">
            <div class="form-group">
                <label for="zip">ZIP / Code postal</label>
                <input type="number" step=".01" min="0" class="form-control" id="zip" name="zip" />
            </div>
        </div>
        <div class="col-lg-4">
            <div class="form-group">
                <label for="type">Type</label>
                <select required id="type" class="form-control">
                    <option value="" selected disabled hidden>Choisir...</option>
                    <option>Appartement</option>
                    <option>Maison</option>
                    <option>Autre</option>
                </select>
            </div>
        </div>
    </div>

    <div class="form-row">
        <div class="col-lg-4">
            <div class="form-group">
                <label for="anne">Année</label>
                <input type="number" step=".01" min="0" class="form-control" id="anne" name="anne" />
            </div>
        </div>
        <div class="col-lg-4">
            <div class="form-group">
                <label for="superficie">Superficie</label>
                <div class="input-group">
                    <input required type="number" step=".01" min="1" class="form-control" id="superficie" name="superficie" />
                    <div class="input-group-append">
                        <div class="input-group-text">m²</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="form-group">
                <label for="superficieH">Superficie Habitable</label>
                <div class="input-group">
                    <input type="number" step=".01" min="1" class="form-control" id="superficieH" name="superficieH" />
                    <div class="input-group-append">
                        <div class="input-group-text">m²</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <TitleForm>Agencement intérieur</TitleForm>

    <div class="form-row">
        <div class="col-lg-4">
            <div class="form-group">
                <label for="numbPieces">Nombre de Pièce(s)</label>
                <input required type="number" step=".01" min="1" value="1" class="form-control" id="numbPieces" name="numbPieces" />
            </div>
        </div>
        <div class="col-lg-4">
            <div class="form-group">
                <label for="numbChamb">Nombre de chambre</label>
                <input required type="number" step=".01" min="0" value="0" class="form-control" id="numbChamb" name="numbChamb" />
            </div>
        </div>
        <div class="col-lg-4">
            <div class="form-group">
                <label for="numbBain">Nombre de salle(s) de bain(s)</label>
                <input required type="number" step=".01" min="0" value="0" class="form-control" id="numbBain" name="numbBain" />
            </div>
        </div>
    </div>

    <div class="form-row">
        <div class="col-lg-4">
            <div class="form-group">
                <label for="numbWC">Nombre de WC</label>
                <input required type="number" step=".01" min="0" value="0" class="form-control" id="numbWC" name="numbWC" />
            </div>
        </div>
        <div class="col-lg-4">
            <div class="form-group">
                <label for="numbCellier">Nombre de Cellier(s)</label>
                <input required type="number" step=".01" min="0" value="0" class="form-control" id="numbCellier" name="numbCellier" />
            </div>
        </div>
        <div class="col-lg-4">
            <div class="form-group">
                <label for="numbSallBuanderie">Nombre de Buanderie(s)</label>
                <input required type="number" step=".01" min="0" value="0" class="form-control" id="numbSallBuanderie" name="numbSallBuanderie" />
            </div>
        </div>
    </div>

    <div class="form-row">
        <div class="col-lg-4">
            <div class="form-group">
                <label for="numbNiveau">Niveaux</label>
                <input required type="number" step=".01" min="0" value="0" class="form-control" id="numbNiveau" name="numbNiveau" />
            </div>
        </div>
        <div class="col-lg-4">
            <div class="form-group">
                <label>Cuisine :</label>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="cuisineEquip" />>
                    <label class="custom-control-label" for="cuisineEquip">Équipée</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="cuisineSep" />
                    <label class="custom-control-label" for="cuisineSep">Separée</label>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="form-group">
                <label>Isolation :</label>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="isolation" />
                    <label class="custom-control-label" for="isolation">Oui</label>
                </div>
            </div>
        </div>
    </div>

    <TitleForm>Copropriété</TitleForm>

    <div class="form-row">
        <div class="col-lg-6">
            <div class="form-group">
                <label for="nombLots">Nombre de lots</label>
                <input required type="number" step=".01" min="0" value="0" class="form-control" id="nombLots" name="nombLots" />
            </div>
        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <label for="dernierAssemble">Dernière assemblée</label>
                <input required type="number" step=".01" min="0" value="0" class="form-control" id="dernierAssemble" name="dernierAssemble" />
            </div>
        </div>
    </div>

    <div class="form-row">
        <div class="col-lg-6">
            <div class="form-group">
                <label for="syndic">Syndic</label>
                <input type="text" class="form-control" id="syndic" name="syndic" />
            </div>
        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <label for="quotePartMensuelle">Quote part mensuelle</label>
                <div class="input-group">
                    <input required type="number" step=".01" min="0" value="0" class="form-control" id="quotePartMensuelle" name="quotePartMensuelle" />
                    <div class="input-group-append">
                        <div class="input-group-text">€</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="form-group">
        <label for="detailsCharges">Détails charges</label>
        <textarea class="form-control" id="detailsCharges" placeholder="Exemple: Eau, EDF communs, Gardien, Chauffage, Nettoyage, Syndic"></textarea>
    </div>

    <TitleForm>Équipements</TitleForm>

    <div class="form-group">
        <textarea class="form-control" id="detailsEquips" placeholder="Exemple: Interphone, Câble, Double vitrage"></textarea>
    </div>

    <TitleForm>Chauffage</TitleForm>

    <div class="form-row">
        <div class="col-lg-6">
            <div class="form-group">
                <label for="type_chauff">Type</label>
                <input type="text" class="form-control" id="type_chauff" name="type_chauff" />
            </div>
        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <label for="mode_chauff">Mode</label>
                <input type="text" class="form-control" id="mode_chauff" Modename="mode_chauff" />
            </div>
        </div>
    </div>

    <div class="form-row">
        <div class="col-lg-6">
            <div class="form-group">
                <label for="energie_chauff">Énergie</label>
                <input type="text" class="form-control" id="energie_chauff" name="energie_chauff" />
            </div>
        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <label for="eauChaude_chauff">Eau chaude</label>
                <input type="text" class="form-control" id="eauChaude_chauff" name="eauChaude_chauff" placeholder="Chaudière" />
            </div>
        </div>
    </div>

    <TitleForm>Diagnostics</TitleForm>

    <div class="form-group">
        <textarea class="form-control" id="diagnostics"></textarea>
    </div>

    <TitleForm>Agencement extérieur</TitleForm>

    <div class="form-row">
        <div class="col-lg-6">
            <div class="form-group">
                <label for="cave">Cave(s)</label>
                <input required type="number" step=".01" min="0" value="0" class="form-control" id="cave" name="cave" />
            </div>
        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <label for="terrase">Terrasse(s)</label>
                <input required type="number" step=".01" min="0" value="0" class="form-control" id="terrase" name="terrase" />
            </div>
        </div>
    </div>

    <div>
        <TitleForm>Travaux</TitleForm>

        <div class="form-group">
            <label for="autretravaux">Autres</label>
            <div class="input-group">
                <input required type="number" step=".01" min="0" value="0" class="form-control" id="autretravaux" name="autretravaux" />
                <div class="input-group-append">
                    <div class="input-group-text">€</div>
                </div>
            </div>
        </div>
    </div>

    <TitleForm>Frais d'acquisition</TitleForm>

    <div class="form-row">
        <div class="col-lg-6">
            <div class="form-group">
                <label for="prixBien">Prix du bien</label>
                <div class="input-group">
                    <input required type="number" step=".01" min="0" class="form-control" id="prixBien" name="prixBien" />
                    <div class="input-group-append">
                        <div class="input-group-text">€</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <label for="fraisAgence">Frais d'agence</label>
                <div class="input-group">
                    <input required type="number" step=".01" min="0" value="0" class="form-control" id="fraisAgence" name="fraisAgence" />
                    <div class="input-group-append">
                        <div class="input-group-text">€</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="form-row">
        <div class="col-lg-6">
            <div class="form-group">
                <label for="fraisNotaire">Frais de notaire</label>
                <div class="input-group">
                    <input required type="number" step=".01" min="0" value="0" class="form-control" id="fraisNotaire" name="fraisNotaire" />
                    <div class="input-group-append">
                        <div class="input-group-text">€</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <label for="fraisTravaux">Estimation Travaux</label>
                <div class="input-group">
                    <input required type="number" step=".01" min="0" value="0" class="form-control" id="fraisTravaux" name="fraisTravaux" />
                    <div class="input-group-append">
                        <div class="input-group-text">€</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="form-row">
        <div class="col-lg-6">
            <div class="form-group">
                <label for="fraisEquipMob">Mobilier / Equipement</label>
                <div class="input-group">
                    <input required type="number" step=".01" min="0" value="0" class="form-control" id="fraisEquipMob" name="fraisEquipMob" />
                    <div class="input-group-append">
                        <div class="input-group-text">€</div>
                    </div>
                </div>
            </div>
        </div>




            <div class="col-lg-6">


                <div class="col-lg-6">


                    <div class="form-group">
                        <label for="fraisCom">Commission chasseur</label>
                        <div class="input-group">


                                <input required type="number" step=".01" min="0" value="0" class="form-control" id="fraisCom" name="fraisCom" />


                                <input required type="hidden" min="0" value="0" class="form-control" id="fraisCom" name="fraisCom" />


                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>




            <div class="form-group">
                <label for="projetGlobal">Projet Global (Frais d'acquisition)</label>
                <div class="input-group">
                    <input required type="number" step=".01" min="0" value="0" class="form-control" id="projetGlobal" name="projetGlobal" readonly disabled />
                    <div class="input-group-append">
                        <div class="input-group-text">€</div>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label for="fraisBUDGET">BUDGET</label>
                <div class="input-group">
                    <input required type="number" step=".01" min="0" value="0" class="form-control" id="fraisBUDGET" name="fraisBUDGET" readonly disabled />
                    <div class="input-group-append">
                        <div class="input-group-text">€</div>
                    </div>
                </div>
            </div>

            <TitleForm>Charges locatif</TitleForm>

            <div class="form-row">
                <div class="col-lg-4 label-center">
                    <div class="form-group">
                        <label>Charges copropriété</label>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="chargesCourantesM">MENSUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" class="form-control" id="chargesCourantesM" name="chargesCourantesM" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="chargesCourantesA">ANNUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="chargesCourantesA" name="chargesCourantesA" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="col-lg-4 label-center">
                    <div class="form-group">
                        <label>Taxe foncière</label>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="taxeFonciereM">MENSUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="taxeFonciereM" name="taxeFonciereM" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="taxeFonciereA">ANNUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="taxeFonciereA" name="taxeFonciereA" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="col-lg-4 label-center">
                    <div class="form-group">
                        <label>Assurance PNO</label>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="assurancePNOM">MENSUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="assurancePNOM" name="assurancePNOM" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="assurancePNOA">ANNUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="assurancePNOA" name="assurancePNOA" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="col-lg-4 label-center">
                    <div class="form-group">
                        <label>Assurances locatives</label>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="assurancesLocativesM">MENSUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="assurancesLocativesM" name="assurancesLocativesM" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="assurancesLocativesA">ANNUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="assurancesLocativesA" name="assurancesLocativesA" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="col-lg-4 label-center">
                    <div class="form-group">
                        <label>Gestion locative</label>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="gestionLocativeM">MENSUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="gestionLocativeM" name="gestionLocativeM" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="gestionLocativeA">ANNUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="gestionLocativeA" name="gestionLocativeA" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="col-lg-4 label-center">
                    <div class="form-group">
                        <label>Frais divers</label>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="fraisDiversM">MENSUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="fraisDiversM" name="fraisDiversM" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="fraisDiversA">ANNUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="fraisDiversA" name="fraisDiversA" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="col-lg-4 label-center">
                    <div class="form-group">
                        <label>Eau</label>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="eauChargeM">MENSUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="eauChargeM" name="eauChargeM" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="eauChargeA">ANNUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="eauChargeA" name="eauChargeA" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="col-lg-4 label-center">
                    <div class="form-group">
                        <label>Électricité</label>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="electriciteM">MENSUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="electriciteM" name="electriciteM" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="electriciteA">ANNUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="electriciteA" name="electriciteA" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="col-lg-4 label-center">
                    <div class="form-group">
                        <label>Forfait internet</label>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="forfaitInternetM">MENSUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="forfaitInternetM" name="forfaitInternetM" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="forfaitInternetA">ANNUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="forfaitInternetA" name="forfaitInternetA" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-row mt-5">
                <div class="col-lg-4 label-center">
                    <div class="form-group">
                        <label>TOTAL</label>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="totalM">MENSUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="totalM" name="totalM" readonly disabled />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="totalA">ANNUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="totalA" name="totalA" readonly disabled />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <TitleForm>Revenus locatif</TitleForm>

            <div class="form-row">
                <div class="col-lg-4 label-center">
                    <div class="form-group">
                        <label>Loyer prévisionnel</label>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="loyerPrevisionnelM">MENSUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" class="form-control" id="loyerPrevisionnelM" name="loyerPrevisionnelM" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="loyerPrevisionnelA">ANNUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="loyerPrevisionnelA" name="loyerPrevisionnelA" readonly disabled />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="col-lg-4 label-center">
                    <div class="form-group">
                        <label>Charges récupérables</label>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="chargesRecuperablesM">MENSUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="chargesRecuperablesM" name="chargesRecuperablesM" />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="chargesRecuperablesA">ANNUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="chargesRecuperablesA" name="chargesRecuperablesA" readonly disabled />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label for="vacanceLocative">Vacance locative %</label>
                <div class="input-group">
                    <input required type="number" step=".01" min="0" value="0" class="form-control" id="vacanceLocative" name="vacanceLocative" />
                    <div class="input-group-append">
                        <div class="input-group-text">%</div>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="col-lg-4 label-center">
                    <div class="form-group">
                        <label>TOTAL</label>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="totalRM">MENSUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="totalRM" name="totalRM" readonly disabled />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="totalRA">ANNUELLES</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="totalRA" name="totalRA" readonly disabled />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="col-lg-4 label-center">
                    <div class="form-group">
                        <label>Solde</label>
                    </div>
                </div>
                <div class="offset-lg-4 col-lg-4">
                    <div class="form-group">
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="soldeRA" name="soldeRA" readonly disabled />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TitleForm>Vue synthétique</TitleForm>

            <div class="form-row">
                <div class="col-lg-4 label-center">
                    <div class="form-group">
                        <label>Rentabilité</label>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="RentabiliteB">Brut</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="RentabiliteB" name="RentabiliteB" readonly disabled />
                            <div class="input-group-append">
                                <div class="input-group-text">%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="RentabiliteN">Net</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="RentabiliteN" name="RentabiliteN" readonly disabled />
                            <div class="input-group-append">
                                <div class="input-group-text">%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="col-lg-4 label-center">
                    <div class="form-group">
                        <label>Cashflow mensuel</label>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="form-group">
                        <label for="cashflowMensuelN">Net</label>
                        <div class="input-group">
                            <input required type="number" step=".01" min="0" value="0" class="form-control" id="cashflowMensuelN" name="cashflowMensuelN" readonly disabled />
                            <div class="input-group-append">
                                <div class="input-group-text">€</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label for="prixAuM">Prix au m²</label>
                <div class="input-group">
                    <input required type="number" step=".01" min="0" value="0" class="form-control devise" id="prixAuM" name="prixAuM" readonly disabled />
                    <div class="input-group-append">
                        <div class="input-group-text">€</div>
                    </div>
                </div>
            </div>

            <TitleForm>Résumé</TitleForm>

            <div class="row resume">
                <div class="col-md-4">
                    <p><b>TOTAL Revenus</b> <span id="totalRResume">0</span></p>
                </div>

                <div class="col-md-4">
                    <p><b>TOTAL charge</b> <span id="totalCResume">0</span></p>
                </div>

                <div class="col-md-4">
                    <p><b>Prix au m²</b> <span id="totalPrixMResume">0</span></p>
                </div>
            </div>
            <p class="error">Une erreur est survenue, veuillez ressayer !</p>
            <button type="submit" class="btn btn-primary submit">Enregistrer</button>
</form>
        </>
    );
}