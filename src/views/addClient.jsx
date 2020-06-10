const { Component } = wp.element;

import axios from 'axios';
import { connect } from 'react-redux';
import { handleChangeAddClientModal, registerDataProgress, toogleAddClient, getAllUsers } from '../actions';
import { formatToJson } from '../lib/functions';

import Input from '../components/Input';
import { RowInput, TitleForm, Form, SendButton } from '../theme/design/componentsDesign';

const listPays = [
    'Afghanistan',
    'Afrique du Sud',
    'Albanie',
    'Algérie',
    'Allemagne',
    'Andorre',
    'Angola',
    'Antigua-et-Barbuda',
    'Arabie saoudite',
    'Argentine',
    'Arménie',
    'Australie',
    'Autriche',
    'Azerbaïdjan',
    'Bahamas',
    'Bahreïn',
    'Bangladesh',
    'Barbade',
    'Belgique',
    'Belize',
    'Bénin',
    'Bhoutan',
    'Biélorussie',
    'Birmanie',
    'Bolivie',
    'Bosnie-Herzégovine',
    'Botswana',
    'Brésil',
    'Brunei',
    'Bulgarie',
    'Burkina Faso',
    'Burundi',
    'Cambodge',
    'Cameroun',
    'Canada',
    'Cap-Vert',
    'République centrafricaine',
    'Chili',
    'Chine',
    'Chypre',
    'Colombie',
    'Comores',
    'République du Congo',
    'République démocratique du Congo',
    'Îles Cook',
    'Corée du Nord',
    'Corée du Sud',
    'Costa Rica',
    'Côte d’Ivoire',
    'Croatie',
    'Cuba',
    'Danemark',
    'Djibouti',
    'République dominicaine',
    'Dominique',
    'Égypte',
    'Émirats arabes unis',
    'Équateur',
    'Érythrée',
    'Espagne',
    'Estonie',
    'États-Unis',
    'Éthiopie',
    'Fidji',
    'Finlande',
    'France',
    'La Réunion',
    'Gabon',
    'Gambie',
    'Géorgie',
    'Ghana',
    'Grèce',
    'Grenade',
    'Guatemala',
    'Guinée',
    'Guinée-Bissau',
    'Guinée équatoriale',
    'Guyana',
    'Haïti',
    'Honduras',
    'Hongrie',
    'Inde',
    'Indonésie',
    'Irak',
    'Iran',
    'Irlande',
    'Islande',
    'Israël',
    'Italie',
    'Jamaïque',
    'Japon',
    'Jordanie',
    'Kazakhstan',
    'Kenya',
    'Kirghizistan',
    'Kiribati',
    'Koweït',
    'Laos',
    'Lesotho',
    'Lettonie',
    'Liban',
    'Liberia',
    'Libye',
    'Liechtenstein',
    'Lituanie',
    'Luxembourg',
    'Macédoine du Nord',
    'Madagascar',
    'Malaisie',
    'Malawi',
    'Maldives',
    'Mali',
    'Malte',
    'Maroc',
    'Îles Marshall',
    'Maurice',
    'Mauritanie',
    'Mexique',
    'Micronésie',
    'Moldavie',
    'Monaco',
    'Mongolie',
    'Monténégro',
    'Mozambique',
    'Namibie',
    'Nauru',
    'Népal',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norvège',
    'Nouvelle-Zélande',
    'Oman',
    'Ouganda',
    'Ouzbékistan',
    'Pakistan',
    'Palaos',
    'Palestine',
    'Panamá',
    'Papouasie-Nouvelle-Guinée',
    'Paraguay',
    'Pays-Bas',
    'Pérou',
    'Philippines',
    'Pologne',
    'Portugal',
    'Qatar',
    'Roumanie',
    'Royaume-Uni',
    'Russie',
    'Rwanda',
    'Saint-Christophe-et-Niévès',
    'Saint-Marin',
    'Saint-Vincent-et-les Grenadines',
    'Sainte-Lucie',
    'Îles Salomon',
    'Salvador',
    'Samoa',
    'São Tomé-et-Principe',
    'Sénégal',
    'Serbie',
    'Seychelles',
    'Sierra Leone',
    'Singapour',
    'Slovaquie',
    'Slovénie',
    'Somalie',
    'Soudan',
    'Soudan du Sud',
    'Sri Lanka',
    'Suède',
    'Suisse',
    'Suriname',
    'Eswatini',
    'Syrie',
    'Tadjikistan',
    'Tanzanie',
    'Tchad',
    'République tchèque',
    'Thaïlande',
    'Timor oriental',
    'Togo',
    'Tonga',
    'Trinité-et-Tobago',
    'Tunisie',
    'Turkménistan',
    'Turquie',
    'Tuvalu',
    'Ukraine',
    'Uruguay',
    'Vanuatu',
    'Vatican',
    'Venezuela',
    'Viêt Nam',
    'Yémen',
    'Zambie',
    'Zimbabwe',
    'Abkhazie',
    'Chypre du Nord',
    'Kosovo',
    'Ossétie du Sud',
    'Sahara occidental',
    'Taïwan',
]

class AddClient extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        const fakeID = '_' + Math.random().toString(36).substr(2, 9);
        this.props.toogleAddClient();
        this.props.handleChangeModal('resetTheForm', true);
        event.preventDefault();

        let data = new FormData();
        data.append('action', 'form_add_user');

        for (var key in this.props.modalData) {
            if (key != 'filesPhotosClient' && this.props.modalData[key] != null) {
                data.append(key, this.props.modalData[key]);
            } else {
                if (this.props.modalData[key] != null) {
                    for (var item of this.props.modalData[key]) {
                        data.append('files[]', item);
                    }
                }
            }
        }

        await axios.post('../wp-content/themes/themeplocatif/ajax-board.php', data, {
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

        this.props.getAllUsers();
    }

    render() {
        let editMod = false;
        if (this.props.modalData.edit) editMod = true;
        return (
            <Form onSubmit={this.handleSubmit}>

                <RowInput dispatch>
                    <TitleForm isFirst>Détails</TitleForm>
                    <Input value={this.props.modalData.filesPhotosClient} onChange={this.props.handleChangeModal} type="file" id="filesPhotosClient" accept=".png, .jpg, .jpeg" label='Ajouter une photo de profil' />
                </RowInput>

                <RowInput>
                    {!editMod &&
                        <Input value={this.props.modalData.pseudo} onChange={this.props.handleChangeModal} required type="text" id="pseudo" label="Pseudo" />
                    }
                    <Input value={this.props.modalData.first_name} onChange={this.props.handleChangeModal} required type="text" id="first_name" label="Prénom" />
                    <Input value={this.props.modalData.last_name} onChange={this.props.handleChangeModal} required type="text" id="last_name" label="Nom" />
                </RowInput>

                <RowInput>
                    <Input value={this.props.modalData.telephone} onChange={this.props.handleChangeModal} required tel type="number" id="telephone" label="Téléphone" />
                    {!editMod &&
                        <Input value={this.props.modalData.mail} onChange={this.props.handleChangeModal} required type="email" id="mail" label="e-Mail" />
                    }
                </RowInput>

                <RowInput>
                    <Input value={this.props.modalData.adresse_postale_1} onChange={this.props.handleChangeModal} required type="text" id="adresse_postale_1" label="Adresse postale" />
                    <Input value={this.props.modalData.adresse_postale_2} onChange={this.props.handleChangeModal} type="text" id="adresse_postale_2" label="Adresse postale 2" />
                    <Input value={this.props.modalData.ville} onChange={this.props.handleChangeModal} required type="text" id="ville" label="Ville" />
                </RowInput>

                <RowInput>  
                    <Input value={this.props.modalData.etat_province_region} onChange={this.props.handleChangeModal} type="text" id="etat_province_region" label="État / Province / Région" />
                    <Input value={this.props.modalData.zip_code_postal} onChange={this.props.handleChangeModal} required type="text" id="zip_code_postal" label="ZIP / Code postal" />
                    <Input value={this.props.modalData.pays} onChange={this.props.handleChangeModal} type='select' id="pays" label='Pays' list={listPays} required /> 
                </RowInput>                  

                <SendButton noMarginLeft type="submit">Enregistrer</SendButton>
            </Form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChangeModal: (key, data) => dispatch(handleChangeAddClientModal(key, data)),
        registerDataProgress: (key, data) => dispatch(registerDataProgress(key, data)),
        toogleAddClient: () => dispatch(toogleAddClient()),
        getAllUsers: () => dispatch(getAllUsers()),
    }
}

const mapStateToProps = (state) => {
    return {
        modalData: state.addModal.addClientModal
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddClient)